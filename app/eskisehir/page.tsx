import { meta, breadcrumb } from "@/lib/seo";
import { districts } from "@/lib/contact";
import { Article } from "@/components/Article";
import { JsonLd } from "@/components/Jsonld";
import { Cta } from "@/components/Cta";
import { CallbackSection } from "@/components/CallBackSection";
import { TRANSPARENCY_TEXT } from "@/components/Footer";

export const metadata = meta(
  "Eskişehir Beyaz Eşya Servisi Yönlendirme | Hizmet Bölgesi",
  "Eskişehir'de beyaz eşya arızası için talebinizi nasıl iletirsiniz, hangi ilçelerden talep alınır ve yönlendirme nasıl işler?",
  "/eskisehir",
);
export default function Page() {
  return (
    <>
      <Article
        aside={
          <>
            <h1 className="disp disp-col">
              Eskişehir&apos;de beyaz eşya desteği
            </h1>
            <p className="lead mt-6 text-graphite/75">
              Çamaşır, bulaşık, buzdolabı, fırın ya da kurutma makinesi için tek
              bir yerden talep iletin. İlçenize ve cihaza göre uygun bağımsız
              servis sağlayıcıyla görüşmenizi sağlarız.
            </p>
            <div className="mt-8">
              <Cta />
            </div>
          </>
        }
      >
        <JsonLd
          data={breadcrumb([
            ["Ana Sayfa", "/"],
            ["Hizmet bölgesi", "/eskisehir"],
          ])}
        />
        <section className="mb-12">
          <h2 className="disp disp-md">Nasıl çalışır?</h2>
          <p className="mt-4 text-lg text-graphite/75">
            Sorununuzu WhatsApp ya da formla iletirsiniz. Biz cihazı ve ilçeyi
            değerlendirir, uygun servis sağlayıcıya talebi aktarırız; servis
            sağlayıcı sizi arar. Fiyat ve işin kapsamı, usta arızayı gördükten
            sonra onunla netleşir.
          </p>
        </section>
        <section className="mb-12 border-t border-graphite/20 pt-8">
          <h2 className="disp disp-md">Talep alınan ilçeler</h2>
          <p className="mt-4 text-lg text-graphite/75">
            {districts.join(", ")}.
          </p>
        </section>
        <section className="border-t border-graphite/20 pt-8">
          <h2 className="disp disp-md">Şeffaflık</h2>
          <p className="mt-4 text-lg text-graphite/75">{TRANSPARENCY_TEXT}</p>
        </section>
      </Article>
      <CallbackSection />
    </>
  );
}
