# Hashbay Go-Live Report

Review date: 24 September 2026.

## Decision

**Conditional no-go until the canonical production domain is approved and configured.** No code, visual, accessibility or known security blocker remains. The application intentionally emits `noindex, nofollow`, disallows crawling and returns an empty sitemap when `HASHBAY_SITE_URL` is absent. This prevents an accidental launch on the wrong `.com` / `.co.in` or apex / `www` origin.

Chosen strategy: **B - Partial redesign.** The factual architecture, light editorial system and responsive compositions were strong enough to preserve. Production work strengthened the Hashbay-specific open-corner device, service discovery, conceptual-image treatment, anchor behavior, error states, SEO controls and security posture. A wholesale redesign would now introduce risk for marginal benefit.

## Design

- Completed three deliberate rendered critique cycles at 1440, 1280, 1024, 768 and 390px.
- Inspected every route: `/`, `/about`, `/services`, `/training` and `/contact`.
- Preserved the distinctive mineral-white, charcoal and cobalt editorial direction, Geist type system, conceptual technology imagery and restrained interaction language.
- Kept all generated visuals clearly conceptual; none imply Hashbay staff, facilities, clients or completed deployments.
- Added recurring open-corner image framing, a branded 404, reliable service deep links and finished mobile navigation behavior.

## Engineering

- Next.js App Router, TypeScript and Tailwind CSS; pages are statically rendered.
- Client JavaScript is limited to navigation, service position tracking, Training filtering, copy feedback and restrained reveal behavior.
- No API routes, Server Actions, database, authentication, analytics, trackers or contact-form backend.
- Production dependencies: `next`, `react`, `react-dom`, `geist` and `lucide-react`; all are used.
- `npm run typecheck`: passed.
- `npm run lint`: passed after QA artifact cleanup.
- `npm run build`: passed; all public routes, custom not-found page and Open Graph image generated successfully.
- Directional Chromium capture: homepage loaded 26 resources, about 151 KB JavaScript transfer and about 144 KB image transfer. This is not a substitute for field Core Web Vitals.

## Accessibility

- Semantic landmarks and one H1 per route verified.
- Skip link, visible focus, keyboard-operable menu, Escape focus return, labelled controls and native disclosures verified.
- No duplicate IDs, unlabelled buttons or unlabelled inputs found in the production DOM.
- Contrast samples met WCAG AA; mobile controls and layout were inspected at 390px.
- `prefers-reduced-motion` produced zero running CSS animations in the automated check.
- Residual: run axe and manual VoiceOver/NVDA checks when those tools and assistive technologies are available. **SAFE AFTER LAUNCH**, provided no content structure changes occur before launch.

## Security

- Attack surface is intentionally small: static pages, no input submission, backend, auth, storage or third-party runtime script.
- `npm audit` and `npm audit --omit=dev`: zero known vulnerabilities.
- Repository and Git-history pattern scans found no committed credentials; no `.env` files were present.
- Security headers tested on the production server: CSP, HSTS, `nosniff`, strict-origin referrer policy, restrictive Permissions Policy, `frame-ancestors 'none'`, `X-Frame-Options: DENY`, COOP and disabled DNS prefetch.
- Production CSP has no wildcard sources, external runtime origins or `unsafe-eval`. `unsafe-inline` remains for Next.js bootstrap/style compatibility; the site has no user-controlled HTML. A nonce architecture would require dynamic middleware for little risk reduction on this static site.
- `X-Powered-By` is disabled. Browser source maps are not enabled.
- JSON-LD contains only verified static values and escapes `<` before insertion.
- Reference PDFs, internal docs and QA artifacts are excluded from Vercel upload by `.vercelignore`.
- HSTS assumes an HTTPS-only production host. Confirm HTTPS and redirect behavior before opening traffic. **BLOCKER** until hosting smoke tests pass.
- OWASP ZAP was unavailable; no scan was claimed. The very small static attack surface was reviewed manually. **SAFE AFTER LAUNCH** to add a passive localhost scan to CI.

## SEO

- Unique page titles and descriptions, Open Graph metadata, semantic headings, organization JSON-LD, sitemap and robots are implemented.
- Per-route canonical links and absolute metadata are emitted only when `HASHBAY_SITE_URL` is a valid pure HTTP(S) origin.
- With no origin configured, indexing is deliberately disabled and the sitemap is empty.
- Favicon and generated Open Graph image are present and served locally.

