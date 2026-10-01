export type Appliance = {
  slug: string; name: string; short: string; tag: string;
  problems: { p: string; c: string }[];
};
export const appliances: Appliance[] = [
  { slug: "camasir-makinesi-tamiri", name: "Çamaşır Makinesi", tag: "01", short: "Su almıyor, sıkmıyor, ses yapıyor mu? Yerinde arıza tespiti.",
    problems: [
      { p: "Su almıyor", c: "Su giriş valfi, filtre ve basınç anahtarı kontrol edilir." },
      { p: "Suyu boşaltmıyor", c: "Pompa ve süzgeç tıkanıklığı temizlenir, gerekirse pompa değişir." },
      { p: "Sıkma yapmıyor", c: "Kayış, motor kömürü ve elektronik kart test edilir." },
      { p: "Çok ses / titreme", c: "Rulman, amortisör ve denge ayakları kontrol edilir." },
      { p: "Kapak açılmıyor", c: "Kapak kilidi ve rezistans bağlantısı yerinde çözülür." },
    ] },
  { slug: "bulasik-makinesi-tamiri", name: "Bulaşık Makinesi", tag: "02", short: "Yıkamıyor, durulamıyor, su tahliye etmiyor.",
    problems: [
      { p: "Bulaşıkları temiz yıkamıyor", c: "Püskürtme kolları, filtre ve sirkülasyon pompası incelenir." },
      { p: "Su tahliye etmiyor", c: "Tahliye pompası ve hortum tıkanıklığı giderilir." },
      { p: "Isıtmıyor / kurutmuyor", c: "Isıtıcı rezistans ve NTC sensör kontrol edilir." },
      { p: "Su sızdırıyor", c: "Kapak contası ve hortum bağlantıları yenilenir." },
      { p: "Hata kodu veriyor", c: "Markaya göre kod okunur, ilgili parça test edilir." },
    ] },
  { slug: "buzdolabi-tamiri", name: "Buzdolabı", tag: "03", short: "Soğutmuyor, buz tutuyor, aralıksız çalışıyor.",
    problems: [
      { p: "Yeterince soğutmuyor", c: "Fan motoru, termostat ve soğutma devresi kontrol edilir." },
      { p: "Aşırı buz tutuyor", c: "Defrost sistemi ve rezistans test edilir." },
      { p: "Sürekli çalışıyor", c: "Kompresör rölesi, conta ve sensörler incelenir." },
      { p: "Su akıtıyor", c: "Tahliye kanalı temizlenir, su girişi kontrol edilir." },
      { p: "Gürültü yapıyor", c: "Fan ve kompresör titreşimi tespit edilir." },
    ] },
  { slug: "firin-ocak-tamiri", name: "Fırın & Ocak", tag: "04", short: "Isıtmıyor, ocak tutuşmuyor, kapak kapanmıyor.",
    problems: [
      { p: "Fırın ısıtmıyor", c: "Rezistans, termostat ve sıcaklık sensörü test edilir." },
      { p: "Ocak tutuşmuyor", c: "Ateşleme bujisi ve emniyet valfi kontrol edilir." },
      { p: "Isı eşit dağılmıyor", c: "Fan motoru ve kalibrasyon ayarlanır." },
      { p: "Kapak contası / menteşe", c: "Conta ve menteşe yerinde değiştirilir." },
    ] },
  { slug: "kurutma-makinesi-tamiri", name: "Kurutma Makinesi", tag: "05", short: "Kurutmuyor, nem alıyor, çok uzun sürüyor.",
    problems: [
      { p: "Çamaşırı kurutmuyor", c: "Rezistans, termostat ve hava kanalı kontrol edilir." },
      { p: "Çok uzun sürüyor", c: "Filtre, kondenser temizliği ve sensör testi yapılır." },
      { p: "Tambur dönmüyor", c: "Kayış ve motor incelenir." },
      { p: "Su haznesi dolmuyor", c: "Pompa ve kondenser sistemi kontrol edilir." },
    ] },
];
export const bySlug = (s: string) => appliances.find((a) => a.slug === s);
