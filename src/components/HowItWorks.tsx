
import React from 'react';

export const HowItWorks: React.FC = () => {
  return (
    <section className="px-6 py-24 md:px-24 bg-white">
      <div className="lg:flex lg:items-center lg:gap-16 max-w-7xl mx-auto">
        <div className="lg:w-1/2 space-y-12">
          <h2 className="text-4xl md:text-5xl font-black">
            Low effort, high reward. <span className="text-pink-400">(No cap.)</span>
          </h2>

          <div className="space-y-10">
            <div className="space-y-3">
              <div className="w-10 h-10 bg-lime-300 rounded-lg flex items-center justify-center text-lg">🔗</div>
              <h3 className="text-lg font-bold">1. The Pitch <span className="text-pink-500 font-medium">(Join from anywhere)</span></h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Apply from your bedroom or the beach. We're looking for <span className="text-pink-400 font-bold">"main character"</span> energy and an aesthetic that hits. You don't need to be in SE Asia to start; if you can create travel hype from home, you're in.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-10 h-10 bg-lime-300 rounded-lg flex items-center justify-center text-lg">⛓️</div>
              <h3 className="text-lg font-bold">2. The Setup <span className="text-pink-500 font-medium">(Secure the Link)</span></h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Once accepted, we hook you up with your <span className="text-pink-400 font-bold underline">custom Mad Monkey link.</span> This is your digital goldmine. Put it in your bio, your link-tree, or your blog. Start earning before you even board your flight.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-10 h-10 bg-lime-300 rounded-lg flex items-center justify-center text-lg">💰</div>
              <h3 className="text-lg font-bold">3. The Payday <span className="text-pink-500 font-medium">(Post & Bank)</span></h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Create the heat! Reels, TikToks, or "how-to" guides. Use your link to drive bookings. <span className="text-pink-400 font-bold">We pay you a commission for every person who stays with us because of you.</span> Fund your next trip while you sleep in our bunks.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 lg:mt-0 lg:w-1/2 relative">
          <div className="relative z-10">
            <img 
              src="https://picsum.photos/seed/party/800/1000" 
              alt="Mad Monkey Vibe" 
              className="rounded-3xl shadow-2xl w-full aspect-[4/5] object-cover"
            />
            {/* Pink heart blob */}
            <div className="absolute -top-10 -right-6 bg-purple-400 p-6 rounded-full shadow-xl">
              <span className="text-4xl">❤️</span>
            </div>
          </div>
          {/* Background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-purple-200/20 blur-3xl -z-10 rounded-full" />
        </div>
      </div>
    </section>
  );
};
