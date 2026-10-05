import Link from "next/link";
import { appliances } from "@/data/appliances";

export function ApplianceRows() {
  return (
    <section
      data-stage
      id="cihazlar"
      aria-labelledby="cihazlar-h"
      className="px-5 py-24 md:px-10 md:py-36 lg:px-14"
    >
      <div className="mx-auto max-w-[1500px]">
        <h2 id="cihazlar-h" className="disp disp-xl max-w-5xl">
          Beş cihaz, tek numara.
        </h2>
        <p className="lead mt-6 text-graphite/70">
          Cihazınızı seçin, en sık arızalarını ve usta ne yapar, görün.
        </p>
        <ul className="mt-14 border-b border-graphite/20 md:mt-20">
          {appliances.map((a) => (
            <li key={a.slug} className="border-t border-graphite/20">
              <Link
                href={`/${a.slug}`}
                className="group relative block overflow-hidden"
              >
                <span
                  aria-hidden
                  className="absolute inset-0 origin-bottom scale-y-0 bg-graphite transition-transform duration-500 ease-[cubic-bezier(.7,0,.2,1)] group-hover:scale-y-100 group-focus-visible:scale-y-100"
                />
                <span className="relative grid items-center gap-3 px-1 py-7 transition-colors duration-500 group-hover:text-white group-focus-visible:text-white md:grid-cols-[1.7fr_1fr_auto] md:gap-10 md:px-6 md:py-10">
                  <span className="disp text-[clamp(1.6rem,3.5vw,3.6rem)] transition-transform duration-500 group-hover:translate-x-2">
                    {a.name}
                  </span>
                  <span className="text-graphite/65 transition-colors duration-500 group-hover:text-white/75 md:text-lg">
                    {a.problems
                      .slice(0, 3)
                      .map((p) => p.p)
                      .join(", ")}{" "}
                    ve daha fazlası.
                  </span>
                  <span
                    aria-hidden
                    className="hidden size-14 place-items-center rounded-full border-2 border-current text-xl transition-all duration-500 group-hover:rotate-[-45deg] group-hover:border-mint group-hover:bg-mint group-hover:text-graphite md:grid"
                  >
                    →
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
