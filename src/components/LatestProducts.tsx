import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { useParams, useNavigate } from 'react-router-dom';

const latestProducts = [
    {
        id: 1,
        route: '6',
        name: 'TarantulaX',
        description: 'TarantulaX is an enhanced RTK receiver that, through hardware encryption design, IMU fusion algorithms, and integration with the new generation of ROVR\'s hand-eye calibration model',
        price: 149.99,
        image: 'https://rovr.network/images/product-1.png',
        features: [
            'Dual-band GNSS (L1/L5)',
            'NMEA and RTCM3.2 Messages (RTK/PPK)',
            'Positioning Accuracy: ±2 cm',
            'Hardware Data Encryption for Blockchain Applications',
            'Dual Patch Antenna: 35mm x 35mm + 25mm x 25mm',
            'IMU: 6-axis',
            'Waterproof Rating: IP67'
        ]
    },
    {
        id: 2,
        route: '5',
        name: 'LightCone',
        description: 'The Lightcone Max is still in protype and is expected to launch next year. It uses advanced lidar and navigation to collect 3D data, earning ROVR tokens through automatic uploads.',
        price: 4299.99,
        image: 'https://rovr.network/images/product-2.jpg',
        features: [
            'Lidar Detection Range: 200m (180m @ 10% NIST)',

            'Lidar Resolution: 0.2° (horizontal) x 0.2° (vertical)',

            'Ranging Accuracy: ±5 cm',

            'Camera: 4K HD',

            'Positioning Accuracy: ±2 cm',

            'IMU Bias (XYZ): 0.13°/√h, 0.050m/√h',

           'AI Computing Power: 6 TOPS @ INT8',

            'Operating Temperature: -45℃ ~ 85℃',

            'Storage Temperature: -65℃ ~ 105℃',

            'Waterproof Rating: IP67'
        ]
    }
];

