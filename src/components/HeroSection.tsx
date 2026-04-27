'use client';
import { motion } from 'framer-motion';
import { Phone, ChevronDown, ShieldCheck } from 'lucide-react';
import type { PlumberSlots } from '../../site.config';

interface HeroSectionProps {
  hero_title: PlumberSlots['hero_title'];
  hero_subheadline: PlumberSlots['hero_subheadline'];
  cta_text: PlumberSlots['cta_text'];
  nap_block: PlumberSlots['nap_block'];
  trust_badges: PlumberSlots['trust_badges'];
  google_rating: PlumberSlots['google_rating'];
}

export function HeroSection({ hero_title, hero_subheadline, cta_text, nap_block, trust_badges, google_rating }: HeroSectionProps) {
  const phoneHref = `tel:+1${nap_block.phone.replace(/\D/g, '')}`;

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden bg-[#0c4a6e]">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0c4a6e] via-[#0f3554] to-[#071e2f]" />
      <div className="absolute top-[-10%] right-[-5%] w-96 h-96 rounded-full bg-sky-500/10 blur-3xl" />
      <div className="absolute bottom-[-10%] left-[-5%] w-80 h-80 rounded-full bg-sky-400/10 blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-sky-500/20 border border-sky-400/30 rounded-full px-4 py-1.5 text-sky-300 text-sm font-medium mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
          Serving {nap_block.city}, {nap_block.state}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 tracking-tight"
          style={{ fontFamily: 'Lexend, sans-serif' }}
        >
          {hero_title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl text-sky-100/80 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {hero_subheadline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-14"
        >
          <a
            href={phoneHref}
            className="group flex items-center gap-3 bg-[#F97316] hover:bg-[#ea6c0a] text-white font-bold px-8 py-4 rounded-xl text-lg transition-all duration-200 shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-105 cursor-pointer w-full sm:w-auto justify-center"
          >
            <Phone className="w-5 h-5 group-hover:animate-pulse" />
            <span>{nap_block.phone}</span>
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-200 backdrop-blur-sm cursor-pointer w-full sm:w-auto justify-center"
          >
            {cta_text}
          </a>
        </motion.div>

        {trust_badges.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto"
          >
            {trust_badges.map((badge: string) => (
              <div
                key={badge}
                className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl py-2.5 px-4 backdrop-blur-sm"
              >
                <ShieldCheck className="w-4 h-4 text-sky-400 shrink-0" />
                <span className="text-xs text-sky-100/80 font-medium">{badge}</span>
              </div>
            ))}
            {google_rating > 0 && (
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl py-2.5 px-4 backdrop-blur-sm">
                <span className="text-amber-400 text-xs font-bold">{google_rating}★</span>
                <span className="text-xs text-sky-100/80 font-medium">Google Rating</span>
              </div>
            )}
          </motion.div>
        )}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40"
      >
        <ChevronDown className="w-6 h-6 animate-bounce" />
      </motion.div>
    </section>
  );
}
