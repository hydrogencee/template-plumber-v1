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
    <footer className="text-white py-16 px-6" style={{ backgroundColor: 'var(--hs-hero-bg)' }}>
      <div className="max-w-6xl mx-auto">
        {/* Top accent line */}
        <div className="h-px w-full mb-12" style={{ background: 'linear-gradient(90deg, transparent, color-mix(in srgb, var(--hs-accent) 40%, transparent), transparent)' }} />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 pb-10 border-b border-white/6">
          {/* Brand column */}
          <div className="sm:col-span-2">
            <h3 className="text-xl font-black text-white mb-3" style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.02em' }}>{name}</h3>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs" style={{ fontFamily: 'var(--font-body)' }}>
              Professional plumbing services in {city}, {state}. Licensed, insured, and available 24/7 for emergencies.
            </p>
          </div>

          {/* Contact column */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: 'var(--hs-accent)', fontFamily: 'var(--font-heading)' }}>Contact</h4>
            <ul className="space-y-3.5">
              <li>
                <a href={phoneHref} className="flex items-center gap-2.5 text-white/55 hover:text-white transition-colors text-sm cursor-pointer" style={{ fontFamily: 'var(--font-body)' }}>
                  <Phone className="w-4 h-4 shrink-0" style={{ color: 'var(--hs-accent)' }} />
                  {phone}
                </a>
              </li>
              {addressLine && (
                <li className="flex items-start gap-2.5 text-white/55 text-sm" style={{ fontFamily: 'var(--font-body)' }}>
                  <MapPin className="w-4 h-4 shrink-0 mt-0.5" style={{ color: 'var(--hs-accent)' }} />
                  {addressLine}
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/20" style={{ fontFamily: 'var(--font-body)' }}>
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
