'use client';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import type { PlumberSlots } from '../../site.config';

interface ReviewsSectionProps {
  reviews: PlumberSlots['reviews'];
  google_rating: PlumberSlots['google_rating'];
  google_review_count: PlumberSlots['google_review_count'];
  businessName: string;
  google_place_id?: string;
}

export function ReviewsSection({ reviews, google_rating, google_review_count, businessName, google_place_id }: ReviewsSectionProps) {
  if (!reviews || reviews.length === 0) return null;
  const googleReviewUrl = google_place_id
    ? `https://www.google.com/maps/place/?q=place_id:${google_place_id}`
    : null;

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
            Reviews
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-4">
            What {businessName.split(' ')[0]} Customers Say
          </h2>
          <div className="w-12 h-1 rounded-full mb-6" style={{ backgroundColor: 'var(--hs-accent)' }} />

          {google_rating > 0 && (
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-3 bg-[#F8FAFC] border border-slate-200 rounded-xl px-5 py-3">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4" style={{ fill: i < Math.round(google_rating) ? 'var(--hs-accent)' : '#e2e8f0', color: i < Math.round(google_rating) ? 'var(--hs-accent)' : '#e2e8f0' }} />
                  ))}
                </div>
                <span className="font-bold text-[#0F172A]">{google_rating}</span>
                <span className="text-slate-400 text-sm">on Google</span>
                {google_review_count > 0 && (
                  <span className="text-slate-400 text-sm">· {google_review_count} reviews</span>
                )}
              </div>
              {googleReviewUrl && google_review_count > 0 && (
                <a
                  href={googleReviewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold underline underline-offset-2 transition-opacity hover:opacity-70 cursor-pointer"
                  style={{ color: 'var(--hs-accent)' }}
                >
                  See all {google_review_count} reviews on Google →
                </a>
              )}
            </div>
          )}
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.slice(0, 6).map((review: PlumberSlots['reviews'][number], i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#F8FAFC] rounded-2xl p-7 border border-slate-100 flex flex-col gap-5"
            >
              <Quote className="w-6 h-6 shrink-0 opacity-40" style={{ color: 'var(--hs-accent)' }} />
              <p className="text-slate-600 leading-relaxed text-sm flex-1 italic">"{review.text}"</p>
              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <div>
                  <span className="font-semibold text-[#0F172A] text-sm block">{review.name}</span>
                  <div className="flex gap-0.5 mt-1">
                    {[...Array(review.rating)].map((_, j) => (
                      <Star key={j} className="w-3 h-3" style={{ fill: 'var(--hs-accent)', color: 'var(--hs-accent)' }} />
                    ))}
                  </div>
                </div>
                <span className="text-xs text-slate-400">{review.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
