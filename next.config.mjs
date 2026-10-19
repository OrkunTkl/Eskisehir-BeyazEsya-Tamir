// vercel.app adresini özel alan adına kalıcı (308) yönlendirir; böylece Google iki ayrı site görmez.
// NEXT_PUBLIC_SITE_URL (www'li özel alan adı) Vercel ortam değişkeninde tanımlı olmalı.
const PROD = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.eskisehirbeyazesyatamiri.com"
).replace(/\/+$/, "");
const VERCEL_HOST = "eskisehir-beyaz-esya-tamir.vercel.app"; // Vercel > Project > Settings > Domains içindeki .vercel.app adresi

const nextConfig = {
  async redirects() {
    if (!PROD.startsWith("https://") || PROD.includes("vercel.app")) return [];
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: VERCEL_HOST }],
        destination: `${PROD}/:path*`,
        permanent: true,
      },
    ];
  },
};
export default nextConfig;
