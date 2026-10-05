import Link from "next/link";
export const metadata = {
  title: "Sayfa bulunamadı",
  robots: { index: false, follow: true },
};
export default function NotFound() {
  return (
    <div className="px-5 pb-24 pt-32 md:px-10 md:pt-44 lg:px-14">
      <h1 className="disp disp-xl">Sayfa bulunamadı</h1>
      <p className="lead mt-6 text-graphite/70">
        Aradığınız sayfa taşınmış ya da kaldırılmış olabilir.
      </p>
      <ul className="mt-8 space-y-2 text-lg">
        {[
          ["/", "Ana sayfa"],
          ["/ariza-merkezi", "Arıza merkezi"],
          ["/eskisehir", "Hizmet bölgesi"],
        ].map(([h, l]) => (
          <li key={h}>
            <Link className="underline underline-offset-4" href={h}>
              {l}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
