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
    { value: '24/7', label: 'Emergency Service' },
    { value: '100%', label: 'Satisfaction Guaranteed' },
  ].filter(Boolean) as Array<{ value: string; label: string }>;

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-sky-600 font-semibold text-sm tracking-widest uppercase mb-3">
              Our Story
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold text-[#0c4a6e] mb-6 leading-tight"
              style={{ fontFamily: 'Lexend, sans-serif' }}
            >
              About {nap_block.name}
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-8">{about_body}</p>

            {trust_badges.length > 0 && (
              <ul className="space-y-3">
                {trust_badges.map((badge: string) => (
                  <li key={badge} className="flex items-center gap-3 text-slate-600">
                    <CheckCircle2 className="w-5 h-5 text-sky-500 shrink-0" />
                    <span>{badge}</span>
                  </li>
                ))}
              </ul>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.slice(0, 4).map(({ value, label }) => (
              <motion.div
                key={label}
                whileInView={{ scale: [0.9, 1.02, 1] }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-[#F0F9FF] rounded-2xl p-6 text-center border border-sky-100"
              >
                <p
                  className="text-3xl font-bold text-[#0c4a6e] mb-1"
                  style={{ fontFamily: 'Lexend, sans-serif' }}
                >
                  {value}
                </p>
                <p className="text-sm text-slate-500 font-medium">{label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
