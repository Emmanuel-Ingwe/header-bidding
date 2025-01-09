// Corrected type for sizes
export const adUnits = [
  {
    id: 'ad1',
    sizes: [
      [300, 250] as [number, number],  // Explicitly typing as a tuple with 2 numbers
      [728, 90] as [number, number],
    ],
    fallbackHtml: '<div>Fallback Ad 1</div>',
  },
  {
    id: 'ad2',
    sizes: [
      [300, 250] as [number, number],  // Explicitly typing as a tuple with 2 numbers
    ],
    fallbackHtml: '<div>Fallback Ad 2</div>',
  },
];
