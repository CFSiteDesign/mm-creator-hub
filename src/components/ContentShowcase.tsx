
import React from 'react';
import reel1 from '@/assets/reel-1.mp4';
import reel2 from '@/assets/reel-2.mp4';
import reel3 from '@/assets/reel-3.mp4';

interface ReelItem {
  src: string;
  startAtHalf: boolean;
}

const REELS: ReelItem[] = [
  { src: reel1, startAtHalf: false },
  { src: reel2, startAtHalf: false },
  { src: reel3, startAtHalf: false },
];

const ReelCard: React.FC<ReelItem> = ({ src }) => {
  return (
    <div className="flex-shrink-0 w-64 md:w-72 snap-center">
      <div className="rounded-3xl overflow-hidden shadow-lg aspect-[9/16] bg-black">
        <video
          src={src}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
          style={{ backgroundColor: 'black' }}
        />
      </div>
    </div>
  );
};

export const ContentShowcase: React.FC = () => {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <h2 className="text-4xl md:text-5xl font-black text-center mb-16 px-6">Content we'd actually watch</h2>
      
      <div className="flex gap-4 overflow-x-auto px-6 no-scrollbar snap-x snap-mandatory">
        {REELS.map((reel, idx) => (
          <ReelCard key={idx} {...reel} />
        ))}
      </div>
    </section>
  );
};
