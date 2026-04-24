import type { Metadata } from 'next';
import siteConfig from '../../site.config';
import { PreviewBanner } from '../components/PreviewBanner';
import './globals.css';

const { nap_block, hero_subheadline } = siteConfig;

export const metadata: Metadata = {
  title: `${nap_block.name} — ${nap_block.city} Plumber`,
  description: hero_subheadline,
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: nap_block.name,
  address: {
    '@type': 'PostalAddress',
    streetAddress: nap_block.address,
    addressLocality: nap_block.city,
    addressRegion: nap_block.state,
    postalCode: nap_block.zip,
  },
  telephone: nap_block.phone,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;500;600;700;800&family=Source+Sans+3:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-white text-slate-800 overflow-x-hidden">
        <PreviewBanner />
        <main className="pt-10">
          {children}
        </main>
      </body>
    </html>
  );
}
