'use client';
import { motion } from 'framer-motion';
import { Send, User, Phone, MessageSquare, Clock, Zap } from 'lucide-react';
import type { PlumberSlots } from '../../site.config';

interface ContactFormProps {
  nap_block: PlumberSlots['nap_block'];
}

export function ContactForm({ nap_block }: ContactFormProps) {
  const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID ?? '';
  const action = formspreeId ? `https://formspree.io/f/${formspreeId}` : '#';
  const phoneHref = `tel:+1${nap_block.phone.replace(/\D/g, '')}`;

  return (
    // pb-24 md:pb-0 prevents sticky mobile call bar from covering the submit button
    <section id="contact" className="py-24 px-6 pb-28 md:pb-24" style={{ backgroundColor: '#EFF6FF' }}>
      <div className="max-w-2xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 font-bold text-xs tracking-wider uppercase px-4 py-2 rounded-full mb-5" style={{ color: '#DC2626', backgroundColor: 'rgba(220,38,38,0.08)', border: '1px solid rgba(220,38,38,0.15)' }}>
            <Zap className="w-3.5 h-3.5" />
            Emergency? We respond within the hour.
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-black text-slate-900 mb-3" style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.03em' }}>
            Need Help? Let's Talk.
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
            Call for fastest response, or leave your details and we'll call you.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          className="space-y-4"
        >
          {/* Primary CTA: Call Now */}
          <motion.a
            href={phoneHref}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-center gap-3 text-white font-bold px-8 py-5 rounded-2xl text-xl shadow-xl cursor-pointer w-full"
            style={{
              backgroundColor: 'var(--hs-accent)',
              boxShadow: '0 8px 32px color-mix(in srgb, var(--hs-accent) 40%, transparent)',
              fontFamily: 'var(--font-heading)',
            }}
          >
            <Phone className="w-6 h-6 shrink-0" />
            Call {nap_block.phone}
          </motion.a>

          {/* Divider */}
          <div className="flex items-center gap-4 py-2">
            <div className="flex-1 h-px bg-slate-200" />
            <span className="text-slate-400 text-sm font-medium" style={{ fontFamily: 'var(--font-body)' }}>or request a callback</span>
            <div className="flex-1 h-px bg-slate-200" />
          </div>

          {/* Secondary: Form */}
          <div className="bg-white rounded-3xl shadow-lg border border-slate-100 overflow-hidden">
            <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, var(--hs-primary), var(--hs-accent))` }} />

            <div className="p-7 sm:p-9">
              <div className="flex items-center gap-4 mb-7 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                <Clock className="w-4 h-4 shrink-0" style={{ color: 'var(--hs-accent)' }} />
                <p className="text-sm text-slate-600" style={{ fontFamily: 'var(--font-body)' }}>
                  <span className="font-bold text-slate-800">We call back within 60 minutes</span> · Mon–Sun 7am–9pm · Emergency line 24/7
                </p>
              </div>

              <form action={action} method="POST" className="space-y-4">
                <input type="hidden" name="_subject" value="New quote request from website" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-sm font-bold text-slate-700 mb-1.5" style={{ fontFamily: 'var(--font-heading)' }}>
                      Your Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                      <input id="contact-name" name="name" type="text" required placeholder="Jane Smith"
                        className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:border-transparent text-sm bg-white"
                        style={{ fontFamily: 'var(--font-body)' }} />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-phone" className="block text-sm font-bold text-slate-700 mb-1.5" style={{ fontFamily: 'var(--font-heading)' }}>
                      Your Phone
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                      <input id="contact-phone" name="phone" type="tel" required placeholder="(203) 555-0100"
                        className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:border-transparent text-sm bg-white"
                        style={{ fontFamily: 'var(--font-body)' }} />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-sm font-bold text-slate-700 mb-1.5" style={{ fontFamily: 'var(--font-heading)' }}>
                    Describe the Issue
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400 pointer-events-none" />
                    <textarea id="contact-message" name="message" rows={3} placeholder="E.g. leaking pipe under kitchen sink..."
                      className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:border-transparent text-sm resize-none bg-white"
                      style={{ fontFamily: 'var(--font-body)' }} />
                  </div>
                </div>

                <motion.button type="submit" whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-2.5 text-white font-bold px-8 py-3.5 rounded-xl text-base shadow-md cursor-pointer"
                  style={{ backgroundColor: 'var(--hs-primary)', fontFamily: 'var(--font-heading)' }}
                >
                  <Send className="w-4 h-4" />
                  Request a Callback
                </motion.button>

                <p className="text-center text-xs text-slate-400" style={{ fontFamily: 'var(--font-body)' }}>
                  No spam. We'll only use your info to follow up on this request.
                </p>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
