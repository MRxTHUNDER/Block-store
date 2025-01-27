import React from 'react';
import image1 from '../../assets/Vector1.png';
import image2 from '../../assets/wingbits1.png';
import image3 from '../../assets/image3.png';

const Partners = () => {
  return (
    <div className="py-12 px-8">
      <p className="text-center text-gray-400 mb-8 font-bold">Trusted by</p>
      <div className="flex justify-center gap-12 items-center">
        <img src={image1} alt="GEONET" className="opacity-50 hover:opacity-100 transition-opacity" />
        <img src={image2} alt="Wingbits" className="opacity-50 hover:opacity-100 transition-opacity" />
        <img src={image3} alt="WEATHERXM" className="opacity-50 hover:opacity-100 transition-opacity" />
        {/*<img src="https://via.placeholder.com/120x40" alt="GEONET" className="opacity-50 hover:opacity-100 transition-opacity" />*/}
      </div>
    </div>
  );
};

export default Partners;