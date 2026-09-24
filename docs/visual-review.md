# Rendered Visual Review

## Cycle 1: First Complete Implementation

Captured all routes at 1440, 1280, 1024, 768 and 390px using local Chromium/Playwright. Also captured every major homepage section individually at desktop size. Inspected hero, directory, infrastructure/operations, engineering image, delivery disclosure, training, about statement and CTA.

Findings and changes:

- Mobile hero crop suppressed the hardware subject. Created a separate art-directed portrait asset and responsive picture source; restored full-color imagery rather than a faded desktop crop.
- Hidden line breaks merged words in some narrow headings. Kept explicit breaks and adjusted the mobile display size.
- Tablet introduction and engineering compositions were too narrow. Changed the introduction to one column and gave engineering a panoramic image followed by an editorial text grid.
- Homepage spacing was too uniformly generous. Reduced desktop section padding and the infrastructure gaps, keeping fuller whitespace where the image needs it.
- Services local navigation did not track reading position. Added an accessible active-location state while retaining all server-rendered service content and native anchor links.
- Removed the development indicator from local client presentation.
- Added client-confirmed email to Contact, footer and organization metadata during this cycle. Canonical domain remains unresolved.

Initial geometry scans reported no page-level horizontal overflow at the requested widths. Final interaction and validation results follow after the second review.

## Production Cycle 1: 24 September 2026

Re-captured all five routes at 1440, 1280, 1024, 768 and 390px from a clean local server. The static composition remains the correct foundation, including at 390px. The rendered audit found no page-level overflow, missing image, unnamed link or route failure.

Problems recorded:

- responsive hero picture produced a Next positioning warning;
- Training hero image was detected as LCP without preload;
- direct `/services#security` landing was not reliable;
- 404 used the generic framework page;
- response security headers were not yet configured;
- image captions overemphasized AI generation and made the design feel less like a finished brand;
- the temporary Hashbay corner device did not recur beyond the wordmark.

Fixes implemented before Cycle 2: responsive picture positioning, Training preload, deterministic anchor landing, branded 404, production security headers, conditional canonicals, conceptual-image wording and an open-corner image-frame detail.

## Production Cycle 2

Re-captured all routes at the five target widths after the first production fixes. No route, overflow, missing-image, unnamed-link, console or hydration failures remained. Desktop composition retained its editorial rhythm; mobile preserved a distinct hero crop, single-column service hierarchy, touch-sized controls and compact footer.

Critique and final corrections:

- Direct service anchors landed 204px below the viewport because document scroll padding and section scroll margin were both applied. Removed the duplicate section margin.
- Hash decoding was unnecessary for fixed ASCII service IDs and could throw on a malformed percent-encoded fragment. Removed decoding and kept safe `getElementById` lookup.
- `HASHBAY_SITE_URL` accepted a URL containing a path, query or credentials despite being used as an origin. Added strict origin validation.
- The new image-corner signature was retained: it adds Hashbay-specific continuity without creating another decorative diagram system.

Cycle 3 is reserved for the production server, headers, metadata and final visual inspection.

## Production Cycle 3

The final review ran against `next start` on port 3001 after a successful production build. Desktop homepage, mobile homepage and tablet Services captures were inspected directly, while automated geometry and interaction checks covered all five routes at 1440, 1280, 1024, 768 and 390px.

Final evidence:

- no horizontal overflow, missing images, unnamed links, hydration errors or application console errors;
- mobile navigation opened and closed correctly, Escape returned focus to the trigger, and touch targets remained usable;
- Services deep links landed at the intended section and the desktop services menu navigated correctly;
- Training filters, search and native disclosure controls worked;
- mail and telephone actions used the verified addresses;
- custom 404 returned status 404 with working recovery links;
- reduced-motion mode reported no running CSS animations;
- production CSP allowed all required interactions without `unsafe-eval`, third-party origins or wildcard sources;
- contrast samples for primary blue, body text, dark panels and light-blue surfaces met WCAG AA.

The final static composition passed the Creative, Enterprise UX, responsive, accessibility and performance critique. The homepage carries its visual quality beyond the hero through a dense capability directory, editorial infrastructure story, engineering image, delivery process, training transition, company statement and restrained conversion close. The 390px layout uses a dedicated hero crop, compact navigation, touch-first controls and a reorganized content flow rather than shrinking desktop.

## Concept Fidelity Ledger

The approved light editorial concept was used as a reference rather than a pixel-copy mandate.

- **Hero:** the eyebrow and core line `Technology that keeps business moving.` are preserved. Supporting copy and actions were refined for factual specificity and conversion clarity.
- **Composition:** the asymmetric hero, image crop, open-corner wordmark, service directory and large editorial transitions remain faithful to the concept.
- **Color and type:** mineral white, charcoal, cobalt and pale-blue fields use Geist Sans/Mono with an intentionally restrained hierarchy.
- **Imagery:** generated infrastructure and engineering visuals remain explicitly conceptual and do not claim to show Hashbay people, offices, clients or deployments.
- **Brand geometry:** the open-corner detail repeats at image frames as a replaceable temporary device, not as an unapproved permanent logo.
- **Responsive adaptation:** desktop spatial relationships were re-authored for tablet and mobile; the smaller layouts retain the identity without preserving empty desktop proportions.

The concept omitted some production information and controls. Their addition - full service scope, verified contact details, training interaction, 404 recovery, metadata and security behavior - is intentional product completion rather than visual drift.

## Review Method

The Browser plugin was not available and the in-app browser crashed during two launch attempts, so the documented frontend-testing fallback was Playwright Chromium. Screenshots were captured at their native viewport sizes. The local image-view helper was blocked by a Windows ACL issue; compressed WebP copies were inspected through the tool image channel instead. Lighthouse, axe and OWASP ZAP were not installed, so their absence is disclosed rather than replaced with unverified claims.
