/* ============================================================
   WOLF BURGER — full menu data (source of truth)
   Prices from official price list "Étlap 2026.07"
   Nutrition + allergens from official "Kalória táblázat" (2026.09)
   b = burger price, m = menu price (Ft)
   nutri = per portion grams [fat, sat, carb, sugar, fiber, protein, salt]
   tags: new | vega | hot | kid
   ============================================================ */
window.WB_MENU = {
  categories: [
    { id: "burgerek",  hu: "Burgerek",   en: "Burgers" },
    { id: "koretek",   hu: "Köretek",    en: "Sides" },
    { id: "falatkak",  hu: "Falatkák",   en: "Bites" },
    { id: "desszert",  hu: "Desszert",   en: "Dessert" },
    { id: "extrak",    hu: "Extrák",     en: "Extras" }
  ],

  items: {
    burgerek: [
      { name:"Classic burger", b:3990, m:6340, img:"assets/img/menu/classic-burger.jpg", thumb:"assets/img/menu/classic-burger.jpg", kcal:938, macros:[39,48,64], nutri:[47.5,27.0,64.0,7.9,0.7,38.9,2.0], allergens:"GLUTÉN, LAKTÓZ, TOJÁS, SZEZÁMMAG, MUSTÁRMAG",
        hu:"Buci, classic majonéz, saláta, marhahús pogácsa (18 dkg), paradicsom, csemege uborka.",
        en:"Bun, classic mayo, lettuce, beef patty (180 g), tomato, pickles." },
      { name:"Sajtburger", b:4090, m:6440, img:"assets/img/menu/sajt-burger.jpg", thumb:"assets/img/menu/sajt-burger.jpg", kcal:909, macros:[42,50,72], nutri:[49.7,25.7,72.1,16.4,1.1,41.9,3.3], allergens:"GLUTÉN, LAKTÓZ, TOJÁS, SZEZÁMMAG, MUSTÁRMAG",
        hu:"Buci, ketchup, friss lilahagyma kocka, marhahús pogácsa (18 dkg), cheddar sajt, csemege uborka.",
        en:"Bun, ketchup, fresh red onion, beef patty (180 g), cheddar, pickles." },
      { name:"BBQ burger", b:4690, m:6940, tags:["hot"], img:"assets/img/menu/bbq-burger.jpg", thumb:"assets/img/menu/bbq-burger.jpg", kcal:1132, macros:[49,60,100], nutri:[60.1,31.0,100.4,40.9,1.8,48.6,3.7], allergens:"GLUTÉN, LAKTÓZ, TOJÁS, SZEZÁMMAG, ZELLER",
        hu:"Buci, BBQ szósz, marhahús pogácsa (18 dkg), füstölt sajt, bacon, lilahagyma lekvár.",
        en:"Bun, BBQ sauce, beef patty (180 g), smoked cheese, bacon, red onion jam." },
      { name:"Camembert-es vega burger", b:3990, m:6340, tags:["vega"], img:"assets/img/menu/camembert-burger.jpg", thumb:"assets/img/menu/camembert-burger.jpg", kcal:822, macros:[31,34,98], nutri:[33.9,23.5,97.7,43.1,0.7,30.6,4.1], allergens:"GLUTÉN, LAKTÓZ, TOJÁS, SZEZÁMMAG",
        hu:"Buci, vörösáfonya lekvár, rukkola, grillezett camembert sajt, grillezett ananász karika.",
        en:"Bun, cranberry jam, rocket, grilled camembert, grilled pineapple ring." },
      { name:"Wolf burger", b:4890, m:7140, tags:["hot"], img:"assets/img/menu/wolf-burger.jpg", thumb:"assets/img/menu/wolf-burger.jpg", featured:true, kcal:1230, macros:[45,61,95], nutri:[60.8,31.9,95.1,33.1,2.3,45.0,3.4], allergens:"GLUTÉN, LAKTÓZ, TOJÁS, SZEZÁMMAG, MUSTÁR, MUSTÁRMAG",
        hu:"Buci, wolf majonéz, saláta, marhahús pogácsa (18 dkg), cheddar, bacon, paradicsom, csemege uborka, lilahagyma lekvár, jalapeño.",
        en:"Bun, wolf mayo, lettuce, beef patty (180 g), cheddar, bacon, tomato, pickles, red onion jam, jalapeño." },
      { name:"Smash burger", b:4890, m:7140, img:"assets/img/menu/smash-burger.jpg", thumb:"assets/img/menu/smash-burger.jpg", featured:true, kcal:1286, macros:[54,76,72], nutri:[75.9,40.1,71.8,13.6,1.8,53.7,4.8], allergens:"GLUTÉN, LAKTÓZ, TOJÁS, SZEZÁMMAG",
        hu:"Buci, csemegeuborkás burgerszósz, friss lilahagyma, 2 vékony ropogósra sütött marhapogácsa (2×9 dkg), pirított vöröshagyma, 4 szelet cheddar, 2 szelet bacon.",
        en:"Bun, pickle burger sauce, fresh red onion, 2 crispy smashed beef patties (2×90 g), roasted onion, 4 slices cheddar, 2 slices bacon." },
      { name:"Csirkés burger", b:4690, m:6940, img:"assets/img/menu/csirkes-burger.jpg", thumb:"assets/img/menu/csirkes-burger.jpg", kcal:704, macros:[59,20,68], nutri:[19.8,7.4,68.3,14.0,1.3,58.7,4.0], allergens:"GLUTÉN, LAKTÓZ, TOJÁS, SZEZÁMMAG",
        hu:"Buci, joghurtos BBQ szósz, saláta, szuvidált fűszeres csirkecomb filé, paradicsom.",
        en:"Bun, yoghurt BBQ sauce, lettuce, sous-vide spiced chicken thigh fillet, tomato." },
      { name:"„Főnök kedvence” burger", b:4890, m:7140, tags:["hot","new"], img:"assets/img/menu/fonok-kedvence-burger.jpg", thumb:"assets/img/menu/fonok-kedvence-burger.jpg", featured:true, kcal:1324, macros:[43,70,94], nutri:[70.2,36.7,93.5,31.4,2.0,43.3,6.3], allergens:"GLUTÉN, LAKTÓZ, TOJÁS, SZEZÁMMAG",
        hu:"Buci, wolf majonéz, friss lilahagyma, jalapeño, 1 vékony ropogós marhapogácsa (9 dkg), 4 szelet cheddar, 4 szelet bacon, lilahagyma lekvár.",
        en:"Bun, wolf mayo, fresh red onion, jalapeño, 1 crispy smashed beef patty (90 g), 4 slices cheddar, 4 slices bacon, red onion jam." },
      { name:"Csirke nuggets burger", b:3390, m:5840, img:"assets/img/menu/nuggets-burger.jpg", thumb:"assets/img/menu/nuggets-burger.jpg", kcal:712, macros:[22,22,82], nutri:[21.8,7.8,81.6,8.8,0.6,21.6,2.8], allergens:"GLUTÉN, LAKTÓZ, TOJÁS, SZEZÁMMAG",
        hu:"Buci, classic majonéz, saláta, csirke nuggets (4 db).",
        en:"Bun, classic mayo, lettuce, chicken nuggets (4 pcs)." },
      { name:"Mini burger gyerekeknek", b:1990, m:3740, tags:["kid"], img:"assets/img/menu/mini-burger.jpg", thumb:"assets/img/menu/mini-burger.jpg", kcal:480, macros:[22,27,36], nutri:[26.5,14.0,36.4,7.8,0.5,22.2,1.6], allergens:"GLUTÉN, LAKTÓZ, TOJÁS",
        hu:"Mini buci, ketchup, mini marhahús pogácsa (9 dkg), cheddar sajt.",
        en:"Mini bun, ketchup, mini beef patty (90 g), cheddar cheese." },
      { name:"Smash tál", b:6190, img:"assets/img/menu/smash-tal.jpg", thumb:"assets/img/menu/smash-tal.jpg", kcal:2249, macros:[57,133,125], nutri:[132.5,58.9,124.7,16.7,3.6,57.2,5.2], allergens:"GLUTÉN, LAKTÓZ, TOJÁS, MUSTÁRMAG",
        hu:"Hasábburgonya, smash szósz, csemege uborka, paradicsom, lilahagyma, 2 vékony ropogós marhapogácsa (2×9 dkg), pirított vöröshagyma, 4 szelet cheddar, 2 szelet bacon, snidling.",
        en:"Fries, smash sauce, pickles, tomato, red onion, 2 crispy smashed beef patties (2×90 g), roasted onion, 4 slices cheddar, 2 slices bacon, chives." },
      { name:"Cheddar sajtszószos burgonyatál", b:4590, tags:["hot"], img:"assets/img/menu/cheddar-burgonyatal.jpg", thumb:"assets/img/menu/cheddar-burgonyatal.jpg", kcal:1615, macros:[26,109,100], nutri:[108.5,28.3,100.4,4.8,0.6,26.0,7.0], allergens:"GLUTÉN, LAKTÓZ, TOJÁS, MUSTÁR",
        hu:"„V” alakú fűszeres héjas burgonyacikk, házi cheddar sajtszósz, wolf majonéz, pirított szárított hagyma, bacon chips, jalapeño, snidling.",
        en:"„V”-cut spiced potato wedges, house cheddar sauce, wolf mayo, crispy onion, bacon chips, jalapeño, chives." }
    ],

    koretek: [
      { name:"Hasábburgonya", b:1290, img:"assets/img/menu/hasabburgonya.jpg", thumb:"assets/img/menu/hasabburgonya.jpg", kcal:676, macros:[7,41,67], nutri:[41.3,11.5,67.3,0.8,0.0,6.5,0.1], hu:"Klasszikus ropogós hasábburgonya.", en:"Classic crispy fries." },
      { name:"Fűszeres, héjas steak burgonya", b:1290, img:"assets/img/menu/fuszeres-hejas-burgonya.jpg", thumb:"assets/img/menu/fuszeres-hejas-burgonya.jpg", kcal:524, macros:[5,33,49], nutri:[33.3,4.3,49.3,1.8,6.5,5.0,1.6], hu:"Fűszerezett, héjában sült steak burgonya.", en:"Spiced skin-on steak potatoes." },
      { name:"„V” alakú héjas burgonyacikk", b:1390, img:"assets/img/menu/v-burgonya.jpg", thumb:"assets/img/menu/v-burgonya.jpg", kcal:626, macros:[6,39,61], nutri:[38.8,4.8,61.3,1.3,0.0,6.3,1.0], hu:"Ropogós, „V” alakú héjas burgonyacikk.", en:"Crispy „V”-cut skin-on potato wedges." },
      { name:"Édesburgonya hasáb", b:1590, img:"assets/img/menu/edesburgonya.jpg", thumb:"assets/img/menu/edesburgonya.jpg", kcal:681, macros:[4,46,58], nutri:[46.3,5.8,57.5,24.5,10.5,3.8,1.1], hu:"Édesburgonyából sült ropogós hasáb.", en:"Crispy sweet potato fries." },
      { name:"Amerikai káposztasaláta", b:690, img:"assets/img/menu/kaposztasalata.jpg", thumb:"assets/img/menu/kaposztasalata.jpg", kcal:354, allergens:"TOJÁS, MUSTÁR, KÁLIUM-METABISZULFIT", hu:"Fejeskáposzta, lilakáposzta, sárgarépa, vöröshagyma, majonéz.", en:"White cabbage, red cabbage, carrot, onion, mayo (coleslaw)." }
    ],

    falatkak: [
      { name:"Sajtfalatka válogatás", b:890, b2:1490, unit:"3 db", unit2:"6 db", img:"assets/img/menu/sajtfalatka.jpg", thumb:"assets/img/menu/sajtfalatka.jpg", kcal:229, macros:[7,16,13], nutri:[16.3,4.8,13.3,3.0,1.9,6.5,1.0], allergens:"GLUTÉN, LAKTÓZ, MUSTÁR, SZÓJA, TEJ",
        hu:"Cheddar sajtfalat chilipaprikával fekete bundában, fűszeres mozzarella rúd, habanero paprikás sajtfalat piros bundában.",
        en:"Cheddar bites with chilli in black coating, spiced mozzarella sticks, habanero cheese bites in red coating." },
      { name:"Hagymakarikák", b:890, b2:1490, unit:"5 db", unit2:"10 db", img:"assets/img/menu/hagymakarika.jpg", thumb:"assets/img/menu/hagymakarika.jpg", kcal:251, macros:[3,17,23], nutri:[16.8,2.2,23.2,3.1,1.8,2.8,0.6], allergens:"GLUTÉN",
        hu:"Ropogós, bundázott hagymakarikák.", en:"Crispy battered onion rings." },
      { name:"Csirke nuggets", b:890, b2:1490, unit:"3 db", unit2:"6 db", img:"assets/img/menu/csirke-nuggets.jpg", thumb:"assets/img/menu/csirke-nuggets.jpg", kcal:191, macros:[10,11,13], nutri:[11.1,1.4,13.4,0.7,0.0,10.0,0.7], allergens:"GLUTÉN",
        hu:"Ropogós csirke nuggets.", en:"Crispy chicken nuggets." }
    ],

    desszert: [
      { name:"Churros", b:1390, img:"assets/img/menu/churros.jpg", thumb:"assets/img/menu/churros.jpg", kcal:175, macros:[4,1,37], nutri:[0.5,0.0,37.1,6.3,2.1,4.3,0.9], allergens:"GLUTÉN, MUSTÁR, SZÓJA", hu:"Fahéjas cukorral, csokoládé öntettel.", en:"With cinnamon sugar and chocolate sauce." }
    ],

    extrak: [
      { name:"Laktózmentes sajt", b:150, hu:"Csere esetén ingyenes.", en:"Free when swapped." },
      { name:"Gluténmentes buci", b:490, hu:"", en:"" },
      { name:"Teljes kiőrlésű vegán buci", b:490, tags:["vega"], hu:"", en:"" },
      { name:"Marhahús pogácsa", b:1790, hu:"", en:"" },
      { name:"Fél marhahús pogácsa", b:1090, hu:"", en:"" },
      { name:"Bacon (2 szelet)", b:790, hu:"", en:"" },
      { name:"Jalapeño", b:390, tags:["hot"], hu:"", en:"" },
      { name:"Camembert sajt", b:1290, hu:"", en:"" },
      { name:"1 szelet sajt", b:150, hu:"", en:"" },
      { name:"Szószok", b:650, hu:"Classic majonéz, konfitált fokhagymás majonéz, ketchup, BBQ, édes chili, bivalyerős chili.",
        en:"Classic mayo, confit garlic mayo, ketchup, BBQ, sweet chilli, extra-hot chilli." }
    ]
  },

  /* ============================================================
     ITALLAP / SÖRKERT — hivatalos "Sörkert" dokumentum (2026.09)
     size = [egység, ár]; brand = márka-azonosító a csapolt söröknél
     ============================================================ */
  drinks: {
    cats: [
      { id:"csapolt",       hu:"Csapolt sörök",       en:"Draught beers" },
      { id:"uveges",        hu:"Üveges sörök",         en:"Bottled beers" },
      { id:"rovid",         hu:"Röviditalok",          en:"Spirits" },
      { id:"palinka",       hu:"Prémium pálinkák",     en:"Premium pálinka" },
      { id:"froccs",        hu:"Fröccsök",             en:"Wine spritzers" },
      { id:"alkoholmentes", hu:"Alkoholmentes italok", en:"Soft drinks" },
      { id:"kave",          hu:"Kávék",                en:"Coffee" },
      { id:"snack",         hu:"Ropogtatnivalók",      en:"Snacks" }
    ],
    notes: {
      froccs:  { hu:"Varga Ház Bora — Olaszrizling és Rozé.", en:"Varga House wine — Olaszrizling & Rosé." }
    },
    items: {
      csapolt: [
        { name:"Carlsberg", brand:"Carlsberg", bc:"#0f7b3f", sizes:[["0,3 l",790],["0,5 l",1190]] },
        { name:"Tuborg", brand:"Tuborg", bc:"#0a67b3", sizes:[["0,3 l",790],["0,5 l",1190]] },
        { name:"Budweiser", brand:"Budweiser", bc:"#b5121b", sizes:[["0,3 l",990],["0,5 l",1390]] },
        { name:"1664 Blanc", brand:"1664 Blanc", bc:"#2a6cc9", sizes:[["0,3 l",990],["0,5 l",1390]],
          hu:"Franciás, koriander-narancsos búzasör.", en:"French coriander-orange wheat beer." },
        { name:"Horizont IPA", brand:"Horizont", bc:"#e0632b", sizes:[["0,3 l",1090],["0,5 l",1690]], tags:["new"],
          hu:"Kézműves, komlós IPA.", en:"Hoppy craft IPA." },
        { name:"Belle Vue Kriek", brand:"Belle Vue", bc:"#9c1f3a", sizes:[["0,3 l",1190],["0,5 l",1890]],
          hu:"Belga meggyes sör.", en:"Belgian cherry lambic." }
      ],
      uveges: [
        { name:"Budweiser 0.0%", brand:"Budweiser", bc:"#b5121b", sizes:[["0,33 l",1090]],
          hu:"Alkoholmentes.", en:"Alcohol-free." },
        { name:"Somersby", brand:"Somersby", bc:"#1f8a3b", sizes:[["0,33 l",1090]],
          hu:"Almás cider.", en:"Apple cider." }
      ],
      rovid: [
        { name:"Jägermeister", sizes:[["2 cl",590],["4 cl",990]] },
        { name:"Unicum", sizes:[["2 cl",690],["4 cl",1090]] },
        { name:"Finlandia vodka", sizes:[["2 cl",590],["4 cl",990]] },
        { name:"Beefeater gin", sizes:[["2 cl",690],["4 cl",1090]] },
        { name:"Jameson whiskey", sizes:[["2 cl",790],["4 cl",1390]] },
        { name:"Sierra tequila silver", sizes:[["2 cl",790],["4 cl",1390]] }
      ],
      palinka: [
        { name:"Panyolai elixír – birsalma", sizes:[["2 cl",1490],["4 cl",2690]] },
        { name:"Panyolai elixír – fürtös meggy", sizes:[["2 cl",1390],["4 cl",2490]] },
        { name:"Panyolai elixír – kajszibarack", sizes:[["2 cl",1590],["4 cl",2990]] }
      ],
      froccs: [
        { name:"Kisfröccs", sizes:[["1 dl bor, 1 dl szóda",450]] },
        { name:"Nagyfröccs", sizes:[["2 dl bor, 1 dl szóda",850]] },
        { name:"Hosszúlépés", sizes:[["1 dl bor, 2 dl szóda",500]] },
        { name:"Sportfröccs", sizes:[["1 dl bor, 4 dl szóda",600]] },
        { name:"Viceházmester", sizes:[["2 dl bor, 3 dl szóda",950]] },
        { name:"Házmester", sizes:[["3 dl bor, 2 dl szóda",1300]] },
        { name:"Háziúr", sizes:[["4 dl bor, 1 dl szóda",1650]] }
      ],
      alkoholmentes: [
        { name:"Házi limonádé", sizes:[["3 dl",790],["5 dl",990]], tags:["new"],
          hu:"Több ízben — kérdezd a pultnál.", en:"Several flavours — ask at the counter." },
        { name:"Coca-Cola termékek", sizes:[["0,5 l",890]] },
        { name:"NaturAqua ásványvíz", sizes:[["0,5 l",620]] },
        { name:"Cappy gyümölcslevek", sizes:[["0,33 l",890]] },
        { name:"Burn energiaital", sizes:[["0,2 l",590]], tags:["hot"], hu:"18+", en:"18+" },
        { name:"Szóda", sizes:[["0,1 l",50]] }
      ],
      kave: [
        { name:"Espresso", sizes:[["",690]] },
        { name:"Cappuccino", sizes:[["",890]] },
        { name:"Caffè latte", sizes:[["",890]] }
      ],
      snack: [
        { name:"Nógrádi ropi", sizes:[["45 g",400]] },
        { name:"Mogyi földimogyoró", sizes:[["70 g",600]] },
        { name:"Lay's chips – snidlinges-tejfölös", sizes:[["60 g",900]] },
        { name:"Lay's chips – chilis-limeos", sizes:[["55 g",900]] }
      ]
    }
  }
};
