'use client';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import type { PlumberSlots } from '../../site.config';

interface AboutSectionProps {
  nap_block: PlumberSlots['nap_block'];
  about_body: PlumberSlots['about_body'];
}

const highlights = [
  'Licensed & fully insured in all work',
  'Upfront pricing — no hidden fees',
  'Background-checked technicians',
  'Satisfaction guaranteed on every job',
];

export function AboutSection({ nap_block, about_body }: AboutSectionProps) {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Text side */}
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
            <p className="text-slate-500 text-lg leading-relaxed mb-8">
              {about_body}
            </p>

            <ul className="space-y-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3 text-slate-600">
                  <CheckCircle2 className="w-5 h-5 text-sky-500 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Visual side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { value: '15+', label: 'Years in Business' },
              { value: '2,400+', label: 'Jobs Completed' },
              { value: '4.9★', label: 'Google Rating' },
              { value: '24/7', label: 'Emergency Service' },
            ].map(({ value, label }) => (
              <div
                key={label}
                className="bg-[#F0F9FF] rounded-2xl p-6 text-center border border-sky-100"
              >
                <p
                  className="text-3xl font-bold text-[#0c4a6e] mb-1"
                  style={{ fontFamily: 'Lexend, sans-serif' }}
                >
                  {value}
                </p>
                <p className="text-sm text-slate-500 font-medium">{label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