const LatestProducts: React.FC = () => {
    const navigate = useNavigate();

    return (
        <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                        New to ROVR? Check out our latest products!
                    </h2>
                    <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
                    <p className="text-blue-700 max-w-2xl mx-auto text-lg">
                        High-precision positioning systems with advanced features for professional applications
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {latestProducts.map((product) => (
                        <div
                            key={product.id}
                            className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:translate-y-[-4px] border border-blue-100"
                        >
                            <div className="relative">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-64 object-cover"
                                />
                                <span className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  PROFESSIONAL
                </span>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold text-blue-900 mb-2">{product.name}</h3>
                                <p className="text-blue-700 mb-4 text-sm">{product.description}</p>

                                <ul className="mb-6 space-y-2">
                                    {product.features.map((feature, index) => (
                                        <li key={index} className="flex items-center text-sm text-blue-600">
                                            <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <div className="flex justify-between items-center">
                                    <span className="text-xl font-bold text-blue-800">${product.price.toFixed(2)}</span>

                                    <button
                                        onClick={() => navigate(`/products/${product.route}`)}
                                        className="bg-blue-700 hover:bg-blue-800 text-white font-medium py-2 px-4 rounded-lg flex items-center transition-colors duration-200">
                                        <ShoppingCart size={18} className="mr-2" />
                                        Order Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LatestProducts;

// import React from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { ShoppingCart } from 'lucide-react';
//
// const latestProducts = [
//     {
//         id: 1,
//         route: 'tarantulax',
//         name: 'TarantulaX',
//         description: 'TarantulaX is an enhanced RTK receiver that, through hardware encryption design, IMU fusion algorithms, and integration with the new generation of ROVR\'s hand-eye calibration model',
//         price: 149.99,
//         image: 'https://rovr.network/images/product-1.png',
//         features: [
//             'Dual-band GNSS (L1/L5)',
//             'NMEA and RTCM3.2 Messages (RTK/PPK)',
//             'Positioning Accuracy: ±2 cm',
//             'Hardware Data Encryption for Blockchain Applications',
//             'Dual Patch Antenna: 35mm x 35mm + 25mm x 25mm',
//             'IMU: 6-axis',
//             'Waterproof Rating: IP67'
//         ]
//     },
//     {
//         id: 2,
//         route: 'lightcone',
//         name: 'LightCone',
//         description: 'The Lightcone Max is still in protype and is expected to launch next year. It uses advanced lidar and navigation to collect 3D data, earning ROVR tokens through automatic uploads.',
//         price: 4299.99,
//         image: 'https://rovr.network/images/product-2.jpg',
//         features: [
//             'Lidar Detection Range: 200m (180m @ 10% NIST)',
//             'Lidar Resolution: 0.2° (horizontal) x 0.2° (vertical)',
//             'Ranging Accuracy: ±5 cm',
//             'Camera: 4K HD',
//             'Positioning Accuracy: ±2 cm',
//             'IMU Bias (XYZ): 0.13°/√h, 0.050m/√h',
//             'AI Computing Power: 6 TOPS @ INT8',
//             'Operating Temperature: -45℃ ~ 85℃',
//             'Storage Temperature: -65℃ ~ 105℃',
//             'Waterproof Rating: IP67'
//         ]
//     }
// ];
//
// const LatestProducts: React.FC = () => {
//     const { route } = useParams();
//     const navigate = useNavigate();
//
//     const activeProduct = latestProducts.find((p) => p.route === route) || latestProducts[0];
//
//     return (
//         <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
//             <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//                 <div className="text-center mb-16">
//                     <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
//                         New to ROVR? Check out our latest products!
//                     </h2>
//                     <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
//                     <p className="text-blue-700 max-w-2xl mx-auto text-lg">
//                         High-precision positioning systems with advanced features for professional applications
//                     </p>
//                 </div>
//
//                 {/* Navigation Buttons */}
//                 <div className="flex justify-center mb-10 gap-4 flex-wrap">
//                     {latestProducts.map((product) => (
//                         <button
//                             key={product.route}
//                             onClick={() => navigate(`/products/${product.route}`)}
//                             className={`px-4 py-2 rounded-full border ${
//                                 route === product.route
//                                     ? 'bg-blue-600 text-white'
//                                     : 'bg-white text-blue-600 border-blue-600'
//                             } transition-colors duration-200 font-semibold text-sm`}
//                         >
//                             {product.name}
//                         </button>
//                     ))}
//                 </div>
//
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
//                     <div
//                         key={activeProduct.id}
//                         className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:translate-y-[-4px] border border-blue-100"
//                     >
//                         <div className="relative">
//                             <img
//                                 src={activeProduct.image}
//                                 alt={activeProduct.name}
//                                 className="w-full h-64 object-cover"
//                             />
//                             <span className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
//                                 PROFESSIONAL
//                             </span>
//                         </div>
//
//                         <div className="p-6">
//                             <h3 className="text-xl font-bold text-blue-900 mb-2">{activeProduct.name}</h3>
//                             <p className="text-blue-700 mb-4 text-sm">{activeProduct.description}</p>
//
//                             <ul className="mb-6 space-y-2">
//                                 {activeProduct.features.map((feature, index) => (
//                                     <li key={index} className="flex items-center text-sm text-blue-600">
//                                         <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
//                                         {feature}
//                                     </li>
//                                 ))}
//                             </ul>
//
//                             <div className="flex justify-between items-center">
//                                 <span className="text-xl font-bold text-blue-800">${activeProduct.price.toFixed(2)}</span>
//
//                                 <button
//                                     className="bg-blue-700 hover:bg-blue-800 text-white font-medium py-2 px-4 rounded-lg flex items-center transition-colors duration-200"
//                                     onClick={() => navigate(`/checkout/${activeProduct.route}`)}
//                                 >
//                                     <ShoppingCart size={18} className="mr-2" />
//                                     Order Now
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };
//
// export default LatestProducts;

