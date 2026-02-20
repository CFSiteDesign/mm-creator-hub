
import React, { useRef } from 'react';
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

const ReelCard: React.FC<ReelItem> = ({ src, startAtHalf }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const hasSeekRef = useRef(false);

  const handleMetadata = () => {
    const video = videoRef.current;
    if (!video) return;
    if (startAtHalf && !hasSeekRef.current && video.duration) {
      video.currentTime = video.duration / 2;
      hasSeekRef.current = true;
    }
  };

  // Manual loop to avoid white flash on native loop
  const handleEnded = () => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = startAtHalf ? video.duration / 2 : 0;
    video.play();
  };

  return (
    <div className="flex-shrink-0 w-64 md:w-72 snap-center">
      <div className="bg-gray-100 rounded-3xl overflow-hidden shadow-lg aspect-[9/16]">
        <video
          ref={videoRef}
          src={src}
          autoPlay
          muted
          playsInline
          onLoadedMetadata={handleMetadata}
          onCanPlay={handleMetadata}
          onEnded={handleEnded}
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
