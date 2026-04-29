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
  const displayAddress = [address, city, state, zip].filter(Boolean).join(', ');

  const contactItems = [
    ...(displayAddress ? [{ icon: MapPin, label: 'Address', value: displayAddress }] : []),
    { icon: Phone, label: 'Phone', value: phone, href: phoneHref },
    { icon: Clock, label: 'Hours', value: 'Emergency service available 24/7' },
  ] as Array<{ icon: typeof MapPin; label: string; value: string; href?: string }>;

  return (
    <section id="location" className="py-24 px-6" style={{ backgroundColor: 'var(--hs-hero-bg)' }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14"
        >
          <span
            className="inline-flex items-center gap-2 font-bold text-xs tracking-widest uppercase mb-4 px-3 py-1.5 rounded-full"
            style={{ color: 'var(--hs-accent)', backgroundColor: 'color-mix(in srgb, var(--hs-accent) 12%, transparent)' }}
          >
            Find Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-black text-white mb-3" style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.03em' }}>
            Contact & Location
          </h2>
          <p className="text-white/50 max-w-md mx-auto text-lg leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
            Proudly serving {city} and surrounding areas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-4"
          >
            {contactItems.map(({ icon: Icon, label, value, href }) => (
              <div
                key={label}
                className="flex items-start gap-4 bg-white/6 border border-white/8 rounded-2xl p-5 transition-colors hover:bg-white/10"
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5" style={{ backgroundColor: 'color-mix(in srgb, var(--hs-accent) 15%, transparent)' }}>
                  <Icon className="w-5 h-5" style={{ color: 'var(--hs-accent)' }} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: 'var(--hs-accent)', fontFamily: 'var(--font-heading)' }}>
                    {label}
                  </p>
                  {href ? (
                    <a href={href} className="text-white font-semibold text-lg hover:opacity-80 transition-opacity cursor-pointer" style={{ fontFamily: 'var(--font-body)' }}>
                      {value}
                    </a>
                  ) : (
                    <p className="text-white/70 font-medium leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>{value}</p>
                  )}
                </div>
              </div>
            ))}

            <motion.a
              href={phoneHref}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-3 text-white font-bold px-8 py-4 rounded-2xl text-lg shadow-2xl cursor-pointer w-full transition-opacity hover:opacity-90"
              style={{
                backgroundColor: 'var(--hs-accent)',
                boxShadow: '0 8px 32px color-mix(in srgb, var(--hs-accent) 40%, transparent)',
                fontFamily: 'var(--font-heading)',
              }}
            >
              <Phone className="w-5 h-5" />
              <span>Call Now — {phone}</span>
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
          >
            <iframe
              src={mapSrc}
              width="100%"
              height="400"
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
