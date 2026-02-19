
import React from 'react';
import madMonkeyLogo from '@/assets/mad-monkey-logo.png';

interface HeaderProps {
  onApply: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onApply }) => {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 px-6 py-3 md:px-10 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <img src={madMonkeyLogo} alt="Mad Monkey" className="h-10 w-auto" />
        <span className="font-black text-base leading-tight text-gray-900 hidden sm:block">mad<br/>monkey</span>
      </div>

      <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-gray-800">
        <a href="#" className="flex items-center gap-1 text-purple-600 font-bold">MadPass <span className="text-yellow-400 text-xs">✦</span></a>
        <a href="#" className="hover:text-gray-500 transition-colors">Our Story</a>
        <a href="#" className="flex items-center gap-1 hover:text-gray-500 transition-colors">Sleep <span className="text-[10px] ml-0.5">▾</span></a>
        <a href="#" className="flex items-center gap-1 hover:text-gray-500 transition-colors">Experience <span className="text-[10px] ml-0.5">▾</span></a>
        <a href="#" className="hover:text-gray-500 transition-colors">Mad Loyalty</a>
        <span className="text-gray-300 select-none">|</span>
        <a href="#" className="hover:text-gray-500 transition-colors">Login</a>
      </nav>

      <button 
        onClick={onApply}
        className="bg-[#48CBB6] text-white px-5 py-2.5 rounded-lg text-sm font-bold shadow-sm hover:bg-[#3db8a5] transition-all flex items-center gap-1.5"
      >
        BOOK NOW <span className="text-[10px]">▾</span>
      </button>
    </header>
  );
};
