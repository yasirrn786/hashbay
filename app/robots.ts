import type { MetadataRoute } from "next";
import { siteUrl } from '@/lib/site';

export default function robots(): MetadataRoute.Robots {
  return siteUrl
    ? { rules: { userAgent: '*', allow: '/' }, sitemap: new URL('/sitemap.xml', siteUrl).toString() }
    : { rules: { userAgent: '*', disallow: '/' } };
}
