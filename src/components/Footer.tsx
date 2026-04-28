import { Phone, MapPin } from 'lucide-react';
import type { PlumberSlots } from '../../site.config';

interface FooterProps {
  nap_block: PlumberSlots['nap_block'];
}

export function Footer({ nap_block }: FooterProps) {
  const { name, address, phone, city, state, zip } = nap_block;
  const phoneHref = `tel:+1${phone.replace(/\D/g, '')}`;
  const year = new Date().getFullYear();
  const addressLine = [address, city, state, zip].filter(v => v && v.trim() !== '').join(', ');

  return (
    <footer className="text-white py-14 px-6" style={{ backgroundColor: 'var(--hs-hero-bg)' }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 pb-10 border-b border-white/8">
          <div>
            <h3 className="text-lg font-bold text-white mb-3">{name}</h3>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              Professional plumbing services in {city}, {state}.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest mb-5" style={{ color: 'var(--hs-accent)' }}>Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href={phoneHref} className="flex items-center gap-2.5 text-white/60 hover:text-white transition-colors text-sm cursor-pointer">
                  <Phone className="w-4 h-4 shrink-0" style={{ color: 'var(--hs-accent)' }} />
                  {phone}
                </a>
              </li>
              {addressLine && (
                <li className="flex items-start gap-2.5 text-white/60 text-sm">
                  <MapPin className="w-4 h-4 shrink-0 mt-0.5" style={{ color: 'var(--hs-accent)' }} />
                  {addressLine}
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/25">
          <p>© {year} {name}. All rights reserved.</p>
          <p>
            Site by{' '}
            <a href="https://hydrogenstudio.co" className="hover:text-white/50 transition-colors cursor-pointer" style={{ color: 'var(--hs-accent)', opacity: 0.5 }}>
              Hydrogen Studio
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
