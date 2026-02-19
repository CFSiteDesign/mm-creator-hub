import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-foreground pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="text-2xl font-black text-primary mb-3">
              MAD<span className="text-background">MONKEY</span>
            </div>
            <p className="text-background/50 text-sm leading-relaxed">
              Southeast Asia's boldest creator network. Built for creators who mean business.
            </p>
          </div>

          {/* Links */}
          {[
            {
              title: 'Platform',
              links: ['Features', 'How It Works', 'Monetization', 'Creator Stories'],
            },
            {
              title: 'Company',
              links: ['About Us', 'Blog', 'Careers', 'Press Kit'],
            },
            {
              title: 'Legal',
              links: ['Privacy Policy', 'Terms of Service', 'Creator Agreement', 'Cookie Policy'],
            },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="text-background font-black text-sm uppercase tracking-widest mb-4">{col.title}</h4>
              <ul className="flex flex-col gap-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-background/50 text-sm hover:text-primary transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social + copyright */}
        <div className="border-t border-border/20 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-background/30 text-sm">
            © 2025 Mad Monkey Creator Hub. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {['TikTok', 'Instagram', 'YouTube', 'Facebook'].map((platform) => (
              <a
                key={platform}
                href="#"
                className="text-background/40 text-xs font-semibold hover:text-primary transition-colors"
              >
                {platform}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
