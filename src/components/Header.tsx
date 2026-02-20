
import React, { useState, useRef, useEffect } from 'react';
import madMonkeyLogo from '@/assets/mad-monkey-logo.png';

interface HeaderProps {
  onApply: () => void;
}

const SLEEP_LINKS = [
  { country: 'AUSTRALIA', items: [{ label: 'Coogee Beach Sydney', href: 'https://madmonkeyhostels.com/hostels/coogee-beach-sydney/' }] },
  { country: 'CAMBODIA', items: [
    { label: 'Koh Sdach', href: 'https://madmonkeyhostels.com/hostels/koh-sdach/' },
    { label: 'Koh Rong', href: 'https://madmonkeyhostels.com/hostels/koh-rong/' },
    { label: 'Phnom Penh', href: 'https://madmonkeyhostels.com/hostels/phnom-penh/' },
    { label: 'Siem Reap', href: 'https://madmonkeyhostels.com/hostels/siem-reap/' },
  ]},
  { country: 'INDONESIA', items: [
    { label: 'Gili Trawangan', href: 'https://madmonkeyhostels.com/hostels/gili-trawangan/' },
    { label: 'Kuta Lombok', href: 'https://madmonkeyhostels.com/hostels/kuta-lombok/' },
    { label: 'Nusa Lembongan', href: 'https://madmonkeyhostels.com/hostels/nusa-lembongan/' },
    { label: 'Uluwatu', href: 'https://madmonkeyhostels.com/hostels/uluwatu/' },
  ]},
  { country: 'LAOS', items: [
    { label: 'Luang Prabang', href: 'https://madmonkeyhostels.com/hostels/luang-prabang/' },
    { label: 'Vang Vieng', href: 'https://madmonkeyhostels.com/hostels/vang-vieng/' },
  ]},
  { country: 'PHILIPPINES', items: [
    { label: 'Dumaguete', href: 'https://madmonkeyhostels.com/hostels/dumaguete/' },
    { label: 'Nacpan Beach', href: 'https://madmonkeyhostels.com/hostels/nacpan-beach/' },
    { label: 'Manila', href: 'https://madmonkeyhostels.com/hostels/manila/' },
    { label: 'Panglao', href: 'https://madmonkeyhostels.com/hostels/panglao/' },
    { label: 'Siargao', href: 'https://madmonkeyhostels.com/hostels/siargao/' },
    { label: 'Siquijor', href: 'https://madmonkeyhostels.com/hostels/siquijor/' },
  ]},
  { country: 'THAILAND', items: [
    { label: 'Bangkok', href: 'https://madmonkeyhostels.com/hostels/bangkok/' },
    { label: 'Chiang Mai', href: 'https://madmonkeyhostels.com/hostels/chiang-mai/' },
    { label: 'Pai', href: 'https://madmonkeyhostels.com/hostels/pai/' },
    { label: 'Phuket', href: 'https://madmonkeyhostels.com/hostels/phuket/' },
  ]},
  { country: 'VIETNAM', items: [
    { label: 'Ha Giang', href: 'https://madmonkeyhostels.com/hostels/ha-giang/' },
    { label: 'Hanoi', href: 'https://madmonkeyhostels.com/hostels/hanoi/' },
    { label: 'Hoi An', href: 'https://madmonkeyhostels.com/hostels/hoi-an/' },
  ]},
];

const EXPERIENCE_LINKS = [
  { label: 'Ha Giang Loop', href: 'https://madmonkeyhostels.com/ha-giang-loop/' },
  { label: 'Tours & Activities', href: 'https://madmonkeyhostels.com/experiences/' },
  { label: 'Boat Parties', href: 'https://madmonkeyhostels.com/experiences/boat-parties/' },
  { label: 'Pub Crawls', href: 'https://madmonkeyhostels.com/experiences/pub-crawls/' },
];

function useDropdown() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return { open, setOpen, ref };
}

export const Header: React.FC<HeaderProps> = ({ onApply }) => {
  const sleep = useDropdown();
  const experience = useDropdown();

  return (
    <div className="sticky top-0 z-50">

      {/* Main header */}
      <header className="bg-white border-b border-gray-100 px-6 py-3 md:px-10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={madMonkeyLogo} alt="Mad Monkey" className="h-10 w-auto" />
        </div>

        <nav className="hidden lg:flex items-center gap-5 text-sm font-medium text-gray-800">
          <a href="https://madmonkeyhostels.com/ha-giang-loop/" target="_blank" rel="noopener noreferrer"
            className="border border-[#48CBB6] text-[#48CBB6] px-3 py-1 rounded-full text-xs font-semibold hover:bg-[#48CBB6] hover:text-white transition-all">
            Ha Giang Loop
          </a>
          <a href="https://madmonkeyhostels.com/our-story" target="_blank" rel="noopener noreferrer"
            className="hover:text-gray-500 transition-colors">Our Story</a>

          {/* Sleep Dropdown */}
          <div className="relative" ref={sleep.ref}>
            <button
              onClick={() => { sleep.setOpen(!sleep.open); experience.setOpen(false); }}
              className="flex items-center gap-1 hover:text-gray-500 transition-colors"
            >
              Sleep <span className="text-[10px] ml-0.5">▾</span>
            </button>
            {sleep.open && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[520px] bg-white rounded-2xl shadow-2xl border border-gray-100 z-50 p-6">
                <div className="grid grid-cols-3 gap-x-8 gap-y-1">
                  {SLEEP_LINKS.map((group) => (
                    <div key={group.country} className="mb-3">
                      <p className="text-[10px] font-black tracking-widest text-gray-400 uppercase mb-1.5">{group.country}</p>
                      {group.items.map((item) => (
                        <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer"
                          className="block text-sm text-gray-700 hover:text-[#48CBB6] py-0.5 transition-colors">
                          {item.label}
                        </a>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Experience Dropdown */}
          <div className="relative" ref={experience.ref}>
            <button
              onClick={() => { experience.setOpen(!experience.open); sleep.setOpen(false); }}
              className="flex items-center gap-1 hover:text-gray-500 transition-colors"
            >
              Experience <span className="text-[10px] ml-0.5">▾</span>
            </button>
            {experience.open && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-52 bg-white rounded-2xl shadow-2xl border border-gray-100 z-50 p-3">
                {EXPERIENCE_LINKS.map((item) => (
                  <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer"
                    className="block px-3 py-2 text-sm text-gray-700 hover:text-[#48CBB6] hover:bg-gray-50 rounded-lg transition-colors">
                    {item.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          <a href="https://madmonkeyhostels.com/mad-loyalty" target="_blank" rel="noopener noreferrer"
            className="hover:text-gray-500 transition-colors">Mad Loyalty</a>

          <span className="text-gray-300 select-none">|</span>
          <a href="https://madmonkeyhostels.com/login" target="_blank" rel="noopener noreferrer"
            className="hover:text-gray-500 transition-colors">Login</a>
        </nav>

        <button
          onClick={onApply}
          className="bg-[#48CBB6] text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-sm hover:bg-[#3db8a5] transition-all"
        >
          Book Now
        </button>
      </header>
    </div>
  );
};
