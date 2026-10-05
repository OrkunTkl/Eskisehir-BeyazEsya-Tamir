"use client";
import { useId, useState } from "react";
import { motion } from "framer-motion";
import { appliances } from "@/data/appliances";
import { Cta } from "@/components/Cta";

const tl = (n: number) => new Intl.NumberFormat("tr-TR").format(Math.round(n));
const num = (s: string) => Number(s.replace(/\D/g, "")) || 0;

export function RepairOrNew() {
  const [k, setK] = useState(0);
  const [age, setAge] = useState(8);
  const [repair, setRepair] = useState("2500");
  const [price, setPrice] = useState("14000");
  const id = useId();
  const a = appliances[k];
  const rp = num(repair),
    pr = num(price);
  const ratio = pr > 0 ? rp / pr : 0;
  const old = age >= a.life;

  let tone = "mint",
    head = "Tamir mantıklı görünüyor",
    why = "Tamir bedeli yeni fiyatın küçük bir kısmı.";
  if (ratio >= 0.5) {
    tone = "coral";
    head = "Yenisini düşünün";
    why = "Tamir bedeli yeni cihaz fiyatının yarısını aşıyor.";
  } else if (old && ratio >= 0.3) {
    tone = "amber";
    head = "Yenisi de değerlendirilebilir";
    why = `Cihaz yaklaşık ${a.life} yıllık beklenen ömrüne ulaşmış ve tamir bedeli yüksek.`;
  } else if (ratio >= 0.3) {
    tone = "amber";
    head = "Sınırda: ustaya gösterin";
    why = "Tamir bedeli yeni fiyatın üçte biri ile yarısı arasında.";
  } else if (old) {
    tone = "amber";
    head = "Tamir olur, ama ömrü dolmak üzere";
    why = `Cihaz yaklaşık ${a.life} yıllık beklenen ömrüne ulaşmış; tamir bedeli düşük olduğu için tamir yine de mantıklı olabilir.`;
  }
  const col =
    tone === "mint" ? "#1fe0c4" : tone === "amber" ? "#ffb224" : "#ff7a66";

  const field =
    "mt-2 w-full rounded-2xl border border-white/15 bg-white/[.06] px-4 py-3.5 text-lg text-white outline-none transition focus:border-mint";
  return (
    <section
      data-stage
      data-stage-dark
      id="tamir-mi-yeni-mi"
      aria-labelledby="tmy"
      className="on-dark bg-graphite px-5 py-24 text-white md:px-10 md:py-36 lg:px-14"
    >
      <div className="mx-auto grid max-w-[1500px] gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-24">
        <div>
          <h2 id="tmy" className="disp disp-xl">
            Tamir mi, yenisi mi?
          </h2>
          <p className="lead mt-6 text-white/70">
            Ustadan bedel gelince şu hesabı yapın: tamir bedeli yeni fiyatın
            yarısını aşıyorsa değişim düşünülür. Cihazınızın yaşını da hesaba
            katan basit bir kontrol.
          </p>
          <div
            role="group"
            aria-label="Cihaz"
            className="mt-10 flex flex-wrap gap-2"
          >
            {appliances.map((x, i) => (
              <button
                key={x.key}
                type="button"
                aria-pressed={i === k}
                onClick={() => setK(i)}
                className={`rounded-full border px-4 py-2 font-medium transition-colors ${i === k ? "border-mint bg-mint text-graphite" : "border-white/20 hover:border-white"}`}
              >
                {x.label}
              </button>
            ))}
          </div>
          <div className="mt-8">
            <label htmlFor={`${id}-age`} className="font-semibold">
              Cihazın yaşı: {age} yıl
            </label>
            <input
              id={`${id}-age`}
              type="range"
              min={0}
              max={20}
              value={age}
              onChange={(e) => setAge(Number(e.target.value))}
              className="mt-3 w-full accent-[#1fe0c4]"
            />
          </div>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <label className="block text-white/70" htmlFor={`${id}-r`}>
              Tamir bedeli (TL)
              <input
                id={`${id}-r`}
                inputMode="numeric"
                value={repair}
                onChange={(e) => setRepair(e.target.value)}
                className={field}
              />
            </label>
            <label className="block text-white/70" htmlFor={`${id}-p`}>
              Yeni cihaz fiyatı (TL)
              <input
                id={`${id}-p`}
                inputMode="numeric"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className={field}
              />
            </label>
          </div>
        </div>

        <div className="flex flex-col justify-center rounded-[2rem] border border-white/10 bg-white/[.04] p-7 md:p-10">
          <p className="text-white/60">Tamir bedeli yeni fiyatın</p>
          <p
            className="disp text-[clamp(3.4rem,8vw,7.5rem)]"
            style={{ color: col }}
            aria-live="polite"
          >
            %{Math.round(ratio * 100)}
          </p>
          <div
            className="relative mt-4 h-3 rounded-full bg-white/10"
            aria-hidden
          >
            <motion.div
              className="h-full rounded-full"
              style={{ background: col }}
              animate={{ width: `${Math.min(100, ratio * 100)}%` }}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
            />
            <span className="absolute -top-2 left-1/2 h-7 w-0.5 bg-white/70" />
            <span className="absolute left-1/2 top-5 -translate-x-1/2 text-xs text-white/60">
              yarısı
            </span>
          </div>
          <h3 className="disp disp-md mt-12">{head}</h3>
          <p className="mt-3 text-white/75">{why}</p>
          <p className="mt-4 text-sm text-white/50">
            Bu genel bir kuraldır. Enerji sınıfı, cihazın durumu ve arızanın
            türü sonucu değiştirir. Gerçek bedeli usta arızayı gördükten sonra
            söyler. Beklenen ömür yaklaşık bir ortalamadır ({tl(a.life)} yıl).
          </p>
          <div className="mt-7">
            <div className="[&_a]:border-white/30 [&_a:first-child]:bg-white [&_a:first-child]:text-graphite [&_a:last-child]:text-white">
              <Cta
                topic={`${a.name}, ${age} yaşında. Tamir mi yeni mi, bedel tahmini istiyorum`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
