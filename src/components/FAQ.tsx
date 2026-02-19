
import React, { useState } from 'react';

const FAQ_ITEMS = [
  {
    q: "I'm a micro-influencer. Am I too small?",
    a: "Absolutely not! We look for engagement and quality over just raw follower count. If your audience listens to you and your content aesthetic matches our brand, we want to hear from you."
  },
  {
    q: "Is it just free beds + tours?",
    a: "It's way more. You get a dedicated affiliate portal to track bookings you drive, monthly creator newsletters with inside tips, and a community of like-minded travelers. The free stays are just the starting point."
  },
  {
    q: "Do I have to be a party animal?",
    a: "Mad Monkey is known for its social vibe, but we welcome all types of creators! Whether you're a foodie, an adventurer, or a digital nomad focusing on the 'work' side of the lifestyle, there's a place for you."
  },
  {
    q: "Can I bring a +1?",
    a: "Collaborations are typically for individual creators, but for larger accounts or specific campaigns, we can often accommodate a content partner or +1. Just mention it in your application!"
  },
  {
    q: "I've applied! What's next?",
    a: "Get ready to pack your bags (or your digital toolkit). Here is the roadmap:<br/><br/><b>If you're joining us as a Hosted Creator:</b><br/>1. <b>Date Check:</b> You'll get an email to submit your travel dates.<br/>2. <b>Vibe Check:</b> Our (human) team reviews your style.<br/>3. <b>The Intro:</b> A quick chat to talk about content vibes and say hello.<br/>4. <b>The Itinerary:</b> We send the details; you head to paradise.<br/>5. <b>The Legacy:</b> Gain access to Tapfiliate and our Creator News to keep earning long after you've checked out.<br/><br/><b>If you're joining us as a Digital Creator:</b> Simply register via Tapfiliate through the link in the email. Once our team gives you the green light, you'll get your unique link and our monthly Creator News. Whether you're creating from your bedroom or a beach club, you're officially part of the inner circle."
  }
];

export const FAQ: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(4);

  return (
    <section className="px-6 py-24 bg-white relative overflow-hidden">
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
