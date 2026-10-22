// Arıza merkezi rehberlerine (app/ariza-merkezi/[slug]/page.tsx) eklenen ayrıntılı bölümler.
// Anahtar: data/guides.ts içindeki rehber slug'ı. Bölümler "Olası nedenler" listesinden sonra,
// "Güvenle neler yapabilirsiniz?" listesinden önce gösterilir.
export type DetailSection = { h: string; p: string };

export const guideDetails: Record<string, DetailSection[]> = {
  "camasir-makinesi-su-almiyor": [
    {
      h: "Sorunun musluk tarafında mı makine tarafında mı olduğunu ayırın",
      p: "Hortumu makineden ayırıp bir kovaya tuttuğunuzda su normal akıyorsa sorun makinededir. Akmıyorsa musluk, hortum ya da bina su basıncı kaynaklıdır. Bu ayrım, ustayı gereksiz yere çağırmanızı önleyebilir. Hortumu sökerken önce musluğu kapatın ve fişi çekin.",
    },
    {
      h: "Valf arızası belirtileri",
      p: "Su giriş valfi bozulduğunda makine su alamaz, çok yavaş alır ya da sürekli su almaya devam eder. Su almayı kesmeyen makine taşma riski taşıdığı için kullanılmamalıdır. Valf çoğu zaman yerinde değiştirilebilen bir parçadır.",
    },
  ],
  "camasir-makinesi-su-bosaltmiyor": [
    {
      h: "Süzgeç temizliğinde dikkat edilecekler",
      p: "Süzgeç kapağını açmadan önce altına geniş bir kap ve bez koyun; içeride yüksek miktarda su kalmış olabilir. Önce acil boşaltma hortumuyla suyu azaltmak işi kolaylaştırır. Süzgeçte çıkan para, toka, çorap ve tiftik, pompayı koruyan parçalardır; düzenli temizlik pompa ömrünü uzatır.",
    },
    {
      h: "Pompa arızasını nasıl ayırt edersiniz?",
      p: "Süzgeç temiz ve hortum açık olduğu halde su gitmiyorsa pompa kanadı kırık ya da motoru yanmış olabilir. Pompadan hiç ses gelmiyorsa elektrik bağlantısı ya da kart, uğultu geliyor ama su gitmiyorsa kanat veya tıkanıklık şüphelidir. Pompa değişimi genellikle kısa süren bir işlemdir.",
    },
  ],
  "camasir-makinesi-sikma-yapmiyor": [
    {
      h: "Dengesizlik ile arıza arasındaki fark",
      p: "Modern makineler yük dengesizse sıkmayı güvenlik için durdurur veya yavaşlatır. Yükü düzeltince sıkma başlıyorsa arıza yoktur. Aynı çamaşırla tekrar tekrar durması, sıkma sırasında hiç dönmemesi ya da motor sesi gelip tamburun hareket etmemesi arızaya işaret eder.",
    },
    {
      h: "Motor kömürü, kayış ve kart",
      p: "Eski tip motorlarda kömür aşınması sıkma gücünün düşmesine yol açar. Kayış gevşediğinde ya da koptuğunda tambur dönmez. Kart arızası ise sıkmanın hiç başlamamasına ya da program ortasında kesilmesine neden olabilir. Hangisi olduğunu ustanın test etmesi gerekir.",
    },
  ],
  "camasir-makinesi-ses-yapiyor": [
    {
      h: "Ses türüne göre ipuçları",
      p: "Dönerken sürekli uğultu ya da gümbürtü rulmana, sıkma sırasında sert vuruntular amortisör ve denge ağırlıklarına, tıkırtı ve çıngırak sesi tamburda kalmış bozuk para, tel ya da toka gibi yabancı cisimlere işaret eder. Sesin yıkama mı, sıkma mı sırasında geldiğini not etmek faydalıdır.",
    },
    {
      h: "Rulman değişimi ve zamanlama",
      p: "Rulman aşındığında ses giderek artar ve tambur mili zarar görür. Erken müdahale ile yalnızca rulman değişirken, geç kalınırsa tambur grubu da değişmek zorunda kalabilir. Bu da arızanın maliyetini ciddi biçimde artırır.",
    },
  ],
  "camasir-makinesi-kapagi-acilmiyor": [
    {
      h: "Kapak kilidi nasıl çalışır?",
      p: "Makine, yıkama sırasında güvenlik için kapağı kilitler. Program bitince kilit birkaç dakika içinde açılır. İçeride su ya da yüksek sıcaklık varsa açılmayı geciktirir. Bu normal bir güvenlik özelliğidir; arıza değildir.",
    },
    {
      h: "Kilit gerçekten arızalıysa",
      p: "Su tamamen boşaldı, makine soğudu ve elektrik verip bekledikten sonra da kapak açılmıyorsa kilit mekanizması ya da kapak kolu arızalı olabilir. Kapağı zorlamak kolu kırar ve onarımı pahalılaştırır; bu aşamada ustaya başvurmak en güvenlisidir.",
    },
  ],
  "bulasik-makinesi-temiz-yikamiyor": [
    {
      h: "Yerleştirme yıkama kalitesini etkiler",
      p: "Kapların birbirini örtmesi ya da büyük bir tabağın püskürtme kolunun önünü kesmesi yıkamanın bölgesel olarak başarısız olmasına yol açar. Kirli yüzeylerin kol tarafına bakması, kasenin ters konması ve makinenin aşırı doldurulmaması sonucu doğrudan etkiler.",
    },
    {
      h: "Deterjan, tuz ve parlatıcı",
      p: "Uygun olmayan deterjan ya da eksik tuz yıkama kalitesini düşürür. Kireçli sularda tuz ve parlatıcı, lekesiz bir sonuç için şarttır. Makinenin su sertliği ayarını kılavuza göre yapmak da önemlidir.",
    },
    {
      h: "Pompa zayıflığı",
      p: "Temizlik ve ayar kontrollerine rağmen sonuç değişmiyorsa sirkülasyon pompası zayıflamış ya da kollar yeterli basınç alamıyor olabilir. Bu durumda ustanın pompa ve su yollarını kontrol etmesi gerekir.",
    },
  ],
  "bulasik-makinesi-su-tahliye-etmiyor": [
    {
      h: "Lavabo ve sifon bağlantısı",
      p: "Bulaşık makinesinin tahliye hortumu çoğunlukla mutfak lavabosunun sifonuna bağlıdır. Lavabo yavaş akıyorsa ya da sifon tıkalıysa makinenin suyu geri dönebilir. Önce lavabonun düzgün aktığından emin olun.",
    },
    {
      h: "Hortum ve pompa",
      p: "Hortumdaki kıvrım ya da tıkanıklık suyun gitmesini engeller. Hortum temiz ve filtre açıksa tahliye pompası kanadı, motoru ya da çek valfi arızalı olabilir. Makinenin dibinde su beklemesi hem kokuya hem küflenmeye yol açtığı için uzun süre bırakılmamalıdır.",
    },
  ],
  "bulasik-makinesi-hata-kodu": [
    {
      h: "Hata kodları nasıl yorumlanır?",
      p: "Kod, makinenin hangi kontrolden geçemediğini söyler: su girişi, tahliye, ısıtma, sızıntı ya da kart. Kodun harf ve rakam kombinasyonu marka ve modele göre değişir. Kılavuz ya da üreticinin destek sayfası bu nedenle en güvenilir kaynaktır.",
    },
    {
      h: "Sızıntı kodu özellikle ciddidir",
      p: "Taban şamandırası sızıntı algıladığında makine genellikle durur ve kod gösterir. Bu durumda fişi çekip musluğu kapatın; tabandaki suyu kurulayıp kaçağın nereden geldiğine bakmak gerekir. Sızıntı kodunu sıfırlayıp makineyi çalıştırmak zemine ve elektrik aksamına zarar verebilir.",
    },
  ],
  "buzdolabi-sogutmuyor": [
    {
      h: "Dolap kısmı mı dondurucu mu soğutmuyor?",
      p: "Dondurucu soğuk, dolap kısmı sıcaksa soğuk havanın dolaba taşınmasında bir sorun vardır: fan, hava kanalı ya da damper. Her ikisi de ısınıyorsa kompresör, röle ya da soğutma devresi şüphelidir. Hangi bölmenin etkilendiğini ustaya söylemek tanıyı hızlandırır.",
    },
    {
      h: "Basit ayar ve yerleşim kontrolleri",
      p: "Termostat ayarının yanlışlıkla değişmesi, cihazın duvara çok yakın durması ya da arkadaki havalandırmanın kapalı olması soğutma performansını düşürebilir. Dolabı aşırı doldurmak ve sıcak yiyecekleri soğumadan koymak da dolap içi sıcaklığı yükseltir.",
    },
    {
      h: "Kompresör ses vermiyorsa",
      p: "Kompresör hiç çalışmıyorsa elektrik bağlantısı, röle ya da termostat kontrol edilir. Sürekli çalışıp soğutmuyorsa soğutma gazı ya da devre sorunu olabilir. Bu durumda zaman kaybetmeden usta çağırın ve gıdaları koruma altına alın.",
    },
  ],
  "buzdolabi-buz-tutuyor": [
    {
      h: "Buz tutma neden olur?",
      p: "No-frost cihazlarda evaporatör zaman zaman rezistansla çözdürülür. Rezistans ya da defrost sensörü bozulursa evaporatör buzla kaplanır ve soğuk hava akışı kesilir. Kapı contasından giren nemli hava da buz oluşumunu hızlandırır.",
    },
    {
      h: "Çözdürmek geçici bir çözümdür",
      p: "Buzu çözdürmek cihazı bir süre düzeltir ama neden ortadan kalkmadıysa buz yeniden oluşur. Çözme sonrası kısa sürede buz tekrar ortaya çıkıyorsa defrost sisteminin ustaya baktırılması gerekir.",
    },
    {
      h: "Çözdürürken dikkat",
      p: "Buzu çakı, bıçak ya da sivri aletle kırmak soğutma borularını delebilir ve cihazı onarılamaz hale getirebilir. Fişi çekin, kapakları açık bırakın, altına havlu ve kap koyun. Hassas gıdaları bu sürede soğutucu çantaya alın.",
    },
  ],
  "firin-isitmiyor": [
    {
      h: "Sigorta atıyorsa",
      p: "Fırın çalıştırıldığında sigorta atıyorsa rezistans ya da kablo yalıtımında kısa devre olabilir. Bu durumda sigortayı tekrar tekrar açmak yerine fırını kullanmayı bırakın ve usta çağırın. Elektrik ve ısı birlikte olduğu için risk yangına kadar gidebilir.",
    },
    {
      h: "Rezistans, termostat ve sensör",
      p: "Fırının üst, alt ya da grill rezistansı ayrı ayrı yanabilir. Fırın ısınıyor ama ayarlanan sıcaklığa ulaşmıyorsa termostat ya da sıcaklık sensörü hatalı olabilir. Dijital fırınlarda kart ya da programlayıcı arızası da hiç ısınmama sebebidir.",
    },
  ],
  "ocak-tutusmuyor": [
    {
      h: "Önce güvenlik",
      p: "Ocak tutuşmadığında gaz açık kalmış olabilir. Tekrar tekrar ateşlemeyi denemek yerine gaz vanasını kapatın, ortamı havalandırın ve gaz kokusu varsa cihaz ve elektrik anahtarlarını kullanmayın. Ardından 187 Doğalgaz Acil hattını arayın.",
    },
    {
      h: "Temizlik ve nem",
      p: "Başlıklardaki yemek artığı, taşan sıvılar ve nem buji ile gaz çıkışını engeller. Ocak soğukken başlıkları ve bujiyi kuru bir bezle temizleyip tamamen kurumasını beklemek çoğu zaman sorunu çözer. Islak ya da yağlı başlıkla ateşleme denemeyin.",
    },
    {
      h: "Ocak elle tutulunca yanıp bırakınca sönüyorsa",
      p: "Bu, alev algılama (termoelement) ve emniyet valfiyle ilgilidir. Emniyet düzeneği alev algılamadığı için gazı keser. Gaz güvenliğini doğrudan ilgilendirdiği için ustanın incelemesi gerekir.",
    },
  ],
  "kurutma-makinesi-kurutmuyor": [
    {
      h: "Önce hava yolunu kontrol edin",
      p: "Kurutma makinesi çalışması için sıcak havanın tamburdan geçip nemi taşımasına ihtiyaç duyar. Tiftik filtresi, kondenser ve hava çıkış hortumu bu yolun parçalarıdır. Biri tıkalıysa makine çalışır gibi görünür ama çamaşırlar nemli kalır.",
    },
    {
      h: "Yük ve program",
      p: "Makineyi aşırı doldurmak çamaşırların birbirine yapışmasına ve havanın aralarından geçememesine yol açar. Yeterince sıkılmamış çamaşır da kurutma süresini uzatır. Kumaş türüne uygun program seçmek ve makineyi kapasitesinin altında doldurmak verimi artırır.",
    },
    {
      h: "Isıtıcı ya da termostat arızası",
      p: "Hava yolu temiz, yük doğru, program uygun olduğu halde çamaşırlar soğuk ya da ılık çıkıyorsa rezistans, termostat ya da sıcaklık sensörü arızası olabilir. Bu parçaların testi ve değişimi usta işidir.",
    },
  ],
};