'use client';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
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
  const firstName = businessName.split(' ')[0];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14"
        >
          <span className="inline-flex items-center gap-2 font-bold text-xs tracking-widest uppercase mb-4 px-3 py-1.5 rounded-full" style={{ color: 'var(--hs-accent)', backgroundColor: 'color-mix(in srgb, var(--hs-accent) 10%, transparent)' }}>
            Customer Reviews
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-black text-slate-900 mb-6" style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.03em' }}>
            What {firstName} Customers Say
          </h2>

          {google_rating > 0 && (
            <div className="flex flex-wrap items-center gap-4">
              {/* Google badge */}
              <div className="inline-flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-2xl px-5 py-3.5 shadow-sm">
                <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4" style={{ fill: i < Math.round(google_rating) ? '#FBBF24' : '#E2E8F0', color: i < Math.round(google_rating) ? '#FBBF24' : '#E2E8F0' }} />
                  ))}
                </div>
                <span className="font-black text-slate-900 text-lg" style={{ fontFamily: 'var(--font-heading)' }}>{google_rating}</span>
                <span className="text-slate-400 text-sm font-medium">on Google</span>
                {google_review_count > 0 && (
                  <span className="text-slate-400 text-sm">· {google_review_count} reviews</span>
                )}
              </div>

              {googleReviewUrl && google_review_count > 0 && (
                <a
                  href={googleReviewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-bold transition-opacity hover:opacity-70 cursor-pointer"
                  style={{ color: 'var(--hs-accent)' }}
                >
                  See all {google_review_count} reviews on Google →
                </a>
              )}
            </div>
          )}
        </motion.div>

        {/* Review cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.slice(0, 6).map((review: PlumberSlots['reviews'][number], i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="relative bg-slate-50 hover:bg-white rounded-2xl p-7 border border-slate-100 hover:border-slate-200 hover:shadow-lg transition-all duration-200 flex flex-col gap-5"
            >
              {/* Large decorative quote */}
              <div className="absolute top-4 right-5 text-7xl font-black leading-none select-none opacity-[0.06]" style={{ color: 'var(--hs-accent)', fontFamily: 'Georgia, serif' }}>"</div>

              {/* Stars */}
              <div className="flex gap-0.5">
                {[...Array(review.rating)].map((_, j) => (
                  <Star key={j} className="w-4 h-4" style={{ fill: '#FBBF24', color: '#FBBF24' }} />
                ))}
              </div>

              <p className="text-slate-600 leading-relaxed text-sm flex-1" style={{ fontFamily: 'var(--font-body)' }}>"{review.text}"</p>

              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                {/* Avatar initial */}
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0" style={{ backgroundColor: 'var(--hs-primary)' }}>
                  {review.name.charAt(0).toUpperCase()}
                </div>
                <div>
                  <span className="font-bold text-slate-900 text-sm block" style={{ fontFamily: 'var(--font-heading)' }}>{review.name}</span>
                  <span className="text-xs text-slate-400">{review.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
