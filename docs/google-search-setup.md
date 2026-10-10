# Hashbay on Google Search

The public website is hosted at `https://hashbay.vercel.app/`. It can appear in Google Search while continuing to use Vercel hosting.

## Production configuration

The founder-confirmed production URL is `https://hashbay.vercel.app`. Vercel production builds use this automatically. Set `HASHBAY_SITE_URL` to the preferred HTTP(S) origin when connecting a custom domain or building outside Vercel.

Vercel preview and development deployments remain excluded from indexing even when a site URL is configured. Without a configured URL, local builds request no indexing and produce an empty sitemap.

The Google HTML verification tag supplied by the founder's signed-in Search Console account is included in the root metadata. It is a public ownership-verification tag. Keep it after verification. `GOOGLE_SITE_VERIFICATION` can override it for a different account.

## Google setup

1. Deploy the indexing fix to Vercel production.
2. Check the homepage has `index, follow`, `/robots.txt` allows crawling and references `/sitemap.xml`, and the sitemap contains the five public routes on the production URL.
3. In [Google Search Console](https://search.google.com/search-console), add the URL-prefix property `https://hashbay.vercel.app/` and use HTML-tag verification. Verify ownership after the updated site is deployed.
4. Submit `sitemap.xml` in Sitemaps.
5. Use URL Inspection to inspect the homepage and request indexing.

Indexing and ranking are Google's decisions. A request does not guarantee immediate inclusion, and repeated requests do not speed up crawling. Monitor the Page Indexing report.

## A future custom domain

When switching to a domain you own, update `HASHBAY_SITE_URL`, redeploy, configure appropriate redirects, and verify the new Search Console property. Preserve existing mail-related DNS records. Do not publish sitemap URLs for a domain you do not control.

## Official references

- [Google ownership verification](https://support.google.com/webmasters/answer/9008080)
- [Google crawl requests](https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl)
- [Vercel production and preview environments](https://vercel.com/docs/deployments/environments)
- [Next.js metadata](https://nextjs.org/docs/app/api-reference/functions/generate-metadata)
