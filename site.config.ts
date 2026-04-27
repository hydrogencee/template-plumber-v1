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
  trust_badges: ['Licensed & Insured', 'Same-Day Service Available'],
};

export default siteConfig;
