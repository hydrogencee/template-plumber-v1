'use client';
import { motion } from 'framer-motion';
import { Phone, Star, ShieldCheck } from 'lucide-react';
import type { PlumberSlots } from '../../site.config';

interface HeroSectionProps {
  hero_title: PlumberSlots['hero_title'];
  hero_subheadline: PlumberSlots['hero_subheadline'];
  cta_text: PlumberSlots['cta_text'];
  nap_block: PlumberSlots['nap_block'];
  trust_badges: PlumberSlots['trust_badges'];
  google_rating: PlumberSlots['google_rating'];
  google_review_count: PlumberSlots['google_review_count'];
}

export function HeroSection({ hero_title, hero_subheadline, cta_text, nap_block, trust_badges, google_rating, google_review_count }: HeroSectionProps) {
  const phoneHref = `tel:+1${nap_block.phone.replace(/\D/g, '')}`;

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center overflow-hidden" style={{ backgroundColor: 'var(--hs-hero-bg)' }}>
      <div className="absolute inset-0 opacity-20" style={{ background: `radial-gradient(ellipse at top right, var(--hs-primary), transparent 60%)` }} />
      <div className="absolute inset-0 opacity-10" style={{ background: `radial-gradient(ellipse at bottom left, var(--hs-accent), transparent 60%)` }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-white/60 text-sm font-medium mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'var(--hs-accent)' }} />
          {nap_block.city}, {nap_block.state}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="font-semibold text-lg mb-3 tracking-wide"
          style={{ color: 'var(--hs-accent)' }}
        >
          {nap_block.name}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6 tracking-tight max-w-3xl"
        >
          {hero_title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white/60 text-lg sm:text-xl max-w-2xl mb-10 leading-relaxed"
        >
          {hero_subheadline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 mb-14"
        >
          <a
            href={phoneHref}
            className="inline-flex items-center justify-center gap-3 text-white font-bold px-8 py-4 rounded-xl text-lg transition-opacity duration-200 hover:opacity-90 shadow-lg cursor-pointer"
            style={{ backgroundColor: 'var(--hs-accent)' }}
          >
            <Phone className="w-5 h-5 shrink-0" />
            {nap_block.phone}
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 bg-white/8 hover:bg-white/12 border border-white/15 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-200 cursor-pointer"
          >
            {cta_text}
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="flex flex-wrap items-center gap-3"
        >
          {google_rating > 0 && (
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5" style={{ fill: i < Math.round(google_rating) ? 'var(--hs-accent)' : 'rgba(255,255,255,0.15)', color: i < Math.round(google_rating) ? 'var(--hs-accent)' : 'rgba(255,255,255,0.15)' }} />
                ))}
              </div>
              <span className="text-white text-sm font-semibold">{google_rating}</span>
              {google_review_count > 0 && (
                <span className="text-white/40 text-xs">· {google_review_count} reviews</span>
              )}
            </div>
          )}
          {trust_badges.map((badge: string) => (
            <div key={badge} className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5">
              <ShieldCheck className="w-3.5 h-3.5 shrink-0" style={{ color: 'var(--hs-accent)' }} />
              <span className="text-white/70 text-xs font-medium">{badge}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
