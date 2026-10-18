import type { MetadataRoute } from "next";
import { appliances } from "@/data/appliances";
import { guides } from "@/data/guides";
import { SITE } from "@/lib/contact";
import { CONTENT_UPDATED } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/", "/ariza-merkezi", "/eskisehir", "/hakkimizda", "/iletisim",
    ...appliances.map((a) => `/${a.slug}`),
    ...guides.map((g) => `/ariza-merkezi/${g.slug}`),
  ];
  return paths.map((p) => ({ url: `${SITE}${p}`, lastModified: CONTENT_UPDATED }));
}