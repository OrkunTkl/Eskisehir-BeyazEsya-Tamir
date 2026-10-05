export type Fault = { p: string; c: string; guide?: string };
export type Appliance = {
  slug: string;
  key: string;
  name: string;
  label: string;
  short: string;
  title: string;
  description: string;
  lead: string;
  life: number;
  problems: Fault[];
  tips: string[];
  call: string[];
  faq: { q: string; a: string }[];
  related: string[];
};

const PLUG = "Önce cihazın fişini prizden çekin; ıslak elle ya da ıslak zeminde cihaza dokunmayın.";

export const appliances: Appliance[] = [
  {
    slug: "camasir-makinesi-tamiri",
    key: "camasir",
    name: "Çamaşır makinesi",
    label: "Çamaşır",
    short: "Su almıyor, sıkmıyor, ses yapıyor ya da kapağı açılmıyor.",
    title: "Eskişehir Çamaşır Makinesi Tamiri | Arıza ve Yönlendirme",
    description:
      "Eskişehir'de çamaşır makinesi su almıyor, sıkma yapmıyor, ses yapıyor ya da kapağı açılmıyor mu? Önce güvenle deneyebilecekleriniz, sonra uygun ustaya yönlendirme.",
    lead: "Çamaşır makinesi arızalarının çoğu birkaç parçada toplanır: su giriş valfi, tahliye pompası, kayış ve motor, kapak kilidi, kart. Belirtiyi doğru tarif etmek, ustanın ilk gelişte işi bitirme ihtimalini yükseltir.",
    life: 10,
    problems: [
      { p: "Su almıyor", c: "Su giriş valfi, filtre ve basınç anahtarı kontrol edilir.", guide: "camasir-makinesi-su-almiyor" },
      { p: "Suyu boşaltmıyor", c: "Pompa ve süzgeç tıkanıklığı temizlenir, gerekirse pompa değişir.", guide: "camasir-makinesi-su-bosaltmiyor" },
      { p: "Sıkma yapmıyor", c: "Kayış, motor kömürü ve elektronik kart test edilir.", guide: "camasir-makinesi-sikma-yapmiyor" },
      { p: "Çok ses / titreme", c: "Rulman, amortisör ve denge ayakları kontrol edilir.", guide: "camasir-makinesi-ses-yapiyor" },
      { p: "Kapak açılmıyor", c: "Kapak kilidi ve rezistans bağlantısı yerinde çözülür.", guide: "camasir-makinesi-kapagi-acilmiyor" },
    ],
    tips: [
      PLUG,
      "Süzgeç ve su giriş filtresini temizlemek kullanıcının yapabileceği bakımdır; yöntem için cihazın kılavuzuna bakın.",
      "Makineyi aşırı doldurmayın; denge ayaklarının düz zemine oturduğundan emin olun.",
    ],
    call: [
      "Su kaçağı, yanık kokusu ya da duman varsa",
      "Hata kodu temizledikten sonra geri geliyorsa",
      "Tambur elle zor dönüyor ya da metalik ses geliyorsa",
    ],
    faq: [
      { q: "Çamaşır makinesi hata kodu verirse ne yapmalıyım?", a: "Kodu ve markanın adını not edin, fişi çekip birkaç dakika bekleyerek yeniden başlatın. Kod geri geliyorsa kılavuzdaki karşılığına bakın ya da ustaya kodu söyleyin." },
      { q: "Su içinde kalan makinenin kapağını nasıl açarım?", a: "Önce fişi çekin. Çoğu makinede alt kapaktaki acil boşaltma hortumu ya da süzgeç ile suyu boşaltmak gerekir. Yöntem markaya göre değişir; kılavuza bakın." },
    ],
    related: ["bulasik-makinesi-tamiri", "kurutma-makinesi-tamiri"],
  },
  {
    slug: "bulasik-makinesi-tamiri",
    key: "bulasik",
    name: "Bulaşık makinesi",
    label: "Bulaşık",
    short: "Temiz yıkamıyor, su tahliye etmiyor, ısıtmıyor ya da su sızdırıyor.",
    title: "Eskişehir Bulaşık Makinesi Tamiri | Arıza ve Yönlendirme",
    description:
      "Eskişehir'de bulaşık makinesi yıkamıyor, su tahliye etmiyor ya da hata veriyor mu? Güvenle deneyebileceğiniz adımlar ve uygun ustaya yönlendirme.",
    lead: "Bulaşık makinesinde sorun çoğunlukla filtre ve püskürtme kollarının tıkanması, tahliye pompası, ısıtıcı ya da sızdıran bir conta olur. Küçük bakım çoğu zaman sorunu çözer; çözmezse parça kontrolü gerekir.",
    life: 10,
    problems: [
      { p: "Temiz yıkamıyor", c: "Püskürtme kolları, filtre ve sirkülasyon pompası incelenir.", guide: "bulasik-makinesi-temiz-yikamiyor" },
      { p: "Su tahliye etmiyor", c: "Tahliye pompası ve hortum tıkanıklığı giderilir.", guide: "bulasik-makinesi-su-tahliye-etmiyor" },
      { p: "Isıtmıyor / kurutmuyor", c: "Isıtıcı rezistans ve NTC sensör kontrol edilir." },
      { p: "Su sızdırıyor", c: "Kapak contası ve hortum bağlantıları yenilenir." },
      { p: "Hata kodu veriyor", c: "Markaya göre kod okunur, ilgili parça test edilir.", guide: "bulasik-makinesi-hata-kodu" },
    ],
    tips: [
      PLUG,
      "Alttaki filtreyi çıkarıp akan suyun altında temizleyin; kolların deliklerinin açık olduğuna bakın.",
      "Doğru tuz ve parlatıcı kullanımı, kireçli sularda yıkama kalitesini doğrudan etkiler.",
    ],
    call: [
      "Makinenin altında su birikiyorsa",
      "Filtre temizliğine rağmen su tahliye edilmiyorsa",
      "Yanık kokusu ya da kapak açıkken cihazın çalışması gibi güvenlik sorunu varsa",
    ],
    faq: [
      { q: "Bulaşık makinesi neden bulaşıkları kuru çıkarmıyor?", a: "Isıtıcı, parlatıcı eksikliği ya da kapağın tam kapanmaması olabilir. Parlatıcıyı kontrol edin; ısıtıcı kaynaklıysa ustanın bakması gerekir." },
    ],
    related: ["camasir-makinesi-tamiri", "firin-ocak-tamiri"],
  },
  {
    slug: "buzdolabi-tamiri",
    key: "buzdolabi",
    name: "Buzdolabı",
    label: "Buzdolabı",
    short: "Soğutmuyor, aşırı buz tutuyor, aralıksız çalışıyor ya da su akıtıyor.",
    title: "Eskişehir Buzdolabı Tamiri | Soğutmuyor, Buz Tutuyor",
    description:
      "Eskişehir'de buzdolabı soğutmuyor, buz tutuyor ya da sürekli çalışıyor mu? Gıdaları korumak için ilk adımlar ve uygun ustaya yönlendirme.",
    lead: "Buzdolabı arızasında zaman önemlidir: gıdalar bozulabilir. Soğutma, defrost (buz çözme) sistemi, fan ve kompresör rölesi sık görülen noktalardır. Önce gıdaları koruyun, sonra arızayı ayırt edin.",
    life: 13,
    problems: [
      { p: "Yeterince soğutmuyor", c: "Fan motoru, termostat ve soğutma devresi kontrol edilir.", guide: "buzdolabi-sogutmuyor" },
      { p: "Aşırı buz tutuyor", c: "Defrost sistemi ve rezistans test edilir.", guide: "buzdolabi-buz-tutuyor" },
      { p: "Sürekli çalışıyor", c: "Kompresör rölesi, conta ve sensörler incelenir." },
      { p: "Su akıtıyor", c: "Tahliye kanalı temizlenir, su girişi kontrol edilir." },
      { p: "Gürültü yapıyor", c: "Fan ve kompresör titreşimi tespit edilir." },
    ],
    tips: [
      "Kapıyı gereksiz açmayın; bozulabilecek gıdaları soğuk tutmak için buz kalıplarıyla soğutucu çantaya alın.",
      "Arkadaki ve alttaki havalandırma boşluklarının kapalı olmadığından, kapı contasının tam oturduğundan emin olun.",
      "Buz tutmuşsa fişi çekip kapakları açık bırakarak çözülmesini bekleyin; buzu sivri aletle kırmayın.",
    ],
    call: [
      "Tüm kabinler ısındıysa ve kompresör hiç çalışmıyorsa",
      "Buzu çözdükten sonra kısa sürede yeniden buz tutuyorsa",
      "Yanık kokusu ya da kompresörden anormal ses geliyorsa",
    ],
    faq: [
      { q: "Buzdolabı soğutmuyorsa gıdalar ne kadar dayanır?", a: "Kapı kapalı tutulursa kısa süre korunur; ancak sıcaklık yükselince hızla bozulur. Hassas gıdaları hemen soğutucu çantaya almak güvenlidir." },
      { q: "Buz tutma sorunu neden olur?", a: "Çoğunlukla defrost rezistansı, sensörü ya da kapı contası kaynaklıdır. Kapı contası kaçak yapıyorsa nemli hava girip buz oluşturur." },
    ],
    related: ["firin-ocak-tamiri", "camasir-makinesi-tamiri"],
  },
  {
    slug: "firin-ocak-tamiri",
    key: "firin",
    name: "Fırın ve ocak",
    label: "Fırın",
    short: "Isıtmıyor, ocak tutuşmuyor, ısı eşit dağılmıyor ya da kapak sorunu var.",
    title: "Eskişehir Fırın ve Ocak Tamiri | Isıtmıyor, Tutuşmuyor",
    description:
      "Eskişehir'de fırın ısıtmıyor, ocak tutuşmuyor ya da ısı eşit dağılmıyor mu? Gaz güvenliği ve ilk kontroller, ardından uygun ustaya yönlendirme.",
    lead: "Fırın ve ocakta iki ayrı dünya vardır: elektrikli fırın (rezistans, termostat, sensör) ve gazlı ocak (ateşleme, emniyet). Gazla ilgili işlerde önce güvenlik gelir, müdahale yetkili kişilere bırakılır.",
    life: 15,
    problems: [
      { p: "Fırın ısıtmıyor", c: "Rezistans, termostat ve sıcaklık sensörü test edilir.", guide: "firin-isitmiyor" },
      { p: "Ocak tutuşmuyor", c: "Ateşleme bujisi ve emniyet valfi kontrol edilir.", guide: "ocak-tutusmuyor" },
      { p: "Isı eşit dağılmıyor", c: "Fan motoru ve kalibrasyon ayarlanır." },
      { p: "Kapak contası / menteşe", c: "Conta ve menteşe yerinde değiştirilir." },
    ],
    tips: [
      "Gaz kokusu alırsanız cihazı ve elektrikli anahtarları kullanmayın, havalandırın, binadan çıkın ve 187 Doğalgaz Acil'i arayın.",
      "Ocak başlıklarının ve bujilerin yemek artığıyla tıkanmadığını, kuru olduğunu kontrol edin.",
      "Fırının sigortasının ve prizin sağlam olduğundan emin olun; fırın içini soğukken temizleyin.",
    ],
    call: [
      "Gaz kokusu, alev rengi ya da yanma düzeni normal değilse (önce güvenlik adımları)",
      "Fırın ısıtmıyor ve sigorta atıyorsa",
      "Cam kırıldı ya da kapak kapanmıyorsa",
    ],
    faq: [
      { q: "Gazlı ocağı kendim tamir edebilir miyim?", a: "Hayır. Gaz bağlantıları ve valfler belgeli kişilerce kontrol edilmelidir. Yalnızca başlıkları temizleyip kuru olduğundan emin olabilirsiniz." },
    ],
    related: ["buzdolabi-tamiri", "bulasik-makinesi-tamiri"],
  },
  {
    slug: "kurutma-makinesi-tamiri",
    key: "kurutma",
    name: "Kurutma makinesi",
    label: "Kurutma",
    short: "Kurutmuyor, çok uzun sürüyor, tambur dönmüyor ya da su haznesi dolmuyor.",
    title: "Eskişehir Kurutma Makinesi Tamiri | Kurutmuyor, Uzun Sürüyor",
    description:
      "Eskişehir'de kurutma makinesi kurutmuyor, çok uzun sürüyor ya da tambur dönmüyor mu? Filtre ve kondenser kontrolü, ardından uygun ustaya yönlendirme.",
    lead: "Kurutma makinelerinde sorun çoğu zaman hava yolundadır: dolu filtre, tıkalı kondenser, yetersiz havalandırma. Bunlar giderilince hâlâ kurutmuyorsa rezistans, termostat ya da sensör devreye girer.",
    life: 10,
    problems: [
      { p: "Kurutmuyor", c: "Rezistans, termostat ve hava kanalı kontrol edilir.", guide: "kurutma-makinesi-kurutmuyor" },
      { p: "Çok uzun sürüyor", c: "Filtre, kondenser temizliği ve sensör testi yapılır." },
      { p: "Tambur dönmüyor", c: "Kayış ve motor incelenir." },
      { p: "Su haznesi dolmuyor", c: "Pompa ve kondenser sistemi kontrol edilir." },
    ],
    tips: [
      PLUG,
      "Her kullanımdan sonra tiftik filtresini temizleyin; su haznesini boşaltın.",
      "Kondenseri kılavuzdaki yönteme göre temizleyin; makineyi havalandırması iyi olan bir yere koyun.",
    ],
    call: [
      "Yanık kokusu ya da aşırı ısınma varsa",
      "Filtre ve kondenser temizlendikten sonra da kurutmuyorsa",
      "Tambur dönmüyor ya da kayış sesi geliyorsa",
    ],
    faq: [
      { q: "Kurutma makinesi neden çok uzun sürüyor?", a: "En sık neden tıkalı tiftik filtresi ve kondenserdir. Aşırı yükleme ve yeterince sıkılmamış çamaşır da süreyi uzatır." },
    ],
    related: ["camasir-makinesi-tamiri", "bulasik-makinesi-tamiri"],
  },
];

export const bySlug = (s: string) => appliances.find((a) => a.slug === s);