"use client";
import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
// import { PHONE_DISPLAY, telLink, waLink, ext } from "@/lib/contact"; // telefon gizlendi
import { waLink, ext } from "@/lib/contact";
import { track } from "@/lib/analytics";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

// Düğme imlece hafifçe yaklaşır (manyetik). Dokunmatik ekranda etkisizdir.
function Mag({
  children,
  href,
  kind,
  external,
  onClick,
}: {
  children: React.ReactNode;
  href: string;
  kind: "solid" | "line";
  external?: boolean;
  onClick?: () => void;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useSpring(useMotionValue(0), { stiffness: 240, damping: 16 });
  const y = useSpring(useMotionValue(0), { stiffness: 240, damping: 16 });
  const move = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse") return;
    const b = ref.current!.getBoundingClientRect();
    x.set((e.clientX - b.left - b.width / 2) * 0.22);
    y.set((e.clientY - b.top - b.height / 2) * 0.32);
  };
  const cls =
    kind === "solid"
      ? "bg-graphite text-white hover:bg-mint hover:text-graphite"
      : "border-2 border-graphite/30 text-graphite hover:border-graphite hover:bg-graphite hover:text-white";
  return (
    <motion.a
      ref={ref}
      href={href}
      onClick={onClick}
      {...(external ? ext : {})}
      style={{ x, y }}
      onPointerMove={move}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
      className={`inline-flex items-center gap-3 rounded-full px-7 py-4 text-base font-semibold transition-colors duration-300 ${cls}`}
    >
      {children}
    </motion.a>
  );
}

export function Cta({ topic }: { topic?: string }) {
  return (
    <div className="flex flex-wrap gap-3">
      {/* Telefon ile arama gizlendi
      <Mag href={telLink()} kind="solid" onClick={() => track("phone_click")}>
        <span className="size-2 rounded-full bg-mint" />
        {PHONE_DISPLAY || "Hemen ara"}
      </Mag>
      */}
      <Mag
        href={waLink(topic)}
        kind="solid"
        external
        onClick={() => track("whatsapp_click", { problem: topic })}
      >
        <WhatsAppIcon size={18} /> WhatsApp&apos;tan yaz
      </Mag>
    </div>
  );
}

/** Eski bölümlerin (Intro, Sections) kullandığı, konusuz Cta kısayolu. */
export function CallButtons() {
  return <Cta />;
}
