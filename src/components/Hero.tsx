
import React from 'react';

interface HeroProps {
  onApply: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onApply }) => {
  return (
    <section className="relative px-6 pt-16 pb-24 md:px-12 md:pt-24 lg:flex lg:items-center lg:gap-12 lg:min-h-[80vh]">
      <div className="lg:w-1/2 space-y-6">
        <h1 className="text-5xl md:text-7xl font-semibold leading-[1.1] tracking-tight">
          The dream job, <br />
          <span className="text-black">Unlocked</span>
        </h1>
        <p className="text-pink-500 font-bold text-lg md:text-xl">
          Stop paying for travel. Start getting paid for it.
        </p>
        <p className="text-gray-600 text-base md:text-lg max-w-md leading-relaxed">
          Join the Mad Monkey Creator Hub. Earn commissions on every booking, score free stays at the world's best hostels, and turn your content into a career.
        </p>
        <button 
          onClick={onApply}
          className="bg-[#E2FF00] text-black px-8 py-4 rounded-full font-black text-sm uppercase tracking-widest shadow-xl hover:scale-105 transition-transform"
        >
          APPLY NOW
        </button>
      </div>

      <div className="mt-12 lg:mt-0 lg:w-1/2 relative flex justify-center lg:justify-end gap-4 md:gap-8">
        {/* Phone Mockups */}
        <div className="w-[180px] md:w-[240px] transform -rotate-6">
          <div className="bg-black rounded-[2.5rem] p-3 shadow-2xl aspect-[9/19] relative">
            <div className="absolute inset-3 rounded-[2rem] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1530789253388-582c481c54b0?q=80&w=800&auto=format&fit=crop" 
                alt="Travel Content" 
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
        <div className="w-[180px] md:w-[240px] transform rotate-6 translate-y-8">
          <div className="bg-black rounded-[2.5rem] p-3 shadow-2xl aspect-[9/19] relative">
            <div className="absolute inset-3 rounded-[2rem] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?q=80&w=800&auto=format&fit=crop" 
                alt="Travel Content" 
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
        
        {/* Glow effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-radial from-lime-200/40 to-transparent blur-3xl -z-10" />
      </div>
    </section>
  );
};
