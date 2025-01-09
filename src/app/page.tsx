import AdSlot from '@/src/component/AdSlot';
import { adUnits } from '@/src/utils/adConfig';

const AdsPage = () => (
  <div className="container mx-auto p-4">
    <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg shadow-md p-6 mb-6">
      <h1 className="text-3xl font-extrabold text-center">Ads Page Header Bidding</h1>
      <p className="text-center mt-2 text-lg">
        Explore how header bidding enhances ad revenue optimization!
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {adUnits.map((ad) => (
        <div
          key={ad.id}
          className="bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow duration-300"
        >
          <h2 className="text-xl font-semibold text-center mb-2 text-gray-800">
            Ad Slot: {ad.id}
          </h2>
          <div className="border-t-2 border-gray-200 mt-2 pt-2">
            <AdSlot
              id={ad.id}
              sizes={ad.sizes}
              fallbackHtml="<div class='text-center text-gray-500'>Default Ad</div>"
            />
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default AdsPage;
