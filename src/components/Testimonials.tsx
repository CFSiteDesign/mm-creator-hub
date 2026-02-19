
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
    name: 'Teresa Mestre',
    handle: '@temestre',
    stats: '1.8K followers | Content Creator',
    avatar: 'https://picsum.photos/seed/teresa/150/150',
    quote: "The Creator Hub let me travel Southeast Asia through a free creative exchange, surrounded by great people and unforgettable energy. It pushed me to try things I'd never done before and made long-term travel feel easy and exciting!"
  },
  {
    name: 'Nadine Schoeller',
    handle: '@nadineschoeller',
    stats: '703 followers | Content Creator',
    avatar: testimonial1,
    quote: 'Mad Monkey made it possible to level up my videography while travelling on a budget. A free stay let me explore new places, try new things, and meet amazing people that turned into lifetime friends.'
  },
  {
    name: 'Thea Rizaldo',
    handle: '@thearizaldo',
    stats: '92.2K followers | Travel & Lifestyle Vlogger',
    avatar: testimonial2,
    quote: "I loved collaborating with Mad Monkey during my Bali trip! Mad Monkey Uluwatu was an absolute dream. I stayed for free in exchange for content, but it honestly didn't feel like work at all. From the beautiful hostel to the fun nightly events, it was a truly memorable Mad Monkey experience! IYKYK"
  },
  {
    name: 'Kayla Martinez',
    handle: '@kaylabea',
    stats: '3.9K followers | Content Creator',
    avatar: testimonial3,
    quote: "Traveling through Southeast Asia with Mad Monkey was such an unreal experience—especially getting to try new things while staying in free private rooms through content exchanges. The staff were always so kind and welcoming, and the spaces were gorgeous every single time. If you're a creator who loves to explore, their creator program is seriously unmatched! ✨🏝️"
  },
  {
    name: 'Scruff Brothers',
    handle: '@scruff_brotherss',
    stats: '171K followers | Content Creator',
    avatar: testimonial4,
    quote: "Top notch experience at the Creator Hub programme, honestly buzzing. Couldn't believe the exchange was completely sorted for free and we tried so much new stuff, can't argue with that!"
  },
  {
    name: 'Jim Jimenez',
    handle: '@jimjimenez',
    stats: '6.6K followers | Content Creator & Creative Director',
    avatar: 'https://picsum.photos/seed/jimjimenez/150/150',
    quote: "I had an amazing time staying with Mad Monkey across ALL of Southeast Asia—everything from the amenities to the staff was top tier! Being able to exchange content for a free private stay while trying new experiences made it one of my favorite collaborations ever. If you're a creator and love to travel, Mad Monkey has the best creator program for you!"
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
            <h4 className="font-black text-lg">{t.name}</h4>
            <p className="text-pink-500 font-bold text-[10px] uppercase tracking-tighter mb-1">{t.handle} | {t.stats}</p>
            <p className="text-gray-600 text-[11px] leading-relaxed line-clamp-[10] mt-4">
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
