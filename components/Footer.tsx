import Link from "next/link";
import { appliances } from "@/data/appliances";
import { Cta } from "@/components/Cta";

export const TRANSPARENCY_TEXT =
  "Eskişehir Beyaz Eşya Tamiri, beyaz eşya tamiri arayanları anlaşmalı bağımsız servis sağlayıcılarla buluşturan bir yönlendirme platformudur. Tamiri yönlendirilen servis sağlayıcı yapar. Platform hiçbir markanın yetkili servisi değildir.";

export function Footer() {
  return (
    <footer className="on-dark overflow-hidden bg-graphite px-5 pb-28 pt-20 text-white md:px-10 md:pb-10 lg:px-14">
      <div className="mx-auto grid max-w-[1500px] gap-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="disp disp-lg max-w-xl">
            Bozulan ne olursa olsun, tek numara.
          </p>
          <div className="mt-8 [&_a:first-child]:bg-white [&_a:first-child]:text-graphite [&_a:last-child]:border-white/30 [&_a:last-child]:text-white">
            <Cta />
          </div>
        </div>
        <nav aria-label="Cihazlar">
          <p className="font-semibold text-white/45">Cihazlar</p>
          <ul className="mt-4 space-y-2">
            {appliances.map((a) => (
              <li key={a.slug}>
                <Link
                  className="text-white/85 hover:text-mint"
                  href={`/${a.slug}`}
                >
                  {a.name} tamiri
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Sayfalar">
          <p className="font-semibold text-white/45">Sayfalar</p>
          <ul className="mt-4 space-y-2">
            {[
              ["/ariza-merkezi", "Arıza merkezi"],
              ["/#tamir-mi-yeni-mi", "Tamir mi, yenisi mi?"],
              ["/eskisehir", "Hizmet bölgesi"],
              ["/gizlilik", "Aydınlatma metni"],
            ].map(([h, l]) => (
              <li key={h}>
                <Link className="text-white/85 hover:text-mint" href={h}>
                  {l}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <p className="mx-auto mt-16 max-w-[1500px] text-sm text-white/50 md:max-w-3xl md:mx-0 md:pl-0">
        {TRANSPARENCY_TEXT}
      </p>
      <p
        aria-hidden
        className="disp mx-auto mt-10 max-w-[1500px] select-none whitespace-nowrap text-[min(19vw,19rem)] leading-[.85] text-mint"
      >
        Yazın.
      </p>
    </footer>
  );
}
