import React from 'react';

interface CTASectionProps {
  onApply: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onApply }) => {
  return (
    <section className="py-24 bg-foreground">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-bold mb-8">
          🔥 Limited Spots Available
        </div>

        <h2 className="text-4xl sm:text-6xl md:text-7xl font-black text-background leading-none tracking-tighter mb-6">
          Ready to Go
          <br />
          <span className="text-primary">Mad?</span>
        </h2>

        <p className="text-background/60 text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
          Join 500+ creators already building their empires with the Mad Monkey Creator Hub. Your first brand deal could be just weeks away.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onApply}
            className="px-12 py-5 bg-primary text-primary-foreground font-black text-xl rounded-full hover:bg-lime-dark transition-all hover:scale-105 shadow-[0_0_60px_hsl(65_100%_50%/0.3)]"
          >
            Apply Now — It's Free
          </button>
        </div>

        <p className="text-background/30 text-sm mt-6">
          No monthly fees. No hidden costs. Just results.
        </p>
      </div>
    </section>
  );
};
