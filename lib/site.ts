// Neither domain in the supplied material is assumed to be canonical.
const configuredUrl = process.env.HASHBAY_SITE_URL;
export const siteUrl = configuredUrl ? new URL(configuredUrl) : undefined;

if (siteUrl && !['https:', 'http:'].includes(siteUrl.protocol)) {
  throw new Error('HASHBAY_SITE_URL must be an HTTP or HTTPS origin.');
}
