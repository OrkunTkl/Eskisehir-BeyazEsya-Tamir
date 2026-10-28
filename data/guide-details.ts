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
    {
      h: "Su giriş filtresi nasıl temizlenir?",
      p: "Musluğu kapatıp fişi çektikten sonra hortumu makineden sökün. Hortumun ucunda ve makinenin su girişinde ince bir elek bulunur; kum ve kireç burada birikir. Eleği ılık suyla yıkayıp eski bir diş fırçasıyla temizleyin, kireçliyse bir süre sirkeli suda bekletin. Yerine takarken contayı yerleştirin ve elle sıkın; aşırı sıkmak contaya zarar verip sızıntıya yol açabilir.",
    },
    {
      h: "Kapak kilidi su almayı engelleyebilir",
      p: "Birçok makine kapak tam kilitlenmeden suya izin vermez. Kapağı kapattığınızda belirgin bir tık sesi gelmiyorsa lastiğe sıkışmış bir çamaşır parçası ya da kilit dili sorun çıkarıyor olabilir. Kapağı tekrar sıkıca kapatıp programı yeniden başlatın. Kilit gerçekten arızalıysa makine program başlatmaz ya da ekranda uyarı verir.",
    },
    {
      h: "Aquastop hortumu ve taşma emniyeti",
      p: "Bazı makinelerin su giriş hortumunda taşmayı önleyen emniyet valfi bulunur. Bu valf bir kaçakta suyu keserse makine su alamaz. Hortum kutusunda şişkinlik, ıslaklık ya da su sızıntısı izi görüyorsanız hortumun yenilenmesi gerekebilir; bu durumda makineyi çalıştırmaya devam etmeyin.",
    },
    {
      h: "Ustaya söylemeniz gerekenler",
      p: "Marka ve modeli, ekranda hata kodu olup olmadığını, makinenin hiç mi yoksa çok yavaş mı su aldığını ve musluğun diğer cihazlarla birlikte nasıl çalıştığını not edin. Bu bilgiler ustanın ilk gelişte doğru parçayla gelme ihtimalini artırır.",
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
    {
      h: "Tahliye hortumu ve sifon kaynaklı tıkanma",
      p: "Hortum sifona ya da gidere takılıyken zamanla deterjan ve tiftik birikir. Lavabonuz da yavaş akıyorsa sorun makinede değil tesisattadır. Hortumun kılavuzda belirtilen yüksekliği aşmaması ve kıvrılmaması gerekir; çok yüksek bağlanan hortum suyun tam boşalmasını engeller.",
    },
    {
      h: "Pompa bozulmadan önceki uyarı belirtileri",
      p: "Su normalden geç boşalıyorsa, boşaltma sırasında tıkırtı ya da ıslık sesi geliyorsa, sıkma sırasında makine duruyorsa pompa zorlanıyor olabilir. Süzgeç ve hortum temiz olduğu halde bu belirtiler sürüyorsa pompa kanadı ya da motoru kontrol edilmelidir.",
    },
    {
      h: "Hata kodu ve program duraklaması",
      p: "Birçok makine suyu boşaltamadığında programı duraklatır ve ekranda bir kod gösterir. Kodu ve marka-modeli not edip kılavuzdaki karşılığına bakın. Makineden dışarı su taşıyorsa fişi çekip musluğu kapatın.",
    },
    {
      h: "Su boşalmadan çamaşırı çıkarmak",
      p: "Tamburda su varken kapak çoğu zaman açılmaz. Önce süzgeç ya da acil boşaltma hortumuyla suyu boşaltın, çamaşırların ağırlığını makineden çıkarırken yere su damlayacağını hesaba katın. Kapak kilidini zorlamayın.",
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
    {
      h: "Sıkmadan önce tahliyenin tamamlandığını kontrol edin",
      p: "Makine suyu boşaltamazsa güvenlik için sıkmaya geçmez. Tamburda su kalıp kalmadığına bakın; kalmışsa sorun sıkma değil tahliyedir ve süzgeç ile hortum kontrolüyle başlanır.",
    },
    {
      h: "Yük miktarı ve çamaşır cinsi",
      p: "Bornoz, battaniye, nevresim gibi büyük ve ıslandıkça ağırlaşan parçalar tek başına yüke dengesizlik verir. Yanına birkaç havlu eklemek dengeyi düzeltebilir. Çok az çamaşır da yük dengesini bozar; tamburu aşırı doldurmak da sıkmayı engeller.",
    },
    {
      h: "Nakliye cıvataları ve zemin",
      p: "Yeni alınmış ya da taşınmış makinede nakliye cıvataları sökülmediyse aşırı titreşim ve sıkma sorunu yaşanır. Ayakların zemine eşit bastığını ve zeminin sert olduğunu su terazisiyle kontrol edin.",
    },
    {
      h: "Program ve devir ayarı",
      p: "Hassas ve yün programları sıkmayı sınırlar ya da atlar. Sıkma devri düşük seçilmiş olabilir ya da sıkmayı kapatan bir seçenek aktiftir. Programı ve devri kontrol edip standart bir programla yeniden deneyin.",
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
    {
      h: "Yeni ya da taşınan makinede nakliye cıvatası",
      p: "Nakliye cıvataları sökülmeden çalıştırılan makine sert vuruntu ve çok yüksek ses yapar. Cıvatalar makinenin arkasında bulunur ve yalnızca taşıma sırasında takılı kalmalıdır. Sökülmedilerse makineyi çalıştırmayı bırakıp kılavuza göre çıkarın.",
    },
    {
      h: "Tambur ile kazan arasına kaçan yabancı cisim",
      p: "Sütyen teli, bozuk para ya da toka, tambur delikleri ile kazan arasına kaçabilir ve tıkırtı yapar. Süzgeçte çıkmayan bu cisimler için makinenin açılması gerekir ve bu işlem ustaya bırakılmalıdır.",
    },
    {
      h: "Ses mi, titreşim mi?",
      p: "Dengesizlik kaynaklı titreşim ile mekanik arıza sesi farklıdır. Ayakları ayarlayıp çamaşırı dağıtınca geçen gürültü genellikle arıza değildir. Tamburu elle döndürdüğünüzde sürtünme ya da sert ses duyuyorsanız rulman şüphesi vardır.",
    },
    {
      h: "Hangi durumda kullanmayı bırakmalısınız?",
      p: "Metal sürtünme sesi, yanık kokusu, duman ya da kapak altından su sızması varsa makineyi hemen durdurup fişi çekin. Rulman sesini görmezden gelmek tambur mili hasarını büyütür.",
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
    {
      h: "Güvenlik kilidi nasıl çalışır?",
      p: "Kapak kilidi, tamburda su varken ya da yıkama sıcakken açılmasın diye programın bitiminden sonra kısa süre kilitli kalır. Bu süre modele göre değişir. Programın bittiğinden ve ekranda kilit simgesinin söndüğünden emin olun.",
    },
    {
      h: "Acil açma mekanizması",
      p: "Bazı modellerde süzgeç kapağının yakınında acil açma ipi ya da kolu bulunur. Modelinizde olup olmadığı için kılavuza bakın. Kullanmadan önce fişi çekin ve tamburdaki suyu boşaltın.",
    },
    {
      h: "Kapak kilidi arızasının belirtileri",
      p: "Kapak kapanınca tık sesi gelmiyor, program başlamıyor ya da program bitince kapak açılmıyorsa kilit parçası arızalı olabilir. Bu parça çoğu zaman değiştirilerek giderilir.",
    },
    {
      h: "Elektrik kesintisi sonrası kapak açılmıyorsa",
      p: "Elektrik kesintisinde makine kilitli kalabilir. Elektrik geldikten sonra programın bitmesini bekleyin. Beklemeye rağmen açılmıyorsa suyu boşaltıp birkaç dakika sonra tekrar deneyin.",
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
    {
      h: "Doğru yerleştirme püf noktaları",
      p: "Kâseleri ters, derin kapları ağzı aşağı bakacak şekilde dizin. Büyük tabak ve tencereler püskürtme kollarının önünü kapatmasın. Aşırı doldurmak suyun her yere ulaşmasını engeller.",
    },
    {
      h: "Deterjan, tablet ve program seçimi",
      p: "Tablet bölmesinin kapağı yemekle ya da kapla engelleniyorsa tablet erimez. Çok kısa programlarda tabletler tam çözünmeyebilir. Çok kirli kaplar için kısa program yerine standart ya da yoğun programı seçin.",
    },
    {
      h: "Sert su, tuz ve parlatıcı",
      p: "Bölgenizin suyu sertse tuz haznesi boş kaldığında bulaşıklarda beyaz tabaka ve mat görüntü oluşur. Su sertliğini makinenin ayarında kılavuza göre yapın, tuz ve parlatıcı seviyesini düzenli kontrol edin.",
    },
    {
      h: "Aylık bakım alışkanlığı",
      p: "Filtreyi sık temizleyin, kolların deliklerini kontrol edin, kapı contasını nemli bezle silin. Makine temizleme programı ya da boş bir sıcak program kireç ve yağ birikimini azaltır.",
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
    {
      h: "Hortum bağlantısı ve çek valf",
      p: "Tahliye hortumu sifona kılavuza uygun şekilde ve yüksekten halka yaparak bağlanmalıdır. Hatalı bağlantıda kirli su makineye geri dönebilir. Bağlantı noktasındaki çek valf ya da tıkalı sifon da tahliyeyi engeller.",
    },
    {
      h: "Sorun makinede mi tesisatta mı?",
      p: "Mutfak lavabonuz da yavaş akıyorsa sorun tesisat kaynaklıdır ve tesisatçı gerekir. Lavabo normal akıyorsa filtre, hortum ya da tahliye pompası şüphelidir.",
    },
    {
      h: "Tahliye pompası arızasını nasıl anlarsınız?",
      p: "Filtre temiz, hortum açık ve gider serbestken su hâlâ boşalmıyorsa pompa kanadı ya da motoru kontrol edilmelidir. Pompadan hiç ses gelmiyorsa elektrik tarafı, uğultu varsa tıkanıklık düşünülür.",
    },
    {
      h: "Kalan su ve kokuyla ne yapılır?",
      p: "Su kalmışsa önce filtreyi çıkarıp bez ya da süngerle suyu alın. Kokuyu gidermek için filtreyi ve tabanı temizleyip bir kez boş sıcak program çalıştırın.",
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
    {
      h: "Hata kodunu doğru okumak",
      p: "Aynı kod markaya, hatta aynı markanın farklı serisine göre farklı anlama gelebilir. Kodu not edin, modelin kılavuzundaki tabloya bakın. E ve F harfi bazı modellerde aynı hatayı farklı gösterir.",
    },
    {
      h: "Hata kodları genelde hangi gruplara girer?",
      p: "Çoğu kod beş gruptan birine dayanır: su girişi, tahliye, sızıntı koruması, ısıtıcı ya da sıcaklık sensörü, kart ve haberleşme. Kodun hangi gruba girdiğini bilmek ustaya gerekli bilgiyi vermenizi sağlar.",
    },
    {
      h: "Bosch ve Siemens'te sık karşılaşılan iki örnek",
      p: "Bu markalarda E15 genellikle taban tepsisindeki su nedeniyle sızıntı korumasının devreye girdiğini, E24 ve E25 ise tahliye sorununu gösterir. Model ve seriye göre farklılık olabilir, kılavuzunuzu esas alın.",
    },
    {
      h: "Sıfırlama denemenin sınırı",
      p: "Fişi birkaç dakika çekip yeniden başlatmak geçici hataları giderebilir. Aynı kod tekrar ediyorsa özellikle sızıntı korumasını tekrar tekrar sıfırlamayın; zemin ve dolap suya zarar görebilir.",
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
    {
      h: "Hiç mi soğutmuyor, az mı soğutuyor?",
      p: "Hangi bölmenin etkilendiğini ayırın. Sadece buzdolabı bölmesi ısınıyorsa hava akışı, fan ya da buzlanma; ikisi birden ısınıyorsa kompresör ya da soğutma sistemi şüphelidir.",
    },
    {
      h: "Arka havalandırma ve konum",
      p: "Cihaz duvara fazla yakınsa ya da arkasında toz birikmişse ısı atamaz ve verimi düşer. Fişi çekip arka ya da alt kısımdaki tozu temizleyin, üreticinin önerdiği boşluğu bırakın.",
    },
    {
      h: "Fan ve hava akışı",
      p: "No-frost modellerde soğuk hava fan ile dağıtılır. Aşırı doldurulmuş raflar hava kanallarını kapatır. Fan sesini duymuyorsanız ya da fan buzla tıkanmışsa soğutma bölmelere ulaşmaz.",
    },
    {
      h: "Gıda güvenliği",
      p: "Soğutmayan buzdolabında bozulabilir gıdalar birkaç saat içinde risk taşır. Kapıyı gereksiz açmayın, hassas gıdaları soğutucu çantaya alın ve şüphe duyduğunuz gıdayı tüketmeyin.",
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
    {
      h: "Defrost sistemi nasıl çalışır?",
      p: "No-frost buzdolaplarında belirli aralıklarla bir rezistans buzu çözer. Rezistans, sensör ya da zamanlayıcı arızalanırsa buz birikir ve soğuk hava akışı kesilir. Arka panelde kalın buz tabakası genelde bu arızanın işaretidir.",
    },
    {
      h: "Kapı contasını test edin",
      p: "Kapıyı bir kâğıt şeridin üstünde kapatıp çekin. Şerit kolay çıkıyorsa conta hava kaçırıyor demektir. Nemli hava içeri girdikçe buzlanma artar. Conta temizliği ya da değişimi sorunu giderebilir.",
    },
    {
      h: "Buzu güvenle çözme adımları",
      p: "Fişi çekin, kapağı açık bırakın, yere havlu serip buzun kendiliğinden erimesini bekleyin. Sivri aletle kırmayın, evaporatöre zarar verebilirsiniz. İçerisi tamamen kuruduktan sonra çalıştırın.",
    },
    {
      h: "Buz tekrar oluşuyorsa",
      p: "Birkaç gün içinde yeniden buz oluşuyorsa defrost parçaları, sensör ya da tahliye kanalı tıkanıklığı vardır. Bu durumda sorunun temizlikle değil onarımla çözülmesi gerekir.",
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
    {
      h: "Üst mü alt mı ısıtmıyor?",
      p: "Fırının yalnızca üst ya da alt ısıtıcısı çalışmıyorsa o rezistans ya da bağlantısı şüphelidir. İkisi de ısıtmıyorsa sigorta, termostat, kart ya da besleme tarafı düşünülür.",
    },
    {
      h: "Sigorta ve elektrik kaynağı",
      p: "Panodaki fırın sigortası attıysa tekrar açmayı bir kez deneyin. Sigorta yine atıyorsa fırını kullanmayın; bu bir elektrik arızası belirtisi olabilir.",
    },
    {
      h: "Termostat ve sensör arızası belirtileri",
      p: "Ayarladığınız sıcaklığa ulaşamıyor, çok geç ulaşıyor ya da fazla ısınıyorsa termostat ya da sıcaklık sensörü arızalı olabilir. Kontrol amaçlı fırın termometresi kullanabilirsiniz.",
    },
    {
      h: "Güvenlik uyarısı",
      p: "Fırının içine ya da arkasına elle müdahale etmeden önce cihazın kapalı ve soğuk olduğundan emin olun. Elektrik bağlantılarını açmayın.",
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
    {
      h: "Pilli ateşleme ve elektrik beslemesi",
      p: "Bazı ocaklarda ateşleme pille çalışır; pil bittiğinde tık sesi zayıflar ya da hiç gelmez. Elektrikli ateşlemeli ocaklarda prizin ve elektriğin gelip gelmediğini kontrol edin.",
    },
    {
      h: "Tüp mü şebeke gazı mı?",
      p: "Tüpte gaz bitmiş ya da vana kapalı olabilir. Şebeke gazında kesinti ya da vana kapalıysa da ocak tutuşmaz. Gaz vanasını açıp kapatmak dışında bağlantılara dokunmayın.",
    },
    {
      h: "Tık sesi geliyor ama alev yok",
      p: "Ateşleme çalışıyor ama gaz gelmiyorsa sorun gaz tarafındadır. Gaz geliyor ama alev oluşmuyorsa buji ya da başlık kirli ya da nemli olabilir.",
    },
    {
      h: "Gaz kokusu hissederseniz",
      p: "Hiçbir elektrik düğmesine dokunmayın, ateş yakmayın, pencereleri açıp binadan çıkın ve 187'yi arayın. Sorun çözülmeden ocağı kullanmayın.",
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
    {
      h: "Havalandırma ve ortam",
      p: "Havalandırmalı modelde egzoz hortumu kıvrık ya da tıkalıysa nemli hava dışarı atılamaz. Ortam çok soğuk ya da çok sıcaksa kurutma süresi uzar. Makinenin çevresinde yeterli boşluk bırakın.",
    },
    {
      h: "Filtre ve kondenser temizlik sıklığı",
      p: "Tiftik filtresini her kullanımdan sonra, kondenseri kılavuzda belirtilen aralıklarla temizleyin. Tıkalı filtre hava akışını azaltır, kurutma süresini uzatır ve aşırı ısınma riski yaratır.",
    },
    {
      h: "Nem sensörü kirliliği",
      p: "Tamburun içindeki metal sensör çubukları kireç ve yumuşatıcı kalıntısıyla kaplanırsa kuruluğu yanlış algılayıp erken durdurabilir. Soğukken sirkeli bezle silmek yardımcı olur.",
    },
    {
      h: "Yanık kokusu varsa",
      p: "Yanık kokusu, duman ya da aşırı ısı varsa makineyi hemen durdurup fişi çekin. Birikmiş tiftik yangın riski taşır. Kokuyu normal saymayın.",
    },
  ],
};