import React from 'react';

interface MonetizationProps {
  onApply: () => void;
}

const streams = [
  { icon: '🤝', name: 'Brand Deals', desc: 'Exclusive partnerships with top brands in beauty, lifestyle, tech, food & travel.' },
  { icon: '🔗', name: 'Affiliate Marketing', desc: 'Earn commissions on every sale you drive. High-ticket products, high commissions.' },
  { icon: '🎁', name: 'Content Bonuses', desc: 'Hit milestones and unlock bonus payouts. The more you create, the more you earn.' },
  { icon: '📦', name: 'Product Seeding', desc: 'Get free products to review and keep — plus payment on top.' },
  { icon: '🎤', name: 'Event Appearances', desc: 'Get paid to show up. Brand events, product launches, and festivals.' },
  { icon: '💳', name: 'Revenue Share', desc: 'Earn a cut of revenue from your community and referrals. Passive income built in.' },
];

export const Monetization: React.FC<MonetizationProps> = ({ onApply }) => {
  return (
    <section id="monetization" className="py-24 bg-wavy-lime">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="font-black uppercase tracking-widest text-sm text-primary-foreground/60">Money Talks</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-primary-foreground mt-2 leading-tight">
            6 Ways to Get Paid.
          </h2>
          <p className="text-primary-foreground/70 mt-4 text-lg max-w-xl mx-auto font-medium">
            Our creators don't rely on one income stream — they stack them.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {streams.map((stream, i) => (
            <div
              key={i}
              className="p-6 bg-primary-foreground/10 border-2 border-primary-foreground/20 rounded-2xl hover:bg-primary-foreground/20 transition-all group backdrop-blur-sm"
            >
              <div className="text-3xl mb-3">{stream.icon}</div>
              <h3 className="text-lg font-black text-primary-foreground mb-2">{stream.name}</h3>
              <p className="text-primary-foreground/70 text-sm leading-relaxed">{stream.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={onApply}
            className="px-10 py-4 bg-primary-foreground text-primary font-black text-lg rounded-full hover:opacity-90 transition-all hover:scale-105 shadow-lg"
          >
            Start Earning Today →
          </button>
        </div>
      </div>
    </section>
  );
};
