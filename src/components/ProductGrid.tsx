import React, { useEffect, useRef } from 'react';
import image1 from '../../assets/goednet.png';
import image2 from '../../assets/weatherxm.png';
import image3 from '../../assets/windbits.webp';
import image4 from '../../assets/geopulse.png';


//import { Radio, Satellite, Database, HardDrive, Cpu } from 'lucide-react';

const products = [
  { image: image1, name: 'GeochNet' },
  { image: image2, name: 'Weatherxm' },
  { image: image3, name: 'Wingbits' },
  { image: image4, name: 'Geo Pulse' },
  // Duplicate products for seamless loop
  { image: image1, name: 'GeochNet' },
  { image: image2, name: 'Weatherxm' },
  { image: image3, name: 'Wingbits' },
  { image: image4, name: 'Geo Pulse' },

];

const ProductGrid = () => {
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
        
        // Reset scroll position when reaching end for seamless loop
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
    <div 
      ref={containerRef}
      className="relative px-8 py-12 overflow-hidden "
    >
      <div 
        ref={scrollRef}
        className="flex gap-4 overflow-x-hidden scroll-smooth"
        style={{ WebkitOverflowScrolling: 'touch' }}
      >
        {products.map((product, index) => (
            <div
                key={index}
                className="flex-none w-80 h-60 flex flex-col items-center p-6 bg-gradient-to-br from-[#0f172a] to-blue-900 rounded-xl hover:bg-gray-800/70 transition-all cursor-pointer"
                style={{scrollSnapAlign: 'start'}}
            >
              <div className="mb-3">
                <img src={product.image} alt={product.name} className="w-40 h-40 object-contain"/>
              </div>
              <span className="text-gray-300 font-bold">{product.name}</span>
            </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;