"use client";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";

const steps = [
  [
    "Anlatın",
    "Arayın ya da WhatsApp'tan yazın. Cihazı, markayı, belirtiyi ve ilçenizi söylemeniz yeter.",
  ],
  [
    "Biz eşleştirelim",
    "İşe ve ilçenize uygun bağımsız servis sağlayıcıyı belirleyip talebinizi ona aktarırız.",
  ],
  [
    "Usta sizi arasın",
    "Servis sağlayıcı sizi arar, ne zaman gelebileceğini söyler.",
  ],
  [
    "Yerinde tespit",
    "Usta arızayı görür. Fiyat ve işin kapsamı onunla netleşir; siz onaylarsanız iş başlar.",
  ],
] as const;

function Step({
  i,
  t,
  d,
  p,
}: {
  i: number;
  t: string;
  d: string;
  p: MotionValue<number>;
}) {
  const from = i / steps.length;
  const o = useTransform(p, [from - 0.08, from + 0.12], [0.18, 1]);
  return (
    <motion.li
      style={{ opacity: o }}
      className="grid grid-cols-[3.2rem_1fr] gap-6 border-t border-graphite/20 py-9 md:grid-cols-[6.5rem_1fr] md:gap-8 md:py-12"
    >
      <span className="disp text-[clamp(2.6rem,6vw,5.5rem)] leading-none">
        {i + 1}
      </span>
      <div>
        <h3 className="disp disp-md">{t}</h3>
        <p className="mt-3 max-w-lg text-lg text-graphite/75">{d}</p>
      </div>
    </motion.li>
  );
}

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress: p } = useScroll({
    target: ref,
    offset: ["start 65%", "end 60%"],
  });
  const h = useTransform(p, [0, 1], ["0%", "100%"]);
  return (
    <section
      data-stage
      aria-labelledby="surec"
      className="px-5 py-24 md:px-10 md:py-36 lg:px-14"
    >
      <div className="mx-auto grid max-w-[1500px] gap-12 lg:grid-cols-[5fr_6fr] lg:gap-24">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <h2 id="surec" className="disp disp-xl">
            Dört adım.
          </h2>
          <p className="lead mt-6 text-graphite/70">
            Bu platform tamiri kendisi yapmaz; sizi doğru ustayla buluşturur.
          </p>
        </div>
        <div ref={ref} className="relative">
          <motion.span
            aria-hidden
            style={{ height: h }}
            className="absolute -left-4 top-0 hidden w-1 rounded-full bg-mint lg:block"
          />
          <ol className="border-b border-graphite/20">
            {steps.map(([t, d], i) => (
              <Step key={t} i={i} t={t} d={d} p={p} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
