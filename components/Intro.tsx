"use client";
import { useRef, useState } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { MachineLazy } from "./MachineLazy";
import { CallButtons } from "./Cta";

function Line({
  p,
  i,
  children,
}: {
  p: MotionValue<number>;
  i: number;
  children: string;
}) {
  const y = useTransform(p, [0.4 + i * 0.04, 0.58 + i * 0.04], ["112%", "0%"]);
  return (
    <span className="block overflow-hidden pb-[0.08em]">
      <motion.span
        style={{ y }}
        className={`block ${i === 1 ? "outline" : ""}`}
      >
        {children}
      </motion.span>
    </span>
  );
}

/**
 * Simsiyah sahne: önde kapağı açık makine. Kaydırdıkça tamburun içine gireriz;
 * tambur ucu bir portal: sitenin hero bölümü orada görünür ve içeri geçince ekranı kaplar.
 */
export function Intro() {
  const ref = useRef<HTMLElement>(null);
  const [ready, setReady] = useState(false);
  const { scrollYProgress: p } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const hint = useTransform(p, [0, 0.06], [1, 0]);
  const heroScale = useTransform(p, [0.3, 0.72], [1.35, 1]);
  const textO = useTransform(p, [0.5, 0.66], [0, 1]);
  const click = useTransform(p, (v) => (v > 0.72 ? "auto" : "none"));
  return (
    <section ref={ref} className="relative h-[420vh]">
      <div className="sticky top-0 h-screen overflow-hidden bg-black">
        {/* Sitenin hero bölümü (sadece tamburun portalından görünür) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: ready ? 1 : 0 }}
          style={{ scale: heroScale }}
          className="absolute inset-0"
        >
          <video
            className="absolute inset-0 size-full object-cover"
            src="/videos/hero.mp4"
            poster="/videos/hero.jpg"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/30" />
        </motion.div>
        <motion.div
          style={{ pointerEvents: click }}
          className="absolute inset-0 flex flex-col justify-center px-6 md:px-14"
        >
          <motion.p
            style={{ opacity: textO }}
            className="mb-6 max-w-sm text-lg font-medium"
          >
            Eskişehir'in 14 ilçesinde yerinde beyaz eşya tamiri. Arıyorsunuz,
            usta yönlendiriliyor.
          </motion.p>
          <h1 className="mega">
            {["BEYAZ", "EŞYA", "TAMİRİ"].map((l, i) => (
              <Line key={l} p={p} i={i}>
                {l}
              </Line>
            ))}
          </h1>
          <motion.div style={{ opacity: textO }} className="mt-8">
            <CallButtons />
          </motion.div>
        </motion.div>
        {/* 3D makine: arkası simsiyah, ortası portal */}
        <div className="pointer-events-none absolute inset-0">
          <MachineLazy p={p} onReady={() => setReady(true)} />
          <motion.div
            style={{ opacity: hint }}
            className="absolute inset-x-0 bottom-8 flex flex-col items-center gap-3 text-sm font-semibold uppercase tracking-widest"
          >
            <span>Kaydırın, içeri girin</span>
            <motion.span
              animate={{ scaleY: [0.2, 1, 0.2] }}
              transition={{ duration: 1.6, repeat: Infinity }}
              className="block h-10 w-px origin-top bg-[#d4ff3a]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
