import React from 'react';
import mining from '../../assets/mining.jpg';

const MiningJourney = () => {
  return (
    <div className="py-16 px-8 flex justify-between items-center">
      <div className="w-1/2">
        <div className="rounded-3xl w-full aspect-video">
            <img src={mining} className="rounded-3xl w-full pl-10 aspect-video"/>
        </div>
      </div>
      <div className="w-1/2 pl-12">
        <div className="max-w-lg">
          <p className="text-blue-500 mb-2">Get Support on</p>
          <h2 className="text-3xl font-bold text-white mb-4">Your Mining Journey</h2>
          <p className="text-gray-400 mb-6">
            We help minimize downtime and quickly restore your mining operations. Use our AI-powered solution to get your earnings back to normal as soon as possible, reducing potential losses from inactive mining periods.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 inline-flex items-center gap-2">
            Get Premium Support
            <span className="text-lg">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MiningJourney;