import { meta } from "@/lib/seo";
import { ParticleStage } from "@/components/ParticleStage";
import { Hero } from "@/components/Hero";
import { ApplianceRows } from "@/components/Appliancerows";
import { RepairOrNew } from "@/components/Repairornew";
import { Process } from "@/components/Process";
import { CallbackSection } from "@/components/CallBackSection";
import { ForumSection } from "@/components/ForumSection";

export const metadata = meta(
  "Eskişehir Beyaz Eşya Tamircisi | Çamaşır, Bulaşık, Buzdolabı",
  "Eskişehir beyaz eşya tamircisi arıyorsanız: çamaşır, bulaşık makinesi, buzdolabı, fırın ve kurutma makinesi arızalarında ilk kontroller ve uygun ustaya yönlendirme.",
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
      <ForumSection />
    </>
  );
}
