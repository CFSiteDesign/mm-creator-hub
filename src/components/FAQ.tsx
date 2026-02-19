import React, { useState } from 'react';

const faqs = [
  {
    q: 'Who can apply to the Mad Monkey Creator Hub?',
    a: "Anyone creating content on TikTok, Instagram, YouTube, Facebook, or any major platform. We consider all niches and follower counts — we look for quality over quantity. Micro-creators (5K+ followers) are absolutely welcome.",
  },
  {
    q: 'Is there a fee to join?',
    a: 'Zero. Joining the Mad Monkey Creator Hub is completely free. We make money when you make money through brand deal commissions — so our incentives are perfectly aligned with yours.',
  },
  {
    q: 'How quickly can I start earning?',
    a: "Most creators receive their first brand deal opportunity within 1-2 weeks of being accepted. Some creators land their first deal within days. It depends on your niche, content quality, and current brand campaign availability.",
  },
  {
    q: 'What countries do you operate in?',
    a: 'We currently operate across Southeast Asia including Thailand, Indonesia, Vietnam, Philippines, Malaysia, and Singapore. We are expanding into other markets in 2025.',
  },
  {
    q: 'Do I need to post exclusively for Mad Monkey brands?',
    a: "No. You keep full creative freedom and can work with other brands independently. We simply provide additional opportunities on top of what you already do. However, some campaigns may require exclusivity for specific periods.",
  },
  {
    q: 'How does payment work?',
    a: 'Payments are made monthly via bank transfer, PayPal, or local payment apps. You receive a detailed breakdown of earnings from each brand deal, affiliate commission, and bonus through your creator dashboard.',
  },
  {
    q: "What if I'm just starting out?",
    a: "We love early-stage creators with potential! If you have fewer followers but exceptional content quality or a highly engaged niche audience, we encourage you to apply. Our Creator Academy is designed to help early-stage creators grow fast.",
  },
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary font-black uppercase tracking-widest text-sm">Got Questions?</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-foreground mt-2">
            We've Got Answers.
          </h2>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border-2 border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-bold text-foreground text-base sm:text-lg pr-4">{faq.q}</span>
                <span className={`text-primary text-2xl font-black transition-transform flex-shrink-0 ${openIndex === i ? 'rotate-45' : ''}`}>
                  +
                </span>
              </button>

              {openIndex === i && (
                <div className="px-6 pb-6">
                  <div className="w-full h-px bg-border mb-4" />
                  <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
