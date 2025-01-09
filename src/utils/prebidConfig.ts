// src/utils/prebidConfig.ts
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
  