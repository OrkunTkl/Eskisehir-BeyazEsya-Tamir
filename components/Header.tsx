"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { PHONE_DISPLAY, telLink, waLink, ext } from "@/lib/contact";
import { track } from "@/lib/analytics";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

const links = [
  ["/#cihazlar", "Cihazlar"],
  ["/#tamir-mi-yeni-mi", "Tamir mi, yeni mi?"],
  ["/ariza-merkezi", "Arıza merkezi"],
] as const;

export function Header() {
  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
      className="fixed inset-x-0 top-3 z-50 flex justify-center px-3 md:top-4"
    >
      <div className="flex w-full max-w-5xl items-center justify-between gap-4 rounded-full border border-graphite/10 bg-porcelain/80 py-2 pl-5 pr-2 shadow-[0_10px_40px_-20px_rgba(20,23,26,.35)] backdrop-blur-xl">
        <Link
          href="/"
          className="disp whitespace-nowrap text-[15px] leading-none md:text-base"
        >
          Eskişehir Beyaz Eşya
        </Link>
        <nav
          aria-label="Ana menü"
          className="hidden items-center gap-7 text-[15px] font-medium md:flex"
        >
          {links.map(([h, l]) => (
            <Link
              key={h}
              href={h}
              className="text-graphite/70 transition-colors hover:text-graphite"
            >
              {l}
            </Link>
          ))}
        </nav>
        <a
          href={telLink()}
          onClick={() => track("phone_click")}
          className="inline-flex items-center gap-2 rounded-full bg-graphite px-5 py-2.5 text-[15px] font-semibold text-white transition-colors hover:bg-mint hover:text-graphite"
        >
          <span className="size-2 rounded-full bg-mint" />
          <span className="hidden sm:inline">{PHONE_DISPLAY || "Ara"}</span>
          <span className="sm:hidden">Ara</span>
        </a>
      </div>
    </motion.header>
  );
}

export function StickyBar() {
  return (
    <div className="fixed inset-x-3 bottom-3 z-50 grid grid-cols-2 gap-2 pb-[env(safe-area-inset-bottom)] md:hidden">
      <a
        href={telLink()}
        onClick={() => track("phone_click")}
        className="flex items-center justify-center gap-2 rounded-full bg-graphite py-3.5 font-semibold text-white shadow-xl"
      >
        <span className="size-2 rounded-full bg-mint" /> Hemen ara
      </a>
      <a
        href={waLink()}
        {...ext}
        onClick={() => track("whatsapp_click")}
        className="flex items-center justify-center gap-2 rounded-full bg-[#25D366] py-3.5 font-semibold text-[#04331a] shadow-xl"
      >
        <WhatsAppIcon size={17} /> WhatsApp
      </a>
    </div>
  );
}
