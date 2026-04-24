'use client';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock } from 'lucide-react';
import type { PlumberSlots } from '../../site.config';

interface NapBlockProps {
  nap_block: PlumberSlots['nap_block'];
}

export function NapBlock({ nap_block }: NapBlockProps) {
  const { name, address, phone, city, state, zip } = nap_block;
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(name + ' ' + city + ' ' + state)}&output=embed`;
  const phoneHref = `tel:+1${phone.replace(/\D/g, '')}`;

  const contactItems = [
    { icon: MapPin, label: 'Address', value: `${address}, ${city}, ${state} ${zip}` },
    { icon: Phone, label: 'Phone', value: phone, href: phoneHref },
    { icon: Clock, label: 'Hours', value: 'Mon–Sun: 7am – 9pm · 24/7 Emergency' },
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-[#0c4a6e]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-sky-300 font-semibold text-sm tracking-widest uppercase mb-3">
            Find Us
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: 'Lexend, sans-serif' }}
          >
            Contact & Location
          </h2>
          <p className="text-sky-100/70 max-w-xl mx-auto text-lg leading-relaxed">
            Proudly serving {city} and surrounding areas. Call anytime — we answer 24/7.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            {contactItems.map(({ icon: Icon, label, value, href }) => (
              <div
                key={label}
                className="flex items-start gap-4 bg-white/10 border border-white/10 rounded-2xl p-5 backdrop-blur-sm"
              >
                <div className="w-10 h-10 rounded-xl bg-sky-500/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Icon className="w-5 h-5 text-sky-300" />
                </div>
                <div>
                  <p className="text-sky-300 text-xs font-semibold uppercase tracking-wider mb-1">{label}</p>
                  {href ? (
                    <a href={href} className="text-white font-medium text-lg hover:text-sky-200 transition-colors cursor-pointer">
                      {value}
                    </a>
                  ) : (
                    <p className="text-white font-medium leading-relaxed">{value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* CTA repeat */}
            <motion.a
              href={phoneHref}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-3 bg-[#F97316] hover:bg-[#ea6c0a] text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors duration-200 shadow-lg shadow-orange-500/30 cursor-pointer w-full"
            >
              <Phone className="w-5 h-5" />
              <span>Call Now — {phone}</span>
            </motion.a>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="rounded-2xl overflow-hidden border border-white/10 shadow-xl"
          >
            <iframe
              src={mapSrc}
              width="100%"
              height="380"
              style={{ border: 0, display: 'block' }}
              loading="lazy"
              title={`${name} location map`}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
