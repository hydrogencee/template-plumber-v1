# template-plumber-v1

Next.js static-export template for local plumber websites. Used by the Hydrogen Studio build pipeline (Tony) to generate per-client preview sites.

## How it works

1. Tony (Inngest build pipeline) receives a lead from the scrape/enrich pipeline
2. Tony calls `generatePlumberCopy()` from `@hydrogen-studio/agents` to generate validated copy via Claude Sonnet
3. Tony forks this template via the GitHub Template Repository API
4. Tony overwrites `site.config.ts` with the generated `PlumberSlots` data
5. Tony creates a Vercel project and deploys the static export
6. The preview URL is sent to the lead via Delilah's outreach sequence

## Slot injection

`site.config.ts` is the single injection point. Tony replaces the entire file with:

```ts
const siteConfig: PlumberSlots = {
  hero_title: "Austin's Trusted Plumbers — Available 24/7",
  hero_subheadline: "Joe's Plumbing has served Austin families for over 20 years...",
  nap_block: { name: "Joe's Plumbing", address: "123 Main St", phone: "5125551234", city: "Austin", state: "TX", zip: "78701" },
  services: [...],
  cta_text: "Call Now for a Free Quote",
  about_body: "...",
};
export default siteConfig;
```

The shape must match `PlumberSlotsSchema` from `@hydrogen-studio/agents`. The `slots.schema.json` file in the repo root is the machine-readable version of that schema, used by Tony to validate its output before committing.

## Environment variables

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_FORMSPREE_ID` | Formspree form ID for the contact form. Set per-client via Vercel project env vars. |

## Preview banner

The `PreviewBanner` component renders a fixed top bar (z-index: 50) identifying the site as a Hydrogen Studio preview. This is always present on preview deployments. When the client claims their site, this banner is removed and the repo is transferred to the client's GitHub account.

## GitHub setup (required — owner action)

1. Create the `hydrogen-studio` GitHub organization if it does not exist: github.com → + → New organization
2. Create repository `template-plumber-v1` in the org (private preferred): github.com/organizations/hydrogen-studio → New repository
3. Push this scaffold: `git init && git add . && git commit -m "init: scaffold template-plumber-v1" && git remote add origin git@github.com:hydrogen-studio/template-plumber-v1.git && git push -u origin main`
4. Mark as Template Repository: github.com/hydrogen-studio/template-plumber-v1 → Settings → General → check "Template repository"

Once marked as a template, Tony can fork it via: `POST /repos/hydrogen-studio/template-plumber-v1/generate`
