import { useEffect, useRef } from "react";
import image1 from "../../assets/goednet.png";
import image2 from "../../assets/WB1200_WeatherXM.webp";
import image3 from "../../assets/windbits.webp";
import image4 from "../../assets/geo.webp";
import { useNavigate } from "react-router-dom";

const products = [
  { image: image1, name: "GeochNet", routing: "/products/1" },
  { image: image2, name: "Weatherxm", routing: "/products/3" },
  { image: image3, name: "Wingbits", routing: "/products/2" },
  { image: image4, name: "Geo Pulse", routing: "/products/4" },
  { image: image1, name: "GeochNet", routing: "/products/1" },
  { image: image2, name: "Weatherxm", routing: "/products/3" },
  { image: image3, name: "Wingbits", routing: "/products/2" },
  { image: image4, name: "Geo Pulse", routing: "/products/4" },
];

const ProductGrid = () => {
  const containerRef = useRef(null);
  const scrollRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const container = containerRef.current;
    const scroll = scrollRef.current;
    if (!container || !scroll) return;

    let animationFrameId;
    let isHovering = false;

    const animate = () => {
      if (!isHovering) {
        scroll.scrollLeft += 1;

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
      <div ref={containerRef} className="bg-gray-300 relative px-12 sm:px-8 py-20 overflow-hidden">
        <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scroll-smooth md:overflow-x-hidden"
            style={{ WebkitOverflowScrolling: "touch" }}
        >
          {products.map((product, index) => (
              <div
                  key={index}
                  className="flex-none w-80 h-60 flex flex-col items-center p-6 bg-gradient-to-br from-[#0f172a] to-blue-900 rounded-xl hover:bg-gray-800/70 transition-all cursor-pointer"
                  style={{ scrollSnapAlign: "start" }}
              >
                <div
                    className="mb-3"
                    onClick={() => {
                      navigate(product.routing);
                    }}
                >
                  <img
                      src={product.image}
                      alt={product.name}
                      className="w-40 h-40 object-contain"
                  />
                </div>
                <span className="text-gray-300 font-bold">{product.name}</span>
              </div>
          ))}
        </div>
      </div>
  );
};

export default ProductGrid;
