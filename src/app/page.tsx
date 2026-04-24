import siteConfig from '../../site.config';
import { HeroSection } from '../components/HeroSection';
import { ServicesSection } from '../components/ServicesSection';
import { NapBlock } from '../components/NapBlock';
import { ContactForm } from '../components/ContactForm';
import { AboutSection } from '../components/AboutSection';
import { ReviewsSection } from '../components/ReviewsSection';
import { Footer } from '../components/Footer';

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
      <AboutSection nap_block={nap_block} about_body={about_body} />
      <ReviewsSection />
      <ContactForm />
      <NapBlock nap_block={nap_block} />
      <Footer nap_block={nap_block} />
    </>
  );
}
