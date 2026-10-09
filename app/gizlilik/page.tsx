import { meta } from "@/lib/seo";
// import { PHONE_DISPLAY } from "@/lib/contact"; // telefon gizlendi
const PHONE_DISPLAY = ""; // telefon gizlendi
import { Article } from "@/components/Article";

export const metadata = meta(
  "Aydınlatma Metni (KVKK)",
  "Kişisel verilerin işlenmesine ilişkin aydınlatma metni.",
  "/gizlilik",
);

// Veri sorumlusu bilgileri gerçek değerler bilinince ortam değişkenleriyle girilir; girilmemişse satır hiç gösterilmez.
const controller = process.env.NEXT_PUBLIC_CONTROLLER_NAME?.trim();
const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim();
const address = process.env.NEXT_PUBLIC_CONTROLLER_ADDRESS?.trim();

export default function Page() {
  return (
    <Article aside={<h1 className="disp disp-col">Aydınlatma metni</h1>}>
      <div className="space-y-5 text-lg text-graphite/70">
        <p>
          Bu site, Eskişehir&apos;de beyaz eşya tamiri arayan kullanıcıların
          talebini WhatsApp üzerinden alıp uygun bağımsız servis sağlayıcıya
          yönlendirir. Sitedeki talep formu bilgileri bir sunucuya kaydetmez;
          girdiğiniz bilgiler yalnızca sizin başlattığınız hazır bir WhatsApp
          mesajına dönüşür.
        </p>
        <p>
          <strong className="font-medium text-graphite">
            İşlenen veriler:
          </strong>{" "}
          Bizi aradığınızda veya WhatsApp&apos;tan yazdığınızda ilettiğiniz ad,
          telefon numarası, ilçe ve sorun açıklaması.
        </p>
        <p>
          <strong className="font-medium text-graphite">Amaç:</strong>{" "}
          Talebinizi değerlendirmek, sizinle iletişime geçmek ve sizi uygun
          servis sağlayıcıya yönlendirmek.
        </p>
        <p>
          <strong className="font-medium text-graphite">Aktarım:</strong>{" "}
          Talebinizi yönlendirebilmek için bilgileriniz, ilgili iş için seçilen
          bağımsız servis sağlayıcıyla paylaşılabilir.
        </p>
        <p>
          <strong className="font-medium text-graphite">Haklarınız:</strong>{" "}
          6698 sayılı KVKK&apos;nın 11. maddesi uyarınca verilerinizin işlenip
          işlenmediğini öğrenme, düzeltilmesini veya silinmesini isteme ve
          itiraz etme haklarına sahipsiniz. Taleplerinizi aşağıdaki iletişim
          bilgilerinden iletebilirsiniz.
        </p>
        {(controller || email || address || PHONE_DISPLAY) && (
          <div>
            <p className="font-medium text-graphite">
              Veri sorumlusu ve iletişim
            </p>
            <ul className="mt-2 space-y-1">
              {controller && <li>{controller}</li>}
              {address && <li>{address}</li>}
              {email && (
                <li>
                  E-posta:{" "}
                  <a
                    className="underline underline-offset-4 hover:text-graphite/60"
                    href={`mailto:${email}`}
                  >
                    {email}
                  </a>
                </li>
              )}
              {PHONE_DISPLAY && <li>Telefon: {PHONE_DISPLAY}</li>}
            </ul>
          </div>
        )}
      </div>
    </Article>
  );
}
