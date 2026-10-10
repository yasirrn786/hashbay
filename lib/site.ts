import type { Metadata } from "next";

// The founder confirmed this public production origin. A custom domain can
// override it without allowing preview deployments into search results.
const deploymentEnvironment = process.env.VERCEL_ENV;
const configuredUrl =
  process.env.HASHBAY_SITE_URL ||
  (deploymentEnvironment === "production"
    ? "https://hashbay.vercel.app"
    : undefined);
export const siteUrl = configuredUrl ? new URL(configuredUrl) : undefined;

if (siteUrl && !["https:", "http:"].includes(siteUrl.protocol)) {
  throw new Error("HASHBAY_SITE_URL must be an HTTP or HTTPS origin.");
}
if (
  siteUrl &&
  (siteUrl.username ||
    siteUrl.password ||
    siteUrl.pathname !== "/" ||
    siteUrl.search ||
    siteUrl.hash)
) {
  throw new Error(
    "HASHBAY_SITE_URL must be an origin without credentials, path, query, or fragment.",
  );
}

export const siteIsIndexable =
  Boolean(siteUrl) &&
  (!deploymentEnvironment || deploymentEnvironment === "production");

export function canonicalMetadata(
  pathname: string,
): Pick<Metadata, "alternates"> {
  return siteUrl
    ? { alternates: { canonical: new URL(pathname, siteUrl) } }
    : {};
}
