import siteConfig from '../../site.config';
import { HeroSection } from '../components/HeroSection';
import { ServicesSection } from '../components/ServicesSection';
import { NapBlock } from '../components/NapBlock';
import { ContactForm } from '../components/ContactForm';

export default function HomePage() {
  const { hero_title, hero_subheadline, nap_block, services, cta_text, about_body } = siteConfig;

  return (
    <>
      <HeroSection
        hero_title={hero_title}
        hero_subheadline={hero_subheadline}
        cta_text={cta_text}
        nap_block={nap_block}
      />
      <ServicesSection services={services} />

      {/* About section */}
      <section style={{ padding: '60px 24px', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto', textAlign: 'center' }}>
          <h2
            style={{
              fontSize: 'clamp(1.5rem, 4vw, 2.25rem)',
              fontWeight: 700,
              color: '#1e293b',
              marginBottom: '24px',
            }}
          >
            About {nap_block.name}
          </h2>
          <p style={{ color: '#475569', lineHeight: 1.8, fontSize: '1.05rem' }}>
            {about_body}
          </p>
        </div>
      </section>

      <NapBlock nap_block={nap_block} />
      <ContactForm />
    </>
  );
}
