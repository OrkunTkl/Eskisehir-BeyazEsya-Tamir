// Tüm iletişim bilgileri ortam değişkenlerinden okunur (.env.local / Vercel Environment Variables).
export function normalizeTR(input?: string): string {
  const d = (input ?? "").replace(/\D/g, "");
  if (/^90[2-5]\d{9}$/.test(d)) return d;
  if (/^0[2-5]\d{9}$/.test(d)) return `90${d.slice(1)}`;
  if (/^[2-5]\d{9}$/.test(d)) return `90${d}`;
  return "";
}
const phone = normalizeTR(process.env.NEXT_PUBLIC_PHONE);
const wa = normalizeTR(process.env.NEXT_PUBLIC_WHATSAPP) || phone;

export const SITE = (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/+$/, "");
export const PHONE_DISPLAY = phone
  ? `0${phone.slice(2, 5)} ${phone.slice(5, 8)} ${phone.slice(8, 10)} ${phone.slice(10, 12)}`
  : "";
export const DEFAULT_WA = "Merhaba, Eskişehir'de beyaz eşya tamiri için destek istiyorum.";
export const telLink = () => (phone ? `tel:+${phone}` : "#");
export const waMessage = (text: string) => `https://wa.me/${wa}?text=${encodeURIComponent(text)}`;
export const waLink = (topic?: string) => waMessage(topic ? `${DEFAULT_WA}\nKonu: ${topic}` : DEFAULT_WA);
export const ext = { target: "_blank", rel: "noopener noreferrer" } as const;

export const districts = [
  "Tepebaşı", "Odunpazarı", "Alpu", "Beylikova", "Çifteler", "Günyüzü", "Han",
  "İnönü", "Mahmudiye", "Mihalgazi", "Mihalıççık", "Sarıcakaya", "Seyitgazi", "Sivrihisar",
];