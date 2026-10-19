"use client";
import { waLink, ext } from "@/lib/contact";
import { track } from "@/lib/analytics";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

// Sağ altta, tüm sayfalarda ve tüm ekran boyutlarında sabit WhatsApp butonu.
// Mobilde yuvarlak simge, masaüstünde yazılı düğme. iPhone alt çubuğuna (safe-area) çarpmaz.
export function WhatsAppFloat() {
  return (
    <a
      href={waLink()}
      {...ext}
      onClick={() => track("whatsapp_click")}
      aria-label="WhatsApp'tan yazın"
      className="fixed right-4 bottom-[max(1rem,env(safe-area-inset-bottom))] z-50 inline-flex size-14 items-center justify-center gap-2 rounded-full bg-[#25D366] font-semibold text-[#04331a] shadow-[0_12px_32px_-8px_rgba(0,0,0,.45)] transition-transform duration-200 hover:scale-105 md:right-6 md:bottom-6 md:size-auto md:px-6 md:py-4"
    >
      <WhatsAppIcon size={26} />
      <span className="hidden md:inline">WhatsApp&apos;tan yaz</span>
    </a>
  );
}
