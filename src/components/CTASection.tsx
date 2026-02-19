
import React from 'react';

interface CTAProps {
  onApply: () => void;
}

export const CTASection: React.FC<CTAProps> = ({ onApply }) => {
  return (
    <section className="px-6 py-20 bg-background">
      <div className="max-w-6xl mx-auto bg-foreground rounded-[2.5rem] overflow-hidden relative shadow-2xl">
        <img 
          src="https://picsum.photos/seed/bali-falls/1600/900" 
          alt="Waterfall Background" 
          className="w-full h-[400px] md:h-[600px] object-cover opacity-80"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 text-background">
          <h2 className="text-3xl md:text-6xl font-black mb-4 drop-shadow-lg text-primary">Ready to secure the bag?</h2>
          <p className="text-lg md:text-xl font-bold mb-8">Applications take 2 minutes. We reply in 48 hours.</p>
          <button 
            onClick={onApply}
            className="bg-primary text-primary-foreground px-12 py-4 rounded-full font-black text-sm uppercase tracking-widest shadow-xl hover:scale-105 transition-transform"
          >
            APPLY NOW
          </button>
        </div>
      </div>
    </section>
  );
};
