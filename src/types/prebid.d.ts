// src/types/prebid.d.ts

declare namespace Prebid {
    interface BidResponse {
      cpm: number; // Cost per thousand impressions
      ad: string; // Ad creative
      width?: number;
      height?: number;
      bidder?: string; // Name of the bidder
      [key: string]: any; // For additional dynamic properties
    }
  
    interface Pbjs {
      que: Array<() => void>;
      addAdUnits: (adUnits: AdUnit[]) => void;
      requestBids: (options: RequestBidsOptions) => void;
    }
  
    interface AdUnit {
      code: string; // Identifier for the ad slot
      mediaTypes: {
        banner: {
          sizes: [number, number][]; // Array of supported ad sizes
        };
      };
      bids: Bid[];
    }
  
    interface Bid {
      bidder: string; // Name of the SSP (e.g., 'appnexus', 'rubicon')
      params: { [key: string]: any }; // Configuration for the SSP
    }
  
    interface RequestBidsOptions {
      bidsBackHandler: (bidResponses: { [key: string]: BidResponse }) => void;
    }
  }
  
  declare global {
    interface Window {
      pbjs: {
        que: any[];
        setConfig: (config: any) => void;
        addAdUnits: (adUnits: any[]) => void;
        requestBids: (options: { bidsBackHandler: () => void }) => void;
      };
    }
  }
  
  export {};