"use client";
import { useRef, useState } from "react";
import Link from "next/link";
import { districts, waMessage } from "@/lib/contact";
import { appliances } from "@/data/appliances";
import { track } from "@/lib/analytics";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

const field =
  "mt-2 w-full rounded-2xl border border-graphite/15 bg-white px-4 py-3.5 text-base text-graphite outline-none transition placeholder:text-graphite/35 focus:border-graphite";
const lbl = "block text-sm font-medium text-graphite/65";

// Form sunucuya veri göndermez: bilgiler hazır bir WhatsApp mesajına dönüştürülür,
// kullanıcı mesajı WhatsApp'ta kendisi gönderir.
export function CallbackForm() {
  const [err, setErr] = useState("");
  const [waUrl, setWaUrl] = useState("");
  const [device, setDevice] = useState("");
  const [district, setDistrict] = useState("");
  const t0 = useRef(0);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    if (f.get("website")) return; // bal küpü: botlar doldurur
    const name = String(f.get("name") ?? "").trim();
    const phone = String(f.get("phone") ?? "").replace(/[^\d+]/g, "");
    if (name.length < 2) return setErr("Lütfen adınızı ve soyadınızı yazın.");
    if (!/^(\+?90|0)?5\d{9}$/.test(phone))
      return setErr(
        "Lütfen geçerli bir cep telefonu numarası yazın. Örnek: 0532 123 45 67",
      );
    if (!device) return setErr("Lütfen bozulan cihazı seçin.");
    if (!t0.current || Date.now() - t0.current < 1500)
      return setErr("Lütfen bilgileri kontrol edip tekrar deneyin.");
    setErr("");
    const desc = String(f.get("description") ?? "")
      .trim()
      .slice(0, 500);
    const lines = [
      "Merhaba, Eskişehir'de beyaz eşya tamiri için destek istiyorum.",
      `Ad: ${name}`,
      `Telefon: ${phone.replace(/\D/g, "")}`,
      district ? `İlçe: ${district}` : "",
      `Cihaz: ${device}`,
      desc ? `Sorun: ${desc}` : "",
    ].filter(Boolean);
    const url = waMessage(lines.join("\n"));
    track("form_whatsapp_submit", {
      problem: device,
      district: district || undefined,
    });
    setWaUrl(url);
    window.open(url, "_blank", "noopener,noreferrer");
  }

  if (waUrl)
    return (
      <div
        role="status"
        className="rounded-[2rem] border border-graphite/15 bg-white p-8"
      >
        <p className="text-xl">
          WhatsApp mesajınız hazırlandı. Mesajı göndermek için WhatsApp&apos;ta
          &ldquo;Gönder&rdquo; düğmesine basmanız gerekir.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-graphite px-7 py-3.5 font-semibold text-white transition-colors hover:bg-mint hover:text-graphite"
          >
            <WhatsAppIcon size={18} /> WhatsApp&apos;ı yeniden aç
          </a>
          <button
            type="button"
            onClick={() => setWaUrl("")}
            className="text-graphite/60 underline underline-offset-4 hover:text-graphite"
          >
            Bilgileri düzenle
          </button>
        </div>
      </div>
    );

  return (
    <form
      onSubmit={onSubmit}
      onFocus={() => {
        if (!t0.current) t0.current = Date.now();
      }}
      noValidate
      className="grid gap-5"
    >
      <div className="absolute -left-[9999px]" aria-hidden>
        <label>
          Web sitesi
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <label className={lbl}>
          Ad soyad
          <input
            name="name"
            autoComplete="name"
            maxLength={80}
            className={field}
          />
        </label>
        <label className={lbl}>
          Telefon
          <input
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            maxLength={20}
            placeholder="05XX XXX XX XX"
            className={field}
          />
        </label>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <label className={lbl}>
          Bozulan cihaz
          <select
            value={device}
            onChange={(e) => {
              setDevice(e.target.value);
              if (e.target.value)
                track("problem_selected", { problem: e.target.value });
            }}
            className={field}
          >
            <option value="">Seçin</option>
            {appliances.map((a) => (
              <option key={a.key}>{a.name}</option>
            ))}
            <option>Diğer beyaz eşya</option>
          </select>
        </label>
        <label className={lbl}>
          İlçe
          <select
            value={district}
            onChange={(e) => {
              setDistrict(e.target.value);
              if (e.target.value)
                track("district_selected", { district: e.target.value });
            }}
            className={field}
          >
            <option value="">Seçin (isteğe bağlı)</option>
            {districts.map((d) => (
              <option key={d}>{d}</option>
            ))}
          </select>
        </label>
      </div>
      <label className={lbl}>
        Sorun nedir? (marka ve belirti yazarsanız ustaya iletiriz)
        <textarea
          name="description"
          rows={3}
          maxLength={500}
          className={`${field} resize-none`}
        />
      </label>
      {err && (
        <p role="alert" className="text-sm font-medium text-red-700">
          {err}
        </p>
      )}
      <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
        <button
          type="submit"
          className="inline-flex items-center gap-2 rounded-full bg-graphite px-8 py-4 font-semibold text-white transition-colors hover:bg-mint hover:text-graphite"
        >
          <WhatsAppIcon size={18} /> WhatsApp&apos;tan gönder
        </button>
        <p className="max-w-sm text-xs leading-relaxed text-graphite/55">
          Bilgileriniz bu sitede saklanmaz; hazır bir WhatsApp mesajına dönüşür.{" "}
          <Link
            href="/gizlilik"
            className="underline underline-offset-2 hover:text-graphite"
          >
            Aydınlatma metni
          </Link>
        </p>
      </div>
    </form>
  );
}
