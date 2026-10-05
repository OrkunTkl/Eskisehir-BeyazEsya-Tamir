import Link from "next/link";
import { notFound } from "next/navigation";
import { appliances, bySlug } from "@/data/appliances";
import { Article } from "@/components/Article";
import { Cta } from "@/components/Cta";
import { JsonLd } from "@/components/JsonLd";
import { FaqSection } from "@/components/Faq";
import { CallbackSection } from "@/components/CallbackSection";
import { meta, breadcrumb, serviceSchema } from "@/lib/seo";

export const dynamicParams = false;
export const generateStaticParams = () =>
  appliances.map((a) => ({ slug: a.slug }));
type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  const a = bySlug((await params).slug);
  return a ? meta(a.title, a.description, `/${a.slug}`) : {};
}

const Block = ({ h, children }: { h: string; children: React.ReactNode }) => (
  <section className="mb-14 border-t border-graphite/20 pt-8 first-of-type:border-t-0 first-of-type:pt-0">
    <h2 className="disp disp-md">{h}</h2>
    <div className="mt-5">{children}</div>
  </section>
);

export default async function Page({ params }: Props) {
  const a = bySlug((await params).slug);
  if (!a) notFound();
  const rel = a.related
    .map((s) => bySlug(s))
    .filter(Boolean) as typeof appliances;
  return (
    <>
      <Article
        aside={
          <>
            <h1 className="disp disp-col">
              Eskişehir {a.name.toLowerCase()} tamiri
            </h1>
            <p className="lead mt-6 text-graphite/75">{a.lead}</p>
            <div className="mt-8">
              <Cta topic={`${a.name} tamiri`} />
            </div>
            <p className="mt-8 max-w-xl text-sm text-graphite/55">
              Bu platform tamiri kendisi yapmaz ve hiçbir markanın yetkili
              servisi değildir; talebinizi uygun bağımsız servis sağlayıcıya
              yönlendirir.
            </p>
          </>
        }
      >
        <JsonLd
          data={breadcrumb([
            ["Ana Sayfa", "/"],
            [`${a.name} tamiri`, `/${a.slug}`],
          ])}
        />
        <JsonLd
          data={serviceSchema(`${a.name} tamiri`, a.description, `/${a.slug}`)}
        />
        <Block h="En sık arızalar ve ustanın baktığı yerler">
          <ul className="border-b border-graphite/15">
            {a.problems.map((x) => (
              <li key={x.p} className="border-t border-graphite/15 py-5">
                <h3 className="text-lg font-semibold">
                  {x.guide ? (
                    <Link
                      className="underline underline-offset-4 hover:text-graphite/60"
                      href={`/ariza-merkezi/${x.guide}`}
                    >
                      {x.p}
                    </Link>
                  ) : (
                    x.p
                  )}
                </h3>
                <p className="mt-1 text-graphite/70">{x.c}</p>
              </li>
            ))}
          </ul>
        </Block>
        <Block h="Önce güvenle deneyebilecekleriniz">
          <ul className="list-disc space-y-3 pl-5 text-lg text-graphite/80">
            {a.tips.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </Block>
        <Block h="Ne zaman usta gerekir?">
          <ul className="list-disc space-y-3 pl-5 text-lg text-graphite/80">
            {a.call.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </Block>
        <FaqSection items={a.faq} />
        <nav aria-label="Diğer cihazlar" className="mt-16">
          <h2 className="disp disp-md">Diğer cihazlar</h2>
          <ul className="mt-5 space-y-2 text-lg">
            {rel.map((r) => (
              <li key={r.slug}>
                <Link
                  className="underline underline-offset-4"
                  href={`/${r.slug}`}
                >
                  {r.name} tamiri
                </Link>
              </li>
            ))}
            <li>
              <Link
                className="underline underline-offset-4"
                href="/#tamir-mi-yeni-mi"
              >
                Tamir mi, yenisi mi? hesabı
              </Link>
            </li>
          </ul>
        </nav>
      </Article>
      <CallbackSection />
    </>
  );
}
