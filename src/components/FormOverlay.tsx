
import React, { useState } from 'react';
import monkeyBadge from '@/assets/monkey-badge.svg';

interface FormOverlayProps {
  onClose: () => void;
}

export const FormOverlay: React.FC<FormOverlayProps> = ({ onClose }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="fixed inset-0 z-[100] bg-black/90 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-white rounded-3xl overflow-hidden relative h-[90vh] flex flex-col">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-50 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold hover:bg-gray-800 transition-colors"
        >
          ✕
        </button>
        
        <div className="p-6 border-b flex items-center justify-between">
          <h2 className="text-2xl font-black">Creator Hub Application</h2>
        </div>

        <div className="flex-1 w-full bg-gray-50 relative">
          {isLoading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-white z-10 gap-6">
              <img src={monkeyBadge} alt="Mad Monkey" className="w-16 h-16 animate-bounce" />
              <div className="flex flex-col items-center gap-2">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E2FF00] animate-pulse" style={{ animationDelay: '0ms' }} />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#48CBB6] animate-pulse" style={{ animationDelay: '150ms' }} />
                  <span className="w-2.5 h-2.5 rounded-full bg-pink-500 animate-pulse" style={{ animationDelay: '300ms' }} />
                </div>
                <p className="text-sm font-bold text-gray-500 mt-2">Loading your application...</p>
              </div>
            </div>
          )}
          <iframe 
            src="https://mm-influencer-hub.vercel.app" 
            className="w-full h-full border-none"
            title="Mad Monkey Creator Hub Application Form"
            onLoad={() => setIsLoading(false)}
          />
        </div>
      </div>
    </div>
  );
};
