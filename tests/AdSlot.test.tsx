import { render, screen } from '@testing-library/react';
import AdSlot from '@/src/component/AdSlot';

test('renders fallback HTML when no bids are returned', () => {
  render(<AdSlot id="test-ad" sizes={[[300, 250]]} fallbackHtml="<div>Fallback Ad</div>" />);
  expect(screen.getByText('Fallback Ad')).toBeInTheDocument();
});
