declare global {
    interface Window {
      pbjs: {
        que: any[];
        setConfig: (config: { priceGranularity: string; [key: string]: any }) => void;
        addAdUnits: (adUnits: any[]) => void;
        requestBids: (options: { bidsBackHandler: (bidResponses: any) => void }) => void;
      };
    }
  }
  