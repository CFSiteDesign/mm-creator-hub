
import React, { useRef, useCallback } from 'react';
import reel1 from '@/assets/reel-1.mp4';
import reel2 from '@/assets/reel-2.mp4';
import reel3 from '@/assets/reel-3.mp4';

interface ReelItem {
  src: string;
  trimEnd: number;
}

const REELS: ReelItem[] = [
  { src: reel1, trimEnd: 3.5 },
  { src: reel2, trimEnd: 6.6 },
  { src: reel3, trimEnd: 3.5 },
];

const ReelCard: React.FC<ReelItem> = ({ src, trimEnd }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleTimeUpdate = useCallback(() => {
    const video = videoRef.current;
    if (!video || !video.duration) return;
    if (video.currentTime >= video.duration - trimEnd) {
      video.currentTime = 0;
    }
  }, [trimEnd]);

  return (
    <div className="flex-shrink-0 w-64 md:w-72 snap-center">
      <div className="rounded-3xl overflow-hidden shadow-lg aspect-[9/16] bg-black">
        <video
          ref={videoRef}
          src={src}
          autoPlay
          muted
          playsInline
          preload="auto"
          onTimeUpdate={handleTimeUpdate}
          className="w-full h-full object-cover"
          style={{ backgroundColor: 'black' }}
        />
      </div>
    </div>
  );
};

export const ContentShowcase: React.FC = () => {
  return (
    <section className="py-16 md:pb-28 bg-white overflow-hidden">
      <h2 className="text-4xl md:text-5xl font-black text-center mb-16 px-6">Content we'd actually watch</h2>
      
      <div className="flex gap-4 overflow-x-auto px-6 no-scrollbar snap-x snap-mandatory justify-center">
        {REELS.map((reel, idx) => (
          <ReelCard key={idx} {...reel} />
        ))}
      </div>
    </section>
  );
};
