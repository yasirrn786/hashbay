import type { MetadataRoute } from "next";
import { siteIsIndexable, siteUrl } from "@/lib/site";
import { services, programs } from "@/lib/content";
const routes = [
  "/",
  "/about",
  "/approach",
  "/services",
  "/training",
  "/lab",
  "/contact",
  "/privacy",
  "/terms",
  ...services.map((s) => "/services/" + s.slug),
  ...programs.map((p) => "/training/" + p.slug),
];
export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteIsIndexable || !siteUrl) return [];
  return routes.map((route) => ({
    url: new URL(route, siteUrl).toString(),
    changeFrequency: "monthly",
    priority:
      route === "/"
        ? 1
        : route === "/terms" || route === "/privacy"
          ? 0.3
          : 0.7,
  }));
}
