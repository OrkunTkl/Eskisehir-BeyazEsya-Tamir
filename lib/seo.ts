import type { Metadata } from "next";
import { SITE } from "./contact";
// İçerik tarihleri: Article şeması ve sitemap buradan okur. Yayın günü sabit kalır.
// Rehber/sayfa içeriğini ciddi biçimde genişlettiğinde CONTENT_UPDATED değerini o günün tarihiyle güncelle.
export const CONTENT_PUBLISHED = "2026-10-17";
export const CONTENT_UPDATED = "2026-10-22";

export const SITE_NAME = "Eskişehir Beyaz Eşya Tamiri";
export const OG = { url: "/og-default.png", width: 1200, height: 630, alt: "Eskişehir beyaz eşya tamiri: arıza rehberi ve usta yönlendirme" };

export const meta = (title: string, description: string, path: string): Metadata => ({
  title: { absolute: title },
  description,
  alternates: { canonical: path },
  openGraph: { title, description, url: `${SITE}${path}`, siteName: SITE_NAME, locale: "tr_TR", type: "website", images: [OG] },
  twitter: { card: "summary_large_image", title, description, images: [OG.url] },
});

export const breadcrumb = (items: [string, string][]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map(([name, p], i) => ({ "@type": "ListItem", position: i + 1, name, item: `${SITE}${p}` })),
});
// Platform aracıdır: Organization kullanılır; adres ve telefon yok, LocalBusiness kullanılmaz.
export const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE,
  description: "Eskişehir'de beyaz eşya tamiri arayanları anlaşmalı bağımsız servis sağlayıcılara yönlendiren bilgi platformu.",
};
export const website = { "@context": "https://schema.org", "@type": "WebSite", name: SITE_NAME, url: SITE, inLanguage: "tr-TR" };
export const serviceSchema = (name: string, description: string, path: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name,
  serviceType: name,
  description,
  url: `${SITE}${path}`,
  areaServed: { "@type": "City", name: "Eskişehir" },
  broker: { "@type": "Organization", name: SITE_NAME, url: SITE },
});
export const articleSchema = (headline: string, description: string, path: string) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline,
  description,
  inLanguage: "tr-TR",
  mainEntityOfPage: `${SITE}${path}`,
  datePublished: CONTENT_PUBLISHED,
  dateModified: CONTENT_UPDATED,
  author: { "@type": "Organization", name: SITE_NAME, url: SITE },
  publisher: { "@type": "Organization", name: SITE_NAME, url: SITE },
});