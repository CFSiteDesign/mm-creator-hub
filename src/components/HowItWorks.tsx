
import React from 'react';
import iconPitch from '@/assets/icon-pitch.png';
import iconSetup from '@/assets/icon-setup.png';
import iconPayday from '@/assets/icon-payday.png';
import howItWorksHeart from '@/assets/howitworks-heart.png';
import howItWorksPhoto from '@/assets/howitworks-photo.png';

export const HowItWorks: React.FC = () => {
  return (
    <section className="px-6 py-16 md:px-24 bg-white">
      <div className="lg:flex lg:items-center lg:gap-16 max-w-7xl mx-auto">
        <div className="lg:w-1/2 space-y-12">
          <h2 className="text-4xl md:text-5xl font-black">
            Low effort, high reward. <span className="text-pink-400">(No cap.)</span>
          </h2>

          <div className="space-y-10">
            <div className="space-y-3">
              <img src={iconPitch} alt="The Pitch" className="w-10 h-10 object-contain" />
              <h3 className="text-lg font-bold">1. The Pitch <span className="text-pink-500 font-medium">(Join from anywhere)</span></h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Apply from your bedroom or the beach. We're looking for <span className="text-pink-400 font-bold">"main character"</span> energy and an aesthetic that hits. You don't need to be in SE Asia to start; if you can create travel hype from home, you're in.
              </p>
            </div>

            <div className="space-y-3">
              <img src={iconSetup} alt="The Setup" className="w-10 h-10 object-contain" />
              <h3 className="text-lg font-bold">2. The Setup <span className="text-pink-500 font-medium">(Secure Your Code)</span></h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Once accepted, we hook you up with a <span className="text-pink-400 font-bold underline">personal promo code.</span> This is your digital goldmine. Put it in your bio, your link-tree, or your blog. Start earning before you even board your flight.
              </p>
            </div>

            <div className="space-y-3">
              <img src={iconPayday} alt="The Payday" className="w-10 h-10 object-contain" />
              <h3 className="text-lg font-bold">3. The Payday <span className="text-pink-500 font-medium">(Post & Bank)</span></h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Create the heat! Reels, TikToks, or "how-to" guides. Use your link to drive bookings. <span className="text-pink-400 font-bold">We pay you a commission for every person who stays with us because of you.</span> Fund your next trip while you sleep in our bunks.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 lg:mt-0 lg:w-1/2 relative">
          <img 
            src={howItWorksPhoto}
            alt="Mad Monkey Vibe" 
            className="w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};
