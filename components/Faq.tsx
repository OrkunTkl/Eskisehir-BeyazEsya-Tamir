export type FaqItem = { q: string; a: string };
// Görünür SSS: içerik her zaman açık, gizli değil.
export function FaqSection({ items }: { items: FaqItem[] }) {
  if (!items.length) return null;
  return (
    <section aria-labelledby="sss" className="mt-16">
      <h2 id="sss" className="disp disp-md">
        Sık sorulan sorular
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
