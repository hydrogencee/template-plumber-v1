'use client';
import { motion } from 'framer-motion';
import { Send, User, Phone, MessageSquare, Clock, Zap } from 'lucide-react';

export function ContactForm() {
  const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID ?? '';
  const action = formspreeId ? `https://formspree.io/f/${formspreeId}` : '#';

  return (
    <section id="contact" className="py-24 px-6" style={{ backgroundColor: '#EFF6FF' }}>
      <div className="max-w-2xl mx-auto">

        {/* Urgency badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 font-bold text-xs tracking-wider uppercase px-4 py-2 rounded-full mb-5" style={{ color: '#DC2626', backgroundColor: 'rgba(220,38,38,0.08)', border: '1px solid rgba(220,38,38,0.15)' }}>
            <Zap className="w-3.5 h-3.5" />
            Emergency? We respond within the hour.
          </div>

          <span className="block font-bold text-xs tracking-widest uppercase mb-4 px-3 py-1.5 rounded-full w-fit mx-auto" style={{ color: 'var(--hs-accent)', backgroundColor: 'color-mix(in srgb, var(--hs-accent) 10%, transparent)' }}>
            Free Estimate
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-black text-slate-900 mb-3" style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.03em' }}>
            Get a Free Quote
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
            Fill out the form and we'll call you back within the hour.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden"
        >
          {/* Top accent */}
          <div className="h-1.5 w-full" style={{ background: `linear-gradient(90deg, var(--hs-primary), var(--hs-accent))` }} />

          <div className="p-8 sm:p-10">
            {/* Response promise row */}
            <div className="flex items-center gap-5 mb-8 p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <Clock className="w-5 h-5 shrink-0" style={{ color: 'var(--hs-accent)' }} />
              <div>
                <p className="text-sm font-bold text-slate-800" style={{ fontFamily: 'var(--font-heading)' }}>We call back within 60 minutes</p>
                <p className="text-xs text-slate-500" style={{ fontFamily: 'var(--font-body)' }}>Monday–Sunday · 7am–9pm · Emergency line 24/7</p>
              </div>
            </div>

            <form action={action} method="POST" className="space-y-5">
              <input type="hidden" name="_subject" value="New quote request from website" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-bold text-slate-700 mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                    Your Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      placeholder="Jane Smith"
                      className="w-full pl-10 pr-4 py-3.5 border border-slate-200 rounded-xl text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-200 text-sm bg-white"
                      style={{ fontFamily: 'var(--font-body)' }}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-phone" className="block text-sm font-bold text-slate-700 mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="(203) 555-0100"
                      className="w-full pl-10 pr-4 py-3.5 border border-slate-200 rounded-xl text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-200 text-sm bg-white"
                      style={{ fontFamily: 'var(--font-body)' }}
                    />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-sm font-bold text-slate-700 mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                  Describe the Issue
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400 pointer-events-none" />
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    required
                    placeholder="E.g. leaking pipe under kitchen sink, need urgent repair..."
                    className="w-full pl-10 pr-4 py-3.5 border border-slate-200 rounded-xl text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-200 text-sm resize-none bg-white"
                    style={{ fontFamily: 'var(--font-body)' }}
                  />
                </div>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-3 text-white font-bold px-8 py-4 rounded-xl text-lg shadow-lg cursor-pointer transition-opacity hover:opacity-90"
                style={{ backgroundColor: 'var(--hs-accent)', boxShadow: '0 8px 24px color-mix(in srgb, var(--hs-accent) 35%, transparent)', fontFamily: 'var(--font-heading)' }}
              >
                <Send className="w-5 h-5" />
                Send My Request
              </motion.button>

              <p className="text-center text-xs text-slate-400" style={{ fontFamily: 'var(--font-body)' }}>
                No spam. We'll only use your info to follow up on this request.
              </p>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
