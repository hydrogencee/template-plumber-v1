'use client';
import { motion } from 'framer-motion';
import { MapPin, Phone } from 'lucide-react';
import type { PlumberSlots } from '../../site.config';

interface NapBlockProps {
  nap_block: PlumberSlots['nap_block'];
}

export function NapBlock({ nap_block }: NapBlockProps) {
  const { name, address, phone, city, state, zip } = nap_block;
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(name + ' ' + city + ' ' + state)}&output=embed`;
  const phoneHref = `tel:+1${phone.replace(/\D/g, '')}`;
  const displayAddress = [address, city, state, zip].filter(Boolean).join(', ');

  const contactItems = [
    ...(displayAddress ? [{ icon: MapPin, label: 'Address', value: displayAddress }] : []),
    { icon: Phone, label: 'Phone', value: phone, href: phoneHref },
  ] as Array<{ icon: typeof MapPin; label: string; value: string; href?: string }>;

  return (
    <section id="location" className="py-20 px-6" style={{ backgroundColor: 'var(--hs-primary)' }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span
            className="inline-block font-semibold text-sm tracking-widest uppercase mb-3"
            style={{ color: 'var(--hs-accent)' }}
          >
            Find Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Contact & Location
          </h2>
          <p className="text-white/60 max-w-xl mx-auto text-lg leading-relaxed">
            Proudly serving {city} and surrounding areas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
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
                className="flex items-start gap-4 bg-white/8 border border-white/10 rounded-2xl p-5"
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5 bg-white/10">
                  <Icon className="w-5 h-5" style={{ color: 'var(--hs-accent)' }} />
                </div>
                <div>
                  <p
                    className="text-xs font-semibold uppercase tracking-wider mb-1"
                    style={{ color: 'var(--hs-accent)' }}
                  >
                    {label}
                  </p>
                  {href ? (
                    <a href={href} className="text-white font-medium text-lg hover:opacity-80 transition-opacity cursor-pointer">
                      {value}
                    </a>
                  ) : (
                    <p className="text-white/80 font-medium leading-relaxed">{value}</p>
                  )}
                </div>
              </div>
            ))}

            <motion.a
              href={phoneHref}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-3 text-white font-bold px-8 py-4 rounded-xl text-lg transition-opacity duration-200 hover:opacity-90 shadow-lg cursor-pointer w-full"
              style={{ backgroundColor: 'var(--hs-accent)' }}
            >
              <Phone className="w-5 h-5" />
              <span>Call Now — {phone}</span>
            </motion.a>
          </motion.div>

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
