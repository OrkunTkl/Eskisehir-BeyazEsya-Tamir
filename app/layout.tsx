import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header, StickyBar } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Smooth } from "@/components/Smooth";
import { JsonLd } from "@/components/JsonLd";
import { organization, website, SITE_NAME } from "@/lib/seo";
import { SITE } from "@/lib/contact";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#f1f2ef",
};
export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: { default: SITE_NAME, template: "%s" },
  applicationName: SITE_NAME,
  robots: { index: true, follow: true },
  verification: process.env.NEXT_PUBLIC_GSC_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GSC_VERIFICATION }
    : undefined,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body>
        <a href="#main" className="skip">
          İçeriğe geç
        </a>
        <JsonLd data={organization} />
        <JsonLd data={website} />
        <Smooth />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <StickyBar />
      </body>
    </html>
  );
}
