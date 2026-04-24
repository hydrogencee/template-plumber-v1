'use client';
import { motion } from 'framer-motion';
import { Send, User, Phone, MessageSquare } from 'lucide-react';

export function ContactForm() {
  const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID ?? '';
  const action = formspreeId ? `https://formspree.io/f/${formspreeId}` : '#';

  return (
    <section className="py-20 px-6 bg-[#F0F9FF]">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-sky-600 font-semibold text-sm tracking-widest uppercase mb-3">
            Free Estimate
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#0c4a6e] mb-4"
            style={{ fontFamily: 'Lexend, sans-serif' }}
          >
            Get a Free Quote
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            Fill out the form and we'll call you back within the hour.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8 sm:p-10"
        >
          <form action={action} method="POST" className="space-y-6">
            <input type="hidden" name="_subject" value="New quote request from website" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="contact-name" className="block text-sm font-semibold text-slate-700 mb-2">
                  Your Name
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    placeholder="Jane Smith"
                    className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition-all duration-200 text-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-phone" className="block text-sm font-semibold text-slate-700 mb-2">
                  Phone Number
                </label>
                <div className="relative">
                  <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="(203) 555-0100"
                    className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition-all duration-200 text-sm"
                  />
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="contact-message" className="block text-sm font-semibold text-slate-700 mb-2">
                Describe the Issue
              </label>
              <div className="relative">
                <MessageSquare className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  required
                  placeholder="E.g. leaking pipe under kitchen sink, need urgent repair..."
                  className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition-all duration-200 text-sm resize-none"
                />
              </div>
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-center gap-3 bg-[#F97316] hover:bg-[#ea6c0a] text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors duration-200 shadow-lg shadow-orange-500/20 cursor-pointer"
            >
              <Send className="w-5 h-5" />
              Send My Request
            </motion.button>

            <p className="text-center text-xs text-slate-400">
              No spam. We'll only use your info to follow up on this request.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
