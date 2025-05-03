import React, { useEffect, useRef } from "react";
import geod from "../../assets/geod.png";
import helium from "../../assets/helium1.png";
import weather from "../../assets/weatherxm1.png";

const depins = [
    {
        name: "GeodNet",
        logo: geod,
        description: "GEODNET is a web3.0 blockchain-based highly-reliable RTK Network using #DePIN principles.",
        url: "https://geodnet.com",
    },
    {
        name: "Helium",
        logo: helium,
        description:
            "The Helium Network is a decentralized wireless Internet of things (IoT) network using the LoRaWAN system, tied to the cryptocurrency Helium Network Token (symbol HNT).",
        url: "https://geodnet.com",
    },
    {
        name: "WeatherXM",
        logo: weather,
        description:
            "WeatherXM is a community-powered weather network that rewards weather station owners with $WXM tokens and provides accurate weather services to individuals, businesses, and research organizations.",
        url: "https://weatherxm.com",
    },
    // Duplicate entries for seamless scrolling
    {
        name: "GeodNet",
        logo: geod,
        description: "GEODNET is a web3.0 blockchain-based highly-reliable RTK Network using #DePIN principles.",
        url: "https://geodnet.com",
    },
    {
        name: "Helium",
        logo: helium,
        description:
            "The Helium Network is a decentralized wireless Internet of things (IoT) network using the LoRaWAN system, tied to the cryptocurrency Helium Network Token (symbol HNT).",
        url: "https://geodnet.com",
    },
    {
        name: "WeatherXM",
        logo: weather,
        description:
            "WeatherXM is a community-powered weather network that rewards weather station owners with $WXM tokens and provides accurate weather services to individuals, businesses, and research organizations.",
        url: "https://weatherxm.com",
    },
];

const TopDePins = () => {
    const containerRef = useRef(null);
    const scrollRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        const scroll = scrollRef.current;
        if (!container || !scroll) return;

        let animationFrameId;
        let isHovering = false;

        const animate = () => {
            if (!isHovering) {
                scroll.scrollLeft += 1;

                // Reset scroll position when reaching the end for seamless loop
                if (scroll.scrollLeft >= (scroll.scrollWidth - scroll.clientWidth) / 2) {
                    scroll.scrollLeft = 0;
                }
            }
            animationFrameId = requestAnimationFrame(animate);
        };

        animationFrameId = requestAnimationFrame(animate);

        const handleMouseEnter = () => {
            isHovering = true;
        };

        const handleMouseLeave = () => {
            isHovering = false;
        };

        container.addEventListener("mouseenter", handleMouseEnter);
        container.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            cancelAnimationFrame(animationFrameId);
            container.removeEventListener("mouseenter", handleMouseEnter);
            container.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    return (
        <div className="py-16 px-6 sm:px-8">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Mine the Top DePins</h2>
            <div ref={containerRef} className="relative px-6 sm:px-8 py-12 overflow-hidden">
                <div
                    ref={scrollRef}
                    className="flex gap-4 overflow-x-auto md:overflow-x-hidden scroll-smooth scrollbar-hide md:scrollbar-none"
                    style={{ WebkitOverflowScrolling: "touch", width: "calc(100% - 2rem)", margin: "0 auto" }}
                >
                    {depins.map((depin, index) => (
                        <a
                            key={index}
                            href={depin.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-none w-72 sm:w-80 h-auto p-6 bg-gray-800/50 rounded-xl hover:bg-gray-800/70 transition-all cursor-pointer"
                            style={{ scrollSnapAlign: "start" }}
                        >
                            <img src={depin.logo} alt={depin.name} className="mb-4 rounded-lg w-24 sm:w-28" />
                            <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">{depin.name}</h3>
                            <p className="text-gray-400 text-sm sm:text-base">{depin.description}</p>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TopDePins;
