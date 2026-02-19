
import React from 'react';
import monkeyBadge from '@/assets/monkey-badge.png';
import lightningBadge from '@/assets/lightning-badge.png';
import featuresMain from '@/assets/features-main.svg';

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
        {/* Faded green glow - left */}
        <div className="absolute -left-24 top-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-[#E2FF00] opacity-40 blur-[80px] -z-10" />
        {/* Faded pinky-purple glow - right */}
        <div className="absolute -right-24 top-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-[#E066FF] opacity-40 blur-[80px] -z-10" />

        <img 
          src={featuresMain}
          alt="Collaborator" 
          className="w-full rounded-[2.5rem] shadow-2xl aspect-video object-cover"
        />
        {/* Floating Icons */}
        <div className="absolute -top-5 -right-3 md:-top-8 md:-right-6">
          <img src={lightningBadge} alt="Lightning" className="w-10 h-10 md:w-16 md:h-16" />
        </div>
        <div className="absolute -bottom-5 -left-3 md:-bottom-8 md:-left-6">
          <img src={monkeyBadge} alt="Mad Monkey" className="w-14 h-14 md:w-20 md:h-20" />
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
