import Link from "next/link";
import { telLink, PHONE_DISPLAY } from "@/lib/contact";
export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex mix-blend-difference text-white items-center justify-between px-5 py-5 md:px-12">
      <Link href="/" className="text-lg font-extrabold tracking-tight">
        eskişehir<span className="opacity-50"> beyaz eşya</span>
      </Link>
      <a
        href={telLink()}
        className="hidden rounded-full border border-white/40 px-5 py-2 font-semibold backdrop-blur-md transition-colors hover:bg-white hover:text-[#05070d] md:block"
      >
        {PHONE_DISPLAY}
      </a>
    </header>
  );
}
export function StickyBar() {
  return (
    <div className="fixed inset-x-3 bottom-3 z-50 flex gap-2 md:hidden">
      <a
        href={telLink()}
        className="flex-1 rounded-full bg-white py-3.5 text-center font-bold text-[#05070d] shadow-xl"
      >
        Hemen ara
      </a>
    </div>
  );
}
