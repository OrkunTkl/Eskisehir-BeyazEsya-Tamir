import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { appliances, bySlug } from "@/data/appliances";
import { CallButtons } from "@/components/Cta";
import { Split } from "@/components/Fx";
import { colors } from "@/lib/colors";

export const dynamicParams = false;
export const generateStaticParams = () =>
  appliances.map((a) => ({ slug: a.slug }));
type P = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: P): Promise<Metadata> {
  const a = bySlug((await params).slug);
  if (!a) return {};
  return {
    title: `Eskişehir ${a.name} Tamiri`,
    description: `Eskişehir ${a.name.toLowerCase()} tamiri: ${a.short} Yerinde servis.`,
    alternates: { canonical: `/${a.slug}` },
  };
}

export default async function Page({ params }: P) {
  const a = bySlug((await params).slug);
  if (!a) notFound();
  const i = appliances.indexOf(a),
    ni = (i + 1) % appliances.length,
    next = appliances[ni];
  return (
    <>
      <section className="relative flex min-h-[88vh] flex-col justify-end overflow-hidden bg-[#0a0b0d] px-6 pb-20 pt-36 md:px-14">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-[10%] top-[5%] size-[60vmax] rounded-full opacity-40 blur-[120px]"
          style={{ background: colors[i] }}
        />
        <Link
          href="/"
          className="relative mb-8 text-sm font-semibold uppercase tracking-widest opacity-60"
        >
          ← Tüm cihazlar
        </Link>
        <h1 className="mega relative">
          <Split
            lines={[a.name.toUpperCase(), "TAMİRİ."]}
            cls={["", "outline"]}
          />
        </h1>
        <p className="relative mb-10 mt-8 max-w-xl text-xl opacity-85">
          {a.short}
        </p>
        <div className="relative">
          <CallButtons topic={`${a.name} tamiri`} />
        </div>
      </section>
      <section className="relative z-10 -mt-12 rounded-t-[3rem] bg-[#efece6] px-6 py-28 text-[#0a0b0d] md:px-14">
        <p className="mb-10 text-sm font-semibold uppercase tracking-widest opacity-60">
          Sorun → Çözüm
        </p>
        <ul className="border-t border-black/20">
          {a.problems.map((x, k) => (
            <li
              key={x.p}
              className="grid gap-4 border-b border-black/20 py-10 md:grid-cols-2"
            >
              <h2 className="big !text-[clamp(1.8rem,4.2vw,4rem)]">
                <span className="mr-4 text-base font-semibold opacity-50">
                  0{k + 1}
                </span>
                {x.p}
              </h2>
              <p className="self-end text-lg opacity-80">{x.c}</p>
            </li>
          ))}
        </ul>
      </section>
      <Link
        href={`/${next.slug}`}
        style={{ background: colors[ni] }}
        className="group relative z-10 -mt-12 block rounded-t-[3rem] px-6 pb-32 pt-20 text-[#0a0b0d] md:px-14"
      >
        <span className="text-sm font-semibold uppercase tracking-widest opacity-60">
          Sıradaki
        </span>
        <span className="mega mt-4 block transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:translate-x-6">
          {next.name} →
        </span>
      </Link>
    </>
  );
}
