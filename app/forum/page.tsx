import { meta, breadcrumb } from "@/lib/seo";
import { forum } from "@/data/forum";
import { Article } from "@/components/Article";
import { JsonLd } from "@/components/Jsonld";
import { FaqSection } from "@/components/Faq";
import { AskForm } from "@/components/AskForm";
import { Cta } from "@/components/Cta";
import { CallbackSection } from "@/components/CallBackSection";

export const metadata = meta(
  "Beyaz Eşya Soru-Cevap | Eskişehir Beyaz Eşya Tamiri",
  "Çamaşır, bulaşık, buzdolabı, fırın ve kurutma makinesi arızalarında en çok sorulan sorular ve kısa cevapları. Aradığınızı bulamazsanız WhatsApp'tan sorun.",
  "/forum",
);

export default function Page() {
  return (
    <>
      <Article
        aside={
          <>
            <h1 className="disp disp-col">Beyaz eşya soru-cevap</h1>
            <p className="lead mt-6 text-graphite/75">
              Eskişehir&apos;de beyaz eşya arızalarında en çok sorulan sorular.
              Cevaplar genel bilgidir; cihazınızı yerinde gören ustanın
              teşhisinin yerini tutmaz.
            </p>
            <div className="mt-8">
              <Cta topic="Soru-Cevap" />
            </div>
          </>
        }
      >
        <JsonLd
          data={breadcrumb([
            ["Ana Sayfa", "/"],
            ["Soru-Cevap", "/forum"],
          ])}
        />
        <FaqSection
          items={forum}
          title="Sorular ve cevaplar"
          className="mt-0"
        />
        <div className="mt-16">
          <AskForm />
        </div>
      </Article>
      <CallbackSection />
    </>
  );
}
