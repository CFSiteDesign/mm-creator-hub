
import React from 'react';

const FEATURE_ITEMS = [
  {
    icon: '💰',
    title: 'Passive Income',
    subtitle: "We don't just give you a bed; we give you a business.",
    desc: 'Get a custom affiliate link to share with your community. Every time they book using your link, you get a cut. No caps, no limits.'
  },
  {
    icon: '🏠',
    title: 'Free Stays & Perks',
    subtitle: 'From Bali to Bangkok, our hostels are your home.',
    desc: 'Get 100% free accommodation, daily drink and food allowances, and "all-access" passes to the Mad Monkey experience.'
  },
  {
    icon: '📸',
    title: 'Content that Converts',
    subtitle: 'We provide the backdrop; you provide the lens.',
    desc: 'Access our most iconic tours (boat parties, pub crawls, etc.) for free to help you capture the heat.'
  }
];

export const Features: React.FC = () => {
  return (
    <section className="px-6 py-20 bg-white text-center md:px-12 max-w-7xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-black mb-16">Why Collab <br className="md:hidden" /> With us?</h2>
      
      <div className="relative mb-20 max-w-5xl mx-auto">
         <img 
            src="https://images.unsplash.com/photo-1512100356956-c1227c324155?q=80&w=1200&auto=format&fit=crop" 
            alt="Collaborator" 
            className="w-full rounded-[2.5rem] shadow-2xl aspect-video object-cover"
         />
         {/* Floating Icons from Figma */}
         <div className="absolute -top-6 -right-4 bg-purple-400 p-4 rounded-2xl shadow-lg rotate-12">
           <span className="text-3xl">⚡️</span>
         </div>
         <div className="absolute -bottom-6 -left-4 bg-pink-400 p-4 rounded-2xl shadow-lg -rotate-12">
           <span className="text-3xl">❤️</span>
         </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {FEATURE_ITEMS.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center space-y-4">
            <div className="w-14 h-14 bg-[#E2FF00] rounded-2xl flex items-center justify-center text-2xl shadow-md">
              {item.icon}
            </div>
            <h3 className="text-xl font-black">{item.title}</h3>
            <p className="text-pink-500 font-bold text-sm px-4 leading-tight">{item.subtitle}</p>
            <p className="text-gray-500 text-sm leading-relaxed px-2">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
