import siteConfig from '../../site.config';
import { SiteHeader } from '../components/SiteHeader';
import { HeroSection } from '../components/HeroSection';
import { ServicesSection } from '../components/ServicesSection';
import { NapBlock } from '../components/NapBlock';
import { ContactForm } from '../components/ContactForm';
import { AboutSection } from '../components/AboutSection';
import { ReviewsSection } from '../components/ReviewsSection';
import { FaqSection } from '../components/FaqSection';
import { Footer } from '../components/Footer';

export default function HomePage() {
  const {
    hero_title, hero_subheadline, nap_block, services, cta_text, about_body,
    google_rating, google_review_count, reviews, trust_badges, google_place_id,
    logo_url, cover_photo_url, faqs,
  } = siteConfig;

  return (
    <>
      <SiteHeader name={nap_block.name} phone={nap_block.phone} logo_url={logo_url} />
      <HeroSection
        hero_title={hero_title}
        hero_subheadline={hero_subheadline}
        cta_text={cta_text}
        nap_block={nap_block}
        trust_badges={trust_badges}
        google_rating={google_rating}
        google_review_count={google_review_count}
        logo_url={logo_url}
        cover_photo_url={cover_photo_url}
      />
      <ServicesSection services={services} city={nap_block.city} />
      <AboutSection
        nap_block={nap_block}
        about_body={about_body}
        google_rating={google_rating}
        google_review_count={google_review_count}
        trust_badges={trust_badges}
      />
      <ReviewsSection
        reviews={reviews}
        google_rating={google_rating}
        google_review_count={google_review_count}
        businessName={nap_block.name}
        google_place_id={google_place_id}
      />
      <FaqSection faqs={faqs} city={nap_block.city} />
      <ContactForm nap_block={nap_block} />
      <NapBlock nap_block={nap_block} />
      <Footer nap_block={nap_block} />
    </>
  );
}
