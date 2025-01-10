
export const adUnits = [
  {
    code: 'ad-slot-1',
    mediaTypes: {
      banner: {
        sizes: [[300, 250], [728, 90]], // Ad sizes
      },
    },
    bids: [
      {
        bidder: 'appnexus',
        params: { placementId: '12345' },
      },
      {
        bidder: 'rubicon',
        params: {
          accountId: '7890',
          siteId: '56789',
          zoneId: '123456',
        },
      },
    ],
  },
];

export const configurePrebid = () => {
  if (!window.pbjs) {
    console.error('Prebid.js is not loaded');
    return;
  }

  window.pbjs.que.push(() => {
    // Set global configuration (simplified and updated for latest Prebid.js versions)
    window.pbjs.setConfig({
      priceGranularity: 'high', // High granularity for bid CPM
      currency: { adServerCurrency: 'USD' }, // Default currency
      userSync: {
        syncEnabled: true,
        syncsPerBidder: 5,
        filterSettings: {
          iframe: { bidders: '*', filter: 'include' },
        },
      },
      debug: true, // Enable debugging mode
    });

    // Register ad units
    window.pbjs.addAdUnits(adUnits);

    // Optionally preload bids
    window.pbjs.requestBids({
      bidsBackHandler: (bidResponses) => {
        console.log('Bids are back!', bidResponses);
        // Send bids to ad server (if using GPT or other)
      },
    });
  });
};
