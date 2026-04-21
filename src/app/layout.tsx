import type { Metadata } from 'next';
import siteConfig from '../../site.config';
import { PreviewBanner } from '../components/PreviewBanner';

const { nap_block, hero_title, hero_subheadline } = siteConfig;

export const metadata: Metadata = {
  title: `${nap_block.name} — ${nap_block.city} Plumber`,
  description: hero_subheadline,
};

// schema.org LocalBusiness JSON-LD — SITE-02
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body style={{ margin: 0, fontFamily: 'system-ui, sans-serif' }}>
        {/* Preview banner is fixed at top — SITE-06 */}
        <PreviewBanner />
        {/* padding-top accounts for fixed banner height (~40px) */}
        <main style={{ paddingTop: '48px' }}>
          {children}
        </main>
      </body>
    </html>
  );
}
