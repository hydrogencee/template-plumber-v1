'use client';
import { motion } from 'framer-motion';
import { Wrench, Droplets, Flame, ShowerHead, AlertTriangle, Settings } from 'lucide-react';
import type { PlumberSlots } from '../../site.config';

interface ServicesSectionProps {
  services: PlumberSlots['services'];
  city: string;
}

const serviceIcons = [Wrench, Droplets, Flame, ShowerHead, AlertTriangle, Settings];

export function ServicesSection({ services, city }: ServicesSectionProps) {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="inline-block font-semibold text-sm tracking-widest uppercase mb-3" style={{ color: 'var(--hs-accent)' }}>
            Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-4 max-w-xl">
            What We Handle in {city}
          </h2>
          <div className="w-12 h-1 rounded-full" style={{ backgroundColor: 'var(--hs-accent)' }} />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => {
            const Icon = serviceIcons[i % serviceIcons.length];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -3, transition: { duration: 0.15 } }}
                className="group bg-[#F8FAFC] hover:bg-white rounded-2xl p-7 border border-slate-100 hover:shadow-lg transition-all duration-150 cursor-default"
              >
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5" style={{ backgroundColor: 'color-mix(in srgb, var(--hs-primary) 10%, transparent)' }}>
                  <Icon className="w-5 h-5" style={{ color: 'var(--hs-primary)' }} />
                </div>
                <h3 className="text-base font-semibold text-[#0F172A] mb-2.5">{service.name}</h3>
                <p className="text-slate-500 leading-relaxed text-sm">{service.blurb}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
