import Link from "next/link";
import { notFound } from "next/navigation";
import { guides, guideBySlug } from "@/data/guides";
import { bySlug } from "@/data/appliances";
import { Article } from "@/components/Article";
import { Cta } from "@/components/Cta";
import { JsonLd } from "@/components/JsonLd";
import { FaqSection } from "@/components/Faq";
import { CallbackSection } from "@/components/CallbackSection";
import { meta, breadcrumb, articleSchema } from "@/lib/seo";

export const dynamicParams = false;
export const generateStaticParams = () => guides.map((g) => ({ slug: g.slug }));
type Props = { params: Promise<{ slug: string }> };
const cut = (t: string, n = 158) =>
  t.length <= n ? t : t.slice(0, n).replace(/\s+\S*$/, "") + "…";

export async function generateMetadata({ params }: Props) {
  const g = guideBySlug((await params).slug);
  return g ? meta(g.seoTitle, cut(g.short), `/ariza-merkezi/${g.slug}`) : {};
}

const List = ({ h, items }: { h: string; items: string[] }) => (
  <section className="mb-12 border-t border-graphite/20 pt-8 first-of-type:border-t-0 first-of-type:pt-0">
    <h2 className="disp disp-md">{h}</h2>
    <ul className="mt-5 list-disc space-y-3 pl-5 text-lg text-graphite/80">
      {items.map((i) => (
        <li key={i}>{i}</li>
      ))}
    </ul>
  </section>
);

export default async function Page({ params }: Props) {
  const g = guideBySlug((await params).slug);
  if (!g) notFound();
  const a = bySlug(g.appliance)!;
  const same = guides.filter(
    (x) => x.appliance === g.appliance && x.slug !== g.slug,
  );
  return (
    <>
      <Article
        aside={
          <>
            <h1 className="disp disp-col">{g.title}</h1>
            <p className="lead mt-6 text-graphite/75">{g.short}</p>
            <div className="mt-8">
              <Cta topic={g.title} />
            </div>
          </>
        }
      >
        <JsonLd
          data={breadcrumb([
            ["Ana Sayfa", "/"],
            ["Arıza Merkezi", "/ariza-merkezi"],
            [g.title, `/ariza-merkezi/${g.slug}`],
          ])}
        />
        <JsonLd
          data={articleSchema(
            g.title,
            cut(g.short),
            `/ariza-merkezi/${g.slug}`,
          )}
        />
        <List h="Olası nedenler" items={g.causes} />
        <List h="Güvenle neler yapabilirsiniz?" items={g.safe} />
        <List h="Ne zaman usta gerekir?" items={g.call} />
        <p className="text-sm text-graphite/55">
          Bu sayfa genel bilgi amaçlıdır. Cihazın kapağını açmayın, gaz ve
          elektrik bağlantılarına müdahale etmeyin. Markanıza özgü adımlar için
          kullanma kılavuzuna bakın. Yangın ya da yaralanma varsa 112&apos;yi,
          gaz kokusunda 187&apos;yi arayın.
        </p>
        <FaqSection items={g.faq} />
        <nav aria-label="İlgili sayfalar" className="mt-16">
          <h2 className="disp disp-md">İlgili sayfalar</h2>
          <ul className="mt-5 space-y-2 text-lg">
            <li>
              <Link
                className="underline underline-offset-4"
                href={`/${a.slug}`}
              >
                {a.name} tamiri
              </Link>
            </li>
            {same.map((x) => (
              <li key={x.slug}>
                <Link
                  className="underline underline-offset-4"
                  href={`/ariza-merkezi/${x.slug}`}
                >
                  {x.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Article>
      <CallbackSection />
    </>
  );
}
