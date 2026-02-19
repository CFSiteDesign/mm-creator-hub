
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white px-6 py-16 md:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Branding Column */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black">
              <span className="text-xs">🐒</span>
            </div>
            <span className="font-extrabold text-xl tracking-tight">mad monkey</span>
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:opacity-70 transition-opacity"><span className="text-xl">📸</span></a>
            <a href="#" className="hover:opacity-70 transition-opacity"><span className="text-xl">🎵</span></a>
            <a href="#" className="hover:opacity-70 transition-opacity"><span className="text-xl">🐦</span></a>
            <a href="#" className="hover:opacity-70 transition-opacity"><span className="text-xl">👤</span></a>
            <a href="#" className="hover:opacity-70 transition-opacity"><span className="text-xl">🎥</span></a>
          </div>
          <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest pt-8">
            ALL RIGHTS RESERVED © MAD MONKEY. 2024
          </p>
        </div>

        {/* Links Columns */}
        <div className="space-y-8">
          <div>
            <h5 className="font-black text-sm mb-4">Rules & Legal</h5>
            <ul className="text-xs text-gray-400 space-y-3">
              <li><a href="#" className="hover:text-white">Tour & Groups</a></li>
              <li><a href="#" className="hover:text-white">No Sex Tourists</a></li>
              <li><a href="#" className="hover:text-white">Cancellation Policy</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-black text-sm mb-4">Press</h5>
            <ul className="text-xs text-gray-400 space-y-3">
              <li><a href="#" className="hover:text-white">Mad Monkey News</a></li>
              <li><a href="#" className="hover:text-white">Press Releases</a></li>
              <li><a href="#" className="hover:text-white">Corporate Social Responsibility</a></li>
            </ul>
          </div>
        </div>

        <div>
          <h5 className="font-black text-sm mb-4">Partners With Us</h5>
          <ul className="text-xs text-gray-400 space-y-3">
            <li><a href="#" className="hover:text-white">Investor</a></li>
            <li><a href="#" className="hover:text-white">Property Partners</a></li>
            <li><a href="#" className="hover:text-white">Content Creators</a></li>
            <li><a href="#" className="hover:text-white">Travel Agencies</a></li>
            <li><a href="#" className="hover:text-white">Tour Operators & Suppliers</a></li>
          </ul>
          <h5 className="font-black text-sm mb-4 mt-8">Guides</h5>
          <ul className="text-xs text-gray-400 space-y-3">
            <li><a href="#" className="hover:text-white">Backpacker Guides</a></li>
            <li><a href="#" className="hover:text-white">Mad Monkey's Travel Blog</a></li>
            <li><a href="#" className="hover:text-white">Free Content Creator Stays</a></li>
          </ul>
        </div>

        {/* Newsletter Column */}
        <div className="space-y-6">
          <h5 className="font-black text-sm">Stay Updated with Us</h5>
          <form className="space-y-3">
            <input 
              type="text" 
              placeholder="Name" 
              className="w-full bg-transparent border border-gray-700 rounded-md p-3 text-xs focus:border-white outline-none transition-colors"
            />
            <input 
              type="email" 
              placeholder="Email" 
              className="w-full bg-transparent border border-gray-700 rounded-md p-3 text-xs focus:border-white outline-none transition-colors"
            />
            <button className="w-full bg-[#48CBB6] text-white py-3 rounded-md font-black text-xs uppercase tracking-widest shadow-md hover:bg-[#3db8a5] transition-colors">
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};
