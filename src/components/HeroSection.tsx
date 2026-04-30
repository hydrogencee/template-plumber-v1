'use client';
import { motion } from 'framer-motion';
import { Phone, Star, ShieldCheck, Clock, Award } from 'lucide-react';
import { useEffect, useState } from 'react';
import type { PlumberSlots } from '../../site.config';

interface HeroSectionProps {
  hero_title: PlumberSlots['hero_title'];
  hero_subheadline: PlumberSlots['hero_subheadline'];
  cta_text: PlumberSlots['cta_text'];
  nap_block: PlumberSlots['nap_block'];
  trust_badges: PlumberSlots['trust_badges'];
  google_rating: PlumberSlots['google_rating'];
  google_review_count: PlumberSlots['google_review_count'];
  logo_url?: string;
  cover_photo_url?: string;
}

export function HeroSection({ hero_title, hero_subheadline, cta_text, nap_block, trust_badges, google_rating, google_review_count, logo_url, cover_photo_url }: HeroSectionProps) {
  const phoneHref = `tel:+1${nap_block.phone.replace(/\D/g, '')}`;
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 300);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const stagger = {
    container: { animate: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } } },
    item: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' as const } },
    },
  };

  return (
    <>
      {/* Sticky mobile call bar */}
      <motion.a
        href={phoneHref}
        initial={{ y: 64, opacity: 0 }}
        animate={scrolled ? { y: 0, opacity: 1 } : { y: 64, opacity: 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="fixed bottom-0 left-0 right-0 z-40 flex items-center justify-center gap-3 py-4 font-bold text-white text-base shadow-2xl md:hidden cursor-pointer"
        style={{ backgroundColor: 'var(--hs-accent)' }}
        aria-label={`Call ${nap_block.name}`}
      >
        <Phone className="w-5 h-5 shrink-0" />
        Call Now — {nap_block.phone}
      </motion.a>

      <section
        id="hero"
        className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden"
        style={{ backgroundColor: 'var(--hs-hero-bg)' }}
      >
        {/* Background layers */}
        {cover_photo_url ? (
          <>
            <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url(${cover_photo_url})` }} />
            <div className="absolute inset-0" style={{ backgroundColor: 'var(--hs-hero-bg)', opacity: 0.82 }} />
          </>
        ) : null}
        <div className="absolute inset-0 opacity-30" style={{ background: `radial-gradient(ellipse 80% 60% at 75% -10%, var(--hs-primary), transparent)` }} />
        <div className="absolute inset-0 opacity-15" style={{ background: `radial-gradient(ellipse 50% 50% at 20% 90%, var(--hs-accent), transparent)` }} />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />

        <motion.div
          variants={stagger.container}
          initial="initial"
          animate="animate"
          className="relative z-10 max-w-5xl mx-auto px-6 py-28 lg:py-32"
        >
          {/* Location pill */}
          <motion.div variants={stagger.item} className="inline-flex items-center gap-2 bg-white/8 border border-white/12 rounded-full px-4 py-1.5 text-white/50 text-xs font-semibold tracking-widest uppercase mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
            Serving {nap_block.city}, {nap_block.state}
          </motion.div>

          {/* Logo or business name */}
          <motion.div variants={stagger.item} className="flex items-center gap-3 mb-2">
            {logo_url ? (
              <img src={logo_url} alt={`${nap_block.name} logo`} className="w-10 h-10 rounded-full object-cover bg-white/10" />
            ) : null}
            <p className="font-bold text-base tracking-wide" style={{ color: 'var(--hs-accent)', fontFamily: 'var(--font-heading)' }}>
              {nap_block.name}
            </p>
          </motion.div>

          {/* Main headline */}
          <motion.h1 variants={stagger.item} className="text-4xl sm:text-5xl lg:text-[4.25rem] font-black text-white leading-[1.05] mb-5 max-w-3xl" style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.03em' }}>
            {hero_title}
          </motion.h1>

          {/* Subheadline */}
          <motion.p variants={stagger.item} className="text-white/55 text-lg sm:text-xl max-w-2xl mb-10 leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
            {hero_subheadline}
          </motion.p>

          {/* CTAs */}
          <motion.div variants={stagger.item} className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href={phoneHref}
              className="relative inline-flex items-center justify-center gap-3 text-white font-bold px-8 py-4 rounded-2xl text-lg shadow-2xl cursor-pointer overflow-visible transition-transform hover:scale-[1.03] active:scale-[0.98]"
              style={{ backgroundColor: 'var(--hs-accent)', boxShadow: '0 8px 32px color-mix(in srgb, var(--hs-accent) 45%, transparent)' }}
            >
              <span className="relative pulse-ring">
                <Phone className="w-5 h-5 shrink-0" style={{ color: 'inherit' }} />
              </span>
              <span>Call Now — {nap_block.phone}</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-white/8 hover:bg-white/14 border border-white/15 text-white font-semibold px-8 py-4 rounded-2xl text-lg transition-all duration-200 cursor-pointer"
            >
              {cta_text}
            </a>
          </motion.div>

          {/* Trust bar */}
          <motion.div variants={stagger.item} className="flex flex-wrap items-center gap-3">
            {google_rating > 0 && (
              <div className="flex items-center gap-2.5 bg-white/8 border border-white/10 rounded-xl px-4 py-2.5">
                {/* Google G icon */}
                <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5" style={{ fill: i < Math.round(google_rating) ? '#FBBF24' : 'rgba(255,255,255,0.15)', color: i < Math.round(google_rating) ? '#FBBF24' : 'rgba(255,255,255,0.15)' }} />
                  ))}
                </div>
                <span className="text-white font-bold text-sm">{google_rating}</span>
                {google_review_count > 0 && (
                  <span className="text-white/40 text-xs">· {google_review_count} reviews</span>
                )}
              </div>
            )}

            {trust_badges.slice(0, 3).map((badge: string) => (
              <div key={badge} className="flex items-center gap-2 bg-white/6 border border-white/10 rounded-xl px-3.5 py-2.5">
                <ShieldCheck className="w-3.5 h-3.5 shrink-0" style={{ color: 'var(--hs-accent)' }} />
                <span className="text-white/65 text-xs font-semibold">{badge}</span>
              </div>
            ))}

            <div className="flex items-center gap-2 bg-white/6 border border-white/10 rounded-xl px-3.5 py-2.5">
              <Clock className="w-3.5 h-3.5 shrink-0" style={{ color: 'var(--hs-accent)' }} />
              <span className="text-white/65 text-xs font-semibold">24/7 Emergency</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none" style={{ background: 'linear-gradient(to bottom, transparent, #EFF6FF)' }} />
      </section>
    </>
  );
}
