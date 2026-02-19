import React from 'react';

const features = [
  {
    icon: '💰',
    title: 'Real Money, Real Fast',
    desc: 'Brand deals, affiliate programs, and content bonuses — multiple income streams all in one hub.',
  },
  {
    icon: '🚀',
    title: 'Turbo-Charge Your Growth',
    desc: 'Access exclusive strategies, collab opportunities, and platform boosts that non-members never see.',
  },
  {
    icon: '🎯',
    title: 'Brand Deal Matching',
    desc: "We connect you with brands that fit your niche and audience — you just create, we handle the pitch.",
  },
  {
    icon: '🎓',
    title: 'Creator Academy',
    desc: 'Workshops, masterclasses, and 1-on-1 coaching from creators who are already killing it.',
  },
  {
    icon: '🌏',
    title: 'SEA Network',
    desc: 'Join a tight-knit community of creators across Thailand, Indonesia, Vietnam, Philippines & more.',
  },
  {
    icon: '📊',
    title: 'Analytics Dashboard',
    desc: 'Track your performance, earnings, and growth in real-time with our creator-first dashboard.',
  },
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-black uppercase tracking-widest text-sm">Why Join?</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-foreground mt-2 leading-tight">
            Everything a Creator Needs.
            <br />
            <span className="text-primary">Nothing They Don't.</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div
              key={i}
              className="group p-8 border-2 border-border rounded-2xl hover:border-primary hover:shadow-[0_0_30px_hsl(65_100%_50%/0.15)] transition-all duration-300"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-black text-foreground mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
