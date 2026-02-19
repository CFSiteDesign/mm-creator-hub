import React from 'react';
import heroBanner from '@/assets/hero-banner.jpg';

interface HeroProps {
  onApply: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onApply }) => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-foreground">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBanner}
          alt="Mad Monkey Creator Hub"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-foreground" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 text-center">
        <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 text-primary px-4 py-2 rounded-full text-sm font-bold mb-8 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          NOW RECRUITING — LIMITED SPOTS
        </div>

        <h1 className="text-5xl sm:text-7xl md:text-8xl font-black text-background leading-none tracking-tighter mb-6">
          CREATE.
          <br />
          <span className="text-primary">EARN.</span>
          <br />
          DOMINATE.
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-background/70 font-medium max-w-2xl mx-auto mb-10 leading-relaxed">
          Join the <strong className="text-primary">Mad Monkey Creator Hub</strong> — where top creators across Southeast Asia turn content into cash, community, and culture.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button
            onClick={onApply}
            className="w-full sm:w-auto px-10 py-4 bg-primary text-primary-foreground font-black text-lg rounded-full hover:bg-lime-dark transition-all hover:scale-105 shadow-[0_0_40px_hsl(65_100%_50%/0.4)]"
          >
            Apply to Join →
          </button>
          <a
            href="#how-it-works"
            className="w-full sm:w-auto px-10 py-4 border-2 border-background/30 text-background font-bold text-lg rounded-full hover:border-primary hover:text-primary transition-all text-center"
          >
            See How It Works
          </a>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
          {[
            { value: '500+', label: 'Creators' },
            { value: '10M+', label: 'Reach' },
            { value: '$2M+', label: 'Paid Out' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl sm:text-4xl font-black text-primary">{stat.value}</div>
              <div className="text-background/60 text-sm font-semibold uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-background/40">
        <span className="text-xs font-semibold uppercase tracking-widest">Scroll</span>
        <div className="w-px h-8 bg-background/20" />
      </div>
    </section>
  );
};
