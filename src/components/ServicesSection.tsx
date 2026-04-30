'use client';
import { motion } from 'framer-motion';
import { Wrench, Droplets, Flame, ShowerHead, AlertTriangle, Settings } from 'lucide-react';
import type { PlumberSlots } from '../../site.config';

interface ServicesSectionProps {
  services: PlumberSlots['services'];
  city: string;
}

const serviceIcons = [Wrench, Droplets, Flame, ShowerHead, AlertTriangle, Settings];

const accentColors = [
  { bg: 'rgba(59,130,246,0.12)', icon: '#3B82F6', bar: '#3B82F6' },
  { bg: 'rgba(249,115,22,0.1)', icon: '#F97316', bar: '#F97316' },
  { bg: 'rgba(34,197,94,0.1)', icon: '#22C55E', bar: '#22C55E' },
  { bg: 'rgba(168,85,247,0.1)', icon: '#A855F7', bar: '#A855F7' },
  { bg: 'rgba(239,68,68,0.1)', icon: '#EF4444', bar: '#EF4444' },
  { bg: 'rgba(234,179,8,0.1)', icon: '#EAB308', bar: '#EAB308' },
];

export function ServicesSection({ services, city }: ServicesSectionProps) {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14"
        >
          <span className="inline-flex items-center gap-2 font-bold text-xs tracking-widest uppercase mb-4 px-3 py-1.5 rounded-full" style={{ color: 'var(--hs-accent)', backgroundColor: 'color-mix(in srgb, var(--hs-accent) 10%, transparent)' }}>
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-black text-slate-900 mb-3 max-w-xl" style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.03em' }}>
            What We Handle in {city}
          </h2>
          <p className="text-slate-500 text-lg max-w-xl leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
            Fast, reliable plumbing from licensed professionals — repairs done right the first time.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => {
            const Icon = serviceIcons[i % serviceIcons.length];
            const colors = accentColors[i % accentColors.length];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -3, transition: { duration: 0.1 } }}
                className="group relative bg-white rounded-2xl p-7 border border-slate-100 hover:border-slate-200 hover:shadow-xl transition-all duration-100 cursor-default overflow-hidden"
              >
                {/* Top accent bar */}
                <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-200" style={{ backgroundColor: colors.bar }} />

                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-colors duration-200" style={{ backgroundColor: colors.bg }}>
                  <Icon className="w-6 h-6 transition-colors duration-200" style={{ color: colors.icon }} />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2.5" style={{ fontFamily: 'var(--font-heading)' }}>{service.name}</h3>
                <p className="text-slate-500 leading-relaxed text-sm" style={{ fontFamily: 'var(--font-body)' }}>{service.blurb}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
