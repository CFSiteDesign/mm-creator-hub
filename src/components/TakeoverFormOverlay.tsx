import React, { useState, useMemo } from 'react';
import monkeyBadge from '@/assets/monkey-badge.svg';

interface TakeoverFormOverlayProps {
  onClose: () => void;
}

const ALL_QUARTERS = [
  { label: 'JAN - MARCH 2027', startYear: 2027, startMonth: 1, endMonth: 3 },
  { label: 'APRIL - JUNE 2026', startYear: 2026, startMonth: 4, endMonth: 6 },
  { label: 'JULY - SEPT 2026', startYear: 2026, startMonth: 7, endMonth: 9 },
  { label: 'OCT - DEC 2026', startYear: 2026, startMonth: 10, endMonth: 12 },
];

export const TakeoverFormOverlay: React.FC<TakeoverFormOverlayProps> = ({ onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState<string>('');

  const upcomingQuarters = useMemo(() => {
    const now = new Date();
    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth() + 1;
    return ALL_QUARTERS.filter(q => {
      // Show if the quarter's end is in the future (current month <= endMonth in same year, or future year)
      if (q.startYear > currentYear) return true;
      if (q.startYear < currentYear) return false;
      return q.endMonth >= currentMonth;
    }).sort((a, b) => a.startYear - b.startYear || a.startMonth - b.startMonth);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-[100] bg-black/90 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-3xl overflow-hidden relative max-h-[90vh] flex flex-col">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold hover:bg-gray-800 transition-colors"
        >
          ✕
        </button>

        <div className="p-6 border-b flex items-center gap-3 bg-[#FF6A00]">
          <img src={monkeyBadge} alt="Mad Monkey" className="w-8 h-8" />
          <h2 className="text-2xl font-black text-white">Creator Takeover Application</h2>
        </div>

        <div className="flex-1 overflow-y-auto bg-gray-50 p-6">
          {submitted ? (
            <div className="flex flex-col items-center justify-center text-center py-16 gap-4">
              <img src={monkeyBadge} alt="Mad Monkey" className="w-20 h-20" />
              <h3 className="text-2xl font-black">Application received!</h3>
              <p className="text-gray-600 max-w-sm">We'll be in touch within 48 hours about your Takeover.</p>
              <button
                onClick={onClose}
                className="mt-4 bg-[#FF6A00] text-white px-8 py-3 rounded-full font-black text-xs uppercase tracking-widest hover:scale-105 transition-transform"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <h3 className="text-lg font-black mb-3 text-[#FF6A00]">Who are we talking to?</h3>
                <div className="space-y-3">
                  <input required name="name" placeholder="Name" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#FF6A00] outline-none text-sm" />
                  <input required type="email" name="email" placeholder="Email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#FF6A00] outline-none text-sm" />
                </div>
              </div>

              <div>
                <h3 className="text-lg font-black mb-3 text-[#FF6A00]">Socials</h3>
                <div className="space-y-3">
                  <input name="instagram" placeholder="Instagram" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#FF6A00] outline-none text-sm" />
                  <input name="tiktok" placeholder="TikTok" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#FF6A00] outline-none text-sm" />
                  <input name="others" placeholder="Others" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#FF6A00] outline-none text-sm" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold mb-2">Have you ever sold anything to your audience before?</label>
                <textarea name="sold" rows={3} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#FF6A00] outline-none text-sm" />
              </div>

              <div>
                <label className="block text-sm font-bold mb-2">Upload a screenshot of your Story Views (Last 24h)</label>
                <input
                  required
                  type="file"
                  accept="image/*"
                  onChange={(e) => setFileName(e.target.files?.[0]?.name || '')}
                  className="w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-bold file:bg-[#FF6A00] file:text-white hover:file:bg-[#E55F00]"
                />
                {fileName && <p className="text-xs text-gray-500 mt-1">Selected: {fileName}</p>}
              </div>

              <div>
                <h3 className="text-lg font-black mb-3 text-[#FF6A00]">Where & When do you want to run your Takeover?</h3>
                <div className="space-y-3">
                  <div>
                    <label className="block text-xs font-bold mb-1 uppercase tracking-wide">When</label>
                    <select required name="when" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#FF6A00] outline-none text-sm bg-white">
                      <option value="">Select a quarter...</option>
                      {upcomingQuarters.map(q => (
                        <option key={q.label} value={q.label}>{q.label}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold mb-1 uppercase tracking-wide">Where</label>
                    <select required name="where" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#FF6A00] outline-none text-sm bg-white">
                      <option value="">Select a destination...</option>
                      <option value="Cambodia">Cambodia</option>
                      <option value="Indonesia">Indonesia</option>
                      <option value="Vietnam">Vietnam</option>
                    </select>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#FF6A00] text-white px-10 py-4 rounded-full font-black text-sm uppercase tracking-widest shadow-lg hover:scale-[1.02] transition-transform"
              >
                Submit Takeover Application
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
