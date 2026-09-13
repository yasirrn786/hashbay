# Hashbay enterprise redesign

Research and art direction, 13 September 2026. This document supersedes the earlier cinematic wireframe direction.

## A. Audit

Inspected all application routes, components, content, metadata and styles, and the rendered homepage. The existing architecture is sound, but the visual hierarchy overweights spectacle: an abstract hero, a very long four-stage sticky sequence, repeated diagrams, oversized headings and a disproportionately large footer. Services are less discoverable than the brand narrative. Staffing is combined with support despite being a distinct company capability.

**Preserve:** five-route App Router architecture, static rendering, self-hosted Geist fonts, factual service and training data, native disclosure controls, search/filter behavior, copy-phone action, visible keyboard focus, reduced-motion handling, and the unresolved-domain indexing safeguard.

**Change:** navigation, brand treatment, all page compositions, content hierarchy, service depth, motion timing, typography scale and imagery. Separate professional services from operational support. Make service scope available in server-rendered content without selecting a tab.

**Remove:** isometric network hero, glowing paths, decorative racks, scroll-length-driven storytelling, enormous footer lettering, abstract filler copy and permanent animation controls when no continuous motion remains.

## B. Benchmark Study

Method: inspected current public pages with web retrieval and a real Chromium browser at 1440px, plus selected 390px views. Recorded headings, navigation, typography and image semantics. These are design observations, not claims of measured competitor accessibility or performance. Cookie overlays and loaded animation frames are part of the observations, not idealized screenshots.

