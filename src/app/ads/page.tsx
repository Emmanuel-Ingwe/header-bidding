import AdSlot from '@/src/component/AdSlot';
import { adUnits } from '@/src/utils/adConfig';

const AdsPage = () => (
  <div className="container mx-auto p-4">
    <h1 className="text-2xl font-bold mb-4">Ads Page</h1>
    {adUnits.map((ad) => (
      <AdSlot key={ad.id} id={ad.id} sizes={ad.sizes} fallbackHtml={ad.fallbackHtml} />
    ))}
  </div>
);

export default AdsPage;
