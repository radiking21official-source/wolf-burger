# LOOP_STATE — Wolf Burger hiánypótlás

Ág: `claude/wolf-burger-menu-homepage-dd4ada` (csak branch, nincs merge/deploy).
Igazolás minden feladatra: statikus szerver + böngészős ellenőrzés (asztali + mobil), konzol-hibák nélkül.

## Terv (feladat-sor)
| # | Feladat | Fájlok | Státusz |
|---|---------|--------|---------|
| 1 | Eyebrow: vonal MINDKÉT oldalon + nagyobb betű (minden oldal) | style.css | todo |
| 2 | Rólunk: duplikált cím megszüntetése (rolunk.html, index about) | rolunk.html, index.html | todo |
| 3 | Rólunk érték-kártyák: teljes fa/raklap hatás | theme.css/style.css | todo |
| 4 | Étlap-adatok: Tépett tál 6990, Vargányás ki, Burn 🌶 ki, limonádé ÚJ ki, menu_sub (köret + káposztasaláta + ital) | menu-data.js, i18n.js | todo |
| 5 | Termékoldal: vesszős összetevő-szöveg törlése | site.js | todo |
| 6 | Árak helyszínen / felár: frappáns szöveg mindenhol + pop-up index és étlap között | i18n.js, site.js, main.js, css, html-ek | todo |
| 7 | Szövegek: galéria cím/alcím, exp_sub („itt telik"), fűtött terasz ki (sörkert + szolgáltatások), HU+EN | i18n.js, html-ek | todo |
| 8 | Mobil hero: cím → videó → „Rendelj online" alul | index.html, style.css | todo |
| 9 | YouTube link a főoldalon | index.html, i18n.js | todo (link kell) |
| 10 | Itallap képek/logók: Horizont, üveges sörök, röviditalok, Panyolai | agent + menu-data.js, site.js, css | todo |
| 11 | Cache-buster (?v=17), végső böngészős QA, README/Hand of Fire, commit + push ág | mind | todo |

## Napló
- (üres)

## Blokkolt
- (üres)

## Fingerprint
- utolsó commit: 3cdd701 (induláskor tiszta worktree)

## Napló (1. kör)
- 1,2,3 done: eyebrow két oldali vonal + nagyobb betű; Rólunk dupla cím megszüntetve (h1 „Rólunk" vonalakkal); fa/raklap érték-kártyák (böngészőben ellenőrizve).
- 4,5 done: Tépett tál 6990, Vargányás ki, Burn/limonádé jelzés ki, menu_sub; termékoldalon vesszős összetevő-szöveg ki.
- 6 done: ár-tájékoztató sor (index, étlap, itallap, termék) + notice.js pop-up (index↔étlap váltáskor; reloadra nem); ellenőrizve.
- 7 done: galéria cím/alcím, exp_sub, fűtött terasz ki (HU+EN).
- 8 kód kész, mobil böngészős ellenőrzés még hátra.
- 9: nincs YouTube-link a projektben/neten → assets/js/youtube.js-ben kitöltendő (szekció rejtve, amíg üres).
- 10: háttér-ágens tölti a képeket; bekötés még hátra.
