
import React from 'react';
import madMonkeyLogo from '@/assets/mad-monkey-logo.png';

interface HeaderProps {
  onApply: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onApply }) => {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 px-6 py-4 md:px-12 flex items-center justify-between">
      <div className="flex items-center">
        <img src={madMonkeyLogo} alt="Mad Monkey" className="h-10 w-auto" />
      </div>

      <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
        <a href="#" className="flex items-center gap-1 text-purple-600">MadPass <span className="text-[10px]">✨</span></a>
        <a href="#" className="hover:text-gray-600 transition-colors">Our Story</a>
        <a href="#" className="flex items-center gap-1 hover:text-gray-600 transition-colors">Sleep <span className="text-[10px]">▼</span></a>
        <a href="#" className="flex items-center gap-1 hover:text-gray-600 transition-colors">Experience <span className="text-[10px]">▼</span></a>
        <a href="#" className="hover:text-gray-600 transition-colors">Mad Loyalty</a>
        <a href="#" className="hover:text-gray-600 transition-colors">Login</a>
      </nav>

      <button 
        onClick={onApply}
        className="bg-[#48CBB6] text-white px-5 py-2 rounded-lg text-sm font-bold shadow-sm hover:bg-[#3db8a5] transition-all"
      >
        BOOK NOW ▾
      </button>
    </header>
  );
};
