'use client';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
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
    google_rating > 0 ? { value: `${google_rating}★`, label: 'Google Rating' } : null,
    google_review_count > 0 ? { value: `${google_review_count}+`, label: 'Google Reviews' } : null,
  ].filter(Boolean) as Array<{ value: string; label: string }>;

  return (
    <section className="py-24 px-6 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block font-semibold text-sm tracking-widest uppercase mb-3" style={{ color: 'var(--hs-accent)' }}>
              About Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-4 leading-tight">
              {nap_block.name}
            </h2>
            <div className="w-12 h-1 rounded-full mb-7" style={{ backgroundColor: 'var(--hs-accent)' }} />
            <p className="text-slate-600 text-lg leading-relaxed mb-8">{about_body}</p>
            {trust_badges.length > 0 && (
              <ul className="space-y-3">
                {trust_badges.map((badge: string) => (
                  <li key={badge} className="flex items-center gap-3 text-slate-700 font-medium">
                    <CheckCircle2 className="w-5 h-5 shrink-0" style={{ color: 'var(--hs-accent)' }} />
                    {badge}
                  </li>
                ))}
              </ul>
            )}
          </motion.div>

          {stats.length > 0 && (
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map(({ value, label }) => (
                <motion.div
                  key={label}
                  whileInView={{ scale: [0.92, 1.02, 1] }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-2xl p-8 text-center border border-slate-100 shadow-sm"
                >
                  <p className="text-4xl font-bold mb-2" style={{ color: 'var(--hs-hero-bg)' }}>{value}</p>
                  <p className="text-sm text-slate-500 font-medium">{label}</p>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
