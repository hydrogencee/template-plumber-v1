'use client';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'Michael T.',
    rating: 5,
    text: 'Called at 11pm with a burst pipe — they were here in 45 minutes. Fixed everything quickly and cleanly. Absolutely saved us.',
    date: '2 weeks ago',
  },
  {
    name: 'Sarah K.',
    rating: 5,
    text: 'Incredibly professional. The tech explained exactly what was wrong before starting any work. Pricing was totally transparent. Will use again.',
    date: '1 month ago',
  },
  {
    name: 'David R.',
    rating: 5,
    text: 'Been using them for years. They installed a new water heater in under 3 hours. No mess, great warranty, highly recommend.',
    date: '3 weeks ago',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

export function ReviewsSection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-sky-600 font-semibold text-sm tracking-widest uppercase mb-3">
            Testimonials
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#0c4a6e] mb-4"
            style={{ fontFamily: 'Lexend, sans-serif' }}
          >
            What Customers Say
          </h2>

          {/* Google badge */}
          <div className="inline-flex items-center gap-2 bg-[#F0F9FF] border border-sky-100 rounded-full px-5 py-2.5 mt-2">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-sm font-semibold text-[#0c4a6e]">4.9 on Google</span>
            <span className="text-xs text-slate-400">· 120+ reviews</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="bg-[#F0F9FF] rounded-2xl p-7 border border-sky-100 flex flex-col gap-4"
            >
              <div className="flex gap-0.5">
                {[...Array(review.rating)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-slate-600 leading-relaxed text-sm flex-1">"{review.text}"</p>
              <div className="flex items-center justify-between pt-2 border-t border-sky-100">
                <span className="font-semibold text-[#0c4a6e] text-sm">{review.name}</span>
                <span className="text-xs text-slate-400">{review.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