| Source | Useful principle | Boundary for Hashbay |
| --- | --- | --- |
| [IBM technology consulting](https://www.ibm.com/consulting/technology) | Literal service naming, strong typographic grid, recognizable people, detailed capability taxonomy. | Do not borrow its grid treatment, leadership portraits or its evidence. |
| [Microsoft](https://www.microsoft.com/en-us/) | Audience selection, tangible product imagery, clear routes into a large portfolio. | Hashbay is a services company, not a product store or AI search assistant. |
| [AWS](https://aws.amazon.com/) | Products, solutions and support are distinct discovery paths; category depth supports evaluation. | Avoid expanding the site beyond verified service scope or copying its promotional density. |
| [Google Cloud](https://cloud.google.com/) | Clear proposition, direct sales action, audience segmentation and consistent typography. | No free trials, AI product claims or generic abstract launch tiles. |
| [Cloudflare](https://www.cloudflare.com/) and [connectivity cloud](https://www.cloudflare.com/connectivity-cloud/) | A coherent umbrella connects security and infrastructure; strong brand color is used decisively. | Hashbay cannot claim a proprietary unified platform or borrow third-party scale metrics. |
| [Cisco](https://www.cisco.com/) | Capability categories are easy to locate; purchase, support and learning are distinct jobs. | Do not reproduce the animated fiber aesthetic. |
| [Accenture](https://www.accenture.com/en) | Broad capabilities organized around business needs; editorial stories connect expertise to outcomes. | Initial browser capture was black during loading; no claim of successful motion inspection. Textual IA was accessible. |
| [Deloitte](https://www.deloitte.com/global/en.html) | Institutional navigation and substantial research make expertise evaluable. | Its cookie modal obscured much of the first viewport; do not infer full visual or accessibility quality. |
| [Capgemini](https://www.capgemini.com/) | Human imagery, distinctive typography and editorial rhythm communicate a company, not just a stack. | No imitation of its photographic pixel motif or overlapping blue headline panel. |
| [Cognizant](https://www.cognizant.com/us/en) | Technology is connected to recognizable real-world environments. Service and company navigation remain prominent. | No fabricated landmark project or giant hypothetical infrastructure. |
| [TCS](https://www.tcs.com/) / [Infosys](https://www.infosys.com/) | Institutional depth and service discovery are relevant to enterprise evaluation. | Browser access denied for both; textual source review only, no visual claims. |
| [Wipro](https://www.wipro.com/) | Explicit service navigation and human/editorial material support the company narrative. | A transitional hero frame showed incomplete copy: Hashbay must remain readable at every frame. |
| [Palantir](https://www.palantir.com/) | Recognizable application contexts and direct links into actual offerings anchor ambitious positioning. | Its sparse cinematic first viewport relies on established recognition Hashbay does not yet have. |
| [Stripe](https://stripe.com/) | Proposition and service categories are legible; imagery and system graphics are tied to actual products. | Do not borrow its gradient ribbon, slanted composition, product interfaces or customer proof. |
| [Vercel](https://vercel.com/) | Concrete feature architecture and clear next actions reduce evaluation effort. | No developer-platform imitation, fake terminal or dashboard. |
| [Work & Co](https://work.co/) | Editorial hierarchy, economical composition and real work carry authority without visual noise. | Do not borrow the red mark, page grid or project imagery. |
| [Instrument](https://www.instrument.com/work) | Coherent brand/product touchpoints and controlled type contrast create distinctive presentation. | Its oversized studio identity and expressive project gallery are not an enterprise-services IA. |

### Principles to Adopt

1. **Credibility is specific.** Name the company, its actual disciplines and their scope before asking visitors to interpret a metaphor.
2. **A useful grid is not a visible grid.** Align type, images, service lists and actions consistently; omit decorative technical rules.
3. **Brand is a repeatable language.** Use a compact wordmark, one geometric framing idea, a narrow color system and consistent image direction.
4. **Substance creates rhythm.** Alternate a photographic opening, a dense directory, a focused service feature, an editorial people section and a concise contact action. Not repeated full-screen panels.
5. **Motion must preserve meaning.** Content stays legible throughout entrance and hover transitions. No loading gate, scroll hijack or automatic carousel.
6. **Evidence cannot be designed into existence.** Company-specific photography and approved project evidence are content requirements, not stock-image opportunities.
7. **Mobile is a separate composition.** Shorter hero, repositioned photograph, vertical service rows, compact disclosure and no horizontal page scroll. Do not bury service links in a cinematic sequence.
8. **Enterprise scale is not the same as site size.** Five substantial routes are more credible than empty case-study, partner or industry pages.

## C. Art Direction: Technology in Working Order

The unifying concept is connected technology operations, expressed as a relationship between physical systems, digital capability and human expertise. The design uses joined editorial blocks and a recurring open-corner device rather than network-line illustrations.

### Identity and Color

The HASHBAY wordmark is the primary identity, paired with a small open-corner H device that suggests two parts held in alignment. It is a temporary identity for company review, not a legal rebrand. Ink #202326, white #ffffff and mineral gray #f1f3f4 dominate. Cobalt #1758dd is reserved for navigation, meaningful emphasis and primary actions; pale blue #e9effb is supporting space. Green remains semantic only. Natural materials in illustrative imagery add warmth without a brown/orange theme.

### Typography and Grid

Self-hosted Geist Sans: medium display lettering, regular prose, semibold navigation. Geist Mono is confined to small section indices and short metadata, not paragraphs. Hero 72px desktop / 44px mobile; section headings 44px / 32px; body 17-19px; readable line lengths. Fixed breakpoint scales, no viewport font sizing or negative tracking. Desktop shell max 1320px, 60px side gutters at wide sizes, 32px tablet, 22px phone. An implicit 12-column system supports 4/8 editorial layouts, a two-column directory and full-width photographic bands.

### Imagery and Illustration

Commissioned-style, clearly disclosed AI-generated editorial illustrations: a precise network-hardware still life for the hero; hands working with technology for professional expertise; a hardware learning workbench for training. No recognizable invented employees, owned facilities or customer work. Asset filenames, alt text and captions disclose illustrative use. Real-company photo requirements are documented separately. Hardware is the subject, not just a blurred texture. No generic office meeting photography, fake software dashboards or simulated KPIs.

### Motion

Finite opening choreography: photograph settles from a very small scale change while an open-corner brand frame resolves. Text never waits for a loading sequence. Scroll reveals limited to 12px movement / 400ms, primarily image entrances and section labels. Service hover moves only the arrow and a subtle accent. Native details animate their indicator, not container height. Reduced motion disables all entrance and transform effects. No GSAP/WebGL dependency is justified by this concept.

### Navigation and Narrative

White sticky header: prominent wordmark, Services disclosure with direct capability links, About, Training and Contact. Mobile menu exposes the same paths with a clear hierarchy. No hidden hover-only access.

Home sequence: (1) proposition and photographic centerpiece; (2) concise company context; (3) six named capability summaries; (4) infrastructure/AMC depth with tangible image; (5) compact Plan/Build/Secure/Support framework; (6) human expertise and professional services; (7) training as a distinct lighter editorial item; (8) verified company facts woven into an about statement; (9) concise contact CTA and usable footer.

Services: overview and sticky local navigation, then six complete scope sections, with related-service links. About: factual company introduction, people/processes/systems priorities and delivery context. Training: visual learning introduction, searchable tracks and full topics. Contact: verified phone, copy control, service context and guidance for the first conversation; no fake submission endpoint.

### Verification Gate

Complete two deliberate visual review cycles after first implementation. Capture all five routes at 1440, 1280, 1024, 768 and 390px; inspect major homepage sections at readable scale; check navigation, filtering, disclosure, focus, overflow, console, reduced motion and images. Run typecheck, lint and production build. Do not deploy.
