
import React from 'react';

interface FormOverlayProps {
  onClose: () => void;
}

export const FormOverlay: React.FC<FormOverlayProps> = ({ onClose }) => {
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
            <p className="text-gray-500 text-xs font-bold uppercase tracking-wider">Estimated time: 2 mins</p>
        </div>

        <div className="flex-1 w-full bg-gray-50">
          <iframe 
            src="https://fill.boloforms.com/signature/form/creatorhub" 
            className="w-full h-full border-none"
            title="Mad Monkey Creator Hub Application Form"
          />
        </div>
      </div>
    </div>
  );
};
