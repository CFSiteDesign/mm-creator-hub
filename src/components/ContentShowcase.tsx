
import React from 'react';

const REELS = [
  'https://picsum.photos/seed/r1/400/700',
  'https://picsum.photos/seed/r2/400/700',
  'https://picsum.photos/seed/r3/400/700',
  'https://picsum.photos/seed/r4/400/700',
  'https://picsum.photos/seed/r5/400/700'
];

export const ContentShowcase: React.FC = () => {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <h2 className="text-4xl md:text-5xl font-black text-center mb-16 px-6">Content we'd actually watch</h2>
      
      <div className="flex gap-4 overflow-x-auto px-6 no-scrollbar snap-x snap-mandatory">
        {REELS.map((img, idx) => (
          <div key={idx} className="flex-shrink-0 w-64 md:w-80 snap-center">
            <div className="bg-gray-100 rounded-3xl overflow-hidden shadow-lg aspect-[9/16]">
              <img src={img} alt="Reel Content" className="w-full h-full object-cover" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
