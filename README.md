# Wolf Burger — weboldal (látványterv)

Modern, sötét arculatú, kétnyelvű (HU/EN) egyoldalas weboldal a szigethalmi Wolf Burger étteremhez.
Statikus HTML/CSS/JS — nincs build lépés, bármilyen böngészőben megnyitható.

## Indítás
- Egyszerű megnyitás: kattints az `index.html`-re.
- A nyelvváltás és a menü helyes működéséhez érdemes helyi szerverrel futtatni:
  ```bash
  python -m http.server 8777
  ```
  majd nyisd meg: http://localhost:8777/index.html

## Mit tartalmaz
- **Hero** parallax háttérrel, animált CTA-kkal (Étlap / Rendelés) és Wolt + Foodora chipekkel
- **Marquee** (mozgó USP sáv)
- **Rólunk** — a valós történet, értékek, statisztikák, bontott burger fotó
- **Kiemelt burgerek** — 3 fotós kártya (Wolf, Smash, „Főnök kedvence")
- **Étlap** — 9 kategóriás, fülekkel váltható teljes menü minden árral (a hivatalos „Étlap 2026.07" alapján), tagekkel (ÚJ / VEGA / CSÍPŐS / GYEREK) + letölthető étlap PNG
- **Rendelés** — Wolt és Foodora kártyák, közvetlen linkekkel
- **Galéria** — masonry rács, lightbox (nyilazható, ESC-re zár)
- **Ajándékutalvány** — 3.000 / 5.000 / 10.000 Ft + a valós szabályok
- **Szolgáltatások + fizetési módok**
- **Elérhetőség** — cím, telefon, e-mail, nyitvatartás, közösségi linkek, kapcsolati űrlap, Google Maps
- **Footer** + cookie sáv + „vissza a tetejére" gomb
- **Jogi oldalak**: `pages/impresszum.html`, `pages/adatvedelem.html`, `pages/aszf.html`
- **Kétnyelvűség** (HU/EN), a választás localStorage-ban megőrizve
- **Scroll animációk** (reveal), reszponzív mobil menü, SEO alap (meta, Open Graph, JSON-LD Restaurant séma)

## Fájlszerkezet
```
index.html
favicon.png
assets/
  css/style.css
  js/menu-data.js   (a teljes menü — itt szerkeszd az ételeket/árakat)
  js/i18n.js        (HU/EN szövegek)
  js/main.js        (interakciók, renderelés)
  img/              (logó + fotók; menu/etlap-2026-07.png a teljes étlap)
pages/
  impresszum.html
  adatvedelem.html
  aszf.html
```

## Arculat
- Márkaszín: **cián #12BAE7** · háttér: **#0d0d0f** · szöveg: fehér
- A logót és a fotókat a jelenlegi wolfburger.hu / hivatalos étlap alapján vettük át
  (a logó a menüről kinyerve, átlátszó háttérre kulcsolva: `assets/img/logo.png`)
- Betűk: Anton (display), Barlow Condensed (címkék), Barlow (szöveg) — Google Fonts

## Fontos, élesítés előtt ellenőrizendő
1. **Nyitvatartás** — jelenleg becsült (H–Cs 11:30–21:00, P–Szo 11:30–22:00, V 11:30–21:00).
   A források eltérnek (Foodora 11:30–19:30) — kérlek pontosítsd az `index.html` „Elérhetőség" szekciójában és az i18n-ben.
2. **Impresszum** — a jelenlegi oldalról importált adatok (Farkas Balázs, 28808938 stb.); ellenőrizd és pótold a tárhelyszolgáltatót.
3. **Adatvédelem / Cookie & ÁSZF** — minta szövegek, jogi átnézés ajánlott.
4. **Kapcsolati űrlap** — jelenleg csak látványterv (nem küld e-mailt). Élesítéskor kösd be
   egy backendre vagy szolgáltatásra (pl. Formspree), hogy az info@wolfburger.hu-ra érkezzen.
5. **Cím** — a főoldalon Dunasor 63.; az impresszumban a hrsz. (4171) is szerepel.

## Testreszabás
- Ételek/árak: `assets/js/menu-data.js`
- Szövegek/fordítás: `assets/js/i18n.js`
- Színek/tipográfia: `assets/css/style.css` (`:root` tokenek)

---

## Frissítések — v2 bővítés

### Új oldalak
- **`sorkert.html`** — külön Sörkert oldal (hero, bemutatkozás, jellemzők, csapolt sörök + fröccsök a menü-adatból, CTA). A headerben külön **„Sörkert"** fül, cián/meleg kiemeléssel.
- **`termek.html?id=<slug>`** — dinamikus termék-aloldal MINDEN termékhez. Bal oldalt nagy kép, jobbra: kategória, név, 🌶️/VEGA/ÚJ jelölés, ár (+menüár), leírás, **összetevők chipek**, **tápérték táblázat** (kcal + fehérje/zsír/szénhidrát), Wolt/Foodora rendelés gombok, és kapcsolódó termékek.
- **`sitemap.xml`** — automatikusan generált, tartalmazza a fő oldalakat + mind az 57 termékoldalt.

### Étlap = kártyás nézet
Az étlap minden terméke most **kártya**: nagy kép, alul név + ár. Hoverre (mobilon tapra) a kártya feljebb emelkedik és megjelennek a **hozzávalók** + egy **„Részletek"** jel; a kártyára kattintva a termék saját aloldalára jutsz. Fotó nélküli tételeknél (üdítők, kávé stb.) márkázott placeholder + kategória-ikon.

### 3 hangulat (színkombináció) — jobb alsó paletta gomb
- **Jeges** — az eredeti cián + fekete (alap)
- **Naplemente** — cián megtartva + meleg borostyán/narancs, melegebb sötét alap
- **Tűz & fa** — cián + parázs narancs/piros + **fa-textúrás szegélyek** a boxokon, kandalló-hangulat
A választott hangulat megjegyződik (localStorage), és **megosztható linkkel** is: `?theme=1|2|3` (pl. `index.html?theme=3`).

### Egyéb
- A „csípős" jelölés mostantól **🌶️ paprika ikon** a szöveg helyett (étlap, kártyák, termékoldal, jelmagyarázat).
- Cache-busting: az asset hivatkozások `?v=3` verzióval. Élesítéskor/új verziónál növeld a számot.

> Tipp: a színkombinációk összehasonlításához küldd el ezeket a linkeket: `index.html?theme=1`, `index.html?theme=2`, `index.html?theme=3`.
