import type { Metadata } from 'next';
import siteConfig from '../../site.config';
import { PreviewBanner } from '../components/PreviewBanner';
import './globals.css';

const { nap_block, hero_subheadline, theme } = siteConfig;

export const metadata: Metadata = {
  title: `${nap_block.name} — ${nap_block.city} Plumber`,
  description: hero_subheadline,
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Plumber',
  name: nap_block.name,
  address: {
    '@type': 'PostalAddress',
    ...(nap_block.address ? { streetAddress: nap_block.address } : {}),
    addressLocality: nap_block.city,
    addressRegion: nap_block.state,
    ...(nap_block.zip ? { postalCode: nap_block.zip } : {}),
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
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;0,9..40,800&display=swap"
          rel="stylesheet"
        />
        <style dangerouslySetInnerHTML={{ __html: `
          :root {
            --hs-hero-bg: ${theme.hero_bg};
            --hs-primary: ${theme.primary};
            --hs-accent: ${theme.accent};
          }
        `}} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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
