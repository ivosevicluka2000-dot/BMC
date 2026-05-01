/**
 * Serbian translations for product descriptions, taglines, and key features.
 * Only products with non-empty text fields are included (accessories have no text).
 */

export interface ProductTextSr {
  shortDesc?: string;
  fullDesc?: string;
  tagline?: string;
  keyFeatures?: { title: string; description: string }[];
}

export const productTranslationsSr: Record<string, ProductTextSr> = {
  // ═══════════════════════  UTV  ═══════════════════════
  'utv-1': {
    shortDesc: 'TGB LandMax 1000 side-by-side UTV — BASE / SE / PRO. 83 KS V-Twin motor, 4WD, CVT, 35,5 cm klirensa.',
    fullDesc:
      'Vrhunske karakteristike i dizajn sa najnaprednijom opremom. Robusna karoserija za teške uslove rada izrađena po TGB standardu kvaliteta i inovacija. Sa V-Twin motorom od 997 ccm, LandMax 1000 je spreman za svaki off-road izazov koji mu postavite. Četvorotaktni, tečnošću hlađeni motor pruža izvanredne performanse, vrhunsko ubrzanje i snažan obrtni moment. U kombinaciji sa sistemom elektronskog ubrizgavanja goriva i TGB CVT menjačem, garantovana vam je glatka i trenutna snaga.\n\nLandMax 1000 je ultimativno terensko vozilo. Bilo da vam je potrebno superiorno ponašanje na putu ili se suočavate sa najtežim stazama, sa TGB-ovim patentiranim sistemom zaključavanja zadnjeg diferencijala imate pristup pogonskom sklopu sa 4 konfiguracije koji odgovara vašim potrebama — čineći ga idealnom mašinom za svakog korisnika.',
    tagline: 'VRHUNSKI KVALITET IZRADE',
    keyFeatures: [
      { title: 'Snažnih 83 KS — Maksimalna brzina 95 km/h', description: 'Sa V-Twin motorom od 997 ccm, LandMax 1000 pruža izvanredne performanse, vrhunsko ubrzanje i snažan obrtni moment. U paru sa EFI i TGB CVT menjačem, garantovana vam je glatka i trenutna snaga.' },
      { title: 'LED farovi / zadnja svetla', description: 'Moderan LED sistem osvetljenja sa 26W LED kratkim / 64W LED dugim svetlima i LED zadnjim svetlima pruža superiornu vidljivost, bezbednost i atraktivan dizajn.' },
      { title: 'Više prostora za noge i unutrašnjost kabine', description: 'Više prostora za noge i unutrašnjost kabine od konkurencije sa brzom i jednostavnom ugradnjom vrata. Preklopno suvozačko sedište, zvučna i toplotna izolacija za udobnost.' },
      { title: 'Vodeći 4WD Turf režim i E-parking', description: 'Izborni 2WD / RWD / 4WD / 4WD zaključavanje / Turf režim sa vodećom elektronskom parkirnom kočnicom za maksimalnu svestranost i bezbednost.' },
      { title: 'Kapacitet vuče: do 1.134 kg', description: 'Ogroman kapacitet vuče od 1.134 kg u kombinaciji sa tovarnim sandukom koji nosi do 454 kg i fabričkim prednjim vitlom kapaciteta do 2.041 kg.' },
      { title: '4WD / 2WD sa prednjim i zadnjim diferencijalom', description: 'TGB-ov patentirani sistem zaključivog prednjeg i zadnjeg diferencijala pruža pristup pogonskom sklopu sa 4 konfiguracije za superiorno upravljanje na svakom terenu.' },
      { title: 'Opcioni električni podizni zadnji kiper', description: 'Tovarni sanduk sa uglom kipovanja od 47°, brzi mehanizam za dodatke, lenjir na zadnjoj klapni, držači za piće, D-prstenovi i držači za kante od 20 litara.' },
      { title: 'CVT sistem sa 2WD/4WD/zaključavanjem diferencijala/Turf režimom', description: 'Napredni CVT i menjač sa L-H-N-R-P opsegom obezbeđuje glatko prenošenje snage u svim uslovima vožnje.' },
      { title: 'Trostruki dinamički EPS', description: 'Trostruki dinamički električni servo volan (Isključen/Min/Max) sa podesivim volanom za lako upravljanje i prilagodljivu udobnost na svakom terenu.' },
    ],
  },

  // ═══════════════════════  ATV  ═══════════════════════
  'atv-1': {
    shortDesc: 'Snažan V-Twin EFI motor sa visokokvalitetnim šasijama, ABS-om i električnim 4WD/2WD na zahtev.',
    fullDesc:
      'Snažan V-Twin motor sa elektronskim ubrizgavanjem goriva u kombinaciji sa visokokvalitetnom šasijom pruža nepokolebljivu izdržljivost. Dolazi sa 5 stepeni prenosa i najnaprednijim CVT pogonskim sistemom, zaključivim prednjim i zadnjim diferencijalom, električnim 4WD/2WD sistemom na zahtev, 14-inčnim aluminijumskim felgnama, EVO amortizerima i izvanrednim ABS sistemom. BLADE 1000 LTX EPS ABS donosi potpuno drugačiji užitak vožnje za svaku avanturu koju možete zamisliti.\n\nVrhunske karakteristike i dizajn sa najnaprednijom opremom. Robusna karoserija za teške uslove rada izrađena po TGB standardu kvaliteta. Ovaj izdržljiv i pouzdan BLADE 1000 LTX EPS ABS je vaš najbolji saputnik u poslu, na farmi i u avanturama na otvorenom.',
    tagline: 'OPTIMIZOVANE KARAKTERISTIKE!',
    keyFeatures: [
      { title: 'Snažan V-Twin 1000 EFI motor', description: 'Dvocilindrični V-Twin je jedan od najvećih motora u svetu ATV-ova. Sa ogromnom snagom i visokim obrtnim momentom, daje ATV-u vrhunsku dinamiku i snažnu vučnu silu. Elektronsko ubrizgavanje garantuje pouzdan start, čisto sagorevanje i nisku potrošnju.' },
      { title: 'Moderno potpuno LED osvetljenje', description: 'Atraktivni LED Matrix farovi imaju odličan svetlosni učinak i povećavaju nivo bezbednosti ATV-a. Farovi imaju ugrađene prednje LED žmigavce i dnevna svetla. LED tehnologije nude visoku pouzdanost i jaku svetlost uz nisku potrošnju energije.' },
      { title: 'Novi TFT kolor displej', description: 'Automatski dnevni/noćni režim i digitalni prikaz obrtaja, brzine, nivoa rezervoara, 2WD/4WD pogona, ABS-a, indikatora stepena prenosa, temperature rashladne tečnosti i Tripmastera obezbeđuju maksimalnu preglednost. Sa Bluetooth vezom sa mobilnim telefonom i mogućnošću unosa upozorenja o brzini.' },
      { title: 'Dinamičko LED zadnje svetlo', description: 'Moderna LED zadnja svetla nude veću vidljivost, više bezbednosti i opremljena su atraktivnom funkcijom dinamičkog žmigavca.' },
      { title: 'Snažna trakcija', description: 'Nove aluminijumske felgne daju TGB modelima posebno sportski izgled sa umetcima u boji. U kombinaciji sa gumama visokog prianjanja i zaštitom od udaraca usklađenom bojom, nove aluminijumske felgne su još jedna visokokvalitetna karakteristika.' },
      { title: 'Branik komplet', description: 'Branik komplet ne samo da unapređuje izgled BLADE 1000, već poboljšava zaštitu i izdržljivost farova.' },
    ],
  },
  'atv-2': {
    shortDesc: 'Najspektakularniji quad sa naprednim LED farovima i najnovijim dizajnom maske.',
    fullDesc:
      'Opremljen najnaprednijim LED farovima i najnovijim dizajnom maske, Blade 1000 LTX EPS PREMIUM biće u centru pažnje. Ova serija takođe dolazi sa plastičnim nosačem koji pruža maksimalnu izdržljivost i odličan kapacitet utovarivanja.\n\nBlade 1000 LTX EPS Premium je izgrađen sa snažnim V-Twin motorom od 62kW (83 KS), 14-inčnim aluminijumskim felgnama, EVO amortizerima i vodećim sistemom upravljanja motorom. Odlikuje se visokim klirensom i podesivim vešanjem. Sa električnim 4WD/2WD na zahtev, električnim servo volanom i najizržljivijim CVT pogonom, pruža odličnu udobnost vozača na najtežim stazama.',
    tagline: 'NAJSPEKTAKULARNIJI QUAD',
    keyFeatures: [
      { title: 'Snažan V-Twin 1000 EFI motor', description: 'Dvocilindrični V-Twin je jedan od najvećih motora u svetu ATV-ova. Sa ogromnom snagom i visokim obrtnim momentom, daje ATV-u vrhunsku dinamiku i snažnu vučnu silu. Elektronsko ubrizgavanje garantuje pouzdan start, čisto sagorevanje i nisku potrošnju.' },
      { title: 'Moderno potpuno LED osvetljenje', description: 'Atraktivni LED Matrix farovi imaju odličan svetlosni učinak i povećavaju nivo bezbednosti ATV-a. Farovi imaju ugrađene prednje LED žmigavce i dnevna svetla. LED tehnologije nude visoku pouzdanost i jaku svetlost uz nisku potrošnju energije.' },
      { title: 'Produžena šasija', description: 'Produženi međuosovinsko rastojanje pruža vozaču i suvozaču dovoljno prostora na odvojenim sedištima, obezbeđujući bolju stabilnost pri vožnji na brdima. Nezavisno vešanje na svim točkovima, visok klirens i šasija sa velikim uglovima prelaska garantuju odličnu off-road sposobnost.' },
      { title: 'Novi TFT kolor displej', description: 'Automatski dnevni/noćni režim i digitalni prikaz obrtaja, brzine, nivoa rezervoara, 2WD/4WD pogona, ABS-a, indikatora stepena prenosa, temperature rashladne tečnosti i Tripmastera obezbeđuju maksimalnu preglednost. Sa Bluetooth vezom sa mobilnim telefonom.' },
      { title: 'Dinamičko LED zadnje svetlo', description: 'Moderna LED zadnja svetla nude veću vidljivost, više bezbednosti i opremljena su atraktivnom funkcijom dinamičkog žmigavca.' },
      { title: 'Snažna trakcija', description: 'Nove aluminijumske felgne daju TGB modelima posebno sportski izgled sa umetcima u boji. U kombinaciji sa gumama visokog prianjanja i zaštitom od udaraca, nove aluminijumske felgne su još jedna visokokvalitetna karakteristika.' },
    ],
  },
  'atv-3': {
    shortDesc: 'Prevazilazite svoja očekivanja — čvrsta izdržljivost da pomerite granice svake ture.',
    fullDesc:
      'Prevazilazite svoja očekivanja. Blade 1000 LTX EPS 14" linija ima čvrstu izdržljivost da pomeri granice tura koje imate na umu. Savršen za svaku zabavnu vožnju sa prijateljima i porodicom.\n\nUživajte u potpunoj slobodi i ne bojte se! Sa snagom čeličnih ojačanih nosača i potpunom integracijom snažnog V-Twin motora od 62kW (83 KS), električnog servo volana, EVO amortizera i električnog 4WD/2WD na zahtev, ništa vas ne može sprečiti da savladate svaki težak teren.',
    tagline: 'PODIGNITE GRANICE, VAŠ POUZDANI PARTNER',
    keyFeatures: [
      { title: 'Snažan V-Twin 1000 EFI motor', description: 'Dvocilindrični V-Twin je jedan od najvećih motora u svetu ATV-ova. Sa ogromnom snagom i visokim obrtnim momentom, daje ATV-u vrhunsku dinamiku i snažnu vučnu silu. Elektronsko ubrizgavanje garantuje pouzdan start, čisto sagorevanje i nisku potrošnju.' },
      { title: 'Moderno potpuno LED osvetljenje', description: 'Atraktivni LED Matrix farovi imaju odličan svetlosni učinak i povećavaju nivo bezbednosti ATV-a. Farovi imaju ugrađene prednje LED žmigavce i dnevna svetla. LED tehnologije nude visoku pouzdanost i jaku svetlost uz nisku potrošnju energije.' },
      { title: 'Produžena šasija', description: 'Produženi međuosovinsko rastojanje pruža vozaču i suvozaču dovoljno prostora na odvojenim sedištima, obezbeđujući bolju stabilnost pri vožnji na brdima. Nezavisno vešanje na svim točkovima, visok klirens i šasija sa velikim uglovima prelaska garantuju odličnu off-road sposobnost.' },
      { title: 'Novi TFT kolor displej', description: 'Automatski dnevni/noćni režim i digitalni prikaz obrtaja, brzine, nivoa rezervoara, 2WD/4WD pogona, ABS-a, indikatora stepena prenosa, temperature rashladne tečnosti i Tripmastera obezbeđuju maksimalnu preglednost. Sa Bluetooth vezom sa mobilnim telefonom.' },
      { title: 'Dinamičko LED zadnje svetlo', description: 'Moderna LED zadnja svetla nude veću vidljivost, više bezbednosti i opremljena su atraktivnom funkcijom dinamičkog žmigavca.' },
      { title: 'Snažna trakcija', description: 'Nove aluminijumske felgne daju TGB modelima posebno sportski izgled sa umetcima u boji. U kombinaciji sa gumama visokog prianjanja i zaštitom od udaraca, nove aluminijumske felgne su još jedna visokokvalitetna karakteristika.' },
    ],
  },
  'atv-4': {
    shortDesc: 'Sledeći nivo opreme u kombinaciji sa snažnom inovativnom tehnologijom i maksimalnom udobnošću.',
    fullDesc:
      'Uvek ostanite u punoj snazi sa pouzdanim samopouzdanjem bez obzira da li je za posao, zabavu ili bilo šta što vam je potrebno. Bez obzira na najnoviji model ili klasičan dizajn, bilo da je opremljen električnim servo volanom, TFT instrumentom, EVO amortizerima ili 12-inčnim aluminijumskim felgnama.\n\nSa najsnažnijim V-Twin motorom, Blade 1000 LTX EPS vam može pružiti najizuzetnije performanse i nenadmašno iskustvo. Dvocilindrični V-Twin je jedan od najvećih motora u svetu ATV-ova. Sa ogromnom snagom i visokim obrtnim momentom, daje ATV-u vrhunsku dinamiku i snažnu vučnu silu. Elektronsko ubrizgavanje garantuje pouzdan start, čisto sagorevanje i nisku potrošnju.',
    tagline: 'V-TWIN SNAGA OSVAJA SVAKI TEŽAK TEREN',
  },
  'atv-5': {
    shortDesc: 'Najbolji za svaki zadatak i teren sa modernim LED Matrix farovima i superiornim ABS-om.',
    fullDesc:
      'Blade 600 LTX EPS ABS je najbolji za svaki zadatak i teren. Sa modernim potpunim LED Matrix farovima, unapređenim CVT-om, visokokvalitetnom i izdržljivom šasijom, električnim zaključivim prednjim diferencijalom na zahtev, izvanrednom kontrolom servo volana, superiornim ABS sistemom i snažnim motorom, Blade 600 LTX EPS ABS će biti vaš svakodnevni saputnik na putu, brdu i čak najtežem terenu.\n\nNajveći adut Blade 600 LTX EPS ABS je njegov snažan motor sa višenamenim funkcijama. ATV je napravljen za brzinu, oštre krivine i okretno upravljanje. Sa snažnim motorom i svestranošću, utovar i prevoz u svakodnevnom poslu ili avanturi može biti veoma lak i prijatan. Blade 600 LTX EPS ABS je poznat po svojoj konfiguraciji. Dvostruke lučne A-ruke i 4WD funkcije uliju vam poverenje na svakom terenu.',
    tagline: 'TURING I ISTRAŽIVANJE',
    keyFeatures: [
      { title: 'Snažan motor od 600 ccm', description: 'Pouzdan četvorotaktni motor od 600 ccm sa modernom četvoroventilskom tehnologijom, hlađen tečnošću i uljem sa dva odvojena radijatora. Moderno elektronsko ubrizgavanje garantuje visoke performanse, visoku vučnu silu, visok obrtni moment, niske emisije i pouzdan start leti i zimi.' },
      { title: 'Moderno potpuno LED osvetljenje', description: 'Atraktivni LED Matrix farovi imaju odličan svetlosni učinak i povećavaju nivo bezbednosti ATV-a. Farovi imaju ugrađene prednje LED žmigavce i dnevna svetla. LED tehnologije nude visoku pouzdanost i jaku svetlost uz nisku potrošnju energije.' },
      { title: 'Produžena šasija', description: 'Produženi međuosovinsko rastojanje pruža vozaču i suvozaču dovoljno prostora na odvojenim sedištima, obezbeđujući bolju stabilnost pri vožnji na brdima. Nezavisno vešanje na svim točkovima, visok klirens i šasija sa velikim uglovima prelaska garantuju odličnu off-road sposobnost.' },
      { title: 'Novi TFT kolor displej', description: 'Automatski dnevni/noćni režim i digitalni prikaz obrtaja, brzine, nivoa rezervoara, 2WD/4WD pogona, ABS-a, indikatora stepena prenosa, temperature rashladne tečnosti i Tripmastera obezbeđuju maksimalnu preglednost. Sa Bluetooth vezom sa mobilnim telefonom.' },
      { title: 'Dinamičko LED zadnje svetlo', description: 'Moderna LED zadnja svetla nude veću vidljivost, više bezbednosti i opremljena su atraktivnom funkcijom dinamičkog žmigavca.' },
      { title: 'Snažna trakcija', description: 'Nove aluminijumske felgne daju TGB modelima posebno sportski izgled sa umetcima u boji. U kombinaciji sa gumama visokog prianjanja i zaštitom od udaraca, nove aluminijumske felgne su još jedna visokokvalitetna karakteristika.' },
      { title: 'Branik komplet', description: 'Branik komplet ne samo da unapređuje izgled BLADE-a, već poboljšava zaštitu i izdržljivost farova.' },
    ],
  },
  'atv-6': {
    shortDesc: 'Sa novim inženjeringom iznutra i spolja, snažnim EFI motorom od 32kW (43KS) i odličnim servo volanom.',
    fullDesc:
      'Sa novim inženjeringom iznutra i spolja, Blade 600 LTX EPS Premium opremljen snažnim motorom od 32kW (43KS) sa elektronskim ubrizgavanjem goriva, električnim zaključivim prednjim diferencijalom na zahtev i odličnom kontrolom servo volana na koju možete računati.\n\nBlade 600 LTX EPS Premium je najsvestraniji ATV u industriji. Sa najnovijim inženjerskim dizajnom potpunih LED farova, povećava vidljivost osvetljavajući radni prostor ili stazu. Novi inovativni raspored prednje maske čini čišćenje pristupačnijim. Preko hiljada ljudi mu veruje — Blade 600 LTX EPS Premium je prilika za vas da se više zabavite i više uradite.',
    tagline: 'NAJČVRŠĆI I NAJSNAŽNIJI ATV ZA VAS',
    keyFeatures: [
      { title: 'Snažan motor od 600 ccm', description: 'Pouzdan četvorotaktni motor od 600 ccm sa modernom četvoroventilskom tehnologijom, hlađen tečnošću i uljem sa dva odvojena radijatora. Moderno elektronsko ubrizgavanje garantuje visoke performanse, visoku vučnu silu, visok obrtni moment, niske emisije i pouzdan start leti i zimi.' },
      { title: 'Moderno potpuno LED osvetljenje', description: 'Atraktivni LED Matrix farovi imaju odličan svetlosni učinak i povećavaju nivo bezbednosti ATV-a. Farovi imaju ugrađene prednje LED žmigavce i dnevna svetla. LED tehnologije nude visoku pouzdanost i jaku svetlost uz nisku potrošnju energije.' },
      { title: 'Produžena šasija', description: 'Produženi međuosovinsko rastojanje pruža vozaču i suvozaču dovoljno prostora na odvojenim sedištima, obezbeđujući bolju stabilnost pri vožnji na brdima. Nezavisno vešanje na svim točkovima, visok klirens i šasija sa velikim uglovima prelaska garantuju odličnu off-road sposobnost.' },
      { title: 'Novi TFT kolor displej', description: 'Automatski dnevni/noćni režim i digitalni prikaz obrtaja, brzine, nivoa rezervoara, 2WD/4WD pogona, ABS-a, indikatora stepena prenosa, temperature rashladne tečnosti i Tripmastera obezbeđuju maksimalnu preglednost. Sa Bluetooth vezom sa mobilnim telefonom.' },
      { title: 'Dinamičko LED zadnje svetlo', description: 'Moderna LED zadnja svetla nude veću vidljivost, više bezbednosti i opremljena su atraktivnom funkcijom dinamičkog žmigavca.' },
      { title: 'Snažna trakcija', description: 'Nove aluminijumske felgne daju TGB modelima posebno sportski izgled sa umetcima u boji. U kombinaciji sa gumama visokog prianjanja i zaštitom od udaraca, nove aluminijumske felgne su još jedna visokokvalitetna karakteristika.' },
      { title: 'Branik komplet', description: 'Branik komplet ne samo da unapređuje izgled BLADE-a, već poboljšava zaštitu i izdržljivost farova.' },
    ],
  },
  'atv-7': {
    shortDesc: 'Produžena šasija za 2 putnika sa premium performansama motora i električnim 4WD/2WD na zahtev.',
    fullDesc:
      'Bez obzira da li radite na farmi ili imate avanture na stazama sa porodicom i prijateljima. TGB Blade 600 LTX EPS sa produženom šasijom pruža veći prostor za 2 putnika. Takođe je opremljen premium performansama motora i 4WD/2WD sistemom na zahtev. Svestrani Blade 600 LTX EPS biće vaš idealan partner za sledeću nezaboravnu avanturu.\n\nNajnoviji dizajn potpunih LED farova, ergonomsko sedište, izdržljiv plastični nosač, 12" aluminijumske felgne, sportski auspuh, zaključivi pretinac za odlaganje sa 12V punjačem i mnogo više. Blade 600 LTX je besprekoran izbor koji ne želite da propustite.',
    tagline: 'RADITE ZABAVNO I IGRAJTE SE NAPORNO',
    keyFeatures: [
      { title: 'Snažan motor od 600 ccm', description: 'Pouzdan četvorotaktni motor od 600 ccm sa modernom četvoroventilskom tehnologijom, hlađen tečnošću i uljem sa dva odvojena radijatora. Moderno elektronsko ubrizgavanje garantuje visoke performanse, visoku vučnu silu, visok obrtni moment, niske emisije i pouzdan start leti i zimi.' },
      { title: 'Moderno potpuno LED osvetljenje', description: 'Atraktivni LED Matrix farovi imaju odličan svetlosni učinak i povećavaju nivo bezbednosti ATV-a. Farovi imaju ugrađene prednje LED žmigavce i dnevna svetla. LED tehnologije nude visoku pouzdanost i jaku svetlost uz nisku potrošnju energije.' },
      { title: 'Produžena šasija', description: 'Produženi međuosovinsko rastojanje pruža vozaču i suvozaču dovoljno prostora na odvojenim sedištima, obezbeđujući bolju stabilnost pri vožnji na brdima. Nezavisno vešanje na svim točkovima, visok klirens i šasija sa velikim uglovima prelaska garantuju odličnu off-road sposobnost.' },
      { title: 'Novi TFT kolor displej', description: 'Automatski dnevni/noćni režim i digitalni prikaz obrtaja, brzine, nivoa rezervoara, 2WD/4WD pogona, ABS-a, indikatora stepena prenosa, temperature rashladne tečnosti i Tripmastera obezbeđuju maksimalnu preglednost. Sa Bluetooth vezom sa mobilnim telefonom.' },
      { title: 'Dinamičko LED zadnje svetlo', description: 'Moderna LED zadnja svetla nude veću vidljivost, više bezbednosti i opremljena su atraktivnom funkcijom dinamičkog žmigavca.' },
      { title: 'Snažna trakcija', description: 'Nove aluminijumske felgne daju TGB modelima posebno sportski izgled sa umetcima u boji. U kombinaciji sa gumama visokog prianjanja i zaštitom od udaraca, nove aluminijumske felgne su još jedna visokokvalitetna karakteristika.' },
      { title: 'Branik komplet', description: 'Branik komplet ne samo da unapređuje izgled BLADE-a, već poboljšava zaštitu i izdržljivost farova.' },
    ],
  },
  'atv-8': {
    shortDesc: 'Super performanse, laka vožnja i upravljanje za najzahtevnije poslove.',
    fullDesc:
      'Blade 600 SE.X Premium linija ima super performanse, laku vožnju i upravljanje za najzahtevnije poslove koje tražite. Iskoristite prednosti vodećeg motora serije 600 od 44,8 KS koji pruža snagu i samopouzdanje kada je to potrebno za težak rad i uživanje na otvorenom.',
    tagline: 'NAPRAVLJEN ZA TEŽAK RAD I PAMETNU ZABAVU',
    keyFeatures: [
      { title: 'Snažan motor od 600 ccm', description: 'Pouzdan četvorotaktni motor od 600 ccm sa modernom četvoroventilskom tehnologijom, hlađen tečnošću i uljem sa dva odvojena radijatora. Moderno elektronsko ubrizgavanje garantuje visoke performanse, visoku vučnu silu, visok obrtni moment, niske emisije i pouzdan start leti i zimi.' },
      { title: 'Moderno potpuno LED osvetljenje', description: 'Atraktivni LED Matrix farovi imaju odličan svetlosni učinak i povećavaju nivo bezbednosti ATV-a. Farovi imaju ugrađene prednje LED žmigavce i dnevna svetla. LED tehnologije nude visoku pouzdanost i jaku svetlost uz nisku potrošnju energije.' },
      { title: 'Novi TFT kolor displej', description: 'Automatski dnevni/noćni režim i digitalni prikaz obrtaja, brzine, nivoa rezervoara, 2WD/4WD pogona, ABS-a, indikatora stepena prenosa, temperature rashladne tečnosti i Tripmastera obezbeđuju maksimalnu preglednost. Sa Bluetooth vezom sa mobilnim telefonom.' },
      { title: 'Dinamičko LED zadnje svetlo', description: 'Moderna LED zadnja svetla nude veću vidljivost, više bezbednosti i opremljena su atraktivnom funkcijom dinamičkog žmigavca.' },
      { title: 'Snažna trakcija', description: 'Nove aluminijumske felgne daju TGB modelima posebno sportski izgled sa umetcima u boji. U kombinaciji sa gumama visokog prianjanja i zaštitom od udaraca, nove aluminijumske felgne su još jedna visokokvalitetna karakteristika.' },
    ],
  },
  'atv-9': {
    shortDesc: 'Visokoučinkovit motor i visokokvalitetne karakteristike dizajnirane za agresivno iskustvo vožnje.',
    fullDesc:
      'Idealan partner za svaku avanturu. 4WD/2WD sistem na zahtev aktivira se pritiskom dugmeta. Električni servo volan je posebno podešen za Blade 600 SE.X EPS ABS. Takođe pruža pametan ABS sistem za odlično upravljanje na putu i stazi. Može biti najbolja mašina za svaku vašu energičnu avanturu.',
    tagline: 'NAPRAVLJEN DA TRAJE I ZA ZABAVNE VOŽNJE',
  },
  'atv-10': {
    shortDesc: 'Pronađite veću vrednost za vaš teško zarađeni novac sa performansama, udobnošću i izdržljivošću.',
    fullDesc:
      'Pronađite veću vrednost za vaš teško zarađeni novac sa performansama, udobnošću i izdržljivošću Blade 600 SE.X EPS.\n\nSa prepoznatljivim TFT instrumentom. Probijajte se kroz najteži teren sa pravim 4WD/2WD na zahtev. Prednji diferencijal dostupan. 12-inčne aluminijumske felgne.',
    tagline: 'SAVRŠEN PAKET ZA VREDNOST I PERFORMANSE',
  },
  'atv-11': {
    shortDesc: 'Čist užitak vožnje sa vrhunskim efikasnim motorom i snažnom snagom.',
    fullDesc:
      'Čist užitak vožnje. Sa vrhunskim efikasnim motorom i snažnim karakteristikama da izvučete maksimalne konjske snage na tlo. Target 600 EPS će vas oduševiti na svakoj drugačijoj avanturi. Napredni geometrijski dizajn šasije sa jedinstvenim ponašanjem vozila učiniće Target 600 EPS vašim najprepoznatljivijim quadom ikada.\n\nTGB Target serija sa 4WD i EPS uskoro će postati vaš omiljeni sportski ATV. Dizajn sa crnim i žutim elementima inspiriše njegovu sportsku DNK. Specijalizovana redizajnirana šasija je mnogo robusnija i jača. Sa TGB snažnim motorom, pruža vrhunski nivo stabilnosti i ultimativne performanse kada vam zatrebaju.\n\nNajstilskiji sportski ATV u industriji. Sa karakteristikama lake vožnje, najsavremenijim dvostrukim lučnim A-rukama, optimizovanom kontrolom pogona i smanjenim povratnim udarom, Target 600 EPS je najbolji izbor za vaš sportski ATV za napad na svaki teren.',
    tagline: 'SNAŽNA MAŠINA SA NEOGRANIČENOM ZABAVOM VOŽNJE',
  },
  'atv-12': {
    shortDesc: 'Dizajniran za 2 putnika sa kompletno redizajniranom i ojačanom šasijom.',
    fullDesc:
      'Dizajniran za 2 putnika, Blade 550 LTX EPS sa kompletno redizajniranom i ojačanom šasijom pruža udobnije iskustvo vožnje. To je ATV posvećen zabavi i neverovatnom iskustvu vožnje.\n\nBlade 550 LTX EPS opremljen je robusnim prednjim branikom, TFT instrumentom, udobnim suvozačkim naslonom i 12" aluminijumskim felgnama. Blade 550 LTX EPS obezbeđuje udobnost putnika i stabilnost bolje nego ikada.',
    tagline: 'TURING I DELJENJE',
  },
  'atv-13': {
    shortDesc: 'Jedan od najprodavanijih modela — posebno dizajniran za avanturu i težak rad.',
    fullDesc:
      'Blade 550X EPS ABS je jedan od najprodavanijih modela na tržištu. Mašina posebno dizajnirana za avanturu i težak rad. Sa lakoćom korišćenja i svestranim funkcijama vožnje, Blade 550X EPS ABS je uvek spreman za vašu sledeću avanturu.\n\nBlade 550X EPS nudi širok spektar karakteristika: uz vrhunski EFI motor, izdržljiv CVT pogon, 4WD/2WD na zahtev sa zaključavanjem, LED kočiona svetla, dvostruke A-ruke i superioran ABS sistem, Blade 550X EPS ABS ima pouzdanu sposobnost da savlada sve tipove teških terena.',
    tagline: 'POUZDAN I VERODOSTOJAN',
  },
  'atv-14': {
    shortDesc: 'Najbolji u klasi prodajni model — mašina za zabavu i težak rad.',
    fullDesc:
      'Najbolji u klasi prodajni model na tržištu. Blade 550X EPS je mašina za zabavu i težak rad. Laka za rukovanje i puna zabave za vožnju.\n\nČvrst ali lak za korišćenje sa visokokvalitetnom izradom. Osnovni koncept BLADE 550X EPS pruža najbolje karakteristike za skoro sve izazove. Bilo da se koristi za rad ili avanturu, bilo na šumskim putevima ili strmom terenu, može osigurati pouzdanost i užitak vožnje.',
    tagline: 'AGILAN I OKRETAN',
  },
  'atv-15': {
    shortDesc: 'Inovativna tehnologija, solidan kvalitet, maksimalna udobnost — najprepoznatljivi ATV.',
    fullDesc:
      'Bez obzira da li idete sami ili vodite prijatelje na vožnju, Blade 550 serija će biti jedan od vaših ATV-ova poznatih po performansama i vrednosti. Sa optimizovanim karakteristikama za off-road upotrebu, Blade 550 serija je pogodna za one koji traže idealnu kombinaciju funkcionalnosti i užitka vožnje.\n\nBlade 550 je najbolji izbor za one koji žele da uđu u svet power sportova, opremljen snažnim motorom od 503 ccm koji kombinuje snagu i agilnost.\n\nNenadmašne performanse na svim terenima sa izvanrednim motorom od 503 ccm. Digitalni sistem upravljanja donosi glatke karakteristike snage. Jednostavnim pritiskom dugmeta možete lako pokrenuti sve vaše avanture.',
    tagline: 'IZGRAĐEN SNAŽNO ZA SVAKODNEVNE ZADATKE',
  },
  'atv-16': {
    shortDesc: 'Izglasan za najpouzdaniju mašinu na tržištu poljoprivrede — napravljen za vredne ljude.',
    fullDesc:
      'Blade 520 EPS Rigid je izglasan za najpouzdaniju mašinu na tržištu poljoprivrede. To je terensko vozilo napravljeno za vredne ljude. Sa lakim rukovanjem i održavanjem, donosi efikasnost u vaš svakodnevni posao. Opremljen snažnim motorom od 503 ccm, Blade 520 EPS 4x4 Rigid pruža najglatkiju snagu koju ste ikada iskusili.\n\nVisoke performanse i visokokvalitetna izrada garantuju neograničeni užitak vožnje na svakom terenu koji ste savladali. Blade 520 nije samo savršen model za početak, već je i dokazan u radnoj i rekreativnoj primeni.',
    tagline: 'ŽIVOT TGB VOZAČA',
  },
  'atv-17': {
    shortDesc: 'Najbolji prijatelj farmera — veći i širi dizajn karoserije za veći kapacitet utovara.',
    fullDesc:
      'Blade 600 AR EPS 4X4 je najbolji prijatelj farmera sa većim i širim dizajnom karoserije za veći kapacitet utovara. Dizajn sa klirensom od 320 mm je viši od prosečnog poljoprivrednog ATV-a, čineći ga izdvojenim iz mase. Kombinujući sve praktične funkcije, Blade 600 AR EPS 4X4 sa pouzdanošću pomaže da se svi teški poslovi reše.',
    tagline: 'IZDRŽLJIV I ČVRST',
  },

  // ═══════════════════════  ENGINE KIT  ═══════════════════════
  'ek-1': {
    shortDesc: 'TGB motor od 1000 ccm V-Twin konfigurisan za vatrogasne pumpe sa prilagodljivim PTO adapterom.',
    fullDesc:
      'TGB motor za vatrogasnu pumpu impresionira kada su u pitanju odlične performanse, težina i visok kvalitet na jedinstven način. Kompaktan dizajn i prilagodljiv PTO adapterski vratilo TGB motora za vatrogasnu pumpu omogućava jednostavnu ugradnju u vaše proizvode vatrogasnih pumpi. Obilna izlazna snaga omogućava pumpi da postigne maksimalni kapacitet usisavanja i pumpanja sa visokim pritiskom i velikim protokom, neka vaša prenosiva vatrogasna pumpa impresionira u svakoj operaciji.',
    tagline: 'KOMPAKTNA SNAGA ZA GAŠENJE POŽARA!',
  },
  'ek-2': {
    shortDesc: '83 KS 1000 ccm V-Twin EFI motor — Top 5 off-road powersports motor u svetu za UTV primene.',
    fullDesc:
      'TGB 1000 UTV V-twin EFI motor je Top 5 off-road powersports motor u svetu koji može da razvije maksimalnu snagu do 83KS, visok obrtni moment, visoka trakcija i visoka ravnoteža dizajna mogu podržati vaš UTV da dostigne maksimalne performanse bez obzira gde ide i kako se koristi u uslovima visoke / niske brzine vožnje, ubrzanja, penjanja, silaženja i teških zadataka! Njegov sistem elektronskog ubrizgavanja goriva takođe garantuje trenutni start na niskim temperaturama, čisto sagorevanje i nisku potrošnju goriva.\n\nNjegov visoko efikasan i pouzdan CVT sistem zahteva minimalno održavanje. Njegova funkcija kočenja motorom može opremiti vaš UTV još sigurnije i pouzdanije na svim teškim terenima! Odmah će unaprediti performanse vašeg UTV-a kada se ugradi i sklopi!',
    tagline: 'TOP 5 OFF-ROAD POWERSPORTS MOTOR!',
  },
  'ek-3': {
    shortDesc: '83 KS 1000 ccm V-Twin EFI motor — Top 5 powersports motor u svetu sa ogromnom snagom za ATV primene.',
    fullDesc:
      'T-1000 EFI-ATV motor sa V-Twin cilindrima do 997,1 ccm i ogromnom snagom (83 KS) daje ATV-u vrhunsko ubrzanje. Top 5 odabrani snažan motor u svetu, sa visokim obrtnim momentom i visokom trakcijom, Ø92 mm x 75 mm Bore x Stroke održava stabilnost tokom ubrzavanja, a isto tako pomaže pri vožnji na malim brzinama. Elektronsko ubrizgavanje garantuje pouzdan start, čisto sagorevanje i nisku potrošnju goriva. Više od 2.000 jedinica se proda godišnje.\n\nPouzdan, robustan automatski menjač za teške uslove sa minimalnim održavanjem opremljen je efikasnom kočnicom motora, i odmah unapređuje performanse vašeg ATV-a čim se sklopi.',
    tagline: 'VRHUNSKO UBRZANJE I SNAGA ZA TEŠKE USLOVE!',
  },
  'ek-4': {
    shortDesc: '42,4 KS 561,4 ccm EFI jednocilindrični motor — jedan od najkonkurentnijih ATV motora u svojoj klasi.',
    fullDesc:
      '570 EFI motor je jedan od najkonkurentnijih ATV motora u svojoj klasi sa unapređenim performansama i ekskluzivnom težinom. Pouzdan četvorotaktni motor sa modernom četvoroventilskom tehnologijom, hlađenjem tečnošću i uljem sa dva odvojena radijatora, opremljen je modernim elektronskim ubrizgavanjem goriva. Ubrizgavanje garantuje visoke performanse, visoku trakciju, visok obrtni moment, niske emisije i pouzdan start leti i zimi.\n\nPouzdan, robustan automatski menjač za teške uslove sa minimalnim održavanjem opremljen je efikasnom kočnicom motora, odmah unapređuje performanse vašeg ATV-a čim se sklopi.',
    tagline: 'KONKURENTNE PERFORMANSE I EKSKLUZIVNA TEŽINA!',
  },
  'ek-5': {
    shortDesc: 'Pouzdan jednocilindrični EFI motor od 500 ccm sa 38 KS.',
    fullDesc:
      'Pouzdan jednocilindrični EFI motor od 500 ccm koji razvija 38 KS. OEM-kompatibilna zamena za BLADE 520/550 platforme. Dolazi sa ECU-om, instalacijskim kablovima, auspuhom i uputstvom za ugradnju.',
  },

  // ═══════════════════════  ATV (new 2025)  ═══════════════════════
  'atv-18': {
    shortDesc: 'TGB BLADE 1000 LTX EPS LIMITED — 997cc V-Twin, 83 KS, limitirana edicija 2025 sa ekskluzivnim karakteristikama i premium završnom obradom.',
    fullDesc:
      'BLADE 1000 LTX EPS LIMITED 2025 donosi ekskluzivne karakteristike i premium završnu obradu na proverenoj BLADE 1000 platformi. Pokretan V-Twin SOHC motorom od 997 ccm koji isporučuje 83 KS i 89,9 Nm obrtnog momenta, ovaj model limitirane serije kombinuje vrhunske performanse sa upečatljivim stilom. Opremljen programiranim ubrizgavanjem goriva, V-rem CVT automatskim menjačem i 4×4 kardanskim pogonom, osvaja svaki teren sa samopouzdanjem.',
    tagline: 'NEŠTO NOVO',
  },

  // ═══════════════════════  Moped  ═══════════════════════
  'moped-1': {
    shortDesc: 'GUSITE MATRIX — 49cc 4-taktni moped sa automatskim menjačem i motorom od 2,1 kW.',
    fullDesc: 'GUSITE MATRIX je svestran moped dizajniran za svakodnevnu gradsku vožnju sa pouzdanim performansama. Pokretan 49cc 4-taktnim vazdušno hlađenim motorom od 2,1 kW, ima automatski menjač i rezervoar od 9 litara za produženi domet.',
  },
  'moped-2': {
    shortDesc: 'GUSITE FEYMONDA — retro dizajn 49cc moped sa automatskim menjačem i motorom od 2,1 kW.',
    fullDesc: 'GUSITE FEYMONDA kombinuje retro-inspirisan stil sa praktičnom svakodnevnom upotrebom. Pokretan 49cc 4-taktnim vazdušno hlađenim motorom od 2,1 kW, ima automatski menjač, rezervoar od 9 litara i bezvremenski retro dizajn.',
    tagline: 'RETRO DIZAJN',
  },
  'moped-3': {
    shortDesc: 'GUSITE GRACE — gradski moped sa 49cc 4-taktnim motorom, automatskim menjačem i snagom od 2,1 kW.',
    fullDesc: 'GUSITE GRACE pruža elegantno iskustvo gradske vožnje sa glatkim upravljanjem i pouzdanim performansama. Pokretan 49cc 4-taktnim vazdušno hlađenim motorom od 2,1 kW, ima automatski menjač i rezervoar od 9 litara — savršen gradski moped.',
    tagline: 'GRADSKI MOPED',
  },
  'moped-4': {
    shortDesc: 'GUSITE AGV-X — sportski 49cc moped sa automatskim menjačem, disk kočnicama i motorom od 2,1 kW.',
    fullDesc: 'GUSITE AGV-X nudi sportsko iskustvo sa modernim dizajnom i agilnim upravljanjem. Pokretan 49cc 4-taktnim vazdušno hlađenim motorom od 2,1 kW, ima automatski menjač i disk kočnice za pouzdano kočenje.',
  },
  'moped-5': {
    shortDesc: 'GUSITE BOMBARDER — robustan 49cc moped, 187 kg, disk kočnice, automatski menjač i motor od 2,1 kW.',
    fullDesc: 'GUSITE BOMBARDER je robustan moped napravljen za izdržljivost i pouzdan svakodnevni prevoz. Pokretan 49cc 4-taktnim vazdušno hlađenim motorom od 2,1 kW, ima automatski menjač, disk kočnice, rezervoar od 9 litara i solidnu težinu od 187 kg.',
    tagline: 'ZVER',
  },
  'moped-6': {
    shortDesc: 'GUSITE AGV-R — premium 49cc moped sa LED svetlima, bezključnim pokretanjem, CBS kočnicama i motorom od 2,1 kW.',
    fullDesc: 'GUSITE AGV-R je premium moped sa sportski inspirisanim dizajnom i rafiniranim performansama. Pokretan 49cc 4-taktnim vazdušno hlađenim motorom od 2,1 kW, ima automatski menjač, LED osvetljenje, bezključni start sistem, CBS disk kočnice, rezervoar od 9 litara i težinu od 148 kg.',
    tagline: 'LED, BEZKLJUČNI, CBS',
  },
  'moped-7': {
    shortDesc: 'GUSITE GT-50 — početni 49cc 4-taktni moped sa automatskim menjačem i motorom od 2,1 kW.',
    fullDesc: 'GUSITE GT-50 je pristupačan i jednostavan za vožnju početni moped, idealan za svakodnevni gradski prevoz. Pokretan 49cc 4-taktnim vazdušno hlađenim motorom od 2,1 kW, ima automatski menjač i rezervoar od 9 litara.',
    tagline: 'GRADSKI PREVOZ',
  },
  'moped-8': {
    shortDesc: 'GUSITE MS-1 — kompaktan 49cc 4-taktni moped sa automatskim menjačem i motorom od 2,1 kW.',
    fullDesc: 'GUSITE MS-1 je kompaktan i pouzdan moped dizajniran za svakodnevnu gradsku mobilnost. Pokretan 49cc 4-taktnim vazdušno hlađenim motorom od 2,1 kW, ima automatski menjač i rezervoar od 9 litara.',
  },
  'moped-9': {
    shortDesc: 'GUSITE GT-50 R — sportski stilizovan 49cc 4-taktni moped sa automatskim menjačem i motorom od 2,1 kW.',
    fullDesc: 'GUSITE GT-50 R donosi sportski izgled GT-50 platformi uz pouzdane svakodnevne performanse. Pokretan 49cc 4-taktnim vazdušno hlađenim motorom od 2,1 kW, ima automatski menjač i rezervoar od 9 litara.',
    tagline: 'SPORTSKI STIL',
  },
  'moped-10': {
    shortDesc: 'GUSITE GT-50 F — potpuno opremljen 49cc 4-taktni moped sa automatskim menjačem i motorom od 2,1 kW.',
    fullDesc: 'GUSITE GT-50 F je potpuno opremljena varijanta GT-50 platforme koja kombinuje svakodnevnu upotrebljivost sa rafiniranim stilom. Pokretan 49cc 4-taktnim vazdušno hlađenim motorom od 2,1 kW, ima automatski menjač i rezervoar od 9 litara.',
    tagline: 'PUNA OPREMA',
  },

  // ═══════════════════════  Sports Bike  ═══════════════════════
  'sportsbike-1': {
    shortDesc: 'DAYUN 250-8 — 250cc sportski motocikl sa 15 kW motorom, ručnim menjačem i disk kočnicama.',
    fullDesc: 'DAYUN 250-8 je lagan sportski motocikl koji pruža uzbudljivu vožnju sa oštrim upravljanjem i sportskom estetikom. Pokretan motorom od 250 ccm sa 15 kW snage, ima ručni menjač, disk kočnice, rezervoar od 16 litara i teži samo 162 kg.',
    tagline: 'SPORTSKI MOTOCIKL',
  },

  // ═══════════════════════  Touring  ═══════════════════════
  'touring-1': {
    shortDesc: 'DAYUN DY300-XF — 300cc avanturistički turing motocikl sa ručnim menjačem.',
    fullDesc: 'DAYUN DY300-XF je turing motocikl napravljen za udobnost na dugim putovanjima i avanturističku vožnju. Pokretan sposobnim motorom od 300 ccm sa ručnim menjačem, nudi opušten položaj vožnje idealan za istraživanje na putu i van njega.',
    tagline: 'DAYUN AVANTURA',
  },
};
