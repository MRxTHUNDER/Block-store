import React from "react";
import videoBackground from "../../assets/space5.mp4"; // Ensure the correct path

const Hero = () => {
    return (
        <div className="relative min-h-screen overflow-hidden">
            {/* Background Video */}
            <video
                className="absolute inset-0 w-full h-full object-cover"
                src={videoBackground}
                autoPlay
                loop
                muted
                playsInline
            ></video>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-[#0f172a] opacity-40"></div>

            {/* Content */}
            <div className="relative flex flex-col items-center justify-center text-center min-h-screen px-6 sm:px-12">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">
                    Mine more with <br />
                    <span className="text-blue-500">Block Store</span>
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-2">
                    Network Everywhere
                </p>
                <p className="text-sm sm:text-lg md:text-xl text-gray-400 mb-8 max-w-2xl">
                    Powered by cutting-edge hotspots from top-tier DePIN blockchain networks.
                </p>

                {/* Buttons */}
                {/*<div className="flex flex-col sm:flex-row gap-4">*/}
                {/*    <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300 w-full sm:w-auto">*/}
                {/*        Explore Mining Rewards*/}
                {/*    </button>*/}
                {/*    <button className="border border-gray-600 text-white px-6 py-3 rounded-lg hover:border-gray-500 transition duration-300 w-full sm:w-auto">*/}
                {/*        Buy a Miner*/}
                {/*    </button>*/}
                {/*</div>*/}
            </div>
        </div>
    );
};

export default Hero;
