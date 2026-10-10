import type { MetadataRoute } from "next";
import { siteIsIndexable, siteUrl } from '@/lib/site';

export default function robots(): MetadataRoute.Robots {
  return siteIsIndexable && siteUrl
    ? { rules: { userAgent: '*', allow: '/' }, sitemap: new URL('/sitemap.xml', siteUrl).toString() }
    : { rules: { userAgent: '*', disallow: '/' } };
}
