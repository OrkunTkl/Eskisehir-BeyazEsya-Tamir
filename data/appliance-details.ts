// Cihaz sayfalarına (app/[slug]/page.tsx) eklenen ayrıntılı bölümler ve ek SSS.
// Anahtar: data/appliances.ts içindeki cihaz slug'ı.
export type DetailSection = { h: string; p: string };
export type Detail = {
  sections: DetailSection[];
  faq?: { q: string; a: string }[];
};

export const applianceDetails: Record<string, Detail> = {
  "camasir-makinesi-tamiri": {
    sections: [
      {
        h: "Hangi belirti hangi parçayı işaret eder?",
        p: "Makine su almıyorsa su giriş valfi, filtre ya da basınç anahtarı; su boşaltmıyorsa tahliye pompası ya da süzgeç şüphelidir. Sıkma yapmayan makinede kayış, motor kömürü ya da elektronik kart öne çıkar. Tamburdan uğultu ve gümbürtü rulman ve amortisör aşınmasına, kapağın açılmaması kapak kilidine işaret eder. Belirtiyi bu şekilde ayırmak, ustaya telefonda ne anlatacağınızı kolaylaştırır.",
      },
      {
        h: "Arızayı geciktirmenin bedeli",
        p: "Rulman gıcırtısı ya da pompa uğultusu gibi erken belirtiler ihmal edilirse küçük bir parça arızası tambur, kasnak ya da motor hasarına dönüşebilir. Su kaçağı ise zemin ve alt kat hasarı riski taşır. Bu yüzden ses ya da sızıntı fark ettiğinizde makineyi bir süre kullanmamak ve fişini çekmek genellikle daha ucuza gelir.",
      },
      {
        h: "Bakım alışkanlıkları",
        p: "Her yıkamadan sonra kapağı ve deterjan çekmecesini aralık bırakıp kurutmak küf ve kokuyu azaltır. Kauçuk contanın kıvrımlarını silmek, süzgeci kılavuzda belirtilen aralıklarla temizlemek ve fazla deterjan kullanmamak makinenin ömrünü uzatır. Kireçli sularda kireç çözücü kullanımı için marka kılavuzuna bakın.",
      },
      {
        h: "Tamir mi, yeni makine mi?",
        p: "Makinenin yaşı, arızanın türü ve parça maliyeti belirleyicidir. Pompa, valf ve kapak kilidi gibi parçalar çoğu zaman yeni makineye göre makul bir masraftır. Elektronik kart ya da tambur ve rulman bloğu gibi pahalı parçalar ise eski bir makinede yeniye yakın bir maliyet çıkarabilir. Ana sayfadaki \"tamir mi, yenisi mi\" hesabı bir ön fikir verir; kesin karar ustanın muayenesinden sonra verilir.",
      },
      {
        h: "Usta çağırmadan önce hazırlanın",
        p: "Marka ve model bilgisini (genellikle kapak içindeki ya da arkadaki etiketten), ekrandaki hata kodunu, arızanın hangi programda başladığını ve en son ne zaman düzgün çalıştığını not edin. Ustanın makineye rahat ulaşabilmesi için önünü açın. Su kaçağı varsa musluğu kapatın.",
      },
    ],
    faq: [
      { q: "Çamaşır makinesi çalışırken yürüyor, normal mi?", a: "Hayır. Genellikle yük dengesizliği, ayakların ayarsız olması ya da yıpranan amortisörlerden kaynaklanır. Ayakları ve yükü kontrol edin, devam ederse amortisör ve rulmanları ustaya baktırın." },
      { q: "Makineden kötü koku geliyorsa ne yapmalıyım?", a: "Süzgeç, deterjan çekmecesi ve conta kıvrımlarındaki birikimi temizleyin ve kapağı kullanım sonrası aralık bırakın. Koku geçmiyorsa tahliye hattında tıkanıklık olabilir." },
    ],
  },
  "bulasik-makinesi-tamiri": {
    sections: [
      {
        h: "Sık arıza noktaları",
        p: "Temiz yıkamama genellikle tıkalı filtre, püskürtme kolu delikleri ya da zayıflayan sirkülasyon pompasından kaynaklanır. Su tahliye edilmemesi tahliye pompası ve hortum tıkanıklığına, ıslak çıkan bulaşıklar ise ısıtıcı rezistansa ya da parlatıcı eksikliğine işaret eder. Su sızıntısı çoğunlukla kapak contası ya da hortum bağlantılarındandır.",
      },
      {
        h: "Kireç ve tuz kullanımı",
        p: "Kireçli sularda tuz, parlatıcı ve deterjan ayarının doğru yapılması yıkama kalitesini doğrudan etkiler. Tuz bölmesi boş kalırsa kireç rezistansa ve su yollarına birikir, bulaşıklarda beyaz lekeler oluşur. Makinenin su sertliği ayarını kılavuza göre bölgenizin suyuna uyarlamak faydalı olur.",
      },
      {
        h: "Düzenli temizlik",
        p: "Alt filtreyi haftalık olarak temizlemek, püskürtme kollarının deliklerini kontrol etmek ve contayı silmek en basit ama en etkili bakımdır. Yağ ve yemek artığı birikimini azaltmak için ara sıra boş makinede yüksek ısı programı çalıştırmak da kılavuzlarda önerilir.",
      },
      {
        h: "Ne zaman usta gerekir?",
        p: "Filtre ve kol temizliğine rağmen yıkama düzelmiyorsa, makine su tahliye etmiyorsa, kapak açıkken çalışıyorsa ya da zemine su sızıyorsa fişi çekip usta çağırın. Elektrik ve su birlikte olduğu için güvenlik her zaman önceliklidir.",
      },
    ],
    faq: [
      { q: "Bulaşık makinesinde beyaz lekeler neden oluşur?", a: "Çoğunlukla kireç, yetersiz parlatıcı ya da tuz eksikliğinden kaynaklanır. Tuz ve parlatıcı bölmelerini ve su sertliği ayarını kontrol edin." },
      { q: "Bulaşık makinesi kötü kokuyorsa ne yapmalıyım?", a: "Filtreyi, kapak contasını ve alt kısımdaki su yollarını temizleyin. Yüksek sıcaklıkta boş bir program çalıştırmak kokuyu azaltabilir." },
    ],
  },
  "buzdolabi-tamiri": {
    sections: [
      {
        h: "Soğutma sistemi nasıl çalışır?",
        p: "Buzdolabı kompresör, kondenser, evaporatör ve fandan oluşan bir döngüyle çalışır. No-frost modellerde ek olarak defrost rezistansı, defrost sensörü ve fan devrededir. Soğutmama sorunu çoğunlukla fan, defrost sistemi ya da kompresör rölesinden, buz tutma ise defrost sisteminden ve kapı contasından kaynaklanır.",
      },
      {
        h: "Önce gıdaları koruyun",
        p: "Buzdolabı soğutmuyorsa kapıyı gereksiz açmayın. Kapalı tutulan bir buzdolabı genel olarak yaklaşık dört saat kadar soğuk kalır; dolu bir dondurucu bundan çok daha uzun süre dayanır. Süt ürünleri, et ve hazır yemekler gibi hassas gıdaları hemen soğutucu çantaya ve buzlukla taşımak güvenlidir. Şüpheli gıdayı tüketmeyin.",
      },
      {
        h: "Soğuk ortamda çalışma sorunu",
        p: "Buzdolaplarının çalışma için uygun bir oda sıcaklığı aralığı vardır. Kışın ısıtılmayan balkon, garaj ya da depoda duran buzdolaplarında kompresör çalışmayabilir ve dolap içi ısınabilir. Eskişehir'de kış aylarında bu durum sık görülür; cihazı daha ılık bir alana taşımak ya da modelin iklim sınıfını kılavuzdan kontrol etmek gerekir.",
      },
      {
        h: "Voltaj ve elektrik",
        p: "Ani elektrik kesintileri ve voltaj dalgalanmaları kompresör rölesine ve elektronik karta zarar verebilir. Kesinti sonrasında buzdolabını hemen yeniden çalıştırmak yerine birkaç dakika beklemek kompresör için daha iyidir. Voltaj sorunu yaşıyorsanız koruyucu priz ya da regülatör kullanmayı ustayla konuşun.",
      },
      {
        h: "Tamir mi, yeni buzdolabı mı?",
        p: "Buzdolaplarının ömrü uzundur ve fan, röle, sensör ve rezistans gibi parçalar makul masraflarla yenilenir. Kompresör ya da soğutma gazı ile ilgili pahalı bir arızada cihazın yaşı karar için belirleyici olur. Muayene sonrası yazılı bir fiyat bilgisi isteyin.",
      },
    ],
    faq: [
      { q: "Buzdolabı sürekli çalışıyorsa bozuk mudur?", a: "Her zaman değil. Sıcak bir ortamda, kapı sık açılıyorsa ya da cihaz yeni dolduysa çalışma süresi uzar. Ancak dolap içi ısınıyor ve kompresör hiç durmuyorsa conta, sensör ya da soğutma devresi kontrol edilmelidir." },
      { q: "Buzdolabından su akıyorsa ne yapmalıyım?", a: "Arka duvardaki tahliye kanalı buzla ya da kirle tıkanmış olabilir. Buzdolabını çözdürüp kanalı temizlemek çoğu zaman yeterlidir; sorun tekrarlarsa usta bakmalıdır." },
    ],
  },
  "firin-ocak-tamiri": {
    sections: [
      {
        h: "Elektrikli fırın ve gazlı ocak farklı konulardır",
        p: "Elektrikli fırında rezistans, termostat, sıcaklık sensörü ve fan sık görülen arıza noktalarıdır. Gazlı ocakta ise ateşleme bujisi, emniyet valfi ve başlıklar öne çıkar. Gazla ilgili her müdahale belgeli kişilerce yapılmalıdır; kullanıcı yalnızca başlıkları temizleyip kuru olduğundan emin olabilir.",
      },
      {
        h: "Gaz güvenliği",
        p: "Gaz kokusu aldığınızda cihazı ve elektrik anahtarlarını kullanmayın, ortamı havalandırın, gaz vanasını kapatın ve binadan çıkın. Ardından 187 Doğalgaz Acil hattını arayın. Gaz hortumunun üzerinde üretim ve kullanım süresi bilgisi bulunur; süresi dolmuş, çatlamış ya da sertleşmiş hortumları değiştirmek gerekir. Alev rengi sarıya dönüyorsa ya da kurum yapıyorsa kullanmayı bırakıp kontrol ettirin.",
      },
      {
        h: "Fırın ısıtmıyorsa",
        p: "Önce prizi ve sigortayı kontrol edin. Isınma yalnızca üstten ya da alttan oluyorsa ilgili rezistans, hiç ısınmıyorsa termostat veya sıcaklık sensörü sorunludur. Sigorta atıyorsa cihazı kullanmayı bırakın ve usta çağırın; bu kısa devre belirtisi olabilir.",
      },
      {
        h: "Isı dağılımı ve kalibrasyon",
        p: "Fırında yemek bir tarafta fazla kızarıyor, diğer tarafta az pişiyorsa fan, rezistans ya da termostat kalibrasyonu bozulmuş olabilir. İç sıcaklığı bağımsız bir fırın termometresiyle kontrol etmek, sapmayı ustaya göstermek için işe yarar.",
      },
      {
        h: "Cam ve kapak",
        p: "Fırın camında çatlak, kapak menteşesinde gevşeklik ya da conta kaçağı ısı kaybına ve güvenlik riskine yol açar. Çatlak camlı fırını kullanmayın; cam ya da kapak ve conta yerinde değiştirilebilir.",
      },
    ],
    faq: [
      { q: "Ocak bujisi sürekli çıtırdıyor ama yanmıyorsa ne yapmalıyım?", a: "Başlıklar ve buji yemek artığı ya da nemle tıkanmış olabilir. Cihaz soğukken başlıkları temizleyip kurumasını bekleyin. Sorun sürerse gaz valfini ve bujiyi usta kontrol etmelidir; gaz kokusu varsa önce güvenlik adımlarını uygulayın." },
      { q: "Fırın temizliği hangi sıklıkla yapılmalı?", a: "Kullanıma bağlıdır. Taşan yemek artıklarını soğuduktan sonra silmek, birikmeyi önler. Kendi kendini temizleme programı varsa kılavuzdaki talimatlara uyun." },
    ],
  },
  "kurutma-makinesi-tamiri": {
    sections: [
      {
        h: "Kurutma makinesi türleri",
        p: "Hava tahliyeli, kondenserli ve ısı pompalı olmak üzere üç temel tür vardır. Hava tahliyeli makineler nemli havayı hortumla dışarı verir; kondenserli makineler nemi toplayıp su haznesine ya da gidere aktarır; ısı pompalı makineler ise ısıyı geri kazanarak daha az enerji tüketir. Hangi türe sahip olduğunuz, arızanın nerede aranacağını belirler.",
      },
      {
        h: "Çoğu sorun hava yolundadır",
        p: "Dolu tiftik filtresi, tıkalı kondenser ya da hava çıkış hortumundaki kıvrım, makinenin yeterince hava dolaştıramamasına ve çamaşırların kurumamasına yol açar. Bu parçaların temizlenmesi ücretsiz ve çoğu zaman yeterli çözümdür. Her kullanımdan sonra filtreyi temizlemek hem verimi hem güvenliği artırır.",
      },
      {
        h: "Yangın ve aşırı ısınma riski",
        p: "Tiftik birikimi, kurutma makinelerinde aşırı ısınmanın ve yangın riskinin en önemli nedenlerinden biridir. Yanık kokusu, aşırı sıcak gövde ya da anormal ses duyuyorsanız makineyi hemen durdurup fişini çekin. Makinenin etrafında yeterli boşluk bırakmak ve havalandırması iyi bir alanda kullanmak da önemlidir.",
      },
      {
        h: "Kurutma süresi uzadıysa",
        p: "Filtre ve kondenser temizliğine rağmen süre uzuyorsa rezistans, termostat ya da nem sensörü sorunu olabilir. Fazla yük, yeterince sıkılmamış çamaşır ve yanlış program seçimi de süreyi uzatır; bunları da kontrol edin.",
      },
    ],
    faq: [
      { q: "Kurutma makinesi çamaşırları kırıştırıyorsa ne yapmalıyım?", a: "Makineyi fazla doldurmayın, çamaşırı ayrıca iyi sıkıp yerleştirin ve programı bitince hemen boşaltın. Kırışıklık azaltma programı varsa kullanın." },
      { q: "Kondenser temizliği nasıl yapılır?", a: "Yöntem markaya göre değişir; kılavuzdaki adımları izleyin. Genellikle kondenser çıkarılıp akan suyun altında durulanır, ancak parçaya zarar vermemek için sert fırça kullanılmaz." },
    ],
  },
};