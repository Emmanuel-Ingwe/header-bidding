"use client";

import { useEffect, useRef } from 'react';
import { useLazyLoad } from '@/src/hooks/useLazyLoad';
import { validateBid } from '@/src/utils/bidValidation';

type AdSlotProps = {
  id: string;
  sizes: [number, number][];
  fallbackHtml: string;
};

declare global {
  interface Window {
    pbjs: {
      que: any[];
      addAdUnits: (adUnits: any[]) => void;
      requestBids: (options: { bidsBackHandler: (bidResponses: any) => void }) => void;
    };
  }
}

const AdSlot: React.FC<AdSlotProps> = ({ id, sizes, fallbackHtml }) => {
  const adRef = useRef<HTMLDivElement>(null);
  const { isInView } = useLazyLoad(adRef); // Hook to check if the ad slot is in the viewport

  useEffect(() => {
    if (!isInView || !window.pbjs) return;

    console.log(`[AdSlot] AdSlot ${id} in view, initializing header bidding.`);

    // Ensure pbjs.que is initialized
    window.pbjs.que = window.pbjs.que || [];
    window.pbjs.que.push(() => {
      console.log(`[AdSlot] Adding ad unit for ${id}`);

      // Add ad unit configuration
      window.pbjs.addAdUnits([
        {
          code: id,
          mediaTypes: { banner: { sizes } },
          bids: [
            { bidder: 'appnexus', params: { placementId: '12345' } },
            { bidder: 'rubicon', params: { accountId: '7890', siteId: '56789', zoneId: '123456' } },
          ],
        },
      ]);

      // Request bids
      window.pbjs.requestBids({
        bidsBackHandler: (bidResponses: Record<string, any>) => {
          console.log(`[AdSlot] Bid responses for ${id}:`, bidResponses);

          const adDiv = document.getElementById(id);

          if (!adDiv) {
            console.error(`[AdSlot] Ad div not found for id ${id}.`);
            return;
          }

          if (bidResponses && bidResponses[id]?.bids?.length) {
            try {
              const winningBid = validateBid(bidResponses[id].bids[0]);
              adDiv.innerHTML = winningBid.ad || fallbackHtml; // Render winning ad or fallback
            } catch (error) {
              console.error(`[AdSlot] Bid validation failed for ${id}:`, error);
              adDiv.innerHTML = fallbackHtml;
            }
          } else {
            adDiv.innerHTML = fallbackHtml; // No valid bids received
          }
        },
      });
    });
  }, [isInView, id, sizes, fallbackHtml]);

  return <div id={id} ref={adRef} className="ad-slot"></div>;
};

export default AdSlot;
