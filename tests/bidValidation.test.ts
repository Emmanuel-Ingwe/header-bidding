import { validateBid } from '@/src/utils/bidValidation';

test('throws an error for invalid bids', () => {
  expect(() => validateBid({ cpm: 0, ad: '' })).toThrow('Invalid bid: CPM too low or missing.');
});
