import Link from "next/link";
import { meta, breadcrumb, SITE_NAME } from "@/lib/seo";
import { SITE } from "@/lib/contact";
import { JsonLd } from "@/components/Jsonld";
import { Cta } from "@/components/Cta";
import { Article } from "@/components/Article";
import { CallbackSection } from "@/components/CallBackSection";
import { TRANSPARENCY_TEXT } from "@/components/Footer";

export const metadata = meta(
  "Hakkımızda | Eskişehir Beyaz Eşya Tamiri Nasıl Çalışır?",
  "Eskişehir Beyaz Eşya Tamiri, cihazı bozulanları anlaşmalı bağımsız servis sağlayıcılara yönlendiren bir bilgi platformudur. Ne yaptığımızı ve ne yapmadığımızı açıkça anlatıyoruz.",
  "/hakkimizda",
);

const aboutPage = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: `Hakkımızda | ${SITE_NAME}`,
  url: `${SITE}/hakkimizda`,
  inLanguage: "tr-TR",
  about: { "@type": "Organization", name: SITE_NAME, url: SITE },
};

const link = "underline underline-offset-4 hover:text-graphite/60";

export default function Page() {
  return (
    <>
      <Article
        aside={
          <>
            <h1 className="disp disp-col">
              Eskişehir Beyaz Eşya Tamiri ne yapar?
            </h1>
            <p className="lead mt-6 text-graphite/75">
              Cihazınız bozulduğunda ne olduğunu anlamanıza yardım eder,
              gerekiyorsa talebinizi uygun bağımsız servis sağlayıcıya iletiriz.
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
            ["Hakkımızda", "/hakkimizda"],
          ])}
        />
        <JsonLd data={aboutPage} />

        <section className="mb-12">
          <h2 className="disp disp-md">Ne yapıyoruz?</h2>
          <p className="mt-4 text-lg text-graphite/75">
            Eskişehir&apos;de çamaşır makinesi, bulaşık makinesi, buzdolabı,
            fırın-ocak ve kurutma makinesi arızaları için iki şey yapıyoruz.
            Birincisi,{" "}
            <Link className={link} href="/ariza-merkezi">
              arıza merkezindeki rehberlerle
            </Link>{" "}
            belirtiyi tanımanıza, güvenle deneyebileceğiniz ilk kontrolleri
            öğrenmenize ve ustanın ne zaman gerektiğini görmenize yardım
            ediyoruz.
          </p>
          <p className="mt-4 text-lg text-graphite/75">
            İkincisi, usta gerektiğinde talebinizi WhatsApp&apos;tan alıp
            ilçenize ve cihazınıza göre uygun bağımsız servis sağlayıcıya
            aktarıyoruz. Servis sağlayıcı sizi arar, işin kapsamını ve fiyatı
            onunla konuşursunuz.
          </p>
        </section>

        <section className="mb-12 border-t border-graphite/20 pt-8">
          <h2 className="disp disp-md">Ne yapmıyoruz?</h2>
          <p className="mt-4 text-lg text-graphite/75">
            Cihazları kendimiz tamir etmiyoruz. Hiçbir markanın yetkili servisi
            değiliz ve markalarla resmi bir bağımız yok. Fiyatı ve işin
            kapsamını, arızayı gördükten sonra hizmeti verecek servis sağlayıcı
            belirler.
          </p>
        </section>

        <section className="mb-12 border-t border-graphite/20 pt-8">
          <h2 className="disp disp-md">Servis sağlayıcılarla ilişkimiz</h2>
          <p className="mt-4 text-lg text-graphite/75">
            Yönlendirdiğimiz servis sağlayıcılar bağımsız işletmelerdir ve
            kendileriyle anlaşmalı çalışıyoruz. Bu anlaşma yönlendirdiğimiz
            işlerle ilgili ticari bir ilişki içerir. Bunu saklamıyoruz, çünkü
            talebinizi kime ilettiğimizi bilmeniz gerekir.
          </p>
        </section>

        <section className="mb-12 border-t border-graphite/20 pt-8">
          <h2 className="disp disp-md">Rehberlere nasıl bakmalı?</h2>
          <p className="mt-4 text-lg text-graphite/75">
            Sitedeki rehberler genel bilgidir. Cihazınızı yerinde gören bir
            ustanın teşhisinin yerini tutmaz. Cihazdan duman ya da yanık kokusu
            geliyorsa cihazı kullanmayın ve 112&apos;yi arayın. Ocakta gaz
            kokusu alırsanız havalandırın, binadan çıkın ve 187 Doğalgaz Acil
            hattını arayın.
          </p>
        </section>

        <section className="mb-12 border-t border-graphite/20 pt-8">
          <h2 className="disp disp-md">Hizmet bölgesi ve iletişim</h2>
          <p className="mt-4 text-lg text-graphite/75">
            Eskişehir merkez ve ilçelerinden talep alıyoruz.{" "}
            <Link className={link} href="/eskisehir">
              Hizmet bölgesi
            </Link>{" "}
            sayfasında ilçeleri görebilir,{" "}
            <Link className={link} href="/iletisim">
              iletişim
            </Link>{" "}
            sayfasından bize nasıl ulaşacağınızı öğrenebilirsiniz. Kişisel
            verilerinizin nasıl işlendiği{" "}
            <Link className={link} href="/gizlilik">
              aydınlatma metninde
            </Link>{" "}
            yazıyor.
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
