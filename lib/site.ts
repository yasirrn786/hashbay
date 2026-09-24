import type { Metadata } from 'next';

// Neither domain in the supplied material is assumed to be canonical.
const configuredUrl = process.env.HASHBAY_SITE_URL;
export const siteUrl = configuredUrl ? new URL(configuredUrl) : undefined;

if (siteUrl && !['https:', 'http:'].includes(siteUrl.protocol)) {
  throw new Error('HASHBAY_SITE_URL must be an HTTP or HTTPS origin.');
}
if (siteUrl && (siteUrl.username || siteUrl.password || siteUrl.pathname !== '/' || siteUrl.search || siteUrl.hash)) {
  throw new Error('HASHBAY_SITE_URL must be an origin without credentials, path, query, or fragment.');
}

export function canonicalMetadata(pathname: string): Pick<Metadata, 'alternates'> {
  return siteUrl ? { alternates: { canonical: new URL(pathname, siteUrl) } } : {};
}
