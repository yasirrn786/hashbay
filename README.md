# Hashbay Technology

A Next.js App Router website with a cinematic SVG infrastructure field, editorial page layouts, and progressive motion. All five routes are statically rendered. Content is based on the supplied company profile; no clients, metrics, certifications, or testimonials are fabricated.

## Local development

```sh
npm install
npm run dev
```

## Validation

```sh
npm run lint
npm run typecheck
npm run build
```

## Structure

- `app/`: Home, About, Services, Training, and Contact routes.
- `components/`: shared identity, navigation, diagrams, motion controller, scroll story, capability explorer, and program explorer.
- `lib/content.ts`: company-profile-based service and training content.
- `app/globals.css`: visual tokens, responsive layouts, and animation definitions.
- `lib/site.ts`: explicit production-origin configuration.

Motion uses CSS, SVG, IntersectionObserver, and the Web Animations API. There is no animation framework or WebGL dependency. Geist is locally bundled through next/font. Reduced-motion preferences disable animation; the floating pause control offers a manual override. Browser scrolling remains native.

## Before publishing

Confirm the canonical production domain and set `HASHBAY_SITE_URL` to that HTTP(S) origin before running the production build. The profile and previous site contain different domains; neither is assumed. Without the setting, pages request no indexing, robots disallows crawling, and the sitemap is empty.

The custom systems mark is a temporary identity, pending company approval. Confirm the public phone number, business address, contact email, and program availability. Contact actions currently call or copy the profile's phone number; there is no form that pretends to send enquiries. No deployment has been configured or performed.

The supplied profile stays under `reference/` and is not published as an asset.
