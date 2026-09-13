import type { MetadataRoute } from "next";
import { siteUrl } from '@/lib/site';

const routes = ["", "/about", "/services", "/training", "/contact"];
export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteUrl) return [];
  return routes.map((route) => ({ url: new URL(route || '/', siteUrl).toString(), changeFrequency: 'monthly', priority: route === '' ? 1 : 0.7 }));
}
