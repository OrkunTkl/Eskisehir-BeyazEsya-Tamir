// Bağımlılıksız analytics soyutlaması. Sayfada dataLayer / gtag / plausible varsa ona iletir, yoksa sessizce geçer.
export type EventName =
  | "phone_click"
  | "whatsapp_click"
  | "form_whatsapp_submit"
  | "problem_selected"
  | "district_selected";

export type EventParams = { problem?: string; service?: string; district?: string };
const ALLOWED = ["problem", "service", "district"] as const;

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...a: unknown[]) => void;
    plausible?: (name: string, o?: { props?: Record<string, string> }) => void;
  }
}

// Telefon benzeri uzun rakam dizilerini olaya asla göndermeyiz.
const scrub = (v: string) => v.replace(/\+?\d[\d\s().-]{6,}\d/g, "[gizli]").slice(0, 100);

export function track(name: EventName, params: EventParams = {}) {
  if (typeof window === "undefined") return;
  const p: Record<string, string> = { landing_page: window.location.pathname };
  for (const k of ALLOWED) {
    const v = params[k];
    if (v) p[k] = scrub(v);
  }
  try {
    window.dataLayer?.push({ event: name, ...p });
    window.gtag?.("event", name, p);
    window.plausible?.(name, { props: p });
  } catch {}
}