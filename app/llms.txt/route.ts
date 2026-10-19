import { SITE, districts } from "@/lib/contact";
import { SITE_NAME } from "@/lib/seo";
import { appliances } from "@/data/appliances";
import { guides } from "@/data/guides";

export const dynamic = "force-static";

// Yapay zekâ araçları için site özeti (llms.txt). İçerik veri dosyalarından otomatik üretilir.
export function GET() {
  const body = `# ${SITE_NAME}

> Eskişehir'de beyaz eşya (çamaşır makinesi, bulaşık makinesi, buzdolabı, fırın-ocak, kurutma makinesi) arızası yaşayanlara ilk kontrolleri anlatan ve talebi anlaşmalı bağımsız servis sağlayıcıya yönlendiren bilgi platformu. Tamiri platform yapmaz, hiçbir markanın yetkili servisi değildir. Talepler WhatsApp üzerinden alınır; fiyatı usta arızayı gördükten sonra netleştirir.

Hizmet bölgesi: Eskişehir merkez ve ilçeleri (${districts.join(", ")}).

## Cihaz sayfaları
${appliances.map((a) => `- [${a.name} tamiri](${SITE}/${a.slug}): ${a.short}`).join("\n")}

## Arıza rehberleri
${guides.map((g) => `- [${g.title}](${SITE}/ariza-merkezi/${g.slug}): ${g.short}`).join("\n")}

## Diğer
- [Soru-Cevap](${SITE}/forum): en çok sorulan sorular
- [Arıza merkezi](${SITE}/ariza-merkezi)
- [Hizmet bölgesi](${SITE}/eskisehir)
- [Hakkımızda](${SITE}/hakkimizda)
- [İletişim](${SITE}/iletisim)
`;
  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}