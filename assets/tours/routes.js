var routesData = {
  type: 'FeatureCollection',
  features: {
    tour1: {
      type: 'Feature',
      geometry: {
        type: 'Point',
        zoom: '14',
        zoomMobile: '12.5',
        coordinates: [1921495.6, 5399029.01],
      },
      properties: {
        name: 'Pješačka staza Žukovica',
        place: 'Mesihovina, Vojkovići',
        path: '../assets/tours/tour1.gpx',
        duration: '4 h',
        stops: [
          {
            name: 'Crkva u Meshihovini',
            coordinates: [17.27997368955981, 43.58080534174916],
            img: '../assets/img/crkvaMesihovina.jpg',
            about:
              '1972. godine je zapisano: „Župa Seonica ima oveće selo Mesihovina sa 167 domaćinstava, a selo je udaljeno od matične crkve preko pet kilometara. Mesihovljani su već odavno htjeli imati filijalnu crkvu. To su izrazili svom župniku fra Ivanu Kvesiću. On se prihvatio posla oko gradnje crkve. Veličina je bila planirana na 18 s osam metara. Plan je izradio ing. fra Pijo Nuić. Munjevitom brzinom su Mesihovljani sakupili novčana sredstva za crkvicu. Crkva je sagrađena u rekordnom vremenu od 48 radnih dana. Radilo se neumorno po danu, a kada je trebalo u zadnje dane pred dovršenje i noću. Na veliko veselje crkva bi dogotovljena na 11. prosinca 1971. kasno u noć.“',
          },
          {
            name: 'Vodopad Žukovica',
            coordinates: [17.24143, 43.559407],
            img: '/assets/img/zukovica.jpg',
            about:
              'Vodopad Žukovica jedno je od najljepših mjesta u okolici. Skriven daleko od ljudske ruke nikoga ne ostavlja ravnodušnim. Tik uz vodopad nalazi se i Žukovička pećina koju su istraživali ugledni arheolozi.',
          },
        ],
        /* pins: [
          [17.27997368955981, 43.58080534174916],
          [17.24143, 43.559407],
        ],
        stops: ['Crkva u Mesihovini', 'Vodopad Žukovica'], */
        dist: '10 km',
        dists: ['5 km'],
        about:
          'Svakom željnom uživanja u prirodi preporučamo laganu i ne baš tipičnu planinarskom stazu prema vodopadu Žukovici. Na ovoj stazi nećete naići na strme i duge uzbrdice, pa ni nizbrdice. Staza je primjerena svakome, u njoj će podjednako uživati i djeca i odrasli. Od početne točke do vodopada i natrag ima oko 10 km kilometara ugodne šetnje, a izlet traje maksimalno 4 sata uz duže pauze i fotografiranje. Koje god godišnje doba izabrali, nećete pogriješiti. Zimi zaleđeni vodopad i šuma prekrivena snijegom ostavit će vas bez riječi. U proljeće vodopad jednostavno izgleda nestvarno tako da na fotografijama izgleda kao da je sigurno u pitanju nekakav filter. No, vodopadu Žukovica niti jedan filter nije potreban jer se on svojom netaknutom ljepotom ubraja u najzelenije i najbajkovitije točke u Hercegovini, s bistrom vodom koja reflektira drveće i sve okolo svim nijansama zelene i tirkizne boje. <br><br>Staza počinje pored crkve sv. Petra i Pavla u Mesihovini. Prolazi kroz zaseoke Bučići i Panjevići te pored starih vrtlova izlazi na makadamski put. Prateći makadamski put ulazimo  u prosječenu makiju sve do izvora i istoimenog izletišta Gojana. Dalje staza prati nekadašnju konjsku stazu kroz šumu te dolazi do izvora potoka Žukovica, koji se kasnije ulijeva u Ričinu. Prateći sam potok, staza prolazi pored mlinica te se spušta na dio potoka koji je potrebno prijeći i popeti se da bi se moglo uživati u istoimenom slapu Žukovica. Tik uz vodopad nalazi se Žukovačka pećina koja je 70-tih godina bila predmet istraživanja prof. Brunislava Marijanovića, jednog od najuglednijih hrvatskih arheologa. <br><br>Putom su, naravno, postavljene markacije, tj. crveno-bijeli krugovi na drveću i kamenju. Uvijek ih pratite, a ako dođete do raskrižja i ne znate put, udaljite se nekoliko koraka u svakom od mogućih smjerova i razgledajte drveće, negdje se sigurno skrio taj važan krug. Iako se izvor potoka Žukovica nalazi u Općini Tomislavgrad, sam slap se nalazi u Općini Posušje. Povezanost stanovnika ovih dviju općina ogleda se i u činjenici da su mlinice, iako fizički u Općini Posušje, u vlasništvu stanovnika Općine Tomislavgrad.<br><br>Ova staza nosi sa sobom i priče o vilama koje su prema kazivanju naših starih živjele ovdje i brinule za ovaj kraj. Tim pričama ljudi su kratili hladne večeri uz vatru, a mnogi planinari i ljubitelji prirode vole hodati stazama i šumama zamišljajući kako ih gledaju vile, uz tihu nadu da će ih i susresti! Tko zna, možda su i dalje tu, zato pazite da se ne zaljube u vas i odvedu vas u svoje kraljevstvo. Ne odgađajte posjet ovoj ruti. Ako već niste, sada je vrijeme.',
        img: '/assets/img/zukovica.jpg',
        imgs: ['/assets/tours/img/zukovica1.jpg', '/assets/tours/img/zukovica2.jpg', '/assets/tours/img/zukovica3.jpg', '/assets/tours/img/zukovica4.jpg'],
        type: '/assets/icon/routes/hike.svg',
        pinStyle: '/assets/icon/routes/hikePin.svg',
        color: '#449d59', //#ca4935 bike-color, #449d59 hike-color, #17171c speleo-color
        routeTypeId: 'hike',
        id: 'tour1',
      },
    },
    tour4: {
      type: 'Feature',
      geometry: {
        type: 'Point',
        zoom: '14.3',
        zoomMobile: '12.5',
        coordinates: [1911672.68, 5413517.68],
      },
      properties: {
        name: 'Urušene vrtače grabovičke visoravni',
        place: 'Omerovići, Kovači, Vrilo, Dobrići',
        path: '../assets/tours/tour4.geojson',
        duration: '4,5 h',
        stops: [
          {
            name: 'Polazna točka',
            coordinates: [17.18725, 43.66297],
          },
          {
            name: 'Veliki Samograd',
            coordinates: [17.18618, 43.66343],
            img: '/assets/img/VelikiSamogradd1.jpg',
            about:
              'Golema urušena vrtača na kršnoj zaravni, japaga duljine 180, širine 100 metara te dubine između 40 i 70 metara. Okružen je strmim liticama te je spuštanje moguće uz konopac i profesionalnu opremu za spuštanje. Na dnu Samograda nalazi se gusta i neprohodna šuma koja je dom raznim vrstama ptica, a uz rub vrtače nalazi se i špilja skromnih dimenzija.',
          },
          {
            name: 'Arnautovac',
            coordinates: [17.18091, 43.66565],
            img: '/assets/tours/img/tour3-maliSamograd.jpg',
            about:
              'Arnautovac i Mali Samograd geomorfološka su cjelina značajna zbog velikih dimenzija i izraženih litica. Arnautovac je dug oko 420 metara i širok oko 170 metara, a u njegovom sjeverozapadnom djelu nalazi se Mali Samograd dug 70 i širok 40 metara. Pristup je moguć bez konopa i opreme za spuštanje.',
          },
          {
            name: 'Mali Samograd',
            coordinates: [17.17767, 43.66578],
            img: '/assets/tours/img/tour3-maliSamograd.jpg',
            about:
              'Mali Samograd je duboka jama koja počinje golemom ulaznom, bunarastom vertikalom, i pridruženi je dio Arnautovca. Otvor ulazne vertikale je promjera 80x45 m i kroz njega se spušta do prvog dna na oko 40 m dubine. Prvo je dno izrazito strmo i obraslo gustom grabovom šumom te divljom lozom. Po strmini prekivenoj siparom spušta se do ulaza u podzemnu šupljinu, koju u narodu još zovu špilja Rogoševac. Njen ulaz je smješten ispod kamene litice visoke 90 m od reazine krške zaravni. Ulaz je širine oko 16 m i visok do 12 m. Dio ulaza pregrađuju golemi kameni blokovi. Na samom ulazu je prisutna temperaturna razlika koja može iznostiti i više od 20°C - temperatura špiljskog prostora je samo 3°C. Nakon ulaza slijedi golema podzemna dvorana široka u najširem dijelu 90 m, a prema kraju 60-70 m, dok visina varira od 5 m na početku do 30 m u završnom dijelu dvorane. Tlo je prekriveno siparišnim materijalom i strmo se spušta pod uglom mjestimično većim od 45° prema središnjem dijelu dvorane. Dužina glavnog kanala špilje iznosi 135m, dok je s ostalim bočnim kanalima dug preko 250m. Ukupna dubina jame  je 150 m. Unutra se nalaze špiljski saljevi, stalagmiti i saljevni zidovi visoki i do 5 metara.',
          },
          {
            name: 'Surdup',
            coordinates: [17.15848, 43.66849],
            img: '/assets/tours/img/tour3-surdup.jpg',
            about:
              'Urušna vrtača velikih dimenzija. Dužine od 420 metara i širine do 200 metara uz dubinu do 100 metara. Na dnu se nalazi uvala u kojoj rastu stabla i do 20 metara uz razne vrste biljaka i životinja.',
          },
          {
            name: 'Roška peć',
            coordinates: [17.1536, 43.65762],
            img: '/assets/tours/img/tour3-roskaPec.jpg',
            about: '',
          },
        ],
        dist: "8 km",
        dists: ['550 m', '600 m', '300 m', '2700 m', '1800 m'],
        about:
          'Velike urušne vrtače (ponikve) na prijevoju između Duvanjskog polja i Buškog blata specifične su kako po svojoj duljini i dubini, tako i po određenim morfološkim karakteristikama. Njihov postanak vezan je uz izrazita rasjedanja u debelo uslojenim krednim vapnencima, te uz hidrogeološke procese poniranja voda na razini Duvanjskog polja i njihovog izbijanja na horizontu niže položenog Buškog blata.\n\nNa Grabovičkoj visoravni se nalazi više od 8500 vrtača. Prema tome, govori se o iznimnom prirodnom fenomenu na kojem je već sad previše antropogenog devastiranja prirodnog stanja, a u budućnosti bi mogao još biti i još više, stoga ga je potrebno urediti i zaštititi. Zbog istinske ljepote prirode i njezine jedinstvenosti na ovom prostoru, potrebno ih je turistički valorizirati.\n\nZbog toga je Speleološko društvo Mijatovi dvori razvija projekt Poučna staza urušnih vrtača Grabovičke visoravni. Poučna staza bila bi edukativnog karaktera, te se na taj način planira raznim aktivnostima i istraživanjima prezentirati iznimna ljepota najvećih i najznačajnijih urušnih vrtača Grabovičke visoravni. Rezultat svega toga bio bi buduća zaštita urušnih vrtača Grabovičke visoravni kao „Geomorfoloških spomenika prirode“. No, da bi se došlo do kvalitetnih i vjerodostojnih podataka neophodno je provesti niz aktivnosti koji se odnose na terensko dokumentiranje i prezentaciju urušnih vrtača, čija valorizacija se planira uz podršku domaćih i stranih projekata.\n\n\n\nIdejni projekt je zamišljen kao izgradnja i uređenje kružne planinarsko poučne staze s polaznim i završnim stajalištem, te nekoliko karakterističnih stajališta. \n\nZamišljeno je uređenje duge i kratke staze. Kratka staza zamišljena je kao dio puta planinarske poučne staze u dužini od 3 kilometra, te bi kružila oko urušnih vrtača Veliki Samograd, Arnautovac i Mali Samograd. Duga staza bila bi nastavak kratke staze, i to način da se nakon obilaska Velikog Samograda, Arnautovca i Malog Samograda nastavlja dalje prema urušnim vrtačama Surdup i Roška peć, te ponovo vraća na početnu točku kod urušne vrtače Veliki Samograd, a bila bi duga oko 12 kilometara. \n\nStaza bi se protezala već postojećim šumskim prosjecima i putevima (koji su sada dijelom i zapušteni), dok bi jedan dio staze trebalo i prosjeći, te urediti kao planinarski put. \n\nTrasa puta bi se označila planinarskim markacijama, te smjerokazima.',
        img: '/assets/img/VelikiSamogradd.jpg',
        imgs:["assets/tours/img/vrtace1.jpg", "assets/tours/img/vrtace2.jpg","assets/tours/img/vrtace3.jpg","assets/tours/img/vrtace4.jpg", "assets/tours/img/vrtace5.jpg","assets/tours/img/vrtace5.jpg", "assets/tours/img/vrtace6.jpg", "assets/tours/img/tour3-maliSamograd.jpg", "/assets/img/VelikiSamograd1.jpg", '/assets/tours/img/tour3-surdup.jpg'],
        type: '/assets/icon/routes/speleo.svg',
        pinStyle: '/assets/icon/routes/speleoPin.svg',
        color: '#17171c', //#ca4935 bike-color, #449d59 hike-color, #17171c speleo-color
        routeTypeId: 'speleo',
        id: 'tour4',
      },
    },
    tour2: {
      type: 'Feature',
      geometry: {
        type: 'Point',
        zoom: '13',
        zoomMobile: '12',
        coordinates: [1934446.18, 5418155.85],
      },
      properties: {
        name: 'Lovačka staza sv. Huberta',
        place: 'Lipa, Mandino Selo',
        path: '../assets/tours/tour2.geojson',
        duration: '',
        stops: [
          {
            name: 'Početak staze sv. Huberta',
            coordinates: [17.35578133038462, 43.665692368478339],
          },
          {
            name: 'Ilirska gradina',
            coordinates: [17.345009491512581, 43.676267145211],
          },
          {
            name: 'Jama Parapatuša',
            coordinates: [17.328889616243131, 43.690276246598557],
          },
          {
            name: 'Promatračnica na Ljubuši',
            coordinates: [17.345428224470801, 43.687527325769857],
          },
          {
            name: 'Jama Pašnjača',
            coordinates: [17.352231994324281, 43.690988393031162],
          },
          {
            name: 'Jama Snjižnjača',
            coordinates: [17.351242967356271, 43.695869169441401],
          },
          {
            name: 'Jama Orlovača',
            coordinates: [17.35799919656948, 43.689612623889452],
          },
          {
            name: 'Lokva Bilanski konak',
            coordinates: [17.365325058777131, 43.694072917877548],
          },
          {
            name: 'Mala kapavica',
            coordinates: [17.385869498370511, 43.711311970272391],
          },
          {
            name: 'Vrelo i lokva Pišćetak',
            coordinates: [17.388751808635909, 43.724631683452763],
          },
          {
            name: 'Vrelo Velika kapavica',
            coordinates: [17.397775358571231, 43.717036122893767],
          },
          {
            name: 'Monoliti iznad Velike kapavice',
            coordinates: [17.40050254684822, 43.721616710416562],
          },
          {
            name: 'Vrelo na bunarima',
            coordinates: [17.399709451038628, 43.707448417957927],
          },
          {
            name: 'Stećci na bunarima',
            coordinates: [17.400456472716971, 43.703761610732059],
          },
          {
            name: 'Pećina Lujin dućan',
            coordinates: [17.401675242842611, 43.703484557962213],
          },
          {
            name: 'Jama Javornjača',
            coordinates: [17.398328009179089, 43.684129520732398],
          },
          {
            name: 'Šiljegovac',
            coordinates: [17.404937009891569, 43.670268866328932],
          },
          {
            name: 'Lipski gaj i lokva Medinovac',
            coordinates: [17.367589518623259, 43.674457525877173],
          },
          {
            name: 'Hasanovića jama',
            coordinates: [17.386338736908812, 43.679069988956982],
          },
          {
            name: 'Dolac varićak',
            coordinates: [17.39199275384583, 43.681015582126953],
          },
          {
            name: 'Jama Prokošnjača',
            coordinates: [17.395931913409491, 43.660466788693313],
          },
          {
            name: 'Lokva u Procipinama',
            coordinates: [17.338454931988561, 43.671031668756967],
          },
        ],
        dists: [
          ' ',
          ' ',
          ' ',
          ' ',
          ' ',
          ' ',
          ' ',
          ' ',
          ' ',
          ' ',
          ' ',
          ' ',
          ' ',
          ' ',
          ' ',
          ' ',
          ' ',
          ' ',
          ' ',
          ' ',
          ' ',
        ],
        about:
          'Budući su najvećim dijelom kroz naše lovište već obilježene planinarske staze koje su uz to već općepoznate, ovdje donosimo jednu lovačku stazu nazvanu po zaštitniku lovaca sv. Hubertu koja obiluje prirodnim i drugim znamenitostima, napose speleološkim objektima.\nLovačka staza sv. Huberta prati makadamsku cestu iz Lipe na Ljubušu, a čija je početna točka na križanju puta za Ljubušu i Lipski gaj s koordinatama 43.6686938 N i 17.3564289 E. S početne toče se kreće prema sjeverozapadu prateći makadamsku cestu prema Ljubuši. Već na nekih 1,5km puta, s lijeve strane se nalazi obilježena ilirska gradina s koje se pruža pogled na Šarčevo jezero, Procipine i Čobanice te lokve na istim lokacijama koje su služile i do danas služe za napajanje stoke.\nNastavljajući dalje istim putem u smjeru sjeverozapada dolazi se do koordinate 43.6866147 N 17.3380107 E gdje put skreće prema istoku. Od navedene točke na nekih 800 m udaljenosti u pravcu sjeverozapada (na 10,00 sati) nalazi se jama Parapatuša na 43.6871603 N  17.3308277 E.\nNastavljajući dalje put skreće udesno gdje se na cca 700 m puta nalazi osmatračnica s koje se pruža prekrasan pogled na Duvanjsko polje, Ljubušu, Vran planinu, Lib, Tušnicu, Gvozd, Biokovo, Kamešnicu i Cincar. Nastavljajući nekih 500 m istim putom dolazi se do koordinate 43.6879007 N 17.3423985 E. Od iste koordinate u pravcu sjevera na nekih 500 m udaljenosti nalazi se jama Pašnjača s koordinatama 43.6879007 N 173423985 E, koju još zovu i jama Samarnjača, jer se preko otvora jame pruža kamena poveznica u obliku samara. Nastavljajući od jame Pašnječe u pravcu sjevera na oko 600 m udaljenosti na 173423985 N 17.3423985 E nalazi se jama Snjižnjača u kojoj ima snijega gotovo cijele godine. Ukoliko ne želite ići do jame Snjižnjače, a želite doći do jame Orlovače, možete krenuti od jame Pašnjače u smjeru jugoistoka (na 16,00 sati) prema navedenome makadamskome putu. Na oko 500 m udaljenosti od jame Pašnjače se na 43.6921367 N 17.3541664 E nalazi jama Orlovača  specifična po svome vrlo širokome otvoru gdje su se katkada u prošlosti čobani natjecali tko ju može kamenom prebaciti. Rijetko tko je to mogao učiniti.\nNastavljajući od jame Orlovače u smjeru jugoistoka ponovno se dolazi na makadamski put za Ljubušu. Nastavljajući dalje istim putom nekih 750 m dolazi se do križanja makadamskih puteva na 43.692264 N 17.3659823 E –  desno za Lugavu, Trebiševo, Vran i Omrčenicu, a lijevo za Srđane i Oplećane. Od istog križanja se u pravcu sjevera na 43.6914962 N 17.3666339 E nalazi lokva Bilanski konak koju je prije koju godinu obnovila Šumarija Tomislavgrad te je u neposrednoj blizini lokve izgrađena i nadstrešnica.\nTakođer, do iste se lokve može doći od spomenutog križanja cesta ako se ide lijevo makadamskim putem negdje oko 350 m te se s istoga puta skrene oštro desno prateći makadamski put negdje u dužini od dvjestotinjak metara i doći ćete do spomenute lokve. Da biste nastavili dalje ovom lovačkom stazom, potrebno je se ponovno vratiti na križanje cesta za Trebiševo i Oplećane te pratiti makadamski pute prema Trebiševu.\nNakon nekih 300 m ponovno dolazi do križanja putova. Na spomenutom križanju je potrebno ići lijevo prema Bunarima, Maloj i Velikoj Kapavici, Vrelu Pišćetak itd. Nastavljajući spomenutim pravcem puta u smjeru sjeveroistoka na oko 1.700 m puta se dolazi ponovno do križanja makadamskih putova na 43.7065858 N 17.384265 E.\nOd navedene točke kreće se putom desno u pravcu sjeveroistoka. Na nekih 500 m prijeđenog puta na 43.7062572 N 17.3878798 E nalazi se odvojak puta u smjeru sjeverozapad prema Maloj Kapavici na 43.71155 N 17.38556 E te dalje od navedene lokacije u smjeru sjeverozapad na nekih 500 m udaljenosti nalazi lokva Mala kapavica koju je također nedavno obnovila Šumarija Tomislavgrad. U blizini lokve se nalazi i mjerni stup za brzinu vjetra. Od spomenute lokve koja se nalazi na 43.71113 N 17.38252 E u pravcu sjeveroistok (na 12,30 sati) se na udaljenosti od oko 1700 m nalazi lokva i vrelo Pišćetak na43.72523 N 17,38920E. Od spomenutoga vrela i lokve Pišćetak  u smjeru jugoistoka (na 17,00 sati) na udaljenosti cca 1000 m se nalazi vrelo Velika Kapavica na 43.71593 N 17.39779E. Zanimljivost ovoga vrela je ta što voda doslovno vrije iz kamena i iz kaskadno položenih kamenih ploča kapa kap po kap.\nRijetko se događa da ovo vrelo presuši, čak i u najsušnijim ljetnim mjesecima. Ukoliko od lokve kod Male Kapavice ne želite ići do vrela Pišćetak, najsigurniji način da pronađete vrelo Veliku Kapavicu je da od Male Kapavice  krenete u smjeru istoka i vratite se na makadamski put za Trebiševo cca. šestotinjak metara na 43.7142102 N 17.3974352 E. Od spomenute kote se na udaljenosti od oko 500 m u smjeru sjeveroistok (na 13,00 sati) nalazi vrelo Velika Kapavica.\nOd Velike Kapavice krenete u smjeru jugoistok (na 17,30 sati) na udaljenosti od oko 1000 m na prostranoj udolini se nalazi vrelo Bunari na  43.70463 N 17.40083E, lokva Bunari, te ostatci stare staje. Od lokve na bunarima se u smjeru jugoistoka  (na 17,30 sati) nalazi pećina Lujin Dućan na 43,70463 N; 17.40083 E. Prema predaji je u spomenutoj pećini, dok je Ljubuša obilovala stokom i ispašom stoke u proljetnim i ljetnim mjesecima, živo Lujo koji se bavio kovačkim zanatom.\nU neposrednoj blizini Lujina Dućana u smjeru zapada se nalazi nekropola stećaka sandučara. Rutom od Lujina Dućana krenuti pravo na jug i nakon prijeđenog puta u dužini oko 2 kilometra se ponovno izbija na makadamsku cestu preko Ljubuše koja vodi prema Slanome docu, Lugavi i Vranu. Na  43.6837001 N 17.3989365 udaljenu od spomenutog makadamskoga puta se nalazi jama Javornjača. Nastavljajući dalje na jugoistok (na 17,30 sati) na udaljenosti oko 1800m se na  43.6762639 N 17.4048576 E nalazi planinsko jezerce Šiljegovac. Od Šiljegovca se možete uputiti u smjeru zapada te nakon nekih 3,5-4km doći do Lipskoga gaja i od Lipskoga gaja doći na početnu točku ove rute. Ova ruta obiluje brojnim reljefnim oblicima i zanimljivostima od kojih smo spomenuli samo neke. Osim reljevne raznolikosti, spomenuta ruta obiluje i životinjskom raznolikošću te se u dogovoru s vodstvom Udruge može organizirati i foto safari na sitnu i krupnu divljač.',
        img: '/assets/tours/img/sv-hubert.jpg',
        type: '/assets/icon/routes/hike.svg',
        pinStyle: '/assets/icon/routes/hikePin.svg',
        color: '#449d59', //#ca4935 bike-color, #449d59 hike-color, #17171c speleo-color
        routeTypeId: 'hike',
        id: 'tour2',
      },
    },
    tour3: {
      type: 'Feature',
      geometry: {
        type: 'Point',
        zoom: '14',
        zoomMobile: '13',
        coordinates: [1930940.15, 5417275.43],
      },
      properties: {
        name: 'Stazla Mandino Selo - Oštra Glavica',
        place: 'Lipa, Mandino Selo',
        path: '../assets/tours/tour3.geojson',
        duration: '4,5 h',
        stops: [
          {
            name: 'Start',
            coordinates: [17.31837, 43.67802],
          },
          {
            name: 'Parpatuša (jama)',
            coordinates: [17.328889616243131, 43.690276246598557],
          },
          {
            name: 'Oštra glavica (vrh)',
            coordinates: [17.35214, 43.69267],
          },
          {
            name: 'Snjižnjača (jama)',
            coordinates: [17.351242967356271, 43.695869169441401],
          },
          {
            name: 'Bilanski konak (odmorište i lokva)',
            coordinates: [17.365325058777131, 43.694072917877548],
          },
          {
            name: 'Pašnjača (jama)',
            coordinates: [17.352231994324281, 43.690988393031162],
          },
          {
            name: 'Orlovača (jama)',
            coordinates: [17.35799919656948, 43.689612623889452],
          },
          {
            name: 'Čobanica (tumul)',
            coordinates: [17.347293, 43.674786],
          },
          {
            name: 'Bunarić (lokva)',
            coordinates: [17.347293, 43.674786],
          },
        ],
        dists: [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        about:
          'Speleološko društvo Mijatovi Dvori od sredstava dobivenih za sufinanciranje troškova izrade i održavanja planinarskih putova PS HB u 2021. godini, markirala je Planinarsko - speleološku stazu, edukativnog karaktera, na kojoj je plan uz markiranu stazu u budućnosti postaviti i info ploče edukativnog karaktera za speleološke objekte koje povezuje.\n\nRadi se o kružnoj stazi čiji je početak i kraj u Mandinu Selu, kod kuće doajena duvanjske speleologije, Mire Šumanovića.\n\nStaza povezuje jame Parapatušu (tipski lokalitet, Leonhardia delminiumica), vrh Oštru glavicu (1318 mnv), te jame Pašnjaču i Orlovaču, tumul Čobanicu i spušta se na lokvu Bunarić, nakon kojeg se staza vraća prema početnoj točki. Sa Oštre glavice markirana je i staza (za one koji žele znati više) prema jami Snjižnjači, te Bilanskom konaku (obnovljenoj lokvi, sa izgrađenom nadstrešnicom za odmor).',
        img: '/assets/tours/img/sv-hubert.jpg',
        type: '/assets/icon/routes/speleo.svg',
        pinStyle: '/assets/icon/routes/speleoPin.svg',
        color: '#17171c', //#ca4935 bike-color, #449d59 hike-color, #17171c speleo-color
        routeTypeId: 'speleo',
        id: 'tour3',
      },
    },
    
  },
};
