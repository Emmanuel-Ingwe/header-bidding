import { useEffect, useState, RefObject } from 'react';

export const useDynamicFloorPrice = (adSize: [number, number]) => {
    const [floorPrice, setFloorPrice] = useState(0.5); // Default
  
    useEffect(() => {
      if (adSize[0] > 728) {
        setFloorPrice(1.0); // Higher for larger ads
      } else {
        setFloorPrice(0.5);
      }
    }, [adSize]);
  
    return floorPrice;
  };
  