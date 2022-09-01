var routesData = {
    type: 'FeatureCollection',
    features: {
        tour5: {
            type: 'Feature',
            geometry: {
                type: 'Point',
                zoom: '12',
                zoomMobile: '11.5',
                coordinates: [1912918.72, 5438484.16]
            },
            properties: {
                nameHr: 'Tura sv. Jeronima',
                nameEn: 'Saint Jerome tour',
                place: 'Šujica',
                path: '',
                duration: '4 h',
                stops: [
                    {
                        nameHr: 'Vjetropark na Jelovači',
                        nameEn: 'Jelovača Wind Park',
                        coordinates: [17.158281884020315, 43.752349835105264],
                        img: '../assets/img/divljiKonji-jelovaca.jpg',
                        aboutHr:
                            'Vjetropark Jelovača nalazi se na planini Jelovača na 1500 metara nadmorske visine. Ova planina svakodnevno je izložena snažnim vjetrovima koji su specifični za ovaj kraj. Osim što je jedna od prvih vjetroelektrana na području BiH, Jelovača je i dom mnogih divljih životinja, među kojima se posebno izdvajaju divlji konji koji slobodno lutaju planinom.',
                        aboutEn:
                            'Jelovača Wind Park is located on Jelovača Mountain at 1500 meters above sea level. This mountain is daily exposed to strong winds that are specific to this area. Apart from being one of the first wind parks in BiH, Jelovača is also home to many wild animals, especially wild horses that roam the mountains.'
                    },
                    {
                        nameHr: 'Dvojna gradina',
                        nameEn: 'Double gradina hillfort',
                        coordinates: [17.228359496724266, 43.77435063761613],
                        img: '/assets/img/dvojnaGradina.jpg',
                        aboutHr:
                            'Dvojna gradina u Mokronoga je jedna od najspecifičniji gradina u sustavu gradina na Duvanjskom polju. Naime, ova gradina se nalazi iznad kanjona rijeke Šujice, točnije velika gradina na lijevoj dijelu kanjona, a mala na desnom dijelu kanjona rijeke Šujice. Velika i mala gradina su služile kao čuvarnice, ali kao i ulaz u Duvanjsko polje. Prema teorijam arheologa ove dvije gradne su bile povezane visećim mostom. ',
                        aboutEn:
                            'Double gradina in Mokronoge is one of the most specific forts in the system in Duvanjsko polje. Namely, this fort is located above the canyon of the river Šujica, more precisely a large fort on the left part of the canyon, and a small one on the right part of the canyon of the river Šujica. The large and small forts served as guardhouses, but also as the entrance to the Duvanjsko polje. According to archaeologists, these two buildings were connected by a suspension bridge. '
                    },
                    {
                        nameHr: 'Ručak u Mokronogama',
                        nameEn: 'Lunch in Mokronoge',
                        coordinates: [17.224235944233836, 43.76459168101646],
                        img: '',
                        aboutHr: 'Tradicionalni ručak, peka ispod sača',
                        aboutEn: 'Traditional lunch, baked under the sač'
                    },
                    {
                        nameEn: 'Roman bridge on Šujica river',
                        nameHr: 'Rimski most na Šujici',
                        coordinates: [17.182671218053603, 43.822920516826514],
                        img: '/assets/img/rimskiMostSujica.jpg',
                        aboutEn:
                            'The Roman bridge on the river Šujica is located in the Šujica field just below the village of Glečić. It was located in a system of roads built by the Roman Empire, and the bridge connected the rest of the Duvanjsko polje with the town of Stridon (Strnje). It is a small stone bridge whose arch style is the classic style of building the Roman Empire. The bridge was used for many years after the fall of the Roman Empire, only to be rebuilt by the Turks. ',
                        aboutHr:
                            'Rimski most na rijeci Šujici nalazi se u Šujičkom polju odmah ispod sela Glečića. Nalazio se u sustavu cesta koje je izgradilo Rimsko carstvo, a most je povezivao ostatak Duvanjskog polja s gradom Stridonom (Stržnjem). Riječ je o manjem kamenom mostu čiji je lučni stil klasični stil gradnje Rimskoga carstva. Most je korišten dugo godina i nakon pada Rimskog carstva da bi ga na posljetku obnovili Turci.'
                    },
                    {
                        nameEn: 'Stridon town - Šujica spring',
                        nameHr: 'Grad Stridon - izvor Šujice',
                        coordinates: [17.201782812728027, 43.880437245332864],
                        img: '/assets/img/gradStridon.jpg',
                        aboutEn:
                            'The town of Stridon is a town built on the cliffs below which the river Šujica springs. The walls of this city exude a strong past and the resourcefulness of the ancient Romans who dared to make the city in such an inaccessible place. According to legend, the city is also the birthplace of St. Jerome. Although the Roman Empire lost its significance in this area, the city of Stridon still remains alive and exudes defiance of steadfastness. People continued to live in this town in the Middle Ages when it was named Stržanj. After the Middle Ages, it became more and more important, so that over time it was abandoned and left to time and the forces of nature to change its appearance. ',
                        aboutHr:
                            'Grad Stridon (Stžanj) je grad nastao na liticama ispod kojih izvire rijeka Šujica. Zidine ovog grada odišu snažnom prošlošću i snalažljivosti starih Rimljana koji su se usudila napraviti grad na tako nepristupačnom mjestu. Grad je po legendi i rodno mjesto svetog Jeronima. Iako je Rimsko carstvo izgubilo svoj značaj na ovim prostorima, grad Stridon ostaje još uvjek živ i odišući prkosom nepokolebljivosti. Ljudi su nastavili živjeti u ovom gradu i u srednjem vijeku kada nosi ime Stržanj. Nakon srednjeg vijeka sve više gubi značaj, tako da s vremenom biva napušten i ostavljen vremenu i silama prirode da mijenjaju njegov izgled.'
                    }
                ],
                /* pins: [
          [17.27997368955981, 43.58080534174916],
          [17.24143, 43.559407],
        ],
        stops: ['Crkva u Mesihovini', 'Vodopad Žukovica'], */
                dist: '10 km',
                dists: ['', '', '', ''],
                aboutHr:
                    'Ova  tura nazvana je po svetom Jeronimu kojega legenda usko veže za grad Stridon. Antički grad Stridon danas se nalazi iznad izvora rijeke Šujice u istoimenom mjestu. U ovoj turističkoj turi vidjet ćemo neke od putova kojima je sv. Jeronim hodao u antičkim vremenima. Krenut ćemo od planine Jelovače s koje se pruža odličan pogledat na Duvanjsko polje i na kojoj slobodno lutaju divlji konji. Na Jelovači ćemo se upoznati i sa tradicionalnom gastronomijom Duvanjskog kraja i probati suhomesnate proizvode koji su karakteristični baš za ovo podneblje. Spustit ćemo se do kanjona rijeke Šujice i vidjeti dvije gradine koje su Iliri koristili kao ulaz na Duvanjsko polje. Nakon šetnje iznad kanjona spustit ćemo se na ručak u obližnje Mokronoge kod obitelji Baković na tradicionalni ručak ispod sača. Uz ovaj ručak naši domaćini će nam pokazati i ukratko objasniti kako se spremaju jela ispod sača. Nakon ručka slijedi naš put uzvodno rijekom Šujicom gdje ćemo doći do sela Galečić i starog Rimskog mosta koji povezivao dvije obale rijeke Šujice. Vrhunac naše jednodnevne ture bit će posjeta antičkom i srednjovjekovnom gradu Stridonu/Stržnju koji je izgrađen na liticama iznad izvora rijeke Šujice. Ovi ostaci kamenih zidina kriju tajne Duvanjske prošlosti, a hladna rijeka koja izvire ispod samoga grada obaviju tu istu prošlost debelim slojem magle kroz koju ćemo na kratko zaviriti i otkriti što nam glasovi Duvanjskih ratnika šapuću dok promatramo zalazak sunca. U ovoj turi upoznat ćemo se s Duvanjskom antičkom povijesti, gastronomijom ovoga kraja te svim prirodnim ljepotama koje krase ovu jednodnevnu turu.',
                aboutEn:
                    "This tour is named after St. Jerome, whose legend is closely linked to the town of Stridon. Today, the ancient city of Stridon is located above the source of the river Šujica in the place of the same name. In this tourist tour, we will see some of the paths that St. Jerome walked in ancient times. We will start from Jelovača mountain, which offers a great view of the Duvanjsko field and where wild horses roam freely. At Jelovača, we will get to know the traditional gastronomy of the Tomislavgrad region and try dried meat products that are characteristic of this climate. We will go down to the canyon of the river Šujica and see two castles that the Illyrians used as an entrance to the Duvanjsko field. After the walk above the canyon, we will go down to the nearby Mokronoge for lunch at the Baković family's place for a traditional lunch under the sach. Along with this lunch, our hosts will show us and briefly explain how the dishes are prepared under the sach. After lunch, we continue our journey upstream along the river Šujica, where we will reach the village of Galečić and the old Roman bridge that connected the two banks of the river Šujica. The highlight of our one-day tour will be a visit to the ancient and medieval town of Stridon/Stržnje, which was built on the cliffs above the source of the river Šujica. These remains of stone walls hide the secrets of Tomislavgrad past, and the cold river that springs from under the city itself envelops that same past in a thick layer of fog through which we will briefly peek and discover what the voices of Tomislavgrad warriors whisper to us as we observe sunset. In this tour, we will get to know the ancient history of Tomislavgrad, the gastronomy of this region and all the natural beauties that adorn this one-day tour.",
                img: '/assets/img/zukovica.jpg',
                imgs: [],
                routeTypeId: 'guided',
                id: 'tour5'
            }
        }

        /* tour2: {
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
        color: '#67b779', //#e46353ff bike-color, #67b779 hike-color, #0d121 speleo-color
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
        color: '#0d121', //#e46353ff bike-color, #67b779 hike-color, #0d121 speleo-color
        routeTypeId: 'speleo',
        id: 'tour3',
      },
    }, */
    }
};

