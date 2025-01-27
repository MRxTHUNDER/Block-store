import React, { useEffect, useRef } from 'react';
import geod from '../../assets/geod.png';
import helium from '../../assets/helium1.png';
import weather from '../../assets/weatherxm1.png';

const depins = [
    {
        name: 'GeodNet',
        logo: geod,
        description: 'Lorem ipsum dolor amet, consectetur adipiscing elit. Nescetur lorem consectetur aenean, sapien proin arci sem.'
    },
    {
        name: 'Helium',
        logo: helium,
        description: 'Lorem ipsum dolor amet, consectetur adipiscing elit. Nescetur lorem consectetur aenean, sapien proin arci sem.'
    },
    {
        name: 'WeatherXM',
        logo: weather,
        description: 'Lorem ipsum dolor amet, consectetur adipiscing elit. Nescetur lorem consectetur aenean, sapien proin arci sem.'
    },
    // Duplicate entries for seamless scrolling
    {
        name: 'GeodNet',
        logo: geod,
        description: 'Lorem ipsum dolor amet, consectetur adipiscing elit. Nescetur lorem consectetur aenean, sapien proin arci sem.'
    },
    {
        name: 'Helium',
        logo: helium,
        description: 'Lorem ipsum dolor amet, consectetur adipiscing elit. Nescetur lorem consectetur aenean, sapien proin arci sem.'
    },
    {
        name: 'WeatherXM',
        logo: weather,
        description: 'Lorem ipsum dolor amet, consectetur adipiscing elit. Nescetur lorem consectetur aenean, sapien proin arci sem.'
    }
];

const TopDePins = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        const scroll = scrollRef.current;
        if (!container || !scroll) return;

        let animationFrameId: number;
        let isHovering = false;

        const animate = () => {
            if (!isHovering && scroll) {
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

        container.addEventListener('mouseenter', handleMouseEnter);
        container.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            cancelAnimationFrame(animationFrameId);
            container.removeEventListener('mouseenter', handleMouseEnter);
            container.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <div className="py-16 px-8">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Mine the Top DePins</h2>
            <div
                ref={containerRef}
                className="relative px-8 py-12 overflow-hidden"
            >
                <div
                    ref={scrollRef}
                    className="flex gap-4 overflow-x-hidden scroll-smooth"
                    style={{ WebkitOverflowScrolling: 'touch', width: 'calc(100% - 2rem)', margin: '0 auto' }}
                >
                    {depins.map((depin, index) => (
                        <div
                            key={index}
                            className="flex-none w-80 h-auto p-6 bg-gray-800/50 rounded-xl hover:bg-gray-800/70 transition-all cursor-pointer"
                            style={{ scrollSnapAlign: 'start' }}
                        >
                            <img src={depin.logo} alt={depin.name} className="mb-4 rounded-lg" />
                            <h3 className="text-xl font-semibold text-white mb-3">{depin.name}</h3>
                            <p className="text-gray-400">{depin.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TopDePins;
