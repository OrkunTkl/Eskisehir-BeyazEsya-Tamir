import { JsonLd } from "@/components/Jsonld";

export type FaqItem = { q: string; a: string };

// Görünür SSS: içerik her zaman açık, gizli değil. Aynı içerik FAQPage şeması olarak da yazılır
// (arama motorları ve yapay zekâ araçları soru-cevap çiftlerini bu şekilde de okur).
export function FaqSection({
  items,
  title = "Sık sorulan sorular",
  id = "sss",
  className = "mt-16",
}: {
  items: FaqItem[];
  title?: string;
  id?: string;
  className?: string;
}) {
  if (!items.length) return null;
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return (
    <section aria-labelledby={id} className={className}>
      <JsonLd data={schema} />
      <h2 id={id} className="disp disp-md">
        {title}
      </h2>
      <dl className="mt-6 border-b border-graphite/20">
        {items.map((f) => (
          <div key={f.q} className="border-t border-graphite/20 py-6">
            <dt className="text-lg font-semibold">{f.q}</dt>
            <dd className="mt-2 text-graphite/70">{f.a}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
