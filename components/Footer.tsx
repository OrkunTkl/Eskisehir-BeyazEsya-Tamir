import Link from "next/link";
import { appliances } from "@/data/appliances";
import { districts, PHONE_DISPLAY, telLink, waLink, ext } from "@/lib/contact";

const h = "mb-5 text-sm font-semibold uppercase tracking-widest opacity-50";
export function Footer() {
  return (
    <footer className="relative z-10 -mt-12 overflow-hidden rounded-t-[3rem] bg-[#efece6] px-6 pb-28 pt-24 text-[#0a0b0d] md:px-14 md:pb-10">
      <div className="grid gap-14 md:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
        <div>
          <p className="text-2xl font-extrabold tracking-tight">
            eskişehir<span className="opacity-50"> beyaz eşya</span>
          </p>
          <p className="mt-4 max-w-xs opacity-70">
            Çamaşır, bulaşık, buzdolabı, fırın ve kurutma makinesi arızalarında
            yerinde servis için ustaya yönlendirme.
          </p>
        </div>
        <nav>
          <p className={h}>Hizmetler</p>
          <ul className="space-y-3 text-lg">
            {appliances.map((a) => (
              <li key={a.slug}>
                <Link
                  href={`/${a.slug}`}
                  className="transition-opacity hover:opacity-60"
                >
                  {a.name} tamiri
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <p className={h}>İletişim</p>
          <ul className="space-y-3 text-lg">
            <li>
              <a href={telLink()} className="font-semibold">
                {PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <a href={waLink()} {...ext}>
                WhatsApp ↗
              </a>
            </li>
            <li className="opacity-70">Her gün · Eskişehir</li>
          </ul>
        </div>
        <div>
          <p className={h}>Hizmet bölgesi</p>
          <p className="leading-7 opacity-70">{districts.join(" · ")}</p>
        </div>
      </div>
      <p className="mega mt-24 select-none text-center !text-[19vw] !leading-[.8] opacity-[0.08]">
        ESKİŞEHİR
      </p>
      <div className="mt-10 flex flex-col justify-between gap-3 border-t border-black/15 pt-6 text-sm opacity-60 md:flex-row">
        <span>© {new Date().getFullYear()} Eskişehir Beyaz Eşya</span>
        <span>
          Marka yetkili servisi değildir; bağımsız usta yönlendirme hizmetidir.
        </span>
      </div>
    </footer>
  );
}
