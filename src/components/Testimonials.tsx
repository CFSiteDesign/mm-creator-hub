
import React from 'react';
import testimonialsBg from '@/assets/testimonials-bg.jpg';
import testimonial1 from '@/assets/testimonial-1.jpg';
import testimonial2 from '@/assets/testimonial-2.jpg';
import testimonial3 from '@/assets/testimonial-3.jpg';
import testimonial4 from '@/assets/testimonial-4.jpg';

interface TestimonialsProps {
  onApply: () => void;
}

const TESTIMONIALS = [
  {
    handle: '@nadineschoeller',
    stats: '8.3k followers | Travel Blogger',
    location: 'Mad Monkey Bangkok 🗼',
    avatar: testimonial1,
    quote: 'Mad Monkey made it possible to level up my videography while travelling on a budget. A free stay let me explore new places, try new things, and meet amazing people that turned into lifetime friends.'
  },
  {
    handle: '@thearizaldo',
    stats: '15k followers | Outdoor Enthusiast',
    location: 'Mad Monkey Uluwatu 🏄',
    avatar: testimonial2,
    quote: "I loved collaborating with Mad Monkey during my Bali trip! Mad Monkey Uluwatu was an absolute dream. I stayed for free in exchange for content, but it honestly didn't feel like work at all. From the beautiful hostel to the fun nightly events, it was a truly memorable Mad Monkey experience! IYKYK"
  },
  {
    handle: '@kaylabea',
    stats: '20k followers | Culinary Explorer',
    location: 'Mad Monkey Panglao 🏝️',
    avatar: testimonial3,
    quote: "Traveling through Southeast Asia with Mad Monkey was such an unreal experience—especially getting to try new things while staying in free private rooms through content exchanges. The staff were always so kind and welcoming, and the spaces were gorgeous every single time. If you're a creator who loves to explore, their creator program is seriously unmatched! ✨🏝️"
  },
  {
    handle: '@scruff_brotherss',
    stats: '20k followers | Culinary Explorer',
    location: 'Mad Monkey Panglao 🏝️',
    avatar: testimonial4,
    quote: "Top notch experience at the Creator Hub programme, honestly buzzing. Couldn't believe the exchange was completely sorted for free and we tried so much new stuff, can't argue with that!"
  }
];

export const Testimonials: React.FC<TestimonialsProps> = ({ onApply }) => {
  return (
    <section className="px-6 py-24 text-center">
      <div className="max-w-4xl mx-auto space-y-6 mb-16">
        <h2 className="text-4xl md:text-6xl font-black">Don't take <br />our word for it</h2>
        <p className="text-gray-700 font-bold text-sm leading-relaxed max-w-2xl mx-auto">
          We're biased, obviously. So we're letting our creator fam spill the tea on what it's actually like to live, work, and party at the Hub. No gatekeeping, just vibes.
        </p>
      </div>

      <div className="flex gap-6 overflow-x-auto pb-12 px-4 no-scrollbar snap-x snap-mandatory max-w-[100vw]">
        {TESTIMONIALS.map((t, idx) => (
          <div key={idx} className="flex-shrink-0 w-[300px] md:w-[350px] bg-white rounded-[2rem] p-8 snap-center shadow-lg border border-gray-100 flex flex-col items-center">
            <img src={t.avatar} alt={t.handle} className="w-20 h-20 rounded-full object-cover mb-4 border-2 border-lime-300" />
            <h4 className="font-black text-lg">{t.handle}</h4>
            <p className="text-pink-500 font-bold text-[10px] uppercase tracking-tighter mb-1">{t.stats}</p>
            <p className="text-gray-500 text-[10px] font-bold mb-6">{t.location}</p>
            <p className="text-gray-600 text-[11px] leading-relaxed line-clamp-[10]">
              {t.quote}
            </p>
          </div>
        ))}
      </div>

      <button 
        onClick={onApply}
        className="mt-8 bg-white text-pink-500 px-10 py-3 rounded-md font-black text-[10px] uppercase tracking-widest shadow-xl hover:scale-105 transition-transform"
      >
        APPLY NOW
      </button>
    </section>
  );
};
