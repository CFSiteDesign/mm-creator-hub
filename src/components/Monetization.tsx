
import React from 'react';
import monetizationLightning from '@/assets/monetization-lightning.png';

interface MonetizationProps {
  onApply: () => void;
}

const MONETIZE_CARDS = [
  {
    title: 'Custom Links',
    highlight: "You'll get paid commission when someone you send us makes a booking on our website",
    desc: 'Create custom links for destination pages, tours and experiences that you want to highlight!',
    bg: 'bg-pink-100',
    mockup: 'https://picsum.photos/seed/mock1/300/600'
  },
  {
    title: 'Creator News',
    highlight: 'Know which hostels are trending and which spots are about to blow up',
    desc: 'We will send the tea straight to your inbox each month. Time your content perfectly to hit the peak booking wave.',
    bg: 'bg-lime-50',
    mockup: 'https://picsum.photos/seed/mock2/300/600'
  },
  {
    title: 'Inside Access',
    highlight: 'Get first dibs on new openings, revamped tours, and secret Hub updates',
    desc: 'Feature the latest locations before they hit the mainstream.',
    bg: 'bg-indigo-50',
    mockup: 'https://picsum.photos/seed/mock3/300/600'
  }
];

export const Monetization: React.FC<MonetizationProps> = ({ onApply }) => {
  return (
    <section className="px-6 py-24 bg-white">
      <div className="max-w-7xl mx-auto text-center space-y-8">
        <h2 className="text-4xl md:text-5xl font-black">Ways to monetise your content</h2>
        
        <button 
          onClick={onApply}
          className="bg-[#E2FF00] text-black px-10 py-3 rounded-md font-black text-xs uppercase tracking-widest shadow-md hover:scale-105 transition-transform"
        >
          APPLY NOW
        </button>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-left">
          {MONETIZE_CARDS.map((card, idx) => (
            <div key={idx} className={`${card.bg} rounded-[2rem] p-8 flex flex-col items-center space-y-6 overflow-hidden relative border border-gray-50`}>
              <div className="text-center space-y-4">
                <h3 className="text-xl font-black">{card.title}</h3>
                <p className="text-pink-500 font-bold text-xs leading-relaxed">{card.highlight}</p>
                <p className="text-gray-500 text-xs leading-relaxed">{card.desc}</p>
              </div>
              
              <div className="w-full max-w-[200px] mt-4 relative">
                <div className="bg-black rounded-[2rem] p-2 aspect-[9/18] shadow-2xl overflow-hidden">
                  <img src={card.mockup} alt="App Mockup" className="w-full h-full object-cover rounded-[1.8rem]" />
                </div>
                {idx === 2 && (
                  <div className="absolute -top-6 -right-6 z-20">
                    <img src={monetizationLightning} alt="Lightning" className="w-14 h-14" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
