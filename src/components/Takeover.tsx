import React from 'react';

interface TakeoverProps {
  onApply: () => void;
}

export const Takeover: React.FC<TakeoverProps> = ({ onApply }) => {
  return (
    <section className="px-6 py-16 bg-white">
      <div className="max-w-6xl mx-auto bg-[#E2FF00] rounded-[3.5rem] md:rounded-[5rem] overflow-hidden relative p-10 md:p-16">
        {/* Pink corner gradients (kept inside to avoid hard clip on blur) */}
        <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-[#E066FF] opacity-60 blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-72 h-72 rounded-full bg-[#E066FF] opacity-60 blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col items-start gap-6 text-left">
          <h2 className="text-4xl md:text-6xl font-black text-black leading-[1.05]">
            Take it to the next level{' '}
            <span className="bg-black text-[#E2FF00] px-3 inline-block -skew-x-6">&amp; Takeover.</span>
          </h2>

          <p className="text-base md:text-lg text-black max-w-2xl font-bold">
            Ever wanted to host your own group trip but had no idea where to start? Want to turn your following into a real community?
          </p>

          <p className="text-base md:text-lg max-w-2xl font-black bg-black text-white px-4 py-3 rounded-xl">
            The only creator travel platform where you keep the profit — because we own the hostels and tours.{' '}
            <span className="text-[#E2FF00]">No middlemen.</span>
          </p>

          <button
            onClick={onApply}
            className="bg-black text-[#E2FF00] px-12 py-4 rounded-full font-black text-sm uppercase tracking-widest shadow-xl hover:scale-105 transition-transform"
          >
            Apply Here
          </button>
        </div>
      </div>
    </section>
  );
};
