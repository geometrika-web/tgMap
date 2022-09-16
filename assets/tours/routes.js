var routesData = {
    type: 'FeatureCollection',
    features: {
        svJeronim: {
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
                duration: '6 h',
                stops: [
                    {
                        nameHr: 'Vjetropark na Jelovači',
                        nameEn: 'Jelovača Wind Park',
                        coordinates: [17.161676895396642, 43.753005157401475],
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
                        nameHr: 'Tradicionalni ručak, peka ispod sača',
                        nameEn: 'Traditional lunch in Mokronoge',
                        coordinates: [17.224235944233836, 43.76459168101646],
                        img: 'assets/img/peka.jpg',
                        aboutHr:
                            'Sač je zvonolika je keramička ili željezna posuda za pečenje na otvorenom ognjištu. Na vrhu ima jednu ili dvije ručke; željezna je u obliku glatke kupole, a keramičkoj su dodani obruči za zadržavanje žeravice. Jelo (kruh, pogača, meso, krumpir i sl.), položeno na toplo tlo ognjišta ili u plitku tepsiju, prekriva se sač prethodno zagrijanom do užarenosti, koja se zatim prekriva žeravicom i toplim pepelom. U južnoj Panoniji i na Balkanu koristi se od pretpovijesti (neolitik). Uz upotrebu otvorenih ognjišta zadržala se u istočnoj Sloveniji, južnoj Mađarskoj, Rumunjskoj, Bugarskoj, Srbiji i Crnoj Gori, Bosni i Hercegovini i Italiji (dakle na područjima koja su nastanjivali Iliri). ',
                        aboutEn:
                            'Sač is a bell-shaped ceramic or iron vessel for baking on an open hearth. It has one or two handles at the top; the iron one is in the form of a smooth dome, and the ceramic one has rings added to contain the embers. The dish (bread, cake, meat, potatoes, etc.), placed on the warm floor of the hearth or in a shallow pan, is covered with a sach pre-heated until red-hot, which is then covered with embers and hot ashes. In southern Pannonia and the Balkans, it has been used since prehistoric times (Neolithic). With the use of open hearths, it remained in eastern Slovenia, southern Hungary, Romania, Bulgaria, Serbia and Montenegro, Bosnia and Herzegovina and Italy (therefore in the areas inhabited by the Illyrians).'
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
                dist: '42.5 km',
                dists: ['15 km', '4 km', '14.5 km', '9 km'],
                aboutHr:
                    'Ova  tura nazvana je po svetom Jeronimu kojega legenda usko veže za grad Stridon. Antički grad Stridon danas se nalazi iznad izvora rijeke Šujice u istoimenom mjestu. U ovoj turističkoj turi vidjet ćemo neke od putova kojima je sv. Jeronim hodao u antičkim vremenima.<br><br> Krenut ćemo od planine Jelovače s koje se pruža odličan pogledat na Duvanjsko polje i na kojoj slobodno lutaju divlji konji. Na Jelovači ćemo se upoznati i sa tradicionalnom gastronomijom Duvanjskog kraja i probati suhomesnate proizvode koji su karakteristični baš za ovo podneblje. Spustit ćemo se do kanjona rijeke Šujice i vidjeti dvije gradine koje su Iliri koristili kao ulaz na Duvanjsko polje. Nakon šetnje iznad kanjona spustit ćemo se na ručak u obližnje Mokronoge kod obitelji Baković na tradicionalni ručak ispod sača. Uz ovaj ručak naši domaćini će nam pokazati i ukratko objasniti kako se spremaju jela ispod sača. <br><br>Nakon ručka slijedi naš put uzvodno rijekom Šujicom gdje ćemo doći do sela Galečić i starog Rimskog mosta koji povezivao dvije obale rijeke Šujice.<br><br>Vrhunac naše jednodnevne ture bit će posjeta antičkom i srednjovjekovnom gradu Stridonu/Stržnju koji je izgrađen na liticama iznad izvora rijeke Šujice. Ovi ostaci kamenih zidina kriju tajne Duvanjske prošlosti, a hladna rijeka koja izvire ispod samoga grada obaviju tu istu prošlost debelim slojem magle kroz koju ćemo na kratko zaviriti i otkriti što nam glasovi Duvanjskih ratnika šapuću dok promatramo zalazak sunca. U ovoj turi upoznat ćemo se s Duvanjskom antičkom povijesti, gastronomijom ovoga kraja te svim prirodnim ljepotama koje krase ovu jednodnevnu turu.',
                aboutEn:
                    "This tour is named after St. Jerome, whose legend is closely linked to the town of Stridon. Today, the ancient city of Stridon is located above the source of the river Šujica in the place of the same name. In this tourist tour, we will see some of the paths that St. Jerome walked in ancient times.<br><br> We will start from Jelovača mountain, which offers a great view of the Duvanjsko field and where wild horses roam freely. At Jelovača, we will get to know the traditional gastronomy of the Tomislavgrad region and try dried meat products that are characteristic of this climate. We will go down to the canyon of the river Šujica and see two castles that the Illyrians used as an entrance to the Duvanjsko field. After the walk above the canyon, we will go down to the nearby Mokronoge for lunch at the Baković family's place for a traditional lunch under the sach. Along with this lunch, our hosts will show us and briefly explain how the dishes are prepared under the sach. After lunch, we continue our journey upstream along the river Šujica, where we will reach the village of Galečić and the old Roman bridge that connected the two banks of the river Šujica.<br><br> The highlight of our one-day tour will be a visit to the ancient and medieval town of Stridon/Stržnje, which was built on the cliffs above the source of the river Šujica. These remains of stone walls hide the secrets of Tomislavgrad past, and the cold river that springs from under the city itself envelops that same past in a thick layer of fog through which we will briefly peek and discover what the voices of Tomislavgrad warriors whisper to us as we observe sunset. In this tour, we will get to know the ancient history of Tomislavgrad, the gastronomy of this region and all the natural beauties that adorn this one-day tour.",
                img: '/assets/img/gradStridon.jpg',
                imgs: [],
                routeTypeId: 'guided',
                id: 'svJeronim'
            }
        },
        delminium: {
            type: 'Feature',
            geometry: {
                type: 'Point',
                zoom: '11.5',
                zoomMobile: '11',
                coordinates: [1916844.28, 5419439.76]
            },
            properties: {
                nameHr: 'Tura Delminium',
                nameEn: 'Delminium Tour',
                place: '',
                path: '',
                duration: '6 h',
                dist: '49.7 km',
                dists: [
                    '7 km',
                    '8 km',
                    '9 km',
                    '4 km',
                    '8 km',
                    '5 km',
                    '3 km',
                    '5 km',
                    '700 m'
                ],
                aboutHr:
                    'Ova tura će nas na trenutak vratiti u povijest gdje ćete uz priču našeg vodiča, ali i niz lokaliteta, upoznati povijest Duvanjskog kraja za vrijeme Ilira-Delmata i Rimskih osvajanja. Turu ćemo započeti na lokalitetu Privala-Vidikovac iznad sela Prisoje gdje nam se pruža prelijep pogled na Buško jezero. Samo nekoliko metara od ovog vidikovca nalazi se stara rimska cesta koja će nas povesti u ovu zajedničku avanturu.<br>Nakon toga slijedi nam put prema selu Brišnik i Mrkodol gdje ćemo uz put svratiti na Veliki Samograd. Ovo je lokacija koja će vas ostaviti bez daha. geomorfološka struktura Samograda stvarana tisućama godina pomjeranjem, uzdizanjem i spuštanjem tektonskih ploča nikoga ne ostavlja ravnodušnim. Nakon obilaska ove lokacije doručkovat ćemo na tradicionalni Duvanjski način uz organski proizvedenu hranu, a pogled na samu lokaciju hranit će našu dušu dok naši tradicionalni proizvodi budu hranili vaše tijelo.<br><br>Dalje, nastavljamo do sela Mrkodol i vidikovca iznad njega. Na vidikovcu ćemo zastati gdje nam slijedi priča našeg vodiča o morfologiji Duvanjskog polja kao i priča o sustavu ilirskih gradina koje okružuju Duvanjsko polje. Tu će vas naš vodič upoznati i sa Mrkodoljskom gradinom, jednom od rijetkih sustava dvojnih gradina koje pronalazimo unutar BiH. U blizini ćemo svratiti do terase starog Rimskog puta koji nas vodi do naše glavne destinacije do koje moramo prijeći Duvanjsko polje do mjesta gdje se nalazi najveća i najpoznatija gradina ovog kraja, ona na planini Lib. Ova gradina je bila glavni grad i glavno uporište Ilirskog plemena Delmata, grad Delminium. Tu slijedi priča o ratu protiv Rima. Nakon Delminiuma spustit ćemo se u obližnje Mandino selo u kojem se nalazi Mandina gradina. Mandina gradina je bila kultno mjesto svih Delmata. Ova gradina je služila mnogim mitskim ritualima te je bila glavno svetište gdje su Delmati prinosili žrtve svojim bogovima. Nakon ove gradine idemo do sela Letke i do jedne od značajnijih gradina ovog kraja a to je Lečićka gradina. Značajna je i po starom Rimskom putu koji prolazi kraj nje i koji je spajao Delminium sa udaljenim rudnicima srednje Bosne.<br><br>Nakon ovoga nam slijedi ručak u Mokronogama u obitelji Baković koji će nam na tradicionalni način spremiti ukusna jela pod sačem koji će biti po vašem izboru. Nakon ručka zaputit ćemo se do Tomislavgrada i Selimovića gradine koja se nalazi na samom ulazu u grad. Ovu turu ćemo završiti u franjevačkom muzeju Tomislavgrad u kojem ćemo vidjeti arheološke ostatke starih Rimljana i Delmata kako bismo upotpunili sve viđeno.',
                aboutEn:
                    "This tour will take us back in history for a moment, where along with the story of our guide, as well as a number of localities, you will get to know the history of the Tomislavgrad region during the Illyrian-Delmatae and Roman conquests. We will start this tour at the location of Privala-Vidikovac above the village of Prisoje, where we have a beautiful view of Lake Buško. Just a few meters from this viewpoint, there is an old Roman road that will take us on this adventure.<br><br>After that, we will continue our journey towards the villages of Brišnik and Mrkodol, where we will stop at Veliki Samograd along the way. This is a location that will leave you breathless. The geomorphological structure of Samograd, created over thousands of years by the movement, rising and lowering of tectonic plates, leaves no one indifferent. After visiting this location, we will have breakfast in a traditional way with organically produced food as the view of the location will feed our soul while our traditional products will feed your body.<br><br>Next, we continue to the village of Mrkodol and the viewpoint above it. We will stop at the viewpoint where our guide will tell us about the morphology of the Duvanjsko Field as well as the story about the system of Illyrian fortifications that surround the Duvanjsko Field. There, our guide will also introduce you to the Mrkodol hillfort, one of the rare systems of double hillforts found in Bosnia and Herzegovina. Nearby we will stop at the terrace of the old Roman road that leads us to our main destination, on the way to which we have to cross the Duvanjsko Field to the place where the largest and most famous hillfort of this region is located, the one on Mount Lib. This fortress was the capital and main stronghold of the Illyrian tribe Delmatae, the city of Delminium. There follows the story of the Illyrian war against Rome. After Delminium, we will descend to the nearby Manda’s village, where Manda's hillfort is located. Manda's hillfort was a cult place for all Delmatae. This fortress served many mythical rituals and was the main sanctuary where the Delmatae offered sacrifices to their gods. After this hillfort we go to the village of Letka and to one of the most important hillforts in this region, Lečićka hillfort. It is also significant for the old Roman road that passes by it and which connected Delminium with the remote mines of central Bosnia.<br><br>After this, we will have lunch in Mokronoge village at the Baković family, who will prepare delicious dishes of your choice in the traditional way under the sač. After lunch, we will head to Tomislavgrad and Selimovića Hillfort, which is located at the very entrance to the city. We will end this tour in the Tomislavgrad Franciscan Museum, where we will see the archaeological remains of the ancient Romans and Delmatians to complete everything seen.",
                img: '/assets/img/delminiumLib.jpg',
                imgs: [],
                routeTypeId: 'guided',
                id: 'delminium',
                stops: [
                    {
                        nameHr: 'Vidikovac Privala',
                        nameEn: 'Privala Viewpoint',
                        coordinates: [17.123415070844445, 43.69894833165399],
                        img: '../assets/img/buskoJezero.jpg',
                        aboutHr:
                            'S ovog vidikovca puca predivan pogled na Buško jezero, najveće umjetno jezero u ovom dijelu Europe. Nastalo je potapanjem Buškoga blata 70-ih godina prošloga stoljeća. Zanimljiva povijest ovoga kraja ostavila je brojna arheološka nalazišta, brojne gradine iz ilirskoga i rimskoga doba, brojne artefakte te nekropole s velikim brojem stećaka.<br><br> Osim povijesnih zanimljivosti ovo područje nudi i mogućnost bavljenja brojnim sportovima. U ljetnim mjesecima voda Buškog jezera izrazito je topla i ugodna za kupanje. Jezero je također pogodno za gotovo sve sportove koji trebaju vjetar. A brda i planine koje ga okružuju omogućuju izletnicima penjanje i odmor u planinarskim domovima. Osim spomenutoga, jezero je jako atraktivno i ribičima. Ulovljeni i fotografirani primjerci, osobito somova, privlače lovce na trofejne primjerke i bude maštu ribolovaca.',
                        aboutEn:
                            "From this viewpoint there is beautiful view of Buško Lake, an artificial lake that was created in the 60's in the former Yugoslavia for the needs of the Orlovac Hydroelectric Power Plant, which is now located in Croatia. Buško Lake was created by the accumulation of water from the Duvanjsko and Livanjsko fields due to the construction of a dam. The surface of the lake is 55.8 square kilometers, and in addition to being the largest in BiH, until recently it was considered one of the largest in Europe. Buško Lake is in itself a huge potential and a pearl located in the municipality of Tomislavgrad. Apart from the fact that in the summer its sandy beach Marinovac attracts an increasing number of people, this lake and home to many freshwater fish, so that throughout the year it attracts many fishermen. "
                    },
                    {
                        nameHr: 'Veliki Samograd',
                        nameEn: 'Veliki Samograd (Big Self-made)',
                        coordinates: [17.185458317579446, 43.66292045587031],
                        img: '/assets/img/velikiSamogradd.jpg',
                        aboutEn:
                            'Hidden in the Duvanjsko Karst is a deep vertical collapsed sinkhole 190 m long, 110 m wide and 40 to 60 m deep. Here, nature, as an architect, showed all its strength and power with the shape and dimensions of this phenomenon. Samograd, self-built - self-built, is an oval huge well-shaped sinkhole whose very steep cliffs descend vertically from the karst plateau into the depths. At the bottom of Samograd there is a dense and impassable forest that is home to various species of birds, and along the edge of the sinkhole there is a cave of modest dimensions.',
                        aboutHr:
                            'U Duvanjskom kršu skrivena je duboka okomita urušena vrtača dužine 190 m, širine 110 m i dubine od 40 do 60 m. Ovdje je priroda, kao arhitekt, oblikom i dimenzijama ovog fenomena pokazala svu svoju silu i moć. Samograd, sam stvoren - sam sagrađen, ovalna je golema bunarasta vrtača čije se vrlo strme stijene spuštaju okomito s krške zaravni u dubinu. Na dnu Samograda nalazi se gusta i neprohodna šuma koja je dom raznim vrstama ptica, a uz rub vrtače nalazi se i špilja skromnih dimenzija.'
                    },
                    {
                        nameHr: 'Vidikovac Mrkodol',
                        nameEn: 'Mrkodol Viewpoint',
                        coordinates: [17.23069093844383, 43.61963259658108],
                        img: 'assets/img/vjetroparkMrkodol.jpg',
                        aboutEn:
                            'The Mesihovina wind park, located in a couple of Tomislavgrad villages (Bukovica, Mrkodol, Gornji Brisnik), is the first wind park to be built in BiH. The special feature of this wind farm is not in the electricity, but in the roads and paths that have enabled all the curious to further explore the beauties of Tomislavgrad. ',
                        aboutHr:
                            'Vjetropark Mesihovina koji se nalazi na lokaciji par tomislavgradskih sela (Bukovica, Mrkodol, Gornji Brišnik) je prvi vjetropark izgrađen u BiH. Posebnost ovog vjetroparka nije u električnoj energiji, nego u putevima i puteljcima koje su omogućili svima znatiželjnima da dodatno istraže ljepote Tomislavgrada s raznih vidikovaca.'
                    },
                    {
                        nameEn: 'Delminium on Mount Lib',
                        nameHr: 'Delminium na Libu',
                        coordinates: [17.311369191788106, 43.65199055522603],
                        img: '/assets/img/delminiumLib.jpg',
                        aboutEn:
                            'Mount Lib is one of the most important historical sites in Tomislavgrad (Duvno). The mountain itself looks like a wedge that was sharply driven into the Duvanjsko field, and the mountain offers a view of the same field, so we get the impression that the mountain Lib is the guardhouse of Duvno. This sounds even more convincing when we know that the capital of Delmata is located on Lib - Delminium - the guardian of all Delmats, the guardian of the Duvno Field. Delminium was described by Roman historians from whom we learn about the strength of this city and its citizens. Namely, Rome had to wage two wars in order to conquer this area and the city of Delminium itself.',
                        aboutHr:
                            'Planina Lib dom je jednog od najznačajnijih povijesnih lokaliteta Tomislavgrada (Duvna). Sama planina izgleda kao klin koji je oštro zabio u Duvanjsko polje, a s planine se pruža pogled na isto to polje, pa stječemo dojam da je planina Lib čuvarnica Duvna. Ovo nam zvuči još uvjerljivije kad znamo da se na Libu smjestio glavni grad Delmata - Delminium (Delminij) - čuvar svih Delmata, čuvar Duvanjskog polja. Delminium su opisali rimski povjesničari od kojih saznajemo o čvrstoći ovog grada i njegovih građana. Naime, Rim je morao povesti dva rata kako bi osvojio ovo područje te sam grad Delminium .'
                    },
                    {
                        coordinates: [17.2994273707524, 43.6839055811983],
                        nameEn: "Mandina gradina (Manda's hillfort)",
                        nameHr: 'Mandina gradina',
                        place: 'Raščani',
                        aboutEn:
                            "Mandina gradina (Manda's hillfort) is located next to the village of Raščani and Mandino selo near Lib and is considered one of the most important forts in Duvanjsko polje. The significance of this hillfort is not in the defensive sense, because at first glance we conclude that the position was bad for the defense. The significance of this fort is in the cult sense, namely it is believed that Manda's fort was a cult fort of the Delmats, a place where the Delmats performed their rituals and offered sacrifices to the gods. The wealth of archaeological finds supports all these theories, and the proximity of the Delminium itself also makes this fort important. According to the legend, the first Croatian king Tomislav was crowned on Duvanjsko polje, and according to the legend, Mandina gradina could be the place. ",
                        aboutHr:
                            'Mandina gradina nalazi se u selu Rašćani neposredno pored Mandinog sela te u blizini Liba. Smatra jednom od važnijih gradina na Duvanjskom polju. Značenje ove gradine nije u obrambenom smislu, jer na prvi pogled zaključujemo da je pozicija bila loša za obranu. Značenje ove gradine je u kultnom smislu, naime smatra se da je Mandina gradina bila kultna gradina Delmata, prostor na kojem su Delmati izvodili svoje rituale i prenosili žrtve bogovima. Bogatstvo arheoloških nalaza potkrepljuje sve ove teorije, a blizina samog Delminium također daje važnost ovoj gradini. Prema legendi na Duvanjskom polju je krunjen prvi Hrvatski kralj Tomislav, a Mandina gradina bi prema legendi upravo mogla biti to mjesto.<br><br>Godine 2021. Mandina gradina proglašena je nacionalnim spomenikom BiH.',
                        img: '/assets/img/mandinaGradina.jpg'
                    },
                    {
                        coordinates: [17.267336556206544, 43.74261455442339],
                        nameEn: 'Gradina (hillfort) and Roman road',
                        nameHr: 'Gradina i rimski put',
                        place: 'Letka',
                        aboutEn:
                            'The fort in Letka is one of the largest forts in the Duvanjsko polje fort system. It is believed to have been inhabited by the Illyrian and later the Roman population. Below the hillfort lies the old Roman road, and above it, like in Privala, are the remains of wheels carved into the rock. This hillfort was located on one of the roads leading to Rama, and the river Šujica flowed below it. ',
                        aboutHr:
                            'Gradina u Letki jedna je od najvećih gradina u sustavu gradina Duvanjskog polja. Smatra se da je bila nastanjena Ilirskim, a kasnije i Rimskim stanovništvom. Ispod gradine se prostire stari Rimski put, a iznad nje su kao na Privali u stijeni uklesani ostaci kotača. Ova gradina se nalazila na jednom od puteva koji su vodili prema Rami, a ispod nje je proticala rijeka Šujica.',
                        img: '/assets/img/gradinaLetka.jpg'
                    },
                    {
                        coordinates: [17.226949443618253, 43.77323265638181],
                        nameEn: 'Double gradina hillfort',
                        nameHr: 'Dvojna gradina',
                        place: 'Mokronoge',
                        aboutEn:
                            'Double gradina in Mokronoge is one of the most specific forts in the system in Duvanjsko polje. Namely, this fort is located above the canyon of the river Šujica, more precisely a large fort on the left part of the canyon, and a small one on the right part of the canyon of the river Šujica. The large and small forts served as guardhouses, but also as the entrance to the Duvanjsko polje. According to archaeologists, these two buildings were connected by a suspension bridge. ',
                        aboutHr:
                            'Dvojna gradina u Mokronoga je jedna od najspecifičniji gradina u sustavu gradina na Duvanjskom polju. Naime, ova gradina se nalazi iznad kanjona rijeke Šujice, točnije velika gradina na lijevoj dijelu kanjona, a mala na desnom dijelu kanjona rijeke Šujice. Velika i mala gradina su služile kao čuvarnice, ali kao i ulaz u Duvanjsko polje. Prema teorijam arheologa ove dvije gradne su bile povezane visećim mostom. ',
                        img: '/assets/img/dvojnaGradina.jpg'
                    },
                    {
                        nameHr: 'Tradicionalni ručak, peka ispod sača',
                        nameEn: 'Traditional lunch in Mokronoge',
                        coordinates: [17.224235944233836, 43.76459168101646],
                        img: 'assets/img/peka.jpg',
                        aboutHr:
                            'Sač je zvonolika je keramička ili željezna posuda za pečenje na otvorenom ognjištu. Na vrhu ima jednu ili dvije ručke; željezna je u obliku glatke kupole, a keramičkoj su dodani obruči za zadržavanje žeravice. Jelo (kruh, pogača, meso, krumpir i sl.), položeno na toplo tlo ognjišta ili u plitku tepsiju, prekriva se sač prethodno zagrijanom do užarenosti, koja se zatim prekriva žeravicom i toplim pepelom. U južnoj Panoniji i na Balkanu koristi se od pretpovijesti (neolitik). Uz upotrebu otvorenih ognjišta zadržala se u istočnoj Sloveniji, južnoj Mađarskoj, Rumunjskoj, Bugarskoj, Srbiji i Crnoj Gori, Bosni i Hercegovini i Italiji (dakle na područjima koja su nastanjivali Iliri). ',
                        aboutEn:
                            'Sač is a bell-shaped ceramic or iron vessel for baking on an open hearth. It has one or two handles at the top; the iron one is in the form of a smooth dome, and the ceramic one has rings added to contain the embers. The dish (bread, cake, meat, potatoes, etc.), placed on the warm floor of the hearth or in a shallow pan, is covered with a sach pre-heated until red-hot, which is then covered with embers and hot ashes. In southern Pannonia and the Balkans, it has been used since prehistoric times (Neolithic). With the use of open hearths, it remained in eastern Slovenia, southern Hungary, Romania, Bulgaria, Serbia and Montenegro, Bosnia and Herzegovina and Italy (therefore in the areas inhabited by the Illyrians).'
                    },
                    {
                        nameHr: 'Selimovića gradina',
                        nameEn: 'Selimovića hillfort',
                        coordinates: [17.22155864587528, 43.7267944398485],
                        img: '',
                        aboutHr: '',
                        aboutEn: ''
                    },
                    {
                        coordinates: [17.225871, 43.72188],
                        nameEn: 'Basilica and Franciscan Museum',
                        nameHr: 'Bazilika i franjevački muzej',
                        place: 'Tomislavgrad',
                        aboutEn:
                            'The memorial basilica in Tomislavgrad began construction in 1925 on the thousandth anniversary of the coronation of King Tomislav. According to legend, King Tomislav was crowned on Duvanjsko polje. The late Fr. Mijo Čuić, a visionary priest-friar, imagined a huge monument in the form of a church and a monastery that will forever remain a monument to the coronation of the first Croatian king. Along with this memorial basilica and monastery, there is also the Franciscan Museum, which through its permanent exhibitions hides the secret of living on the Duvanjsko polje for centuries. Inside the monastery itself, the remains of the Tomislavgrad mammoth are preserved, which are exhibited in diaramas, while the lapidary hides many secrets of Roman influence on the Duvanjsko polje. ',
                        aboutHr:
                            'Duvanjska bazilika smatra se glavnom gradskom atrakcijom. Ispred bazilike možete sjesti u lijepo uređenom parku i jednostavno uživati. Izvana je bazilika monumentalana, tlocrtno ima izgled pravilnoga križa, a iznad križa se izdiže prelijepa okrugla kupola. Izgradnja spomen bazilike u Tomislavgradu započeta je 1925. na tisućitu godinjicu krunidbe kralja Tomislava. Legendea kaće da je prvi hrvatski kralj Tomislav okrunjen na Duvanjskom polju prema čemu je pokojni fra. Mijo Čuić zamislio spomenik u vidu Crkve i samostana koji će za vijeke ostati spomen krunidbi prvog Hrvatskog kralja. Unutrašnjost bazilike krasi slika „Isus prijatelj malenih“ svjetski poznatog slikara Vlahe Bukovca.<br><br>Muzej, koji se nalazi uz crkvu, u svojoj postavi sadrži predmete iz dalje i bliže prošlosti te krije tajnu življenja na Duvanjskom polju vijekovima. Unutar samog samostana čuvaju se i ostaci Duvanjskog praslona koji su izloženi u dijarami, dok lapidarij krije mnoge tajne Rimskoga utjecaja na Duvanjsko polje.',
                        img: '/assets/img/crkvaTG.jpg'
                    }
                ]
            }
        },
        mokronoskiRibici: {
            type: 'Feature',
            geometry: {
                type: 'Point',
                zoom: '14.8',
                zoomMobile: '14.8',
                coordinates: [1916320.89, 5432769.14]
            },
            properties: {
                nameHr: 'Tura mokronoških ribiča',
                nameEn: "Mokronoge fisherman's tour",
                place: 'Mokronoge',
                path: '',
                duration: '6 h',
                dist: '1.9 km',
                dists: ['400 m', '500 m', '1 km'],
                aboutHr:
                    'Ovo je najposebnija tura koju će te naći u našoj ponudi. Gdje je njena posebnost? Prije svega posebnost je u tomu što rijetko tko osim mještana Mokronoga radi ovakav način hvatanja ribe. Ribe se hvataju „na ruke“, odnosno laganim pretraživanjem kamenja u kanjonu rijeke Šujice. Tura je posebna i po tome što se ovakav način hvatanja ne može izvoditi tokom cijele godine, nego samo u mjesecima kada vodostaj rijeke Šujice bude dovoljno nizak da je ona prohodna, a divlje pastrve se povlače prema šujičkom polju gdje je njihovo prirodno mrjestilište. <br><br>Turu ćemo započeti iznad kanjona rijeke Šujice čekajući da Sunce dovoljno ugrije rijeku. Polako ćemo se spustiti do dna kanjona, do rijeke Šujice, gdje će nas dočekati nevjerovatan prizor krške ponornice i njenih stijena obraslih mahovinom te sama rijeka koja se lagano vuče svojim tokom. Kad se spustimo u kanjon slijedi nam doručak od domaćih, tradicionalnih, organsko proizvedenih namirnica. Doručak će pratiti nevjerovatan prizor uspavane ljepotice koja se poput starice vuče kroz svoj kanjon umorno čekajući kada će pobjeći u podzemlje da se odmori.<br><br> Nakon doručka kreće prava avantura. Lagano se spuštamo niz rijeku i, uz našeg vodiča koji će vam prije toga sve detaljno objasniti, počinjemo pregledavati kamenje. Ovo neće biti samo ribička avantura nego i prava prirodoslovna avantura, jer ćemo upoznati cijelu raskoš flore i faune te netaknutkost prirode ovog kanjona. Zajednički ćemo se okušati u hvatanju ribe i nakon što prohodanmo određenim dijelom kanjona, stajemo i tu pravimo ručak od ulova. Riba koju uhvatimo ima poseban okus, okus koji će vas vraćati na svaki prethodni korak prijeđen ovim kanjonom, a pucketanje vatre i miris svježe pečene ribe okačene na štap neće nikoga ostaviti ravodušnim.<br><br> Ovom turom vraćamo se iskonskoj prirodi, tura koja zahtjeva od svih gostiju da ostave mobitele te da se u potpunosti stope s prirodom. Za ovu turu potrebno je ponijeti terensku obuću, jer je hodanje po skliskom kamenju dosta nezgodno.',
                aboutEn:
                    'This is the most special tour that you will find in our offer. Where is its specialty? First of all, it is special in that hardly anyone except the locals of Mokronoge does this kind of fishing. Fish are caught "with your hands", that is, by lightly searching under the stones in the canyon of the river Šujica. The tour is also special in that this type of fishing cannot be done all year round, but only in the months when the water level of the Šujica river is low enough to be passable, and the wild trout retreat to the Šujica field where their natural spawning ground is. <br><br>We will start the tour above the Šujica river canyon, waiting for the sun to warm the river enough. We will slowly descend to the bottom of the canyon where we will be greeted by an incredible sight of the karst sinking river and its moss-covered rocks, and the river itself, which is gently dragging its course. When we descend into the canyon, we will have a breakfast of local, traditional, organically produced foods. Breakfast will be accompanied by the incredible sight of a sleeping beauty who, like an old woman, drags herself through her canyon, tiredly waiting for when she will escape to the underground to rest.<br><br>  After breakfast, the real adventure starts. We slowly descend down the river and, accompanied by our guide who will explain everything to you in detail beforehand, we begin to examine the stones. This will not only be a fishing adventure, but also a real natural history adventure, because we will get to know the entire splendor of flora and fauna and the untouched nature of this canyon. Together we will try our hand at catching fish and after walking through a certain part of the canyon, we will stop and make lunch from the caught fish there. The fish we catch has a special taste, a taste that will take you back to every previous step taken through this canyon, and the crackling of the fire and the smell of freshly baked fish hanging on a stick will not leave anyone indifferent.<br><br> With this tour, we return to pristine nature, a tour that requires all guests to leave their cell phones behind and to completely merge with nature. For this tour, you need to bring field shoes, because walking on slippery stones is quite difficult.',
                img: '/assets/img/kanjonSujica.jpg',
                imgs: [],
                routeTypeId: 'guided',
                id: 'mokronoskiRibici',
                stops: [
                    {
                        nameHr: 'Početna točka',
                        nameEn: 'Starting point',
                        coordinates: [17.2142491397813, 43.79027226360852],
                        img: '../assets/img/kanjonSujica.jpg',
                        aboutEn:
                            'The canyon of the river Šujica stretches from the Šujica field all the way to the beginning of the Duvanjsko field near the village of Mokronoge. The canyon is a natural phenomenon cut by the river Šujica, eroding the surrounding rocks through thousands of years. The canyon is a home of many species of fish, especially the river trout, which in the summer days, when the river falls sharply, seeks the opportunity to cool off under the rocks.The locals use this fish instinct and catch the trout hands on hand. Walking through the canyon and we will find the remains of many mills where the local population earned and which were a lifeline from scarcity.',
                        aboutHr:
                            'Kanjoj rijeke Šujice proteže se od Šujičkog polja pa sve do početka Duvanjskog polja kod sela Mokronoge. Kanjon je prirodni fenomen kojeg je usjekla rijeka Šujica erodirajući okolne stijene kroz tisuće godina laganog probijanja terenom. Kanjon je dom raznim vrsama riba, a posebno se ističe riječna pastrva koja u ljetnim danima, kada tok rijeke uvelike opadne, traži priliku za hlađenje ispod stijena. Lokalno stanovništvo koristi ovaj riblji nagon te hvataju pastrvu „na ruke“. Hodajući kanjonom naći ćemo i ostatke mnogih mlinica na kojima je lokalno stanovništvo zarađivalo te koje su bile spas od oskudice.'
                    },
                    {
                        nameHr: 'Tradicionalni doručak',
                        nameEn: 'Traditional breakfast',
                        coordinates: [17.209963247357464, 43.79093272086447],
                        img: '../assets/img/traditionalBreakfast.jpg',
                        aboutEn:
                            'After descending into the canyon, we will have a breakfast of local, traditional, organically produced foods. Breakfast will be accompanied by the incredible scene of a sleeping beauty who drags herself through her canyon like an old woman, wearily waiting for when she will escape to the underground to rest.',
                        aboutHr:
                            'Po spuštanju u kanjon slijedi nam doručak od domaćih, tradicionalnih, organsko proizvedenih namirnica. Doručak će pratiti nevjerovatan prizor uspavane ljepotice koja se poput starice vuče kroz svoj kanjon umorno čekajući kada će pobjeći u podzemlje da se odmori'
                    },
                    {
                        nameHr: 'Hvatanje ribe „na ruke“',
                        nameEn: 'Bare hand fishing',
                        coordinates: [17.214407754189395, 43.788324793371466],
                        img: '../assets/img/mokronoskiRibici.jpg',
                        aboutEn:
                            'Although the concept of catching fish with bare hands in the water is simple, the preparation process is a bit more complicated. The choice of trout as prey is not arbitrary, but stems from the circumstances of its habitat, i.e. the circumstance that at low water levels the trout hides under stones. This is why the fisherman searches the bottom of the riverbed with his hand and looks for hiding places under the stones.',
                        aboutHr:
                            'Iako je koncept hvatanja ribe „na ruke“ u vodi jednostavan, proces pripreme je malo složeniji. Izbor pastrve kao plijena nije proizvoljan, već proizlazi iz okolnosti njenog staništa, tj. okolnosti da se za niskih vodostaja pastrva skriva ispod kamenja. Zbog toga ribič rukom pretražuje dno riječnog korita te traži skrovišta ispod kamenja.'
                    },
                    {
                        nameHr: 'Ručak od ulovljene ribe',
                        nameEn: 'Lunch of caught fish',
                        coordinates: [17.217584213599206, 43.78577312300987],
                        img: '../assets/img/mokronoskiRibici-rucak.jpg',
                        aboutEn:
                            'The fish we catch has a special taste, a taste that will take you back to every previous step taken through this canyon, and the crackling of the fire and the smell of freshly baked fish hanging on a stick will not leave anyone indifferent. ',
                        aboutHr:
                            'Riba koju uhvatimo ima poseban okus, okus koji će vas vraćati na svaki prethodni korak prijeđen ovim kanjonom, a pucketanje vatre i miris svježe pečene ribe okačene na štap neće nikoga ostaviti ravodušnim. '
                    }
                ]
            }
        },
        mijat: {
            type: 'Feature',
            geometry: {
                type: 'Point',
                zoom: '11.5',
                zoomMobile: '11',
                coordinates: [1933632.22, 5407862.34]
            },
            properties: {
                nameHr: 'Tura Mijata Tomića i hajdučke družine',
                nameEn: 'Mijat Tomić and Hajduks tour',
                place: '',
                path: '',
                duration: '6 h',
                dist: '56.3 km',
                dists: [
                    '3 km',
                    '6 km',
                    '16.5 km',
                    '300 m',
                    '16 km',
                    '7 km',
                    '2 km',
                    '500 m',
                    '5 km'
                ],
                aboutHr:
                    'Mijat Tomić je opjevana legenda narodne borbe i ustanka protiv Turaka u 17. stoljeću. Hajduci su borci za narodnu slobodu, ratnici koji se odmeću u planine i špilje i koji gerilskom borbom pokušavaju stati na kraj turskom zulumu koji je zahvatio Duvanjsko polje i sve njegove žitelje. Ovu turu počet ćemo u Gornjem Brišniku - rodnom mjestu legendarnog hajdučkog borca Mijata Tomića. Nakon posjete njegovom rodnom domu nastavit ćemo istim onim putem kojim je krenuo i Mijat kad se odmetnuo u hajduke i počeo se boriti protiv Turaka.<br><br>Najprije ćemo svratiti na vidikovac iznad sela Mrkodola te zastati na sekundu i doživjeti svu veličinu i snagu Duvanjskog polja. Nako ovoga spustit ćemo se prema Bukovičkoj pećini u kojoj su se hrabri kršćani, unatoč zabrane služenja misa, sakupljali te tako riskirali svoj život da bi očuvali svoju vjeru i svoj narod. Nakon Bukovice otići ćemo i do Kongore vidjeti mjesto koje je nekoć bilo sjedište Duvanjskih begova Kopčića, ali i mjesto u kojem se Mijat tomić krio od istih tih begova. Ovdje ćemo i stati te pojesti slasna jela spravljena na tradicionalni način u konobi Kamin. <br><br>Nakon toga put će nas odvesti do parka prirode Blidinja i njegovog nevjerovatnog ledenjačkog jezera koje samo po sebi oduzima dah svim prolaznicima. Svratit ćemo i do stećaka na Dugom polju i pokazati glavno skrovište Mijata Tomića i njegovih hrabrih hajduka. Tu ćemo se upoznati s legendom o smrti Mijata Tomića i izdaje unutar njegovih redova. Nakon toga nam slijedi ručak u Hajdučkim vrletima, restoranu koji je na najblji način dočarao prirodni ambijent s ukusnom hranom. Nakon ručka posjetit ćemo Risovac i napiti se Mijatove vode, izvora kojeg je Mijat obožavao i kod kojeg je često bio. U blizini izvora se nalazi i Franjevačka crkva prepuna lijepih reljefa i motiva koja će nas podsjetiti kako i u ovakvom kraju na nadmorskoj visini od preko 1200m katolička vjera uz pomoć Mijata Tomića i ratobornih hajduka nikada nije zastala i da će se ona uvijek boriti za ono dobro u svim ljudima.',
                aboutEn:
                    'Mijat Tomić is a legend of the people’s struggle against the Turks in the 17th century. Hajduci (plural for Hajduk) are fighters for people’s freedom, warriors who retreat into the mountains and caves and who try to put an end to the Turkish tyranny that engulfed the Duvanjsko Field and all its inhabitants with guerilla warfare. We will start this tour in Gornji Brišnik - the birthplace of the legendary Hajduk fighter Mijat Tomić. <br><br> After visiting his birthplace, we will continue on the same path that Mijat took when he rebelled and started fighting against the Turks. First, we will stop at the viewpoint above the village of Mrkodol and stop for a second to experience all the greatness and power of the Duvanjsko Field. After this, we will descend towards the Bukovička cave, where brave Christians, despite the ban on mass, gathered and thus risked their lives to preserve their faith and their people. After Bukovica, we will go to Kongora to see the place that was once the seat of the Kopčić, Duvno beys, but also the place where Mijat Tomić hid from those same beys. We will stop here and eat delicious dishes prepared in the traditional way in the Kamin tavern. <br><br> After that, the road will take us to the nature park Blidinje and its incredible glacial lake, which in itself takes the breath away of all passers-by. We will also stop by the monumental medieval tombstones (hrv. stećak) on the Dugo Field and show the main hiding place of Mijat Tomić and his brave bandits. There we will learn about the legend of Mijat Tomić’s death and betrayal within his ranks. After that, we will have lunch at Hajdučke Vrleti, a restaurant that evokes the natural environment with delicious food in the closest way. After lunch, we will visit Risovac and drink Mijat’s water, a spring that Mijat adored and visited often. Near the spring there is also a Franciscan church full of beautiful reliefs and motifs that will remind us that even in such an area at an altitude of over 1200m, the Catholic faith, with the help of Mijat Tomić and the warlike Hajduci, has never stopped and that it will always fight for the good in to all people.',
                img: '/assets/img/mijatTomic.jpg',
                imgs: [],
                routeTypeId: 'guided',
                id: 'mijat',
                stops: [
                    {
                        nameHr: 'Rodna kuća Mijata Tomića',
                        nameEn: "Mijat Tomić's birthplace",
                        coordinates: [17.210014350336415, 43.6294253179042],
                        img: '../assets/img/mijatTomic.jpg',
                        aboutEn:
                            'Mijat Tomić (Gornji Brišnik, 1610? – Doljani near Jablanica, July 20, around 1656) was a Croatian hajduk. Along with Andrijica Šimić, he is one of the most famous Herzegovinian Hajduk Harambas. The first printed and published information about Tomić’s origin is given by friar Filip Grabovac (1698 - 1749) in his work "Cvit narodna i jezika iliričkog aliti arvackog" (engl. The Flower of Conversation of Illyrian or Croatian People and Language), Venice, 1747. In that work he states:<br>"... just want to mention that after Tomić Mijat from Duvno, there was no real ajduk and there will never be. The aforementioned perished around the first year of the peace of Kandia, Ilija Bobovac of Doljan betrayed him: his would-be godfather killed him. He died shortly before the harvest."',
                        aboutHr:
                            'Mijat Tomić (Gornji Brišnik, 1610. ? – Doljani kod Jablanice 20. srpnja oko 1656.) bio je hrvatski hajduk. Uz Andrijicu Šimića jedan je od najpoznatijih hercegovačkih hajdučkih harambaša. Prve tiskane i objavljene podatke o Tomićevom podrijetlu navodi fra Filipa Grabovca (1698. – 1749.) u svom djelu „Cvit razgovora naroda i jezika iliričkoga aliti arvackoga“, Venecija, 1747. U tom djelu navodi:<br><br>„…samo ovo oću spomenuti, kako posli Tomića Mijata iz Duvna nije bilo već pravoga ajduka ni će već biti. Rečeni poginu oko prvi godina mira od Kandije, izdade ga Bobovac Ilija od Doljana: njegov bi kum, sapelo ga. Pogibe malo prije žetve.“'
                    },
                    {
                        nameHr: 'Vidikovac Mrkodol',
                        nameEn: 'Mrkodol Viewpoint',
                        coordinates: [17.23069093844383, 43.61963259658108],
                        img: 'assets/img/vjetroparkMrkodol.jpg',
                        aboutEn:
                            'The Mesihovina wind park, located in a couple of Tomislavgrad villages (Bukovica, Mrkodol, Gornji Brisnik), is the first wind park to be built in BiH. The special feature of this wind farm is not in the electricity, but in the roads and paths that have enabled all the curious to further explore the beauties of Tomislavgrad. ',
                        aboutHr:
                            'Vjetropark Mesihovina koji se nalazi na lokaciji par tomislavgradskih sela (Bukovica, Mrkodol, Gornji Brišnik) je prvi vjetropark izgrađen u BiH. Posebnost ovog vjetroparka nije u električnoj energiji, nego u putevima i puteljcima koje su omogućili svima znatiželjnima da dodatno istraže ljepote Tomislavgrada s raznih vidikovaca.'
                    },
                    {
                        coordinates: [17.262405289239247, 43.61181817391158],
                        nameEn: 'Bukovička Cathedral',
                        nameHr: 'Bukovačka katedrala',
                        place: 'Bukovica',
                        aboutEn:
                            'The Bukovica Cathedral is a cave with a large opening where holy masses were celebrated during the Ottoman rule. A kind of altar cut in the stone wall of the cave has been preserved under the stone vault of that building. <br><br> The Bukovica Cathedral served as a place of worship for a long time and holy sacraments were distributed in it to thousands of people, until a brick parish church was built nearby.<br><br> About twenty years ago, then pastor Fr. Marko Jurič renewed the service in the Bukovica Cathedral in memory of the tradition and martyrs of that region. Every year in the month of August, a holy mass is celebrated in the cave, to which many people from Duvno area come. <br><br> It is also interesting that the cars of numerous gastarbeiters, for whom Tomislavgrad is known and who spend the summer months in their hometown, are also blessed at that mass.<br><br>In the past, the locals used the water from the cave to run three mills, and a few years ago, the locals and the then pastor Fr. Jozo Radoš reconstructed and built a new mill in the same form with all accompanying facilities.',
                        aboutHr:
                            'Bukovička katedrala je špilja s velikim otvorom u kojoj su se služile svete mise za vrijeme osmanske vladavine. Svojevrsni oltar usječen u kamenom zidu špilje sačuvan je sve do poraća pod kamenim svodom te građevine. <br><br> Bukovička katedrala dugo je služila kao bogomolja i u njoj su podijeljeni sveti sakramenti tisućama ljudi, sve dok u blizini nije sagrađena zidana župna crkva.<br><br> Prije dvadesetak godina, tadašnji župnik fr. Marko Jurič obnovio je bogoslužje u Bukovičkoj katedrali u spomen na tradiciju i mučenike toga kraja. Svake godine u mjesecu kolovozu u špilji se služi sveta misa na koju dolaze brojni Duvnjaci. <br><br> Zanimljivo je i to da se na toj misi blagoslivljaju i automobili brojnih "gastarbajtera" po kojima je Tomislavgrad poznat, a koji ljetne mjesece provode u rodnom gradu. <br><br>U prošlosti su mještani koristili vodu iz špilje za pokretanje tri mlinice, a prije nekoliko godina mještani i tadašnji župnik fra. Jozo Radoš rekonstruirao je i izgradio novi mlin u istom obliku sa svim popratnim sadržajima.',
                        img: '/assets/img/bukovackaKatedrala.jpg'
                    },
                    {
                        nameHr: 'Tradicionalni objed u Kongori',
                        nameEn: 'Traditional meal in Kongora',
                        coordinates: [17.32672674004935, 43.649294637028376],
                        img: '../assets/img/traditionalBreakfast.jpg',
                        aboutEn:
                            'We will stop here and eat delicious dishes prepared in the traditional way in the Kamin tavern.',
                        aboutHr:
                            'Ovdje ćemo i stati te pojesti slasna jela spravljena na tradicionalni način u konobi Kamin. '
                    },
                    {
                        nameHr: 'Begovi Kopčić',
                        nameEn: 'Kopčić beys',
                        coordinates: [17.326707508300128, 43.64749524050349],
                        img: '../assets/img/kopcici.jpg',
                        aboutEn:
                            'The Kopčić family were a Herzegovinian Muslim bey family from the area of Rama, now part of the municipality of Prozor-Rama in northern Herzegovina. Their possessions extended to the areas of today’s municipalities of Prozora-Rama and Tomislavgrad. <br><br> Kopčić Beys already in the first half of the 16th century had a respectable place among the Turkish nobility in Bosnia and Herzegovina. The friars of Rama were accused of being the main culprits of the Christian people rebellions. High fines were imposed on them, and they were exposed to Ottoman arbitrariness. Stojan Janković, following their vow to free them, broke into Duvno in 1687 and succeeded in freeing the Rama friars, along with a large number of their parishioners. They took with them the image of Our Lady of Sinj, and settled in Sinj in 1692.<br> Later, the Kopčićs had good relations with certain Catholic bishops, allowed their visits to their territory, and even invited them. They even attended church ceremonies. The Bishop of Makarska, Nikola Biankovich, accompanied by his secretary Federico Maroli and others, visited Duvno in 1710 to celebrate confirmation and mass. The Kopčić beys provided them with protection to carry out their mission without hindrance.',
                        aboutHr:
                            'Kopčići su bili hercegovački muslimanski begovski rod s područja Rame, sada u sastavu općine Prozor-Rama u sjevernoj Hercegovini. Posjedi su im se protezali na područja današnjih općina Prozora-Rame i Tomislavgrada. <br><br> Begovi Kopčići već su u prvoj polovici 16. stoljeća imali ugledno mjesto među turskom vlastelom u Bosni i Hercegovini. Ramski fratri bili su optuživani da su glavni krivci za pobune raje. Nametnute su im visoke globe, te su bili izloženi osmanskoj samovolji. Stojan Janković je, slijedivši njihov zavjet da ih oslobodi, 1687. provalio u Duvno i uspio osloboditi ramske fratre, s većim brojem njihovih župljana. Oni su sa sobom ponijeli i sliku Gospe Sinjske, te se 1692. nastanili u Sinj.<br><br>Kasnije su Kopčići imali dobre odnose s pojedinim katoličkim biskupima, dopuštali njihove vizitacije na svom području, i štoviše, pozivali ih. Čak su i prisustvovali crkvenim obredima. Makarski biskup Nikola Biankovich, u društvu svog tajnika Federica Marolija i drugih, posjetio je Duvno 1710., kako bi održao krizmu i misu. Kopčići su im pružili zaštitu da bez smetnji izvrše svoju misiju.'
                    },
                    {
                        coordinates: [17.49330384665067, 43.60688218540923],
                        nameEn: 'Blidinje Lake',
                        nameHr: 'Blidinjsko jezero',
                        place: 'Blidinje',
                        aboutEn:
                            'Blidinje Lake is the largest mountain lake in Bosnia and Herzegovina. It is a protected geomorphological natural monument within the Blidinje Nature Park. It is located in Dugo polje (Long field) between Čvrsnica and Vran mountains.<br><br>The lake is 1183 meters above sea level. Its area varies from 2.5 to 6 square kilometers. The greatest depth of the lake is 4.5 meters, and the largest part is about one meter deep. There are no surface streams leading to and from the lake. Water comes into the lake with precipitation and seepage from the surrounding mountains of Vran and Čvrsnic, mainly through spring snowmelt. In summer, a large part of the water disappears through evaporation and runoff through sinkholes, which causes a significant drop in the lake level. The estimated water losses from the lake are high considering the small volume and amount to 10 mm/day. From the southern side of the lake, the water flows eastward through the abyss in Ivan Doc and rises again at the dam in Grabovica and Neretva. The remains of the moraine point to the glacial origin of the lake, but according to documents from the parish of Poklečani, the rainwater went through the sinkholes and did not stay in the field, so thanks to the anthropogenic intervention of herders who closed the sinkholes, the lake rose about 200 meters. a lake was created. In May 1940, water found its way to the abyss, but in the meantime it was closed again. The lake has been stocked several times with fish from Buško lake<br><br>In the winter months, the lake is mostly frozen over.<br><br>The lake is home to the endemic fish oštrul (Aulopyge huegelii), whiting, chub and non-native rainbow trout. The lake has been stocked several times with fish from Lake Buška, namely bream, chub and rainbow trout.',
                        aboutHr:
                            'Blidinjsko jezero je najveće planinsko jezero u Bosni i Hercegovini. Zaštićeni je geomorfološki spomenik prirode u sastavu Parka prirode Blidinje. Smješteno je na Dugom polju između planina Čvrsnice i Vrana.<br><br>Jezero je na 1183 metara nadmorske visine. Površina mu varira od 2,5 do 6 kilometra četvornih. Najveća dubina jezera je 4,5 metra, a najvećim dijelom je dubine od jednog metra. Nema površinskih tokova koji vode do i od jezera. Voda u jezero dolazi s padalinama i procjeđivanjem vode s okolnih planina Vrana i Čvrsnice, ponajviše s proljetnim otapanjem snijega. Ljeti veliki dio vode nestaje isparavanjem i otjecanjem kroz ponore zbog čega znatno opadne razina jezera. Procijenjeni gubici vode iz jezera su veliki s obzirom na malu zapreminu i iznose 10 mm/dan. Na južnoj strani jezera voda kroz ponor u Ivan Docu otječe prema istoku i ponovno izvire kod brane u Grabovici i Neretve. Ostaci morena upućuju na glacijalni nastanak jezera, no prema dokumentima iz župe Poklečani oborinska voda je odlazila kroz ponore i nije se zadržavala na polju pa je zahvaljujući antropogenoj intervenciji stočara koji su zatvorili ponore oblikovano jezero. U svibnju 1940. voda je pronašla put do ponora, ali jlifornijska pastrva. Jezero je nekoliko puta poribljavano ribom iz Buškog jezera, i to oštre on ponovno zatvoren.<br><br>U zimskim mjesecima jezero je uglavnom zaleđeno.<br><br>U jezeru obitava endemska riba oštrulja (Aulopyge huegelii), bjelica, klen i alohtona kalifornijska pastrva. Jezero je nekoliko puta poribljavano ribom iz Buškog jezera, i to oštruljom, klenom te kalifornijskom pastrvom.',
                        img: '/assets/img/blidinjskoJezero.jpg'
                    },

                    {
                        coordinates: [17.543139058977108, 43.66331383294742],
                        nameEn: 'Necropolis Dugo Polje (engl. Long Field)',
                        nameHr: 'Nekropola Dugo Polje',
                        place: 'Blidinje',
                        aboutEn:
                            'The Dugo Polje necropolis in Blidinje is on the list of 30 medieval stećak necropolises that were declared a UNESCO World Heritage Site in 2016. The necropolis occupies an area of 90 x 36 m. It consists of 150 stećaks. Of these, 72 are slabs, 59 crates, 14 high crates, 4 gables with a base and 1 gable without a base. All stećci are carved from limestone from a nearby quarry. As a decorative motif, rosettes with four, five or more leaves are the most common. The cross motif appears 19 times, in four cases stylized, and in one case as a double cross. An interesting combination of motifs on one stećak represents one of the peculiarities of the necropolis - two arms of the cross end as an anchor, and two as trefoil lilies. The crescent moon appears 16 times, most often in combination with a rosette and is regularly plastic. A shield with a sword appears in three places, and a lone sword in one. Two shields are decorated with heraldic signs - rosettes or diagonal stripes with lilies. The motif of the sickle also appears.<br><br>Five hunting scenes, two tournaments, two round dances (one female and one mixed) are included in the figural plays. Tournaments are on foot, with maces and swords. Women appear in pairs on three monuments. In one place, three women together, in long dresses and without arms, are depicted with carved contours. In two places, one woman appears with a dog and the other alone, with her long arms raised high. A doe with a raised head and a horse are depicted on two stećaks. A lonely hand also appears once. The most interesting figural representations include a scene with a fantastic animal, most likely representing a winged horse with a snake.',
                        aboutHr:
                            'Nekropola Dugo polje na Blidinju nalazi se na listi 30 srednjovjekovnih nekropola stećaka koje su 2016. godine proglašene Svjetskom baštinom UNESCO-a. Nekropola zauzima površinu od 90 x 36 m. Sastoji se od 150 stećaka. Od toga 72 su ploče, 59 sanduci, 14 visoki sanduci, 4 sljemenjaka sa podnožjem i 1 sljemenjak bez podnožja. Svi stećci su klesani od krečnjaka sa obližnjeg kamenoloma. Kao ukrasni motiv najzastupljenije su rozete sa četiri, pet i više listova. Motiv križa se pojavljuje 19 puta, u četiri slučaja stiliziran, a u jednom kao dvostruki križ. Zanimljiva kombinacija motiva na jednom stećku predstavlja jednu od osobenosti nekropole - dva kraka križa se završavaju kao sidro, a dva kao trolisni ljiljani. Polumjesec se pojavljuje 16 puta, najčešće u kombinaciji sa rozetom i redovno je plastičan. Na tri mjesta pojavljuje se štit sa mačem, a na jednome usamljen mač. Dva štita su ukrašena heraldičkim znacima – rozete ili dijagonalne pruge sa ljiljanima. Pojavljuje se i motiv srpa.<br><br>U figuralne predstave spada pet scena lova, dvije turnira, dva kola (jedno žensko i jedno mješovito). Turniri su pješački, sa buzdovanima i mačevima. Žene se javljaju u paru na tri spomenika. Na jednom mjestu su urezanim konturama prikazane tri žene zajedno, u dugim haljinama i bez ruku. Na dva mjesta se pojavljuje po jedna žena sa psom i druga sama, sa visoko uzdignutim dugim rukama. Srna sa podignutom glavom i konj prikazani su na dva stećka. Jedanput se pojavljuje i usamljena ruka. U najzanimljivije figuralne prikaze spada scena sa fantastičnom životinjom, najvjerojatnije predstavlja krilatog konja sa zmijom.',
                        img: '/assets/img/stecciDugoPolje.jpg'
                    },
                    {
                        coordinates: [17.527275407860202, 43.6531305789841],
                        nameEn: "Mijat Tomić's cave",
                        nameHr: 'Pećina Mijata Tomića',
                        place: 'Blidinje',
                        aboutEn:
                            'The cave of Hajduk Mijat Tomić is located in Dugo polje, at the foot of the Vran mountain and is interesting both historically and for the fauna that lives there. It was and remains the subject of numerous speleological investigations and analyses. According to legend, Mijat Tomić lived in these parts in the middle of the 17th century, and marked the ancient past of these parts with his heroism and fearlessness. Legend has it that the cave has an exit to the other end of Vran, towards Rama.',
                        aboutHr:
                            'Pećina Hajduka Mijata Tomića nalazi se na Dugom polju, u podnožju planine Vran, u neposrednoj blizini restorana Hajdučke Vrleti, i zanimljiva je kako povijesno, tako i faunom koja u njoj obitava. Bila je i ostala predmet brojnih speleoloških istraživanja i analiza. Prema legendi, Mijat Tomić je boravio u ovim krajevima sredinom 17. stoljeća, i svojim junaštvom i neustrašivošću je obilježio davnu prošlost ovih krajeva. Legenda kaže da pećina ima izlaz na drugi kraj Vrana, prema Rami.',
                        img: '/assets/img/pecinaMijataTomica.jpg'
                    },
                    {
                        coordinates: [17.532945, 43.653143],
                        nameEn: "Hajdučke vrleti (engl. Hajduk's crags)",
                        nameHr: 'Hajdučke vrleti',
                        place: 'Blidinje',
                        aboutEn:
                            "Hotel-restaurant located in the center of Mijat Tomić's Republic of Hajduks, recognized throughout the region for its traditional Herzegovinian cuisine and homely atmosphere.",
                        aboutHr:
                            'Hotel-restoran smješten u središtu Hajdučke republike Mijata Tomića, prepoznatiljv širom regije po tradicionalnoj hercegovačkoj kuhinji i domaćinskoj atmosferi.',
                        img: '/assets/img/hajduckeVrleti.jpg'
                    },
                    {
                        coordinates: [17.54686049877876, 43.629847511176145],
                        nameEn: 'Masna Luka (engl. Fatty Port)',
                        nameHr: 'Masna Luka',
                        place: 'Blidinje',
                        aboutEn:
                            'A mountain pearl at the foot of Čvrsnica, with the beautiful church of St. Ilije, which ideally fits into that natural environment, is certainly one of the most beautiful places in the Blidinje Nature Park. This part is characterized by a great wealth of pine and fir forest, and is rich with several sources of drinking water. The managed nature reserve Masna Luka, as the largest European habitat of the endemic munika pine, is the perfect place to rest the soul and body and completely surrender to nature. Here you have the opportunity to visit the Franciscan gallery with rich works of art from this area or to enjoy one of the sources of drinking water, the most famous of which is the Jasla spring.',
                        aboutHr:
                            'Planinski biser u podnožju Čvrsnice, s prekrasnom crkvom sv. Ilije koja se idealno uklopila u taj prirodni ambijent, čini zasigurno jedno od najljepših mjesta u Parku prirode Blidinje. Ovaj dio se odlikuje velikim bogatstvom borove i jelove šume, te je bogat s nekoliko izvora pitke vode. Upravljani prirodni rezervat Masna Luka, kao najveće europsko stanište endemskog bora munike, čini savršeno mjesto za odmor duše i tijela, i potpuno prepuštanje prirodi. Ovdje imate mogućnost posjetiti franjevačku galeriju s bogatim umjetninama ovoga područja ili pak uživati uz jedan od izvora pitke vode, od kojih je svakako najpoznatije vrelo Jasle.',
                        img: '/assets/img/masnaLuka.jpg'
                    }
                ]
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
