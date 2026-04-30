// Tony (Inngest build pipeline) replaces this file with generated content.
// Shape must match PlumberSlotsSchema from @hydrogen-studio/agents.
// DO NOT edit manually — this file is machine-written on every build.

export interface PlumberSlots {
  hero_title: string;
  hero_subheadline: string;
  nap_block: {
    name: string;
    address: string;
    phone: string;
    city: string;
    state: string;
    zip: string;
  };
  services: Array<{ name: string; blurb: string }>;
  cta_text: string;
  about_body: string;
  google_rating: number;
  google_review_count: number;
  reviews: Array<{ name: string; rating: number; text: string; date: string }>;
  trust_badges: string[];
  theme: { hero_bg: string; primary: string; accent: string };
  google_place_id: string;
  logo_url?: string;
  cover_photo_url?: string;
  faqs?: Array<{ question: string; answer: string }>;
}

const siteConfig: PlumberSlots = {
  hero_title: 'PLACEHOLDER',
  hero_subheadline: 'PLACEHOLDER',
  nap_block: { name: 'PLACEHOLDER', address: '', phone: '', city: '', state: '', zip: '' },
  services: [
    { name: 'PLACEHOLDER', blurb: '' },
    { name: 'PLACEHOLDER', blurb: '' },
    { name: 'PLACEHOLDER', blurb: '' },
  ],
  cta_text: 'PLACEHOLDER',
  about_body: 'PLACEHOLDER',
  google_rating: 0,
  google_review_count: 0,
  reviews: [],
  trust_badges: ['Licensed & Insured'],
  theme: { hero_bg: '#0F172A', primary: '#1E3A8A', accent: '#CA8A04' },
  google_place_id: '',
};

export default siteConfig;
