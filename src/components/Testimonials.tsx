import React from 'react';

interface TestimonialsProps {
  onApply: () => void;
}

const testimonials = [
  {
    quote: "I went from 50K followers with zero brand deals to $8K/month in just 3 months. Mad Monkey changed everything.",
    name: "Priya S.",
    handle: "@priyalifestyle",
    platform: "Instagram",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
  },
  {
    quote: "The brand matching is insane. They connected me with 4 brands in my first week — all actually relevant to my audience.",
    name: "Marcus T.",
    handle: "@marcustechtalk",
    platform: "YouTube",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
  },
  {
    quote: "I was skeptical, but the Creator Academy workshops alone are worth it. I learned more in a month than in 2 years of solo creating.",
    name: "Aisha N.",
    handle: "@aisha.creates",
    platform: "TikTok",
    avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&h=100&fit=crop&crop=face",
  },
  {
    quote: "The community is fire. Real creators helping each other grow — not the fake guru BS you see everywhere else.",
    name: "Leo K.",
    handle: "@leokontent",
    platform: "TikTok",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
  },
  {
    quote: "Went from 0 to $22K in my first 6 months. The affiliate program alone covers my rent. Best decision I made.",
    name: "Sofia R.",
    handle: "@sofiabeautyth",
    platform: "Instagram",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
  },
  {
    quote: "Mad Monkey treats creators like actual business partners, not just influencers. That respect makes all the difference.",
    name: "Danny W.",
    handle: "@dannystreet",
    platform: "YouTube",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
  },
];

export const Testimonials: React.FC<TestimonialsProps> = ({ onApply }) => {
  return (
    <section className="py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary font-black uppercase tracking-widest text-sm">Creator Stories</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-foreground mt-2">
            Don't Take Our Word.
            <br />
            <span className="text-primary">Take Theirs.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-background p-6 rounded-2xl border-2 border-border hover:border-primary transition-all group"
            >
              <div className="text-3xl mb-4 text-primary">"</div>
              <p className="text-foreground leading-relaxed mb-6 font-medium">{t.quote}</p>
              <div className="flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-primary"
                />
                <div>
                  <div className="font-black text-foreground text-sm">{t.name}</div>
                  <div className="text-muted-foreground text-xs">{t.handle} · {t.platform}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={onApply}
            className="px-10 py-4 bg-primary text-primary-foreground font-black text-lg rounded-full hover:bg-lime-dark transition-all hover:scale-105"
          >
            Write Your Own Success Story →
          </button>
        </div>
      </div>
    </section>
  );
};
