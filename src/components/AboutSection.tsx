'use client';
import { motion } from 'framer-motion';
import { CheckCircle2, Award, ThumbsUp } from 'lucide-react';
import type { PlumberSlots } from '../../site.config';

interface AboutSectionProps {
  nap_block: PlumberSlots['nap_block'];
  about_body: PlumberSlots['about_body'];
  google_rating: PlumberSlots['google_rating'];
  google_review_count: PlumberSlots['google_review_count'];
  trust_badges: PlumberSlots['trust_badges'];
}

export function AboutSection({ nap_block, about_body, google_rating, google_review_count, trust_badges }: AboutSectionProps) {
  const stats = [
    google_rating > 0 ? { value: `${google_rating}`, suffix: '★', label: 'Google Rating' } : null,
    google_review_count > 0 ? { value: `${google_review_count}`, suffix: '+', label: 'Happy Customers' } : null,
    { value: '24', suffix: '/7', label: 'Emergency Service' },
    { value: '100', suffix: '%', label: 'Satisfaction Guarantee' },
  ].filter(Boolean) as Array<{ value: string; suffix: string; label: string }>;

  return (
    <section className="py-24 px-6" style={{ backgroundColor: '#EFF6FF' }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: text + trust list */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-flex items-center gap-2 font-bold text-xs tracking-widest uppercase mb-4 px-3 py-1.5 rounded-full" style={{ color: 'var(--hs-accent)', backgroundColor: 'color-mix(in srgb, var(--hs-accent) 10%, transparent)' }}>
              <Award className="w-3.5 h-3.5" />
              About Us
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-black text-slate-900 mb-4 leading-tight" style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.03em' }}>
              {nap_block.name}
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8" style={{ fontFamily: 'var(--font-body)' }}>
              {about_body}
            </p>

            {trust_badges.length > 0 && (
              <ul className="space-y-3.5">
                {trust_badges.map((badge: string) => (
                  <motion.li
                    key={badge}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                    className="flex items-center gap-3 text-slate-700 font-semibold"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    <span className="w-6 h-6 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: 'color-mix(in srgb, var(--hs-accent) 12%, transparent)' }}>
                      <CheckCircle2 className="w-4 h-4" style={{ color: 'var(--hs-accent)' }} />
                    </span>
                    {badge}
                  </motion.li>
                ))}
                <motion.li
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: trust_badges.length * 0.06, ease: 'easeOut' }}
                  className="flex items-center gap-3 text-slate-700 font-semibold"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  <span className="w-6 h-6 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: 'color-mix(in srgb, var(--hs-accent) 12%, transparent)' }}>
                    <ThumbsUp className="w-3.5 h-3.5" style={{ color: 'var(--hs-accent)' }} />
                  </span>
                  Satisfaction Guaranteed or We Make It Right
                </motion.li>
              </ul>
            )}
          </motion.div>

          {/* Right: stats grid */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map(({ value, suffix, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.12 + i * 0.08 }}
                className="relative bg-white rounded-3xl p-7 text-center border border-slate-100 shadow-sm overflow-hidden"
              >
                <div className="absolute inset-x-0 top-0 h-1 rounded-t-3xl" style={{ background: `linear-gradient(90deg, var(--hs-primary), var(--hs-accent))` }} />
                <p className="text-4xl font-black mb-1 tabular-nums" style={{ color: 'var(--hs-hero-bg)', fontFamily: 'var(--font-heading)', letterSpacing: '-0.03em' }}>
                  {value}<span className="text-2xl" style={{ color: 'var(--hs-accent)' }}>{suffix}</span>
                </p>
                <p className="text-xs text-slate-500 font-semibold tracking-wide uppercase" style={{ fontFamily: 'var(--font-body)' }}>{label}</p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
