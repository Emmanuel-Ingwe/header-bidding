// src/types/prebid.js.d.ts
declare global {
  interface Window {
    pbjs: {
      que: any[];
      addAdUnits: (adUnits: any[]) => void;
      setConfig: (config: { [key: string]: any }) => void;
      requestBids: (options: { bidsBackHandler: (bidResponses: any) => void }) => void;
    };
  }
}

export {};
