import Link from "next/link";
import { meta, breadcrumb, SITE_NAME } from "@/lib/seo";
import { SITE, districts } from "@/lib/contact";
import { JsonLd } from "@/components/Jsonld";
import { Cta } from "@/components/Cta";
import { Article } from "@/components/Article";
import { CallbackSection } from "@/components/CallBackSection";

export const metadata = meta(
  "İletişim | Eskişehir Beyaz Eşya Tamiri Talebi Nasıl İletilir?",
  "Eskişehir'de çamaşır, bulaşık, buzdolabı, fırın ya da kurutma makinesi arızası için talebinizi WhatsApp üzerinden iletin. Hangi bilgileri yazmanız gerektiğini öğrenin.",
  "/iletisim",
);

const contactPage = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: `İletişim | ${SITE_NAME}`,
  url: `${SITE}/iletisim`,
  inLanguage: "tr-TR",
  about: { "@type": "Organization", name: SITE_NAME, url: SITE },
};

// E-posta yalnızca ortam değişkeni girilmişse görünür (Vercel > Environment Variables).
const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim();
const link = "underline underline-offset-4 hover:text-graphite/60";

export default function Page() {
  return (
    <>
      <Article
        aside={
          <>
            <h1 className="disp disp-col">Bize ulaşın</h1>
            <p className="lead mt-6 text-graphite/75">
              Talepleri WhatsApp&apos;tan alıyoruz. Cihazınızı, sorunu ve
              ilçenizi yazın, uygun servis sağlayıcıya iletelim.
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
            ["İletişim", "/iletisim"],
          ])}
        />
        <JsonLd data={contactPage} />

        <section className="mb-12">
          <h2 className="disp disp-md">Mesajınıza neleri yazın?</h2>
          <p className="mt-4 text-lg text-graphite/75">
            Şu bilgiler talebinizi hızlandırır:
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-lg text-graphite/75">
            <li>Oturduğunuz ilçe ve mahalle</li>
            <li>Cihazın türü, markası ve biliyorsanız modeli</li>
            <li>Sorunun ne olduğu ve ne zamandır sürdüğü</li>
            <li>Ekranda hata kodu görünüyorsa kodu</li>
          </ul>
          <p className="mt-4 text-lg text-graphite/75">
            Sorunun ne olduğundan emin değilseniz önce{" "}
            <Link className={link} href="/ariza-merkezi">
              arıza merkezine
            </Link>{" "}
            bakabilirsiniz.
          </p>
        </section>

        <section className="mb-12 border-t border-graphite/20 pt-8">
          <h2 className="disp disp-md">Sonrasında ne olur?</h2>
          <p className="mt-4 text-lg text-graphite/75">
            Talebinizi ilçenize ve cihaza göre uygun bağımsız servis sağlayıcıya
            aktarırız. Servis sağlayıcı sizinle iletişime geçer. Fiyat ve işin
            kapsamı, usta arızayı gördükten sonra onunla netleşir.
          </p>
        </section>

        <section className="mb-12 border-t border-graphite/20 pt-8">
          <h2 className="disp disp-md">Acil durumlar</h2>
          <p className="mt-4 text-lg text-graphite/75">
            Cihazdan duman ya da yanık kokusu geliyorsa cihazı kullanmayın ve
            112&apos;yi arayın. Ocakta gaz kokusu alırsanız havalandırın,
            binadan çıkın ve 187 Doğalgaz Acil hattını arayın. Bu durumlarda
            WhatsApp&apos;tan yazmak beklemeyin.
          </p>
        </section>

        <section className="mb-12 border-t border-graphite/20 pt-8">
          <h2 className="disp disp-md">Hizmet bölgesi</h2>
          <p className="mt-4 text-lg text-graphite/75">
            {districts.join(", ")}.
          </p>
          <p className="mt-4 text-lg text-graphite/75">
            Ayrıntı için{" "}
            <Link className={link} href="/eskisehir">
              hizmet bölgesi
            </Link>{" "}
            sayfasına bakın.
          </p>
        </section>

        {email && (
          <section className="mb-12 border-t border-graphite/20 pt-8">
            <h2 className="disp disp-md">E-posta</h2>
            <p className="mt-4 text-lg text-graphite/75">
              <a className={link} href={`mailto:${email}`}>
                {email}
              </a>
            </p>
          </section>
        )}

        <section className="border-t border-graphite/20 pt-8">
          <h2 className="disp disp-md">Kişisel verileriniz</h2>
          <p className="mt-4 text-lg text-graphite/75">
            Yazdığınız bilgiler yalnızca talebinizi yönlendirmek için
            kullanılır. Ayrıntılar{" "}
            <Link className={link} href="/gizlilik">
              aydınlatma metninde
            </Link>
            . Bizi tanımak isterseniz{" "}
            <Link className={link} href="/hakkimizda">
              hakkımızda
            </Link>{" "}
            sayfasına göz atın.
          </p>
        </section>
      </Article>
      <CallbackSection />
    </>
  );
}
