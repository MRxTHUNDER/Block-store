import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  return (
    <div className="py-16 px-8">
      <h2 className="text-3xl font-bold text-white mb-12 text-center">Hear From Our Customers</h2>
      <div className="grid grid-cols-2 gap-8">
        {[1, 2, 3, 4].map((item) => (
          <div key={item} className="bg-gray-800/50 rounded-xl p-6">
            <div className="flex gap-1 mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="fill-yellow-500 text-yellow-500" size={20} />
              ))}
            </div>
            <p className="text-gray-400 mb-4">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
            </p>
            <div className="flex items-center gap-3">
              <img src="https://via.placeholder.com/40" alt="Avatar" className="rounded-full" />
              <div>
                <p className="text-white font-semibold">John Doe</p>
                <p className="text-gray-400 text-sm">Verified Customer</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;