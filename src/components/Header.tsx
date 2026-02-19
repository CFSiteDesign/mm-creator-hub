
import React from 'react';

interface HeaderProps {
  onApply: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onApply }) => {
  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border px-6 py-4 md:px-12 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-foreground rounded-full flex items-center justify-center">
          <span className="text-background text-xs font-bold">🐒</span>
        </div>
        <span className="font-extrabold text-lg tracking-tight text-foreground">mad monkey</span>
      </div>

      <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
        <a href="#" className="flex items-center gap-1 text-purple-600">MadPass <span className="text-[10px]">✨</span></a>
        <a href="#" className="text-foreground hover:text-muted-foreground transition-colors">Our Story</a>
        <a href="#" className="flex items-center gap-1 text-foreground hover:text-muted-foreground transition-colors">Sleep <span className="text-[10px]">▼</span></a>
        <a href="#" className="flex items-center gap-1 text-foreground hover:text-muted-foreground transition-colors">Experience <span className="text-[10px]">▼</span></a>
        <a href="#" className="text-foreground hover:text-muted-foreground transition-colors">Mad Loyalty</a>
        <a href="#" className="text-foreground hover:text-muted-foreground transition-colors">Login</a>
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
