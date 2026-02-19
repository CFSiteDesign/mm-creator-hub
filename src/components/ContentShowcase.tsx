import React, { useRef } from 'react';

const creators = [
  {
    handle: '@bella.creates',
    platform: 'TikTok',
    niche: 'Lifestyle & Travel',
    followers: '420K',
    earned: '$12,400',
    img: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
  },
  {
    handle: '@jakefoodtalk',
    platform: 'YouTube',
    niche: 'Food & Culture',
    followers: '890K',
    earned: '$28,000',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
  },
  {
    handle: '@nina.beauty',
    platform: 'Instagram',
    niche: 'Beauty & Skincare',
    followers: '210K',
    earned: '$8,200',
    img: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=400&fit=crop&crop=face',
  },
  {
    handle: '@techwithtom',
    platform: 'YouTube',
    niche: 'Tech Reviews',
    followers: '650K',
    earned: '$22,500',
    img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
  },
  {
    handle: '@mia.fitness',
    platform: 'TikTok',
    niche: 'Fitness & Health',
    followers: '1.2M',
    earned: '$45,000',
    img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
  },
  {
    handle: '@streetstyle.sg',
    platform: 'Instagram',
    niche: 'Fashion & Style',
    followers: '380K',
    earned: '$16,800',
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
  },
];

export const ContentShowcase: React.FC = () => {
  return (
    <section id="showcase" className="py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center">
          <span className="text-primary font-black uppercase tracking-widest text-sm">Our Creators</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-foreground mt-2">
            Real People. Real Results.
          </h2>
          <p className="text-muted-foreground mt-4 text-lg max-w-xl mx-auto">
            These creators joined the hub and never looked back.
          </p>
        </div>
      </div>

      {/* Scrolling cards */}
      <div className="relative">
        <div className="flex gap-4 animate-marquee w-max px-4">
          {[...creators, ...creators].map((creator, i) => (
            <div
              key={i}
              className="w-64 flex-shrink-0 bg-muted rounded-2xl overflow-hidden border-2 border-border hover:border-primary transition-all group"
            >
              <div className="relative">
                <img
                  src={creator.img}
                  alt={creator.handle}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-3 right-3 bg-foreground text-background text-xs font-bold px-2 py-1 rounded-full">
                  {creator.platform}
                </div>
              </div>
              <div className="p-4">
                <div className="font-black text-foreground text-sm mb-1">{creator.handle}</div>
                <div className="text-muted-foreground text-xs mb-3">{creator.niche}</div>
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-xs text-muted-foreground">Followers</div>
                    <div className="font-black text-foreground">{creator.followers}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-muted-foreground">Earned</div>
                    <div className="font-black text-primary">{creator.earned}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
