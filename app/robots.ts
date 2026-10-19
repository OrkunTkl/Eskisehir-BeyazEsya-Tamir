import type { MetadataRoute } from "next";
import { SITE } from "@/lib/contact";

// Arama motorlarına ve yapay zekâ arama/asistan botlarına açıkça izin verilir.
const AI_BOTS = [
  "OAI-SearchBot", // ChatGPT arama
  "ChatGPT-User", // ChatGPT'nin kullanıcı adına sayfa açması
  "GPTBot",
  "PerplexityBot",
  "Perplexity-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "Google-Extended", // Gemini
  "Applebot",
  "Bingbot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: AI_BOTS, allow: "/" },
    ],
    sitemap: `${SITE}/sitemap.xml`,
  };
}