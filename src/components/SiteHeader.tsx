'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Phone } from 'lucide-react';

interface SiteHeaderProps {
  name: string;
  phone: string;
  logo_url?: string;
}

export function SiteHeader({ name, phone, logo_url }: SiteHeaderProps) {
  const phoneHref = `tel:+1${phone.replace(/\D/g, '')}`;
  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 80], [0, 1]);

  return (
    <header className="fixed top-10 left-0 right-0 z-30">
      <motion.div
        className="mx-4 mt-2 rounded-2xl border border-white/10 px-4 py-3 flex items-center justify-between gap-4"
        style={{
          backgroundColor: `color-mix(in srgb, var(--hs-hero-bg) calc(${bgOpacity} * 92%), transparent)`,
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
        }}
      >
        {/* Brand */}
        <div className="flex items-center gap-3 min-w-0">
          {logo_url ? (
            <img
              src={logo_url}
              alt={`${name} logo`}
              className="w-10 h-10 rounded-full object-cover shrink-0 ring-2 ring-white/20"
            />
          ) : (
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-white font-black text-lg shrink-0"
              style={{ backgroundColor: 'var(--hs-accent)', fontFamily: 'var(--font-heading)' }}
            >
              {name.charAt(0).toUpperCase()}
            </div>
          )}
          <span
            className="text-white font-bold text-sm leading-tight truncate"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {name}
          </span>
        </div>

        {/* CTA */}
        <a
          href={phoneHref}
          className="shrink-0 inline-flex items-center gap-2 text-white font-bold text-sm px-4 py-2 rounded-xl cursor-pointer transition-opacity hover:opacity-90"
          style={{ backgroundColor: 'var(--hs-accent)', fontFamily: 'var(--font-heading)' }}
        >
          <Phone className="w-4 h-4" />
          <span className="hidden sm:inline">{phone}</span>
          <span className="sm:hidden">Call Now</span>
        </a>
      </motion.div>
    </header>
  );
}