var destinationsData = {
    type: 'FeatureCollection',
    features: {
        tour1: {
            type: 'Feature',
            geometry: {
                type: 'Point',
                zoom: '14',
                zoomMobile: '12.5',
                coordinates: [1921495.6, 5399029.01]
            },
            properties: {
                nameHr: 'Pješačka staza Žukovica',
                nameEn: 'Hiking trail Žukovica',
                place: 'Mesihovina, Vojkovići',
                // path: '../assets/tours/tour1.gpx', --napraviti da povlaci od tu
                duration: '4 h',
                dayHr: 'svake subote',
                dayEn: 'every Saturday',
                startPlaceHr: 'Crkva u Mesihovini',
                startPlaceEn: 'Church in Mesihovina',
                startTime: '09:00',
                neededHr: 'Užina i piće',
                neededEn: 'Snack and drinks',
                contact: '+387 63 123 456',
                remark: '...',
                stops: [
                    {
                        nameHr: 'Crkva u Meshihovini',
                        nameEn: 'Church in Mesihovina',
                        coordinates: [17.27997368955981, 43.58080534174916],
                        img: '../assets/img/crkvaMesihovina.jpg',
                        aboutHr:
                            '1972. godine je zapisano: „Župa Seonica ima oveće selo Mesihovina sa 167 domaćinstava, a selo je udaljeno od matične crkve preko pet kilometara. Mesihovljani su već odavno htjeli imati filijalnu crkvu. To su izrazili svom župniku fra Ivanu Kvesiću. On se prihvatio posla oko gradnje crkve. Veličina je bila planirana na 18 s osam metara. Plan je izradio ing. fra Pijo Nuić. Munjevitom brzinom su Mesihovljani sakupili novčana sredstva za crkvicu. Crkva je sagrađena u rekordnom vremenu od 48 radnih dana. Radilo se neumorno po danu, a kada je trebalo u zadnje dane pred dovršenje i noću. Na veliko veselje crkva bi dogotovljena na 11. prosinca 1971. kasno u noć.“',
                        aboutEn:
                            'In 1972, it was written: "Seonica parish has the village of Mesihovina with 167 households, which is over five kilometers away from the mother church. The inhabitants of Mesihovina have long wanted to have a branch church. They expressed this to their pastor, Fr. Ivan Kvesić. He took on the job of building a church. The size was planned at 18 by 8 meters. The plan was drawn up by Fr. Pijo Nuić, Eng. The people of Mesihovina collected funds for the church with lightning speed. The church was built in a record time of 48 working days. They worked tirelessly during the day, and when necessary, in the last days before completion, at night. To great joy, the church was completed late at night on December 11, 1971."'
                    },
                    {
                        nameHr: 'Vodopad Žukovica',
                        nameEn: 'Žukovica Waterfall',
                        coordinates: [17.24143, 43.559407],
                        img: '/assets/img/zukovica.jpg',
                        aboutHr:
                            'Vodopad Žukovica jedno je od najljepših mjesta u okolici. Skriven daleko od ljudske ruke nikoga ne ostavlja ravnodušnim. Tik uz vodopad nalazi se i Žukovička pećina koju su istraživali ugledni arheolozi.',
                        aboutEn:
                            'It is one of the most beautiful places in the area to visit. This waterfall is hidden away from human hands and leaves no one indifferent. Right next to the waterfall is the Žukovička cave, which was explored by distinguished archaeologists.'
                    }
                ],
                /* pins: [
        [17.27997368955981, 43.58080534174916],
        [17.24143, 43.559407],
      ],
      stops: ['Crkva u Mesihovini', 'Vodopad Žukovica'], */
                dist: '10 km',
                dists: ['5 km'],
                aboutHr:
                    'Svakom željnom uživanja u prirodi preporučamo laganu i ne baš tipičnu planinarskom stazu prema vodopadu Žukovici. Na ovoj stazi nećete naići na strme i duge uzbrdice, pa ni nizbrdice. Staza je primjerena svakome, u njoj će podjednako uživati i djeca i odrasli. Od početne točke do vodopada i natrag ima oko 10 km kilometara ugodne šetnje, a izlet traje maksimalno 4 sata uz duže pauze i fotografiranje. Koje god godišnje doba izabrali, nećete pogriješiti. Zimi zaleđeni vodopad i šuma prekrivena snijegom ostavit će vas bez riječi. U proljeće vodopad jednostavno izgleda nestvarno tako da na fotografijama izgleda kao da je sigurno u pitanju nekakav filter. No, vodopadu Žukovica niti jedan filter nije potreban jer se on svojom netaknutom ljepotom ubraja u najzelenije i najbajkovitije točke u Hercegovini, s bistrom vodom koja reflektira drveće i sve okolo svim nijansama zelene i tirkizne boje. <br><br>Staza počinje pored crkve sv. Petra i Pavla u Mesihovini. Prolazi kroz zaseoke Bučići i Panjevići te pored starih vrtlova izlazi na makadamski put. Prateći makadamski put ulazimo  u prosječenu makiju sve do izvora i istoimenog izletišta Gojana. Dalje staza prati nekadašnju konjsku stazu kroz šumu te dolazi do izvora potoka Žukovica, koji se kasnije ulijeva u Ričinu. Prateći sam potok, staza prolazi pored mlinica te se spušta na dio potoka koji je potrebno prijeći i popeti se da bi se moglo uživati u istoimenom slapu Žukovica. Tik uz vodopad nalazi se Žukovačka pećina koja je 70-tih godina bila predmet istraživanja prof. Brunislava Marijanovića, jednog od najuglednijih hrvatskih arheologa. <br><br>Putom su, naravno, postavljene markacije, tj. crveno-bijeli krugovi na drveću i kamenju. Uvijek ih pratite, a ako dođete do raskrižja i ne znate put, udaljite se nekoliko koraka u svakom od mogućih smjerova i razgledajte drveće, negdje se sigurno skrio taj važan krug. Iako se izvor potoka Žukovica nalazi u Općini Tomislavgrad, sam slap se nalazi u Općini Posušje. Povezanost stanovnika ovih dviju općina ogleda se i u činjenici da su mlinice, iako fizički u Općini Posušje, u vlasništvu stanovnika Općine Tomislavgrad.<br><br>Ova staza nosi sa sobom i priče o vilama koje su prema kazivanju naših starih živjele ovdje i brinule za ovaj kraj. Tim pričama ljudi su kratili hladne večeri uz vatru, a mnogi planinari i ljubitelji prirode vole hodati stazama i šumama zamišljajući kako ih gledaju vile, uz tihu nadu da će ih i susresti! Tko zna, možda su i dalje tu, zato pazite da se ne zaljube u vas i odvedu vas u svoje kraljevstvo. Ne odgađajte posjet ovoj ruti. Ako već niste, sada je vrijeme.',
                aboutEn:
                    "For anyone who wants to enjoy nature, we recommend an easy and not very typical hiking trail towards the Žukovica waterfall. You will not encounter steep and long uphills or downhills on this trail. The trail is suitable for everyone, both children and adults will enjoy it equally. From the starting point to the waterfall and back, there are about 10 km of pleasant walks, and the trip lasts a maximum of 4 hours with longer breaks and photography. Whichever season you choose, you won't go wrong. In winter, the frozen waterfall and snow-covered forest will leave you speechless. In the spring, the waterfall just looks unreal, so in the photos it looks like it must be some kind of filter. However, the Žukovica waterfall does not need a single filter, because with its untouched beauty, it is one of the greenest and most fairy-tale spots in Herzegovina, with clear water that reflects the trees and everything around in all shades of green and turquoise. <br><br>The trail starts next to the church of St. Peter and Paul in Mesihovina. It passes through the hamlets of Bučići and Panjevići and exits the macadam road past the old gardens. Following the macadam road, we enter the cut maquis all the way to the source and the picnic area of ​​the same name, Gojana. Further on, the path follows the former horse track through the forest and reaches the source of the Žukovica stream, which later flows into Ričina. Following the stream itself, the path passes the mills and descends to a part of the stream that needs to be crossed and climbed in order to enjoy the Žukovica waterfall of the same name. Right next to the waterfall is the Žukovačka cave, which in the 70s was the subject of research by prof. Brunislav Marijanović, one of the most respected Croatian archaeologists. <br><br>There are, of course, markings along the way, i.e. red and white circles on trees and stones. Always follow them, and if you come to an intersection and don't know the way, take a few steps away in each possible direction and look around the trees, that important circle must be hidden somewhere. Although the source of the Žukovica stream is located in Tomislavgrad Municipality, the waterfall itself is located in Posušje Municipality. The connection between the inhabitants of these two municipalities is also reflected in the fact that the mills, although physically in Posušje Municipality, are owned by the inhabitants of Tomislavgrad Municipality. for this end. With these stories, people spent cold evenings by the fire, and many mountaineers and nature lovers like to walk along the paths and forests, imagining how the fairies are watching them, with the silent hope that they will meet them! Who knows, they might still be there, so be careful they don't fall in love with you and take you to their kingdom. Do not delay visiting this route. If you haven't already, now is the time.",
                img: '/assets/img/zukovica.jpg',
                imgs: [
                    '/assets/tours/img/zukovica/zukovica1.jpg',
                    '/assets/tours/img/zukovica/zukovica2.jpg',
                    '/assets/tours/img/zukovica/zukovica3.jpg',
                    '/assets/tours/img/zukovica/zukovica4.jpg'
                ],
                routeTypeId: 'hike',
                id: 'tour1'
            }
        },
        tour4: {
            type: 'Feature',
            geometry: {
                type: 'Point',
                zoom: '14.3',
                zoomMobile: '12.5',
                coordinates: [1911672.68, 5413517.68]
            },
            properties: {
                nameHr: 'Urušene vrtače grabovičke visoravni',
                nameEn: 'Collapsed sinkholes of the Grabovice plateau',
                place: 'Omerovići, Kovači, Vrilo, Dobrići',
                path: '../assets/tours/tour4.geojson',
                duration: '4,5 h',
                dayHr: 'svake subote',
                dayEn: 'every Saturday',
                startPlaceHr: 'Omerovići',
                startPlaceEn: 'Omerovići',
                startTime: '09:00',
                neededHr: 'Užina i piće',
                neededEn: 'Snack and drinks',
                contact: '+387 63 123 456',
                stops: [
                    {
                        nameHr: 'Polazna točka',
                        nameEn: 'Start',
                        coordinates: [17.18725, 43.66297]
                    },
                    {
                        nameHr: 'Veliki Samograd',
                        nameEn: 'Veliki Samograd (Big Self-made)',
                        coordinates: [17.18618, 43.66343],
                        img: '/assets/img/velikiSamogradd.jpg',
                        aboutHr:
                            'Golema urušena vrtača na kršnoj zaravni, japaga duljine 180, širine 100 metara te dubine između 40 i 70 metara. Okružen je strmim liticama te je spuštanje moguće uz konopac i profesionalnu opremu za spuštanje. Na dnu Samograda nalazi se gusta i neprohodna šuma koja je dom raznim vrstama ptica, a uz rub vrtače nalazi se i špilja skromnih dimenzija.',
                        aboutEn:
                            'A huge collapsed sinkhole on the karst plateau, 180 meters long, 100 meters wide and between 40 and 70 meters deep. It is surrounded by steep cliffs and descent is possible with a rope and professional abseiling equipment. At the bottom of Samograd there is a dense and impenetrable forest that is home to various species of birds, and at the edge of the sinkhole there is also a cave of modest dimensions.'
                    },
                    {
                        nameHr: 'Arnautovac',
                        nameEn: 'Arnautovac',
                        coordinates: [17.18091, 43.66565],
                        img: '/assets/tours/img/tour3-maliSamograd.jpg',
                        aboutHr:
                            'Arnautovac i Mali Samograd geomorfološka su cjelina značajna zbog velikih dimenzija i izraženih litica. Arnautovac je dug oko 420 metara i širok oko 170 metara, a u njegovom sjeverozapadnom djelu nalazi se Mali Samograd dug 70 i širok 40 metara. Pristup je moguć bez konopa i opreme za spuštanje.',
                        aboutEn:
                            'Arnautovac and Mali Samograd are significant geomorphological units due to their large dimensions and prominent cliffs. Arnautovac is about 420 meters long and about 170 meters wide, and in its northwestern part is Mali Samograd, 70 meters long and 40 meters wide. Access is possible without ropes and abseiling equipment.'
                    },
                    {
                        nameHr: 'Mali Samograd',
                        nameEn: 'Mali Samograd (Little Self-made)',
                        coordinates: [17.17767, 43.66578],
                        img: '/assets/tours/img/tour3-maliSamograd.jpg',
                        aboutHr:
                            'Mali Samograd je duboka jama koja počinje golemom ulaznom, bunarastom vertikalom, i pridruženi je dio Arnautovca. Otvor ulazne vertikale je promjera 80x45 m i kroz njega se spušta do prvog dna na oko 40 m dubine. Prvo je dno izrazito strmo i obraslo gustom grabovom šumom te divljom lozom. Po strmini prekivenoj siparom spušta se do ulaza u podzemnu šupljinu, koju u narodu još zovu špilja Rogoševac. Njen ulaz je smješten ispod kamene litice visoke 90 m od reazine krške zaravni. Ulaz je širine oko 16 m i visok do 12 m. Dio ulaza pregrađuju golemi kameni blokovi. Na samom ulazu je prisutna temperaturna razlika koja može iznostiti i više od 20°C - temperatura špiljskog prostora je samo 3°C. Nakon ulaza slijedi golema podzemna dvorana široka u najširem dijelu 90 m, a prema kraju 60-70 m, dok visina varira od 5 m na početku do 30 m u završnom dijelu dvorane. Tlo je prekriveno siparišnim materijalom i strmo se spušta pod uglom mjestimično većim od 45° prema središnjem dijelu dvorane. Dužina glavnog kanala špilje iznosi 135m, dok je s ostalim bočnim kanalima dug preko 250m. Ukupna dubina jame  je 150 m. Unutra se nalaze špiljski saljevi, stalagmiti i saljevni zidovi visoki i do 5 metara.',
                        aboutEn:
                            'Mali Samograd is a deep pit that begins with a huge entrance, well-like opening and is an associated part of Arnautovac. The opening of the entrance has a diameter of 80x45 m and through it descends to the first bottom at a depth of about 40 m. The first floor is extremely steep and overgrown with a dense hornbeam forest and wild vines.</br></br>It descends along a slope covered with scarp to the entrance to the underground cavity, which the people also call the Rogoševac cave. Its entrance is located under a stone cliff 90 m high from the level of the karst plain. The entrance is about 16 m wide and up to 12 m high. Part of the entrance is blocked by huge stone blocks. At the very entrance there is a temperature difference that can be more than 20°C. After the entrance, there is a huge underground hall, 90 m wide in the widest part, and 60-70 m towards the end, while the height varies from 5 m at the beginning to 30 m in the final part of the hall. The ground is covered with silage material and descends steeply at an angle of more than 45° in some places towards the central part of the hall. The length of the main channel of the cave is 135 m, while with the other side channels it is over 250 m long. The total depth of the cave is 150 m. Inside there are cave lavas, stalagmites and lava walls up to 5 meters high.'
                    },
                    {
                        nameHr: 'Surdup',
                        nameEn: 'Surdup',
                        coordinates: [17.15848, 43.66849],
                        img: '/assets/tours/img/tour3-surdup.jpg',
                        aboutHr:
                            'Urušna vrtača velikih dimenzija. Dužine od 420 metara i širine do 200 metara uz dubinu do 100 metara. Na dnu se nalazi uvala u kojoj rastu stabla i do 20 metara uz razne vrste biljaka i životinja.',
                        aboutEn:
                            'Large sinkhole. Length of 420 meters and width of up to 200 meters with a depth of up to 100 meters. At the bottom, there is a cove where trees grow up to 20 meters high, along with various types of plants and animals.'
                    },
                    {
                        nameHr: 'Roška peć',
                        nameEn: 'Roška peć',
                        coordinates: [17.1536, 43.65762],
                        img: '/assets/tours/img/tour3-roskaPec.jpg',
                        aboutHr: ''
                    }
                ],
                dist: '8 km',
                dists: ['550 m', '600 m', '300 m', '2700 m', '1800 m'],
                aboutHr:
                    'Velike urušne vrtače (ponikve) na prijevoju između Duvanjskog polja i Buškog blata specifične su kako po svojoj duljini i dubini, tako i po određenim morfološkim karakteristikama. Njihov postanak vezan je uz izrazita rasjedanja u debelo uslojenim krednim vapnencima, te uz hidrogeološke procese poniranja voda na razini Duvanjskog polja i njihovog izbijanja na horizontu niže položenog Buškog blata.\n\nNa Grabovičkoj visoravni se nalazi više od 8500 vrtača. Prema tome, govori se o iznimnom prirodnom fenomenu na kojem je već sad previše antropogenog devastiranja prirodnog stanja, a u budućnosti bi mogao još biti i još više, stoga ga je potrebno urediti i zaštititi. Zbog istinske ljepote prirode i njezine jedinstvenosti na ovom prostoru, potrebno ih je turistički valorizirati.\n\nZbog toga je Speleološko društvo Mijatovi dvori razvija projekt Poučna staza urušnih vrtača Grabovičke visoravni. Poučna staza bila bi edukativnog karaktera, te se na taj način planira raznim aktivnostima i istraživanjima prezentirati iznimna ljepota najvećih i najznačajnijih urušnih vrtača Grabovičke visoravni. Rezultat svega toga bio bi buduća zaštita urušnih vrtača Grabovičke visoravni kao „Geomorfoloških spomenika prirode“. No, da bi se došlo do kvalitetnih i vjerodostojnih podataka neophodno je provesti niz aktivnosti koji se odnose na terensko dokumentiranje i prezentaciju urušnih vrtača, čija valorizacija se planira uz podršku domaćih i stranih projekata.\n\n\n\nIdejni projekt je zamišljen kao izgradnja i uređenje kružne planinarsko poučne staze s polaznim i završnim stajalištem, te nekoliko karakterističnih stajališta. \n\nZamišljeno je uređenje duge i kratke staze. Kratka staza zamišljena je kao dio puta planinarske poučne staze u dužini od 3 kilometra, te bi kružila oko urušnih vrtača Veliki Samograd, Arnautovac i Mali Samograd. Duga staza bila bi nastavak kratke staze, i to način da se nakon obilaska Velikog Samograda, Arnautovca i Malog Samograda nastavlja dalje prema urušnim vrtačama Surdup i Roška peć, te ponovo vraća na početnu točku kod urušne vrtače Veliki Samograd, a bila bi duga oko 12 kilometara. \n\nStaza bi se protezala već postojećim šumskim prosjecima i putevima (koji su sada dijelom i zapušteni), dok bi jedan dio staze trebalo i prosjeći, te urediti kao planinarski put. \n\nTrasa puta bi se označila planinarskim markacijama, te smjerokazima.',
                aboutEn:
                    'The large sinkholes on the pass between Duvanjsko polje and Buško blato are specific in terms of their length and depth, as well as certain morphological characteristics. Their origin is related to pronounced erosion in the thickly layered chalk limestones, and to the hydrogeological processes of sinking waters at the level of Duvanjsko polje and their emergence on the horizon of the lower-lying Buško blato.\n\nThere are more than 8,500 sinkholes on the Grabovička plateau. Therefore, we are talking about an exceptional natural phenomenon where there is already too much anthropogenic devastation of the natural state, and in the future there could be even more, so it needs to be arranged and protected. Due to the true beauty of nature and its uniqueness in this area, it is necessary to introduce them to tourists.\n\nThis is why the Mijatovi dvori Speleological Society is developing the project Educational trail of the collapse sinkholes of the Grabovička plateau. The educational trail would be of an educational nature, and in this way various activities and researches are planned to present the exceptional beauty of the largest and most significant sinkholes of the Grabovička plateau. The result of all this would be the future protection of the collapse sinkholes of the Grabovička plateau as "Geomorphological monuments of nature". However, in order to obtain high-quality and reliable data, it is necessary to carry out a series of activities related to the field documentation and presentation of sinkholes, the valorization of which is planned with the support of domestic and foreign projects.\n\n\n\nThe conceptual project is conceived as construction and arrangement of a circular hiking trail with several characteristic viewpoints. \n\nThe design of the long and short track is planned. The short trail was conceived as a part of the 3-kilometer hiking trail and would circle around the Veliki Samograd, Arnautovac and Mali Samograd sinkholes. The long path would be a continuation of the short path, and that way, after visiting Veliki Samograd, Arnautovac and Mali Samograd, it continues towards the collapse sinkholes Surdup and Roška peć, and then returns to the starting point at the collapse sinkhole Veliki Samograd, and it would be about 12 kilometers. \n\nThe trail would stretch along existing forest clearings and roads (which are now partly neglected), while one part of the trail would have to be cut through and arranged as a hiking trail. \n\nThe road route would be marked with hiking markings and signposts.',
                img: 'assets/tours/img/vrtace1.jpg',
                imgs: [
                    'assets/tours/img/vrtace1.jpg',
                    'assets/tours/img/vrtace2.jpg',
                    'assets/tours/img/vrtace3.jpg',
                    'assets/tours/img/vrtace4.jpg',
                    'assets/tours/img/vrtace5.jpg',
                    'assets/tours/img/vrtace6.jpg',
                    'assets/tours/img/tour3-maliSamograd.jpg',
                    '/assets/img/VelikiSamogradd1.jpg',
                    '/assets/tours/img/tour3-surdup.jpg'
                ],
                routeTypeId: 'hike',
                id: 'tour4'
            }
        }
    }
};
