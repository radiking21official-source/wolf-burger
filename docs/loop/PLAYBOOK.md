# PLAYBOOK — Wolf Burger

- Statikus HTML/CSS/JS, nincs build. Szerver: `python -m http.server 8777` a worktree gyökerében.
- Minden szöveg `data-i18n` + `assets/js/i18n.js` (hu/en). Új szöveg → mindkét nyelv.
- Az alap-oldalak a `?v=16` cache-buster-t használják a CSS/JS-nél; módosítás után mindenhol `?v=17`.
- Menü/itallap adat: `assets/js/menu-data.js`. A főoldal `main.js`-t, az aloldalak `site.js`-t töltik — megosztott logikát (pop-up) mindkettőbe, vagy külön új fájlba (`notice.js`) kell tenni.
- Munkaterület-szabály: csak ebben a worktree-ben írunk; a védett testvér-projektekhez nem nyúlunk.
- Ha egy külső kép nem szerezhető be megbízhatóan → ne találj ki helyette semmit, jelöld blokkoltnak.
