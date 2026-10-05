import Link from "next/link";
import { meta } from "@/lib/seo";
import { appliances } from "@/data/appliances";
import { guides } from "@/data/guides";

export const metadata = meta(
  "Beyaz Eşya Arıza Merkezi | Belirtiye Göre Rehberler",
  "Çamaşır makinesi su almıyor, bulaşık makinesi yıkamıyor, buzdolabı soğutmuyor… Belirtiye göre nedenler ve güvenli ilk adımlar.",
  "/ariza-merkezi",
);
export default function Page() {
  return (
    <div className="px-5 pb-24 pt-32 md:px-10 md:pt-44 lg:px-14">
      <div className="mx-auto max-w-[1500px]">
        <h1 className="disp disp-xl max-w-5xl">Arıza merkezi</h1>
        <p className="lead mt-6 text-graphite/70">
          Belirtinizi seçin. Her rehber olası nedenleri, güvenle
          yapabileceklerinizi ve ne zaman usta gerektiğini anlatır.
        </p>
        <div className="mt-16 grid gap-x-20 gap-y-14 md:grid-cols-2">
          {appliances.map((a) => {
            const list = guides.filter((g) => g.appliance === a.slug);
            if (!list.length) return null;
            return (
              <section key={a.slug}>
                <h2 className="disp disp-md">
                  <Link href={`/${a.slug}`} className="hover:text-graphite/60">
                    {a.name}
                  </Link>
                </h2>
                <ul className="mt-4 border-b border-graphite/15">
                  {list.map((g) => (
                    <li key={g.slug} className="border-t border-graphite/15">
                      <Link
                        href={`/ariza-merkezi/${g.slug}`}
                        className="block py-4 text-lg font-medium underline-offset-4 hover:underline"
                      >
                        {g.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
}
