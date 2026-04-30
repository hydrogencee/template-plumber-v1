'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import type { PlumberSlots } from '../../site.config';

interface FaqSectionProps {
  faqs: PlumberSlots['faqs'];
  city: string;
}

export function FaqSection({ faqs, city }: FaqSectionProps) {
  if (!faqs || faqs.length === 0) return null;
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="mb-12"
        >
          <span className="inline-flex items-center gap-2 font-bold text-xs tracking-widest uppercase mb-4 px-3 py-1.5 rounded-full" style={{ color: 'var(--hs-accent)', backgroundColor: 'color-mix(in srgb, var(--hs-accent) 10%, transparent)' }}>
            <HelpCircle className="w-3.5 h-3.5" />
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900" style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.03em' }}>
            Common Questions in {city}
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06, ease: 'easeOut' }}
              className="border border-slate-200 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-white hover:bg-slate-50 transition-colors duration-100 cursor-pointer"
                aria-expanded={open === i}
              >
                <span className="font-bold text-slate-900 text-base leading-snug" style={{ fontFamily: 'var(--font-heading)' }}>
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: open === i ? 180 : 0 }}
                  transition={{ duration: 0.15 }}
                  className="shrink-0"
                >
                  <ChevronDown className="w-5 h-5 text-slate-400" />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-slate-600 leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
