import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header, StickyBar } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Smooth } from "@/components/Smooth";
import { Loader, Cursor } from "@/components/Fx";
import { SITE, PHONE_DISPLAY } from "@/lib/contact";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0a0b0d",
};
export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "Eskişehir Beyaz Eşya Tamiri | Aynı Gün Servis",
    template: "%s | Eskişehir Beyaz Eşya",
  },
  description:
    "Eskişehir'de çamaşır, bulaşık, buzdolabı, fırın ve kurutma makinesi tamiri. Yerinde arıza tespiti, aynı gün servis.",
  robots: { index: true, follow: true },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const ld = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: "Eskişehir Beyaz Eşya Tamiri",
    areaServed: "Eskişehir",
    url: SITE,
    telephone: PHONE_DISPLAY,
  };
  return (
    <html lang="tr">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
        />
        <Smooth />
        <Loader />
        <Cursor />
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyBar />
      </body>
    </html>
  );
}
