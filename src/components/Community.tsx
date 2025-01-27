// import React from 'react';
//
// const Community = () => {
//   return (
//     <div className="py-16 px-8 flex justify-between items-center">
//       <div className="w-1/2">
//         <div className="max-w-lg">
//           <p className="text-blue-500 mb-2">Join Our</p>
//           <h2 className="text-3xl font-bold text-white mb-4">Incredible Community</h2>
//           <p className="text-gray-400 mb-6">
//             Stay connected on the the latest developments in the DePIN Space. With channels for each project, token discussions, and real insights shared with friends, you won't find a better spot. Ready to join the chat?
//           </p>
//           <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 inline-flex items-center gap-2">
//             Join Our Discord Server
//             <span className="text-lg">→</span>
//           </button>
//         </div>
//       </div>
//       <div className="w-1/2 pl-12">
//         <div className="bg-white/5 rounded-3xl w-full aspect-video"></div>
//       </div>
//     </div>
//   );
// };
//
// export default Community;

import React from 'react';
import mining from '../../assets/mining.jpg';

const Community = () => {
    return (
        <div className="py-16 px-8 flex justify-between items-center">
            <div className="w-2/5 pr-8 pl-10">
                <div className="max-w-lg">
                    <p className="text-blue-500 mb-2">Join Our</p>
                    <h2 className="text-3xl font-bold text-white mb-4">Incredible Community</h2>
                    <p className="text-gray-400 mb-6">
                        Stay connected on the the latest developments in the DePIN Space. With channels for each project, token discussions, and real insights shared with friends, you won't find a better spot. Ready to join the chat?
                    </p>
                    <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 inline-flex items-center gap-2">
                        Join Our Discord Server
                        <span className="text-lg">→</span>
                    </button>
                </div>
            </div>
            <div className="w-1/2">
                <div className="rounded-3xl w-full aspect-video">
                    <img src={mining} className="rounded-3xl w-full pr-10 aspect-video" />
                </div>
            </div>
        </div>
    );
};

export default Community;
