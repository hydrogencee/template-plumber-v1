import type { Metadata } from 'next';
import siteConfig from '../../site.config';
import { PreviewBanner } from '../components/PreviewBanner';
import './globals.css';

const { nap_block, hero_subheadline, theme, google_rating, google_review_count, reviews, services, faqs, cover_photo_url } = siteConfig;

export const metadata: Metadata = {
  title: `${nap_block.name} — ${nap_block.city} Plumber`,
  description: hero_subheadline,
  openGraph: {
    title: `${nap_block.name} — ${nap_block.city} Plumber`,
    description: hero_subheadline,
    type: 'website',
    locale: 'en_US',
    ...(cover_photo_url ? { images: [{ url: cover_photo_url, width: 800, height: 500, alt: nap_block.name }] } : {}),
  },
};

const businessSchema = {
  '@context': 'https://schema.org',
  '@type': 'Plumber',
  name: nap_block.name,
  telephone: nap_block.phone,
  url: '/',
  address: {
    '@type': 'PostalAddress',
    ...(nap_block.address ? { streetAddress: nap_block.address } : {}),
    addressLocality: nap_block.city,
    addressRegion: nap_block.state,
    ...(nap_block.zip ? { postalCode: nap_block.zip } : {}),
    addressCountry: 'US',
  },
  areaServed: { '@type': 'City', name: nap_block.city },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: nap_block.phone,
    contactType: 'customer service',
    availableLanguage: 'English',
    hoursAvailable: 'Mo-Su 00:00-23:59',
  },
  ...(google_rating > 0 ? {
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: google_rating,
      reviewCount: google_review_count,
      bestRating: 5,
      worstRating: 1,
    },
  } : {}),
  ...(reviews && reviews.length > 0 ? {
    review: reviews.slice(0, 3).map(r => ({
      '@type': 'Review',
      author: { '@type': 'Person', name: r.name },
      reviewRating: { '@type': 'Rating', ratingValue: r.rating, bestRating: 5 },
      reviewBody: r.text,
      datePublished: r.date,
    })),
  } : {}),
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Plumbing Services',
    itemListElement: services.slice(0, 6).map(s => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: s.name, description: s.blurb },
    })),
  },
};

const faqSchema = faqs && faqs.length > 0 ? {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f: { question: string; answer: string }) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
} : null;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;500;600;700;800;900&family=Source+Sans+3:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
        <style dangerouslySetInnerHTML={{ __html: `
          :root {
            --hs-hero-bg: ${theme.hero_bg};
            --hs-primary: ${theme.primary};
            --hs-accent: ${theme.accent};
          }
        `}} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }} />
        {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
      </head>
      <body className="bg-[#F8FAFC] text-[#020617] overflow-x-hidden">
        <PreviewBanner />
        <main className="pt-10">
          {children}
        </main>
      </body>
    </html>
  );
}
