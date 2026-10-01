"use client";
import Link from "next/link";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  MotionValue,
} from "framer-motion";
import { appliances } from "@/data/appliances";
import { colors } from "@/lib/colors";
import { Split } from "./Fx";
import { CallButtons } from "./Cta";

/** Üst şerit sağa, alt şerit sola; kesintisiz akar. Kaydırma hızıyla hafif eğilir. */
function Belt({ words, dir }: { words: string; dir: 1 | -1 }) {
  const half = (
    <div className="flex">
      {[0, 1, 2, 3].map((i) => (
        <span key={i} className={`mx-6 ${i % 2 ? "outline" : ""}`}>
          {words}{" "}
          <span style={{ color: colors[3] }} className="not-italic">
            ✦
          </span>
        </span>
      ))}
    </div>
  );
  return (
    <div className="overflow-hidden whitespace-nowrap">
      <motion.div
        animate={{ x: dir === 1 ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration: 45, ease: "linear", repeat: Infinity }}
        className="flex w-max"
      >
        {half}
        {half}
      </motion.div>
    </div>
  );
}
export function Marquees() {
  const { scrollY } = useScroll();
  const skew = useTransform(
    useSpring(useVelocity(scrollY), { damping: 50, stiffness: 400 }),
    [-3000, 3000],
    [-8, 8],
  );
  return (
    <motion.div
      style={{ skewX: skew }}
      className="py-24 text-[11vw] font-extrabold leading-[1.1] tracking-tighter"
    >
      <Belt words="ÇAMAŞIR · BULAŞIK · BUZDOLABI" dir={1} />
      <Belt words="FIRIN · OCAK · KURUTMA" dir={-1} />
    </motion.div>
  );
}

function W({
  w,
  p,
  a,
  b,
}: {
  w: string;
  p: MotionValue<number>;
  a: number;
  b: number;
}) {
  const o = useTransform(p, [a, b], [0.12, 1]);
  return (
    <motion.span style={{ opacity: o }} className="mr-[0.22em] inline-block">
      {w}
    </motion.span>
  );
}
export function Statement() {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress: p } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.45"],
  });
  const words =
    "Arızayı tahmin etmeyiz. Cihazın başında bulur, aynı gün çözeriz. Parça gerekirse önce size söyler, sonra değiştiririz.".split(
      " ",
    );
  return (
    <section className="px-6 py-40 md:px-14">
      <p ref={ref} className="big max-w-6xl">
        {words.map((w, i) => (
          <W
            key={i}
            w={w}
            p={p}
            a={(i / words.length) * 0.9}
            b={(i / words.length) * 0.9 + 0.12}
          />
        ))}
      </p>
    </section>
  );
}

