
import React, { useEffect, useRef } from 'react';
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
  { src: reel1, startAtHalf: true },
  { src: reel2, startAtHalf: true },
  { src: reel3, startAtHalf: true },
];

const ReelCard: React.FC<ReelItem> = ({ src, startAtHalf }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoaded = () => {
      if (startAtHalf && video.duration) {
        video.currentTime = video.duration / 2;
      }
    };

    if (video.readyState >= 1) {
      handleLoaded();
    } else {
      video.addEventListener('loadedmetadata', handleLoaded);
      return () => video.removeEventListener('loadedmetadata', handleLoaded);
    }
  }, [startAtHalf]);

  return (
    <div className="flex-shrink-0 w-64 md:w-72 snap-center">
      <div className="bg-gray-100 rounded-3xl overflow-hidden shadow-lg aspect-[9/16]">
        <video
          ref={videoRef}
          src={src}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
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
