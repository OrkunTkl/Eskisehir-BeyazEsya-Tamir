"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { appliances } from "@/data/appliances";
import { stage } from "@/lib/stage";
import { Cta } from "@/components/Cta";
import { track } from "@/lib/analytics";

const ease = [0.16, 1, 0.3, 1] as const;

function Line({ children, i }: { children: React.ReactNode; i: number }) {
  return (
    <span className="block overflow-hidden pb-[.08em]">
      <motion.span
        className="block"
        initial={{ y: "110%" }}
        animate={{ y: 0 }}
        transition={{ duration: 1, ease, delay: 0.1 + i * 0.12 }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export function Hero() {
  const [i, setI] = useState(0);
  const [f, setF] = useState(0);
  useEffect(() => {
    stage.hero = 0;
  }, []);
  const a = appliances[i];
  const fault = a.problems[Math.min(f, a.problems.length - 1)];
  const pick = (n: number) => {
    setI(n);
    stage.hero = n;
    setF(0);
    track("problem_selected", { problem: appliances[n].name });
  };
  return (
    <section
      data-stage
      className="relative px-5 pb-24 pt-28 md:px-10 md:pb-32 md:pt-32 lg:px-14"
    >
      <div className="mx-auto grid max-w-[1500px] gap-x-6 gap-y-8 lg:min-h-[calc(100svh-9rem)] lg:grid-cols-[1.05fr_1fr] lg:grid-rows-[auto_auto] lg:content-center">
        <div className="lg:col-start-1 lg:row-start-1">
          <h1 className="disp text-[clamp(2.6rem,6.4vw,6.6rem)]">
            <Line i={0}>Hangisi</Line>
            <Line i={1}>bozuldu?</Line>
            <span className="sr-only"> Eskişehir beyaz eşya tamiri</span>
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.55 }}
            className="lead mt-6 text-graphite/75"
          >
            Eskişehir&apos;de beyaz eşya tamiri için cihazınızı ve arızayı
            seçin. Usta yönlendirmesi için arayın ya da yazın.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease, delay: 0.4 }}
          className="lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:self-end"
        >
          <div aria-hidden className="h-[34svh] lg:hidden" />
          <div
            role="group"
            aria-label="Cihaz seçimi"
            className="flex flex-wrap gap-2 lg:flex-col lg:gap-0 lg:border-t lg:border-graphite/20"
          >
            {appliances.map((x, k) => (
              <button
                key={x.key}
                type="button"
                aria-pressed={k === i}
                onClick={() => pick(k)}
                className={`group flex items-center gap-3 rounded-full border px-4 py-2 text-[15px] font-medium transition-colors lg:rounded-none lg:border-0 lg:border-b lg:border-graphite/20 lg:px-1 lg:py-3.5 lg:text-lg ${k === i ? "border-graphite bg-graphite text-white lg:bg-transparent lg:text-graphite" : "border-graphite/20 hover:border-graphite lg:text-graphite/55 lg:hover:text-graphite"}`}
              >
                <span
                  aria-hidden
                  className={`hidden size-2.5 rounded-full transition-all lg:block ${k === i ? "scale-100 bg-graphite" : "scale-0 bg-graphite"}`}
                />
                <span className="lg:disp lg:text-[1.15rem] lg:font-medium lg:tracking-[-0.03em]">
                  {x.name}
                </span>
              </button>
            ))}
          </div>
        </motion.div>

        <div className="lg:col-start-1 lg:row-start-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.7 }}
            className="mt-8 max-w-xl border-t border-graphite/15 pt-6"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={a.slug}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.28, ease }}
              >
                <p className="disp disp-md">{a.name}</p>
                <div
                  role="group"
                  aria-label={`${a.name} arıza türü`}
                  className="mt-4 flex flex-wrap gap-2"
                >
                  {a.problems.map((p, k) => (
                    <button
                      key={p.p}
                      type="button"
                      aria-pressed={k === f}
                      onClick={() => setF(k)}
                      className={`rounded-full border px-4 py-2 text-[15px] font-medium transition-colors ${k === f ? "border-graphite bg-graphite text-white" : "border-graphite/20 hover:border-graphite"}`}
                    >
                      {p.p}
                    </button>
                  ))}
                </div>
                <p className="mt-4 min-h-[3.2em] text-graphite/70">
                  <span className="font-semibold text-graphite">
                    Usta neye bakar:{" "}
                  </span>
                  {fault.c}
                </p>
                <div className="mt-5">
                  <Cta topic={`${a.name}: ${fault.p}`} />
                </div>
                <Link
                  href={`/${a.slug}`}
                  className="mt-5 inline-block font-semibold underline underline-offset-4 hover:text-graphite/60"
                >
                  {a.name} tamiri rehberi
                </Link>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
