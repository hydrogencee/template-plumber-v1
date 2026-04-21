import type { PlumberSlots } from '../../site.config';

interface HeroSectionProps {
  hero_title: PlumberSlots['hero_title'];
  hero_subheadline: PlumberSlots['hero_subheadline'];
  cta_text: PlumberSlots['cta_text'];
  nap_block: PlumberSlots['nap_block'];
}

export function HeroSection({ hero_title, hero_subheadline, cta_text, nap_block }: HeroSectionProps) {
  return (
    <section
      style={{
        backgroundColor: '#1e3a5f',
        color: '#ffffff',
        padding: '80px 24px 60px',
        textAlign: 'center',
      }}
    >
      <h1
        style={{
          fontSize: 'clamp(1.75rem, 5vw, 3rem)',
          fontWeight: 700,
          lineHeight: 1.2,
          margin: '0 0 20px',
        }}
      >
        {hero_title}
      </h1>
      <p
        style={{
          fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
          lineHeight: 1.6,
          maxWidth: '640px',
          margin: '0 auto 36px',
          color: '#cbd5e1',
        }}
      >
        {hero_subheadline}
      </p>
      {/* Click-to-call CTA — SITE-02 */}
      <a
        href={`tel:+1${nap_block.phone}`}
        style={{
          display: 'inline-block',
          backgroundColor: '#f97316',
          color: '#ffffff',
          padding: '16px 32px',
          borderRadius: '8px',
          fontSize: '1.1rem',
          fontWeight: 700,
          textDecoration: 'none',
          letterSpacing: '0.025em',
        }}
      >
        {cta_text}
      </a>
    </section>
  );
}
