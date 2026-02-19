import React from 'react';

const steps = [
  {
    num: '01',
    title: 'Apply Online',
    desc: 'Fill out our quick application form. Tell us about your niche, platform, and audience. Takes less than 5 minutes.',
    detail: 'Open to all platforms: TikTok, Instagram, YouTube, Facebook & more.',
  },
  {
    num: '02',
    title: 'Get Vetted',
    desc: "Our team reviews your content and profile within 48 hours. We look for authenticity and potential — not just follower count.",
    detail: 'Micro-creators welcome! We love finding hidden gems.',
  },
  {
    num: '03',
    title: 'Onboard & Level Up',
    desc: 'Get your creator dashboard, welcome kit, and first brand matching within your first week.',
    detail: 'Access the community, resources, and deal pipeline immediately.',
  },
  {
    num: '04',
    title: 'Create & Earn',
    desc: 'Start creating content, landing deals, and watching your income grow alongside your audience.',
    detail: 'Average creator earns 3x more in their first 90 days.',
  },
];

export const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 bg-wavy-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary font-black uppercase tracking-widest text-sm">The Process</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-background mt-2 leading-tight">
            How It Works
          </h2>
          <p className="text-background/60 mt-4 text-lg max-w-xl mx-auto">
            From application to first paycheck — here's the journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {steps.map((step, i) => (
            <div
              key={i}
              className="relative p-8 rounded-2xl border border-border/20 bg-secondary/50 hover:border-primary/40 transition-all group"
            >
              <div className="text-7xl font-black text-primary/20 absolute top-4 right-6 select-none">
                {step.num}
              </div>
              <div className="relative z-10">
                <div className="text-primary font-black text-sm uppercase tracking-widest mb-2">Step {step.num}</div>
                <h3 className="text-2xl font-black text-background mb-3">{step.title}</h3>
                <p className="text-background/70 leading-relaxed mb-4">{step.desc}</p>
                <div className="flex items-center gap-2 text-sm text-primary font-semibold">
                  <span>✓</span>
                  <span>{step.detail}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
