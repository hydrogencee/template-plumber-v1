import { Phone, MapPin } from 'lucide-react';
import type { PlumberSlots } from '../../site.config';

interface FooterProps {
  nap_block: PlumberSlots['nap_block'];
}

export function Footer({ nap_block }: FooterProps) {
  const { name, address, phone, city, state, zip } = nap_block;
  const phoneHref = `tel:+1${phone.replace(/\D/g, '')}`;
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#071e2f] text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pb-10 border-b border-white/10">
          {/* Brand */}
          <div>
            <h3
              className="text-lg font-bold text-white mb-3"
              style={{ fontFamily: 'Lexend, sans-serif' }}
            >
              {name}
            </h3>
            <p className="text-sky-100/50 text-sm leading-relaxed">
              Professional plumbing services in {city}, {state}. Available 24/7 for emergencies.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-sky-300 uppercase tracking-widest mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href={phoneHref} className="flex items-center gap-2 text-sky-100/70 hover:text-white transition-colors text-sm cursor-pointer">
                  <Phone className="w-4 h-4 text-sky-400" />
                  {phone}
                </a>
              </li>
              <li>
                <span className="flex items-start gap-2 text-sky-100/70 text-sm">
                  <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  {address}, {city}, {state} {zip}
                </span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-sm font-semibold text-sky-300 uppercase tracking-widest mb-4">Hours</h4>
            <ul className="space-y-1.5 text-sm text-sky-100/70">
              <li className="flex justify-between gap-6">
                <span>Mon – Fri</span><span>7am – 8pm</span>
              </li>
              <li className="flex justify-between gap-6">
                <span>Saturday</span><span>8am – 6pm</span>
              </li>
              <li className="flex justify-between gap-6">
                <span>Sunday</span><span>9am – 5pm</span>
              </li>
              <li className="text-sky-400 font-semibold pt-1">24/7 Emergency Available</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/30">
          <p>© {year} {name}. All rights reserved.</p>
          <p>
            Site by{' '}
            <a href="https://hydrogenstudio.co" className="text-sky-400/60 hover:text-sky-400 transition-colors cursor-pointer">
              Hydrogen Studio
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
