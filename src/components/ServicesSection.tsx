'use client';
import { motion } from 'framer-motion';
import { Wrench, Droplets, Flame, ShowerHead, AlertTriangle, Settings } from 'lucide-react';
import type { PlumberSlots } from '../../site.config';

interface ServicesSectionProps {
  services: PlumberSlots['services'];
}

const serviceIcons = [Wrench, Droplets, Flame, ShowerHead, AlertTriangle, Settings];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

export function ServicesSection({ services }: ServicesSectionProps) {
  return (
    <section className="py-20 px-6 bg-[#F0F9FF]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-sky-600 font-semibold text-sm tracking-widest uppercase mb-3">
            What We Do
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#0c4a6e] mb-4"
            style={{ fontFamily: 'Lexend, sans-serif' }}
          >
            Our Services
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-lg leading-relaxed">
            Professional plumbing solutions delivered with speed, quality, and guaranteed satisfaction.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = serviceIcons[i % serviceIcons.length];
            return (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-lg border border-slate-100 transition-shadow duration-300 cursor-default"
              >
                <div className="w-12 h-12 rounded-xl bg-sky-50 flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-sky-500" />
                </div>
                <h3
                  className="text-lg font-semibold text-[#0c4a6e] mb-3"
                  style={{ fontFamily: 'Lexend, sans-serif' }}
                >
                  {service.name}
                </h3>
                <p className="text-slate-500 leading-relaxed text-sm">{service.blurb}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
