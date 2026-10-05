import { meta } from "@/lib/seo";
import { ParticleStage } from "@/components/ParticleStage";
import { Hero } from "@/components/Hero";
import { ApplianceRows } from "@/components/ApplianceRows";
import { RepairOrNew } from "@/components/RepairOrNew";
import { Process } from "@/components/Process";
import { CallbackSection } from "@/components/CallbackSection";

export const metadata = meta(
  "Eskişehir Beyaz Eşya Tamiri | Çamaşır, Bulaşık, Buzdolabı, Fırın",
  "Eskişehir'de çamaşır makinesi, bulaşık makinesi, buzdolabı, fırın ve kurutma makinesi arızaları için ilk kontroller ve uygun ustaya yönlendirme.",
  "/",
);

export default function Home() {
  return (
    <>
      <ParticleStage />
      <Hero />
      <ApplianceRows />
      <RepairOrNew />
      <Process />
      <CallbackSection />
    </>
  );
}
