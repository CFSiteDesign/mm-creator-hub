
import React, { useState } from 'react';

const FAQ_ITEMS = [
  {
    q: "I'm a micro-influencer. Am I too small?",
    a: "Size doesn't always matter—engagement does. If your 2,000 followers are obsessed with your travel tips, we want you."
  },
  {
    q: "Who are we looking for?",
    a: "CreatorHub is all about creativity. If you're a content creator, photographer, videographer, DJ, or anything in between, we'd love to hear from you. Apply and we'll review your application."
  },
  {
    q: "Do I have to be a party animal?",
    a: "You have to love the social vibe, but you don't have to go 100% every night. We just want you to capture the spirit of the community."
  },
  {
    q: "Can I bring a +1?",
    a: "Yes. But unless your guest is a content creator and part of Creator Hub, a standard fee will apply."
  },
  {
    q: "How do I track my earnings?",
    a: "Simple! We've created a tracker for you. Once you are given your discount code and Unique ID number you can track all your bookings and revenue earned each month. <a href='https://madmonkeyhostels.com/creatorhub/revenue/admin' target='_blank' rel='noopener noreferrer' class='text-purple-600 underline hover:text-purple-800'>Mad Monkey Creator Dashboard – Track Your Commission</a>."
  },
  {
    q: "I've applied! What's next?",
    a: "Get ready to pack your bags (or your digital toolkit). Here is the roadmap:<br/><br/><b>If you're joining us as a Hosted Creator:</b><br/>1. <b>Review:</b> Our (human) team reviews your style, content, and overall vibe.<br/>2. <b>Approval:</b> If successful, you'll receive your own personal promo code.<br/>3. <b>The Intro:</b> Our community team welcomes you into the CreatorHub.<br/>4. <b>Planning:</b> We'll lock in your stay dates and align on the content we're looking for.<br/>5. <b>The Legacy:</b> Get access to Creator news, stay in the loop with Mad Monkey, and keep earning long after your stay."
  }
];

export const FAQ: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(4);

  return (
    <section className="px-6 py-16 bg-white relative overflow-hidden">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-16">Your Questions <br /> Answered</h2>
        
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, idx) => (
            <div key={idx} className="border-b border-gray-100 pb-4">
              <button 
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full flex items-center justify-between text-left py-4 group"
              >
                <span className="text-lg font-bold group-hover:text-purple-600 transition-colors">{item.q}</span>
                <span className={`text-purple-400 text-xl transform transition-transform ${openIdx === idx ? 'rotate-180' : ''}`}>
                  {openIdx === idx ? '▲' : '▼'}
                </span>
              </button>
              {openIdx === idx && (
                <div 
                  className="text-gray-500 text-sm leading-relaxed py-2 animate-fadeIn"
                  dangerouslySetInnerHTML={{ __html: item.a }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
      {/* Pink blob in background */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-100 rounded-full blur-[100px] -z-10 opacity-60" />
    </section>
  );
};
