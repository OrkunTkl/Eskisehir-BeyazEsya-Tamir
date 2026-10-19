import type { FaqItem } from "@/components/Faq";

// Soru-Cevap merkezi içeriği. Cevapları platform yazar; kullanıcı yorumu değildir.
// Yeni soru eklemek için listeye { q, a } ekleyin. Yeni sorular genelde en üste yakın durur.
export const forum: FaqItem[] = [
  {
    q: "Çamaşır makinesi su almıyorsa önce ne kontrol edilir?",
    a: "Önce musluğun tam açık olduğuna ve su giriş hortumunun kıvrılmadığına bakın. Fişi çekip hortumun ucundaki küçük filtreyi çıkararak temizleyin. Filtre temiz ve musluk açıkken de su gelmiyorsa su giriş valfi ya da kapak kilidi arızalı olabilir; bu durumda usta gerekir.",
  },
  {
    q: "Buzdolabı çalışıyor ama soğutmuyorsa ne yapmalıyım?",
    a: "Kapağın tam kapandığından, arkadaki ya da alttaki havalandırmanın kapanmadığından ve ısı ayarının yanlışlıkla değişmediğini kontrol edin. Aşırı doluysa hava dolaşımı bozulur. Bunlar normalse kompresör, fan ya da soğutma devresinde sorun olabilir; yiyeceklerin bozulmaması için ustaya vakit kaybetmeden haber verin.",
  },
  {
    q: "Bulaşık makinesi neden temiz yıkamıyor?",
    a: "En sık nedenler tıkalı alt süzgeç, kapanmış püskürtme kolu delikleri, bitmiş tuz ya da parlatıcı ve kapasiteden fazla doldurmadır. Süzgeci ve kol deliklerini temizleyip makineyi boş bir programda çalıştırarak deneyin. Düzelmezse ısıtıcı ya da pompa kontrolü için usta gerekir.",
  },
  {
    q: "Beyaz eşya hata kodu verirse ne yapmalıyım?",
    a: "Kodu ve cihazın markasını not alın. Fişi çekip birkaç dakika bekleyerek cihazı yeniden başlatın. Kod geri geliyorsa kullanma kılavuzunda karşılığına bakın ya da kodu ustaya söyleyin; kod, arızanın hangi parçada olduğunu daraltır.",
  },
  {
    q: "Kurutma makinesi çamaşırı kurutmuyorsa neden olabilir?",
    a: "Kıtık filtresi, dolu su haznesi, tıkalı havalandırma hortumu ya da kondenser tozu en sık nedenlerdir. Filtreyi ve hazneyi temizleyip makineyi yarım yükle deneyin. Isınma hiç yoksa rezistans ya da termostat arızası olabilir ve usta gerekir.",
  },
  {
    q: "Tamir mi ettirmeliyim, yeni cihaz mı almalıyım?",
    a: "Genel bir kural olarak, tahmini tamir bedeli yeni cihazın yarısına yaklaşıyorsa ya da cihaz ömrünün sonundaysa yeni cihaz daha mantıklı olabilir. Ama bu cihaza, markaya ve arızaya göre değişir. Ana sayfadaki “Tamir mi, yenisi mi?” bölümünden kaba bir karşılaştırma yapabilirsiniz; kesin karar için ustanın teşhisi gerekir.",
  },
  {
    q: "Fırın ya da ocakta gaz kokusu alırsam ne yapmalıyım?",
    a: "Cihazı kullanmayın, kıvılcım çıkarabilecek hiçbir şeyi (ışık düğmesi, çakmak) çalıştırmayın, pencereleri açıp binadan çıkın ve 187 Doğalgaz Acil hattını arayın. Bu durumda tamir talebi yazmak beklemeyin.",
  },
  {
    q: "Eskişehir’de usta nasıl bulunur ve fiyat nasıl belirlenir?",
    a: "Cihazı, sorunu ve ilçenizi WhatsApp’tan yazarsınız; talebi uygun bağımsız servis sağlayıcıya aktarırız ve servis sağlayıcı sizi arar. Fiyatı ve işin kapsamını usta arızayı gördükten sonra sizinle netleştirir. Platform tamiri kendisi yapmaz ve hiçbir markanın yetkili servisi değildir.",
  },
];