"use client";
import { useEffect, useState } from "react";
import {
  AnimatePresence,
  animate,
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";

/** Açılış perdesi: sayaç → perde yukarı kayar ve makine sahnesi görünür. */
export function Loader() {
  const [n, setN] = useState(0),
    [done, setDone] = useState(false);
  useEffect(() => {
    const c = animate(0, 100, {
      duration: 1.3,
      ease: "easeInOut",
      onUpdate: (v) => setN(Math.round(v)),
      onComplete: () => setTimeout(() => setDone(true), 120),
    });
    return () => c.stop();
  }, []);
  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{
            y: "-100%",
            transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[100] flex flex-col justify-between bg-black p-6 md:p-12"
        >
          <span className="text-sm font-semibold uppercase tracking-widest opacity-60">
            Eskişehir · Beyaz eşya servisi
          </span>
          <div className="mega tabular-nums text-[#d4ff3a]">{n}</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function Cursor() {
  const x = useMotionValue(-100),
    y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 600, damping: 45, mass: 0.4 }),
    sy = useSpring(y, { stiffness: 600, damping: 45, mass: 0.4 });
  const [big, setBig] = useState(false);
  useEffect(() => {
    const m = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setBig(!!(e.target as Element).closest?.("a,button"));
    };
    addEventListener("pointermove", m);
    return () => removeEventListener("pointermove", m);
  }, [x, y]);
  return (
    <motion.div
      style={{ x: sx, y: sy }}
      className="cur pointer-events-none fixed left-0 top-0 z-[90] mix-blend-difference"
    >
      <motion.div
        animate={{ scale: big ? 4.5 : 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 24 }}
        className="-ml-2 -mt-2 size-4 rounded-full bg-white"
      />
    </motion.div>
  );
}

export function Split({
  lines,
  cls = [],
  delay = 0,
}: {
  lines: string[];
  cls?: string[];
  delay?: number;
}) {
  return (
    <>
      {lines.map((l, li) => (
        <span
          key={li}
          className={`block overflow-hidden pb-[0.08em] ${cls[li] ?? ""}`}
        >
          <motion.span
            className="block"
            initial={{ y: "115%", rotate: 4 }}
            whileInView={{ y: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 1.1,
              ease: [0.16, 1, 0.3, 1],
              delay: delay + li * 0.1,
            }}
          >
            {l}
          </motion.span>
        </span>
      ))}
    </>
  );
}
