// import React from 'react';
// import videoBackground from '../../assets/space1.mp4'; // Adjust the path based on your file structure
//
// const Hero = () => {
//     return (
//         <div className="relative  h-screen overflow-hidden">
//             {/* Video Background */}
//             <video
//                 className="absolute top-0 left-0 w-full h-full object-cover z-0"
//                 src={videoBackground}
//                 autoPlay
//                 loop
//                 muted
//                 playsInline
//             ></video>
//
//             {/* Overlay for Dim or Color Effect */}
//             <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10"></div>
//
//             {/* Content Section */}
//             <div className="relative z-20 flex flex-col items-start justify-center h-full px-8 text-white">
//                 <h1 className="text-5xl md:text-6xl font-bold mb-6">
//                     Mine more with <br />
//                     <span className="text-blue-500">Block Store</span>
//                 </h1>
//                 <p className="text-lg md:text-xl text-gray-400 mb-1">Network Everywhere</p>
//                 <p className="text-lg md:text-xl text-gray-400 mb-8">
//                     LoraWan, GNSS, Hosting, Installation, Antennas & Lot More
//                 </p>
//                 <div className="flex flex-wrap gap-4">
//                     <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
//                         Explore Mining Rewards
//                     </button>
//                     <button className="border border-gray-600 text-white px-6 py-3 rounded-lg hover:border-gray-500 transition duration-300">
//                         Buy a Miner
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };
//
// export default Hero;

import React from 'react';

const Hero = () => {
    return (
        <div className="bg-blue-900 min-h-screen relative overflow-hidden">
            {/* Background Video */}
            <video
                className="absolute inset-0 w-full h-full object-cover"
                src="../../assets/space1.mp4"
                autoPlay
                loop
                muted
                playsInline
            ></video>

            {/* Overlay */}
            <div className="absolute inset-0 bg-[#0f172a] opacity-10"></div>

            {/* Content */}
            <div
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative flex items-center justify-center text-center min-h-screen">
                <div>
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
                        Mine more with <br/>
                        <span className="text-blue-500">Block Store</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-400 mb-1">Network Everywhere</p>
                    <p className="text-lg md:text-xl text-gray-400 mb-8">
                        LoraWan, GNSS, Hosting, Installation, Antennas & Lot More
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <button
                            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
                            Explore Mining Rewards
                        </button>
                        <button
                            className="border border-gray-600 text-white px-6 py-3 rounded-lg hover:border-gray-500 transition duration-300">
                            Buy a Miner
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