export function ServiceList() {
  return (
    <section className="px-6 py-32 md:px-14">
      <p className="mb-10 text-sm font-semibold uppercase tracking-widest opacity-60">
        Hizmetler (05)
      </p>
      <ul className="border-t border-black/20">
        {appliances.map((a, i) => (
          <li key={a.slug} className="border-b border-black/20">
            <Link
              href={`/${a.slug}`}
              className="group relative block overflow-hidden"
            >
              <span
                style={{ background: colors[i] }}
                className="absolute inset-0 origin-bottom scale-y-0 transition-transform duration-500 ease-[cubic-bezier(.76,0,.24,1)] group-hover:scale-y-100"
              />
              <span className="relative flex items-end justify-between gap-6 py-6 transition-all duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:px-6 group-hover:text-[#0a0b0d] md:py-8">
                <span className="flex items-baseline gap-5 md:gap-10">
                  <span className="text-sm font-semibold opacity-60">
                    {a.tag}
                  </span>
                  <span className="mega !text-[clamp(2.6rem,9.5vw,10rem)] !leading-[.95]">
                    {a.name}
                  </span>
                </span>
                <span className="hidden max-w-[16rem] pb-3 text-right opacity-0 transition-opacity duration-500 group-hover:opacity-90 lg:block">
                  {a.short}
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Card({ p, i, n }: { p: MotionValue<number>; i: number; n: number }) {
  const a = appliances[i];
  const scale = useTransform(p, [i / n, 1], [1, 1 - (n - 1 - i) * 0.045]);
  return (
    <div
      className="sticky mb-[6vh]"
      style={{ top: `calc(9vh + ${i * 1.4}rem)` }}
    >
      <motion.div
        style={{ scale, background: colors[i] }}
        className="grid h-[68vh] origin-top gap-6 rounded-[2rem] p-7 text-[#0a0b0d] md:grid-cols-2 md:p-12"
      >
        <div className="flex flex-col justify-between">
          <span className="text-sm font-bold">{a.tag} / 05</span>
          <h3 className="mega !text-[clamp(2.8rem,8vw,8rem)]">{a.name}</h3>
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-widest opacity-60">
              En sık gelen
            </p>
            <p className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
              {a.problems[0].p}
            </p>
            <p className="mt-3 max-w-md text-lg opacity-80">
              {a.problems[0].c}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {a.problems.slice(1, 4).map((x) => (
                <span
                  key={x.p}
                  className="rounded-full border border-black/30 px-4 py-1.5 text-sm font-semibold"
                >
                  {x.p}
                </span>
              ))}
            </div>
          </div>
          <Link
            href={`/${a.slug}`}
            className="self-start rounded-full bg-[#0a0b0d] px-6 py-3 font-bold text-white"
          >
            Detaylar →
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
export function Stack() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress: p } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  return (
    <section className="px-6 py-32 md:px-14">
      <h2 className="big mb-16">
        <Split lines={["Sık gelen", "arızalar."]} />
      </h2>
      <div ref={ref}>
        {appliances.map((_, i) => (
          <Card key={i} p={p} i={i} n={appliances.length} />
        ))}
      </div>
    </section>
  );
}

const steps = [
  [
    "01",
    "Arayın",
    "Cihazı ve arızayı anlatın. WhatsApp'tan fotoğraf ya da video da atabilirsiniz.",
  ],
  [
    "02",
    "Usta yönlendirilir",
    "Size en yakın ustayı ararız; adres, saat ve numarayı birlikte netleştiririz.",
  ],
  [
    "03",
    "Yerinde çözülür",
    "Arıza evinizde tespit edilir. Ücret ve parça önceden söylenir.",
  ],
];
export function Process() {
  return (
    <section className="px-6 py-32 md:px-14">
      <h2 className="big mb-20">
        <Split lines={["Üç adımda,", "tamam."]} />
      </h2>
      <div className="grid gap-16 md:grid-cols-3">
        {steps.map(([n, t, d], i) => (
          <motion.div
            key={n}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{
              duration: 1,
              delay: i * 0.12,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <div className="mega outline mb-6">{n}</div>
            <h3 className="mb-3 text-3xl font-bold tracking-tight">{t}</h3>
            <p className="max-w-xs text-lg opacity-75">{d}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/** Arkada sessiz, sürekli dönen video. */
export function Finale() {
  return (
    <section
      id="iletisim"
      className="relative z-10 -mt-12 overflow-hidden rounded-t-[3rem] px-6 pb-32 pt-48 md:px-14 text-[#f4f2ec]"
    >
      <video
        className="absolute inset-0 -z-10 size-full object-cover"
        src="/videos/finale.mp4"
        poster="/videos/finale.jpg"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0a0b0d] via-[#0a0b0d]/30 to-[#0a0b0d]" />
      <h2 className="mega">
        <Split lines={["ARAYIN,", "GELELİM."]} cls={["", "outline"]} />
      </h2>
      <p className="mb-10 mt-10 max-w-md text-lg opacity-90">
        Adresi ve arızayı söyleyin; ustanın ne zaman gelebileceğini size
        bildirelim.
      </p>
      <CallButtons />
    </section>
  );
}
