import React from 'react';
import image1 from '../../assets/helium.png';
import image2 from '../../assets/goednet.png';
import image3 from '../../assets/dimo.png';

const FeaturedProducts = () => {
  return (
      <div className="featured-products text-center p-5 bg-[#0f172a]">
        <h1 className="text-xl font-bold text-gray-100 mb-5">Featured Products</h1>
        <div className="cards-container flex justify-center gap-5 flex-wrap">
          {/* Product Card 1 */}
          <div className="product-card bg-gradient-to-br from-[#0f172a] to-blue-900 rounded-lg shadow-lg p-5 w-80 flex flex-col items-center transition-transform transform hover:scale-105">
            <img
                src={image1}
                alt="Helium Mobile Outdoor Wifi Hotspot"
                className="mb-4 rounded-lg shadow-md"
                style={{ width: '150px', height: '150px', objectFit: 'contain' }}
            />
            <h3 className="text-lg font-semibold text-blue-200 mb-2 text-center">
              Helium Mobile Outdoor Wifi
            </h3>
            <div className="price text-lg font-bold text-white mb-3">Rs. 696969</div>
            <p className="text-sm text-gray-300 mb-5 text-center">
              Lorem ipsum odor amet, consectetur adipiscing elit. Nascetur lorem consectetur aenean, sapien proin orci sem.
            </p>
            <a
                href="#"
                className="btn bg-blue-600 text-white py-2 px-4 rounded-full shadow-md hover:bg-blue-700 transition"
            >
              Buy Now ↗
            </a>
          </div>

          {/* Product Card 2 */}
          <div className="product-card bg-gradient-to-br from-[#0f172a] to-blue-900 rounded-lg shadow-lg p-5 w-80 flex flex-col items-center transition-transform transform hover:scale-105">
            <img
                src={image2}
                alt="Geodnet MobileCM (Triple-band)"
                className="mb-4 rounded-lg shadow-md"
                style={{ width: '150px', height: '150px', objectFit: 'contain' }}
            />
            <h3 className="text-lg font-semibold text-blue-200 mb-2 text-center">
              Geodnet MobileCM (Triple-band)
            </h3>
            <div className="price text-lg font-bold text-white mb-3">Rs. 696969</div>
            <p className="text-sm text-gray-300 mb-5 text-center">
              Lorem ipsum odor amet, consectetur adipiscing elit. Nascetur lorem consectetur aenean, sapien proin orci sem.
            </p>
            <a
                href="#"
                className="btn bg-blue-600 text-white py-2 px-4 rounded-full shadow-md hover:bg-blue-700 transition"
            >
              Buy Now ↗
            </a>
          </div>

          {/* Product Card 3 */}
          <div className="product-card bg-gradient-to-br from-[#0f172a] to-blue-900 rounded-lg shadow-lg p-5 w-80 flex flex-col items-center transition-transform transform hover:scale-105">
            <img
                src={image3}
                alt="DIMO Macaron"
                className="mb-4 rounded-lg shadow-md"
                style={{ width: '150px', height: '150px', objectFit: 'contain' }}
            />
            <h3 className="text-lg font-semibold text-blue-200 mb-2 text-center">DIMO Macaron</h3>
            <div className="price text-lg font-bold text-white mb-3">Rs. 696969</div>
            <p className="text-sm text-gray-300 mb-5 text-center">
              Lorem ipsum odor amet, consectetur adipiscing elit. Nascetur lorem consectetur aenean, sapien proin orci sem.
            </p>
            <a
                href="#"
                className="btn bg-blue-600 text-white py-2 px-4 rounded-full shadow-md hover:bg-blue-700 transition"
            >
              Buy Now ↗
            </a>
          </div>
        </div>

        {/* View All Products Button */}
        <a
            href="#"
            className="view-all-btn bg-blue-600 text-white py-3 px-8 rounded-full shadow-md mt-5 inline-block hover:bg-blue-700 transition"
        >
          View All Products
        </a>
      </div>
  );
};

export default FeaturedProducts;
