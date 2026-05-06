import React from 'react';
import iconTakeover from '@/assets/icon-takeover.png';

interface TakeoverProps {
  onApply: () => void;
}

export const Takeover: React.FC<TakeoverProps> = ({ onApply }) => {
  return (
    <section className="px-6 py-16 bg-white">
      <div className="max-w-5xl mx-auto bg-black rounded-[2.5rem] overflow-hidden relative p-10 md:p-16 text-center">
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            background:
              'radial-gradient(circle at 20% 20%, #FF6A00 0%, transparent 50%), radial-gradient(circle at 80% 80%, #E066FF 0%, transparent 50%)',
          }}
        />
        <div className="relative z-10 flex flex-col items-center gap-6">
          <img src={iconTakeover} alt="Takeover" className="w-20 h-20 object-contain" loading="lazy" width={512} height={512} />
          <h2 className="text-4xl md:text-6xl font-black text-white">
            Take it to the next level <span className="text-[#FF6A00]">&amp; Takeover.</span>
          </h2>
          <p className="text-base md:text-lg text-white/80 max-w-2xl font-medium">
            Ever wanted to host your own group trip but had no idea where to start? Want to turn your following into a real community?
          </p>
          <p className="text-base md:text-lg max-w-2xl font-bold text-[#E2FF00]">
            The only creator travel platform where you keep the profit — because we own the hostels and tours. No middlemen.
          </p>
          <button
            onClick={onApply}
            className="bg-[#FF6A00] text-white px-12 py-4 rounded-full font-black text-sm uppercase tracking-widest shadow-xl hover:scale-105 transition-transform"
          >
            Apply Here
          </button>
        </div>
      </div>
    </section>
  );
};
