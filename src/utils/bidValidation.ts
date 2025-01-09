export const validateBid = (bid: Prebid.BidResponse) => {
  if (!bid || typeof bid.cpm !== 'number' || bid.cpm < 0.1) {
    throw new Error('Invalid bid: CPM too low, missing, or not a number.');
  }
  if (!bid.ad || typeof bid.ad !== 'string') {
    throw new Error('Invalid bid: Missing or invalid creative.');
  }
  return bid;
};
