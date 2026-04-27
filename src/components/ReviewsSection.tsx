'use client';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import type { PlumberSlots } from '../../site.config';

interface ReviewsSectionProps {
  reviews: PlumberSlots['reviews'];
  google_rating: PlumberSlots['google_rating'];
  google_review_count: PlumberSlots['google_review_count'];
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.12 },
  }),
};

export function ReviewsSection({ reviews, google_rating, google_review_count }: ReviewsSectionProps) {
  if (!reviews || reviews.length === 0) return null;

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
            Real Reviews
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#0c4a6e] mb-4"
            style={{ fontFamily: 'Lexend, sans-serif' }}
          >
            What Customers Are Saying
          </h2>

          {google_rating > 0 && (
            <div className="inline-flex items-center gap-2 bg-[#F0F9FF] border border-sky-100 rounded-full px-5 py-2.5 mt-2">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < Math.round(google_rating) ? 'fill-amber-400 text-amber-400' : 'text-slate-200'}`}
                  />
                ))}
              </div>
              <span className="text-sm font-semibold text-[#0c4a6e]">{google_rating} on Google</span>
              {google_review_count > 0 && (
                <span className="text-xs text-slate-400">· {google_review_count}+ reviews</span>
              )}
            </div>
          )}
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.slice(0, 6).map((review: PlumberSlots['reviews'][number], i: number) => (
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
