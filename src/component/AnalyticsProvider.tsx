import React, { createContext, ReactNode } from 'react';

type AnalyticsContextType = {
  trackEvent: (event: string, data: any) => void;
};

export const AnalyticsContext = createContext<AnalyticsContextType>({
  trackEvent: () => {},
});

const AnalyticsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const trackEvent = (event: string, data: any) => {
    console.log(`Analytics Event: ${event}`, data);
    // Send data to Google Analytics or Matomo
  };

  return (
    <AnalyticsContext.Provider value={{ trackEvent }}>
      {children}
    </AnalyticsContext.Provider>
  );
};

export default AnalyticsProvider;
