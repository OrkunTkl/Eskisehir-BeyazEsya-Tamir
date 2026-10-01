"use client";
import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { PHONE_DISPLAY, telLink, waLink, ext } from "@/lib/contact";

function Mag({
  children,
  href,
  primary,
  external,
}: {
  children: React.ReactNode;
  href: string;
  primary?: boolean;
  external?: boolean;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useSpring(useMotionValue(0), { stiffness: 220, damping: 14 }),
    y = useSpring(useMotionValue(0), { stiffness: 220, damping: 14 });
  const move = (e: React.PointerEvent) => {
    const b = ref.current!.getBoundingClientRect();
    x.set((e.clientX - b.left - b.width / 2) * 0.35);
    y.set((e.clientY - b.top - b.height / 2) * 0.5);
  };
  return (
    <motion.a
      ref={ref}
      href={href}
      {...(external ? ext : {})}
      style={{ x, y }}
      onPointerMove={move}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
      className={`inline-flex items-center gap-3 rounded-full px-8 py-5 text-lg font-bold backdrop-blur-sm ${primary ? "bg-[#d4ff3a] text-[#0a0b0d]" : "border border-white/50 text-white"}`}
    >
      {children}
    </motion.a>
  );
}
export function CallButtons({ topic }: { topic?: string }) {
  return (
    <div className="flex flex-wrap gap-3">
      <Mag href={telLink()} primary>
        <span className="size-2.5 animate-pulse rounded-full bg-[#0a0b0d]" />
        {PHONE_DISPLAY}
      </Mag>
      <Mag href={waLink(topic)} external>
        WhatsApp'tan yaz ↗
      </Mag>
    </div>
  );
}