## Content And Assets

- Verified public contact: `contact@hashbaytechnology.com` and `+91 78993 47270`.
- **BLOCKER:** approve one canonical origin, including `.com` versus `.co.in` and apex versus `www`.
- **SHOULD FIX BEFORE GO-LIVE:** approve the current temporary wordmark/corner treatment and final public copy.
- **SHOULD FIX BEFORE GO-LIVE:** confirm the exact public postal address if the company wants a street address published. The current site states Bangalore only.
- **SAFE AFTER LAUNCH:** commission genuine Hashbay team, work and environment photography to replace conceptual images where useful.
- **SAFE AFTER LAUNCH:** add verified leadership, customer evidence, certifications, partnerships or case studies only when documentary source material is supplied.
- **SAFE AFTER LAUNCH:** add a privacy notice before introducing analytics, tracking or a server-side lead form. The launch version uses only `mailto:` and `tel:` actions.

## Deployment

Recommended host: Vercel with the repository connected and a staged production deployment reviewed before domain promotion. No runtime environment is required except the canonical origin.

Exact steps:

1. Approve the production origin, for example `https://approved.example` (do not use this placeholder).
2. In Vercel Production environment variables, set `HASHBAY_SITE_URL` to that exact origin with no trailing path, query, credentials or fragment.
3. Import/link the repository and build with `npm run build`; use the detected Next.js output and Node version supported by Next.js 16.
4. Deploy to a preview/staged URL. Verify all five routes, 404, Open Graph image, headers and client interactions.
5. Add both apex and `www` domains, choose one canonical host and configure the other as a permanent redirect.
6. Use `vercel domains inspect <domain>` and apply the exact DNS records it reports. Do not assume generic A/CNAME values when project-specific values are provided.
7. After DNS and TLS are healthy, rebuild/promote with the production `HASHBAY_SITE_URL`, then verify canonical tags, crawlable robots and populated sitemap on the public origin.
8. Run the smoke checklist below before announcing the site.

No deployment was performed by this review.

Vercel references: [custom-domain setup](https://vercel.com/docs/domains/set-up-custom-domain), [promoting deployments](https://vercel.com/docs/deployments/promoting-a-deployment), and [rollback CLI](https://vercel.com/docs/cli/rollback).

## Production Smoke Checklist

- canonical host redirects consistently and HTTPS is enforced;
- `/`, `/about`, `/services`, `/training`, `/contact` return 200;
- an unknown path returns the branded 404 with HTTP 404;
- mobile menu, Services menu, service anchors, Training filters and disclosures work;
- email and telephone actions use the verified values;
- no console, hydration, CSP or missing-asset errors;
- no horizontal overflow at 390, 768, 1024, 1280 or 1440px;
- `robots.txt` allows crawling and names the canonical sitemap;
- `sitemap.xml` contains all five canonical URLs;
- canonical and Open Graph URLs use the approved origin;
- CSP, HSTS, framing, content-type, referrer and permissions headers remain present;
- `npm run typecheck`, `npm run lint` and `npm run build` pass in deployment logs.

## Rollback

Keep the last known-good production deployment. If smoke tests fail after promotion, use Vercel Instant Rollback in the deployment menu or `vercel rollback <deployment-url>`. This reassigns the production domains to a previous deployment without rebuilding; it does not rebuild with changed environment variables. Diagnose the fault in a new preview, rerun validation, then promote that verified deployment.

## Final Classification

### BLOCKER

- Confirm canonical domain/origin and set `HASHBAY_SITE_URL` before the indexable production build.
- Complete the post-deployment HTTPS, DNS, header and smoke checks before opening traffic.

### SHOULD FIX BEFORE GO-LIVE

- Company approval of the temporary identity treatment and final copy.
- Confirm whether a full postal address should be published.

### SAFE AFTER LAUNCH

- Genuine photography and additional verified credibility material.
- axe, screen-reader, Firefox/Safari/device and Lighthouse follow-up where tooling is available.
- Passive local ZAP/CI scanning and a privacy page before future tracking or lead-form features.
