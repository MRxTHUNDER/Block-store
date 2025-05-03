import React from "react";
import image1 from "../../assets/WB1200_WeatherXM.webp";
import image2 from "../../assets/goednet.png";
import image3 from "../../assets/windbits.webp";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const FeaturedProducts = () => {
  const navigate = useNavigate();

  return (
      <div className="featured-products text-center p-5 bg-[#0f172a]">
        <h1 className="text-xl font-bold text-gray-100 mb-5">Featured Products</h1>

        <div className="cards-container flex justify-center gap-5 flex-wrap md:flex-nowrap">
          {/* Product Card 1 */}
          <div
              onClick={() => navigate("/products/3")}
              className="product-card bg-gradient-to-br from-[#0f172a] to-blue-900 rounded-lg shadow-lg p-5 w-full sm:w-80 flex flex-col items-center transition-transform transform hover:scale-105"
          >
            <img
                src={image1}
                alt="Helium Mobile Outdoor Wifi Hotspot"
                className="mb-4 rounded-lg shadow-md w-40 sm:w-36"
            />
            <h3 className="text-lg font-semibold text-blue-200 mb-2 text-center">
              WXM Weather Station WB1200
            </h3>
            <div className="price text-lg font-bold text-white mb-3">Rs. 49,000</div>
            <p className="text-sm text-gray-300 mb-5 text-center">
              The WB1200 bundles product the WS1001 weather station with our open-source WXM D1 WiFi gateway.
              This unit monitors the environment, providing hyper-local weather data.
            </p>
            <Link
                to="/products/3"
                className="btn bg-blue-600 text-white py-2 px-4 rounded-full shadow-md hover:bg-blue-700 transition"
            >
              Buy Now ↗
            </Link>
          </div>

          {/* Product Card 2 */}
          <div
              onClick={() => navigate("/products/1")}
              className="product-card bg-gradient-to-br from-[#0f172a] to-blue-900 rounded-lg shadow-lg p-5 w-full sm:w-80 flex flex-col items-center transition-transform transform hover:scale-105"
          >
            <img
                src={image2}
                alt="Geodnet MobileCM (Triple-band)"
                className="mb-4 rounded-lg shadow-md w-40 sm:w-36"
            />
            <h3 className="text-lg font-semibold text-blue-200 mb-2 text-center">
              Geodnet MobileCM (Triple-band)
            </h3>
            <div className="price text-lg font-bold text-white mb-3">Rs. 69,000</div>
            <p className="text-sm text-gray-300 mb-5 text-center">
              The GEODNET mission is to gather dense real-time geospatial data from the Earth and her Atmosphere using a new class of roof-mounted Space Weather stations.
            </p>
            <Link
                to="/products/1"
                className="btn bg-blue-600 text-white py-2 px-4 rounded-full shadow-md hover:bg-blue-700 transition"
            >
              Buy Now ↗
            </Link>
          </div>

          {/* Product Card 3 */}
          <div
              onClick={() => navigate("/products/2")}
              className="product-card bg-gradient-to-br from-[#0f172a] to-blue-900 rounded-lg shadow-lg p-5 w-full sm:w-80 flex flex-col items-center transition-transform transform hover:scale-105"
          >
            <img
                src={image3}
                alt="DIMO Macaron"
                className="mb-4 rounded-lg shadow-md w-40 sm:w-36"
            />
            <h3 className="text-lg font-semibold text-blue-200 mb-2 text-center">Wingbits MGW310</h3>
            <div className="price text-lg font-bold text-white mb-3">Rs. 1,21,000</div>
            <p className="text-sm text-gray-300 mb-5 text-center">
              This device tracks aircraft and satellites. Get rewarded with Wingbits and Geodnet tokens for installing this device.
            </p>
            <Link
                to="/products/2"
                className="btn bg-blue-600 text-white py-2 px-4 rounded-full shadow-md hover:bg-blue-700 transition"
            >
              Buy Now ↗
            </Link>
          </div>
        </div>
      </div>
  );
};

export default FeaturedProducts;
