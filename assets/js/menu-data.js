/* ============================================================
   WOLF BURGER — full menu data (source of truth)
   Prices from official price list "Étlap 2026.07"
   b = burger price, m = menu price (Ft)
   tags: new | vega | hot | kid
   ============================================================ */
window.WB_MENU = {
  categories: [
    { id: "burgerek",  hu: "Burgerek",   en: "Burgers" },
    { id: "koretek",   hu: "Köretek",    en: "Sides" },
    { id: "falatkak",  hu: "Falatkák",   en: "Bites" },
    { id: "desszert",  hu: "Desszert",   en: "Dessert" },
    { id: "italok",    hu: "Üdítők",     en: "Soft drinks" },
    { id: "sorok",     hu: "Sörök",      en: "Craft beers" },
    { id: "froccsok",  hu: "Fröccsök",   en: "Wine spritzers" },
    { id: "kavek",     hu: "Kávék",      en: "Coffee" },
    { id: "extrak",    hu: "Extrák",     en: "Extras" }
  ],

  items: {
    burgerek: [
      { name:"Classic burger", b:3990, m:6340, thumb:"assets/img/hero-portrait.jpg", pos:"center bottom", kcal:640, macros:[32,34,52],
        hu:"Buci, classic majonéz, saláta, marhahús pogácsa, paradicsom, csemege uborka.",
        en:"Bun, classic mayo, lettuce, beef patty, tomato, pickles." },
      { name:"Sajtburger", b:4090, m:6440, thumb:"assets/img/bacon-burger.jpg", kcal:710, macros:[36,40,53],
        hu:"Buci, ketchup, friss lilahagyma kocka, marhahús pogácsa, cheddar sajt, csemege uborka.",
        en:"Bun, ketchup, fresh red onion, beef patty, cheddar, pickles." },
      { name:"BBQ burger", b:4690, m:6940, tags:["hot"], thumb:"assets/img/fourcheese-burger.jpg", pos:"center bottom", kcal:820, macros:[42,46,58],
        hu:"Buci, BBQ szósz, marhahús pogácsa, füstölt sajt, bacon, lilahagyma lekvár.",
        en:"Bun, BBQ sauce, beef patty, smoked cheese, bacon, red onion jam." },
      { name:"Camembert-es vega burger", b:3990, m:6340, tags:["vega"], thumb:"assets/img/camembert-burger.jpg", kcal:690, macros:[24,38,64],
        hu:"Buci, vörösáfonya lekvár, rukkola, grillezett camembert sajt, grillezett ananász karika.",
        en:"Bun, cranberry jam, rocket, grilled camembert, grilled pineapple ring." },
      { name:"Wolf burger", b:4890, m:7140, tags:["hot"], img:"assets/img/bacon-burger.jpg", thumb:"assets/img/bacon-burger.jpg", featured:true, kcal:940, macros:[46,54,60],
        hu:"Buci, wolf majonéz, saláta, marhahús pogácsa, cheddar, bacon, paradicsom, csemege uborka, lilahagyma lekvár, jalapeño.",
        en:"Bun, wolf mayo, lettuce, beef patty, cheddar, bacon, tomato, pickles, red onion jam, jalapeño." },
      { name:"Smash burger", b:4890, m:7140, img:"assets/img/food-spread.jpg", thumb:"assets/img/food-spread.jpg", pos:"center bottom", featured:true, kcal:1040, macros:[52,64,58],
        hu:"Buci, csemegeuborkás burgerszósz, friss lilahagyma, 2 vékony ropogósra sütött marhapogácsa, pirított vöröshagyma, 4 szelet cheddar, 2 szelet bacon.",
        en:"Bun, pickle burger sauce, fresh red onion, 2 crispy smashed beef patties, roasted onion, 4 slices cheddar, 2 slices bacon." },
      { name:"Csirkés burger", b:4690, m:6940, img:"assets/img/chicken-burger.jpg", thumb:"assets/img/chicken-burger.jpg", kcal:780, macros:[40,36,66],
        hu:"Buci, joghurtos BBQ szósz, saláta, szuvidált fűszeres csirkecomb filé, paradicsom.",
        en:"Bun, yoghurt BBQ sauce, lettuce, sous-vide spiced chicken thigh fillet, tomato." },
      { name:"„Főnök kedvence” burger", b:4890, m:7140, tags:["hot","new"], img:"assets/img/fonok-burger.jpg", thumb:"assets/img/fonok-burger.jpg", pos:"center bottom", featured:true, kcal:1150, macros:[58,72,60],
        hu:"Buci, wolf majonéz, friss lilahagyma, jalapeño, 1 vékony ropogós marhapogácsa, 4 szelet cheddar, 4 szelet bacon, lilahagyma lekvár.",
        en:"Bun, wolf mayo, fresh red onion, jalapeño, 1 crispy smashed beef patty, 4 slices cheddar, 4 slices bacon, red onion jam." },
      { name:"Csirke nuggets burger", b:3390, m:5840, thumb:"assets/img/chicken-burger.jpg", kcal:620, macros:[28,28,58],
        hu:"Buci, classic majonéz, saláta, csirke nuggets.",
        en:"Bun, classic mayo, lettuce, chicken nuggets." },
      { name:"Mini burger gyerekeknek", b:1990, m:3740, tags:["kid"], thumb:"assets/img/hero-portrait.jpg", pos:"center bottom", kcal:360, macros:[16,16,34],
        hu:"Mini buci, ketchup, mini marhahús pogácsa, cheddar sajt.",
        en:"Mini bun, ketchup, mini beef patty, cheddar cheese." },
      { name:"Smash tál", b:6190, thumb:"assets/img/food-spread.jpg", pos:"center bottom", kcal:1380, macros:[62,84,96],
        hu:"Bőséges smash tál a Wolf ízeivel – tökéletes megosztva is.",
        en:"Generous smash platter with the Wolf flavours – perfect for sharing." },
      { name:"Cheddar sajtszószos burgonyatál", b:4590, tags:["hot"], img:"assets/img/fries.jpg", thumb:"assets/img/fries.jpg", kcal:1240, macros:[30,78,102],
        hu:"„V” alakú fűszeres héjas burgonyacikk, házi cheddar sajtszósz, wolf majonéz, pirított szárított hagyma, bacon chips, jalapeño, snidling.",
        en:"„V”-cut spiced potato wedges, house cheddar sauce, wolf mayo, crispy onion, bacon chips, jalapeño, chives." }
    ],

    koretek: [
      { name:"Hasábburgonya", b:1290, kcal:380, hu:"Klasszikus ropogós hasábburgonya.", en:"Classic crispy fries." },
      { name:"Fűszeres, héjas steak burgonya", b:1290, kcal:410, hu:"Fűszerezett, héjában sült steak burgonya.", en:"Spiced skin-on steak potatoes." },
      { name:"„V” alakú héjas burgonyacikk", b:1390, kcal:430, hu:"Ropogós, „V” alakú héjas burgonyacikk.", en:"Crispy „V”-cut skin-on potato wedges." },
      { name:"Édesburgonya hasáb", b:1590, kcal:360, hu:"Édesburgonyából sült ropogós hasáb.", en:"Crispy sweet potato fries." },
      { name:"Amerikai káposztasaláta", b:690, kcal:180, hu:"Káposzta, sárgarépa, hagyma, majonéz.", en:"Cabbage, carrot, onion, mayo (coleslaw)." }
    ],

    falatkak: [
      { name:"Sajtfalatka válogatás", b:890, b2:1490, unit:"3 db", unit2:"6 db", kcal:320,
        hu:"Cheddar sajtfalat chilipaprikával fekete bundában, fűszeres mozzarella rúd, habanero paprikás sajtfalat piros bundában.",
        en:"Cheddar bites with chilli in black coating, spiced mozzarella sticks, habanero cheese bites in red coating." },
      { name:"Hagymakarikák", b:890, b2:1490, unit:"5 db", unit2:"10 db", img:"assets/img/onion-rings.jpg", thumb:"assets/img/onion-rings.jpg", kcal:350,
        hu:"Ropogós, bundázott hagymakarikák.", en:"Crispy battered onion rings." },
      { name:"Csirke nuggets", b:890, b2:1490, unit:"3 db", unit2:"6 db", kcal:290,
        hu:"Ropogós csirke nuggets.", en:"Crispy chicken nuggets." }
    ],

    desszert: [
      { name:"Churros", b:1390, kcal:450, hu:"Fahéjas cukorral, csokoládé öntettel.", en:"With cinnamon sugar and chocolate sauce." }
    ],

    italok: [
      { name:"Házi limonádé", b:790, b2:990, unit:"3 dl", unit2:"5 dl", tags:["new"],
        hu:"Többféle ízben, cukormentesen is. Aktuális ízekért érdeklődj a pultnál!",
        en:"Several flavours, sugar-free option too. Ask at the counter for today's flavours!" },
      { name:"Coca-Cola termékek 0,5 l", b:890, hu:"", en:"" },
      { name:"NaturAqua ásványvíz 0,5 l", b:620, hu:"", en:"" },
      { name:"NaturAqua emotion 0,5 l", b:720, hu:"", en:"" },
      { name:"Cappy gyümölcslevek 0,33 l", b:890, hu:"", en:"" },
      { name:"Burn energiaital 0,25 l", b:590, tags:["hot"], hu:"18+ – 18 éven aluliaknak nem adható ki.", en:"18+ only." },
      { name:"Kubu gyümölcslé 0,3 l", b:790, hu:"", en:"" },
      { name:"Szóda 0,1 l", b:50, hu:"", en:"" }
    ],

    sorok: [
      { name:"Világos köleses sör – csapolt", b:990, b2:1490, unit:"3 dl", unit2:"5 dl",
        hu:"Jászdózsai Sörfőzde – Bandusz által.", en:"Jászdózsa Brewery – by Bandusz." },
      { name:"Laza morál – session IPA, csapolt", b:1090, b2:1690, unit:"3 dl", unit2:"5 dl", tags:["new"],
        hu:"Szent András Sörfőzde.", en:"Szent András Brewery." },
      { name:"Meggyes sör – csapolt", b:null,
        hu:"Beertailor Sörfőzde. Áráért érdeklődj a pultnál.", en:"Beertailor Brewery. Ask at the counter." },
      { name:"Búza sör – csapolt", b:null,
        hu:"Beertailor Sörfőzde. Áráért érdeklődj a pultnál.", en:"Beertailor Brewery. Ask at the counter." },
      { name:"Alkoholmentes „majdnem pilsner” 0,33 l", b:1090,
        hu:"Szent András Sörfőzde – üveges.", en:"Szent András Brewery – bottled." }
    ],

    froccsok: [
      { name:"Boraink (Nyakas Irsai Olivér / Rosé)", b:600, hu:"Választható fehér vagy rosé.", en:"White or rosé to choose." },
      { name:"+ Szóda", b:50, hu:"", en:"" },
      { name:"Kisfröccs", b:650, hu:"1 dl bor, 1 dl szóda.", en:"1 dl wine, 1 dl soda." },
      { name:"Nagyfröccs", b:1250, hu:"2 dl bor, 1 dl szóda.", en:"2 dl wine, 1 dl soda." },
      { name:"Hosszúlépés", b:700, hu:"1 dl bor, 2 dl szóda.", en:"1 dl wine, 2 dl soda." },
      { name:"Sportfröccs", b:800, hu:"1 dl bor, 4 dl szóda.", en:"1 dl wine, 4 dl soda." },
      { name:"Viceházmester", b:1350, hu:"2 dl bor, 3 dl szóda.", en:"2 dl wine, 3 dl soda." },
      { name:"Házmester", b:1900, hu:"3 dl bor, 2 dl szóda.", en:"3 dl wine, 2 dl soda." },
      { name:"Háziúr", b:2450, hu:"4 dl bor, 1 dl szóda.", en:"4 dl wine, 1 dl soda." }
    ],

    kavek: [
      { name:"Espresso", b:690, hu:"", en:"" },
      { name:"Hosszúkávé", b:690, hu:"", en:"" },
      { name:"Cappuccino", b:890, hu:"", en:"" },
      { name:"Caffè latte", b:890, hu:"", en:"" }
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
  }
};
