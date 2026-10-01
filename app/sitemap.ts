import type { MetadataRoute } from "next";
import { appliances } from "@/data/appliances";
import { SITE } from "@/lib/contact";
export default function sitemap(): MetadataRoute.Sitemap {
  return [SITE, ...appliances.map((a) => `${SITE}/${a.slug}`)].map((url) => ({ url, lastModified: new Date() }));
}
