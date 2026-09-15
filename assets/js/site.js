/* ============================================================
   WOLF BURGER — site.js
   Shared logic for sub-pages (termek.html, sorkert.html):
   i18n, lang switch, nav, cookie, back-to-top, year,
   product-detail render, sörkert drink render.
   ============================================================ */
(function () {
  "use strict";
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };
  function fmt(n) { return (n === null || n === undefined) ? "—" : n.toLocaleString("hu-HU") + " Ft"; }
  function el(t, c, h) { var e = document.createElement(t); if (c) e.className = c; if (h !== undefined) e.innerHTML = h; return e; }
  function slugify(s) {
    return s.toLowerCase()
      .replace(/[áàâ]/g, "a").replace(/[éèê]/g, "e").replace(/[íî]/g, "i")
      .replace(/[óòôöő]/g, "o").replace(/[úùûüű]/g, "u")
      .replace(/[„”"'’]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
  }

  var LANG = localStorage.getItem("wb_lang") || "hu";
  var I18N = window.WB_I18N || { hu: {}, en: {} };
  var MENU = window.WB_MENU;
  var CAT_EMOJI = { burgerek: "🍔", koretek: "🍟", falatkak: "🧀", desszert: "🍩", italok: "🥤", sorok: "🍺", froccsok: "🍷", kavek: "☕", extrak: "➕" };

  function tagBadge(t) {
    if (t === "hot") return '<span class="tag tag--chili" title="' + (LANG === "en" ? "Spicy" : "Csípős") + '">🌶️</span>';
    var map = { "new": ["tag--new", "ÚJ", "NEW"], vega: ["tag--vega", "VEGA", "VEG"], kid: ["tag--kid", "GYEREK", "KIDS"] };
    var m = map[t]; if (!m) return "";
    return '<span class="tag ' + m[0] + '">' + (LANG === "en" ? m[2] : m[1]) + '</span>';
  }

  function applyI18n() {
    var d = I18N[LANG] || {};
    $$("[data-i18n]").forEach(function (n) { var k = n.getAttribute("data-i18n"); if (d[k] !== undefined && d[k] !== "") n.textContent = d[k]; });
    if (d.doc_title_sub && document.body.getAttribute("data-page") === "sorkert") document.title = d.doc_title_sub;
    document.documentElement.lang = LANG;
    $$(".lang button").forEach(function (b) { b.classList.toggle("active", b.getAttribute("data-lang") === LANG); });
  }
  function setLang(l) {
    LANG = l; localStorage.setItem("wb_lang", l); applyI18n();
    if ($("#productDetail")) renderProduct();
    if ($("#beerList")) renderDrinks();
  }

  /* ---------- Product detail ---------- */
  function findItem(id) {
    var res = null;
    if (!MENU) return null;
    MENU.categories.forEach(function (cat) {
      (MENU.items[cat.id] || []).forEach(function (it) {
        if (slugify(it.name) === id) res = { it: it, cat: cat };
      });
    });
    return res;
  }
  function ingChips(desc) {
    if (!desc) return "";
    var parts = desc.replace(/\.$/, "").split(/,|–/).map(function (s) { return s.trim(); }).filter(Boolean);
    return parts.map(function (p) { return "<span>" + p + "</span>"; }).join("");
  }
  function nutriGrid(it) {
    var d = I18N[LANG] || {};
    if (!it.kcal) return "";
    var cells = '<div class="nutri-cell kcal"><b>' + it.kcal + '</b><span>' + (d.kcal_label || "kcal") + '</span></div>';
    if (it.macros) {
      cells += '<div class="nutri-cell"><b>' + it.macros[0] + ' g</b><span>' + (d.protein || "Fehérje") + '</span></div>';
      cells += '<div class="nutri-cell"><b>' + it.macros[1] + ' g</b><span>' + (d.fat || "Zsír") + '</span></div>';
      cells += '<div class="nutri-cell"><b>' + it.macros[2] + ' g</b><span>' + (d.carbs || "Szénhidrát") + '</span></div>';
    }
    var grid = '<div class="nutri-grid">' + cells + '</div>';
    var table = "";
    if (it.nutri && it.nutri.length >= 7) {
      var n = it.nutri;
      var g = function (v) { return String(v).replace(".", ",") + " g"; };
      var rows = [
        [(d.n_fat || "Zsír"), g(n[0]), false],
        [(d.n_sat || "ebből telített zsírsavak"), g(n[1]), true],
        [(d.n_carb || "Szénhidrát"), g(n[2]), false],
        [(d.n_sugar || "ebből cukrok"), g(n[3]), true],
        [(d.n_fiber || "Rost"), g(n[4]), false],
        [(d.n_protein || "Fehérje"), g(n[5]), false],
        [(d.n_salt || "Só"), g(n[6]), false]
      ];
      table = '<table class="nutri-table"><tbody>' + rows.map(function (r) {
        return '<tr' + (r[2] ? ' class="sub"' : '') + '><td>' + r[0] + '</td><td>' + r[1] + '</td></tr>';
      }).join("") + '</tbody></table>';
    }
    var allergTxt = it.allergens || "";
    if (allergTxt && LANG === "en") {
      var AL = { "GLUTÉN": "Gluten", "LAKTÓZ": "Lactose", "TOJÁS": "Egg", "SZEZÁMMAG": "Sesame", "MUSTÁRMAG": "Mustard seed", "MUSTÁR": "Mustard", "ZELLER": "Celery", "SZÓJA": "Soy", "TEJ": "Milk", "KÁLIUM-METABISZULFIT": "Potassium metabisulphite" };
      allergTxt = allergTxt.split(",").map(function (a) { var k = a.trim(); return AL[k] || k; }).join(", ");
    }
    var allerg = allergTxt
      ? '<div class="allergens"><span class="allergens__label">' + (d.allergens_label || "Allergének") + ':</span> ' + allergTxt + '</div>'
      : "";
    return '<h3>' + (d.prod_nutrition || "Tápérték") + '</h3>' + grid + table + allerg;
  }
  function relatedCard(it, catId) {
    var d = I18N[LANG] || {};
    var img = it.img || it.thumb;
    var media = '<div class="pcard__media">' +
      (img ? '<img src="' + img + '" alt="' + it.name + '" loading="lazy"' + (it.pos ? ' style="object-position:' + it.pos + '"' : "") + '><div class="pcard__grad"></div>' : '<div class="pcard__ph">' + (CAT_EMOJI[catId] || "🍔") + '</div>') +
      ((it.tags || []).length ? '<div class="pcard__badges">' + it.tags.map(tagBadge).join("") + '</div>' : '') + '</div>';
    var body = '<div class="pcard__body"><div class="pcard__top"><div class="pcard__name">' + it.name + '</div>' +
      '<div class="pcard__price"><b>' + fmt(it.b) + '</b></div></div></div>';
    var a = el("a", "pcard", media + body); a.href = "termek.html?id=" + slugify(it.name); return a;
  }
  function renderProduct() {
    var host = $("#productDetail"); if (!host || !MENU) return;
    var d = I18N[LANG] || {};
    var id = "";
    try { id = new URLSearchParams(location.search).get("id") || ""; } catch (e) {}
    var found = findItem(id);
    if (!found) {
      host.innerHTML = '<a class="back" href="index.html#menu">← ' + (d.prod_back || "Vissza") + '</a>' +
        '<h1>' + (d.prod_notfound || "Nem található") + '</h1>';
      return;
    }
    var it = found.it, cat = found.cat, img = it.img || it.thumb;
    document.title = it.name + " – Wolf Burger";
    var media = img
      ? '<img src="' + img + '" alt="' + it.name + '"' + (it.pos ? ' style="object-position:' + it.pos + '"' : "") + '>'
      : '<div class="pcard__ph" style="font-size:6rem">' + (CAT_EMOJI[cat.id] || "🍔") + '</div>';
    var price = (it.b === null || it.b === undefined)
      ? '<b style="font-size:1.4rem">' + (d.price_ask || "") + '</b>'
      : '<b>' + fmt(it.b) + '</b>' + (it.m ? '<span class="menu">' + (d.menu_menu_label || "Menü") + ': ' + fmt(it.m) + '</span>' : (it.b2 ? '<span class="menu">' + it.unit2 + ': ' + fmt(it.b2) + '</span>' : ''));
    var tags = (it.tags || []).map(tagBadge).join("");
    var desc = it[LANG] || "";
    var ing = desc ? ('<h3>' + (d.prod_ingredients || "Összetevők") + '</h3><div class="ing-chips">' + ingChips(desc) + '</div>') : "";
    var order =
      '<div class="product__order">' +
      '<a class="btn" href="https://wolt.com/hu/hun/szigetszentmiklos/restaurant/wolf-burger-szigetszentmiklos" target="_blank" rel="noopener">Wolt</a>' +
      '<a class="btn btn--ghost" href="https://www.foodora.hu/restaurant/xna1/wolf-burger" target="_blank" rel="noopener">foodora</a>' +
      '<a class="btn btn--ghost" href="index.html#menu">' + (d.prod_details_cta || "Étlap") + '</a>' +
      '</div>';
    host.innerHTML =
      '<a class="back" href="index.html#menu">← ' + (d.prod_back || "Vissza") + '</a>' +
      '<div class="product__grid">' +
      '<div class="product__media">' + media + '</div>' +
      '<div class="product__info">' +
      '<span class="eyebrow product__cat">' + cat[LANG] + '</span>' +
      '<h1>' + it.name + '</h1>' +
      (tags ? '<div class="product__tags">' + tags + '</div>' : '') +
      '<div class="product__price">' + price + '</div>' +
      (desc ? '<p class="product__desc">' + desc + '</p>' : '') +
      ing +
      nutriGrid(it) +
      (it.kcal ? '<p class="product__note">' + (d.nutri_note || "") + '</p>' : '') +
      order +
      '</div></div>';

    // related
    var rel = (MENU.items[cat.id] || []).filter(function (x) { return slugify(x.name) !== id; }).slice(0, 4);
    if (rel.length) {
      var sec = el("section", "product__related");
      sec.innerHTML = '<span class="eyebrow">' + (d.prod_related || "") + '</span><h2 class="section-title" style="font-size:clamp(1.8rem,4vw,2.6rem);margin:10px 0 26px">' + cat[LANG] + '</h2>';
      var grid = el("div", "menu-grid");
      rel.forEach(function (x) { grid.appendChild(relatedCard(x, cat.id)); });
      sec.appendChild(grid); host.appendChild(sec);
    }
  }

  /* ---------- Sörkert drinks ---------- */
  function drinkRow(it) {
    var d = I18N[LANG] || {};
    var price = (it.b === null || it.b === undefined)
      ? '<b style="font-size:.9rem">' + (d.price_ask || "") + '</b>'
      : '<b>' + (it.unit ? it.unit + " · " : "") + fmt(it.b) + '</b>' + (it.b2 ? '<small>' + it.unit2 + " · " + fmt(it.b2) + '</small>' : '');
    var desc = it[LANG] ? '<div class="drink-row__desc">' + it[LANG] + '</div>' : '';
    return el("div", "drink-row",
      '<div><div class="drink-row__name">' + it.name + ' ' + (it.tags || []).map(tagBadge).join("") + '</div>' + desc + '</div>' +
      '<div class="drink-row__price">' + price + '</div>');
  }
  function fillList(sel, catId) {
    var host = $(sel); if (!host) return;
    host.innerHTML = "";
    (MENU.items[catId] || []).forEach(function (it) { host.appendChild(drinkRow(it)); });
  }
  function renderDrinks() {
    if (!MENU) return;
    fillList("#beerList", "sorok");
    fillList("#froccsList", "froccsok");
    fillList("#softList", "italok");
    fillList("#coffeeList", "kavek");
  }

  /* ---------- Shared UI (nav, cookie, toTop, reveal) ---------- */
  function initShared() {
    var header = $("#header");
    function onScroll() {
      var y = window.pageYOffset;
      if (header) header.classList.toggle("scrolled", y > 40);
      var tt = $("#toTop"); if (tt) tt.classList.toggle("show", y > 500);
    }
    window.addEventListener("scroll", onScroll, { passive: true });

    var toggle = $("#navToggle");
    if (toggle) {
      toggle.addEventListener("click", function () {
        var open = document.body.classList.toggle("nav-open");
        toggle.setAttribute("aria-expanded", open ? "true" : "false");
      });
    }
    $$("[data-close-nav]").forEach(function (n) { n.addEventListener("click", function () { document.body.classList.remove("nav-open"); }); });

    $$(".lang button").forEach(function (b) { b.addEventListener("click", function () { setLang(b.getAttribute("data-lang")); }); });

    var tt = $("#toTop"); if (tt) tt.addEventListener("click", function () { window.scrollTo({ top: 0, behavior: "smooth" }); });

    var cookie = $("#cookie");
    if (cookie) {
      if (!localStorage.getItem("wb_cookie")) setTimeout(function () { cookie.classList.add("show"); }, 1200);
      var a = $("#cookieAccept"), dc = $("#cookieDecline"), oc = $("#openCookie");
      if (a) a.addEventListener("click", function () { localStorage.setItem("wb_cookie", "all"); cookie.classList.remove("show"); });
      if (dc) dc.addEventListener("click", function () { localStorage.setItem("wb_cookie", "necessary"); cookie.classList.remove("show"); });
      if (oc) oc.addEventListener("click", function (e) { e.preventDefault(); localStorage.removeItem("wb_cookie"); cookie.classList.add("show"); });
    }

    // reveal
    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(function (en) { en.forEach(function (x) { if (x.isIntersecting) { x.target.classList.add("in"); io.unobserve(x.target); } }); }, { threshold: .12, rootMargin: "0px 0px -6% 0px" });
      $$(".reveal").forEach(function (r) { io.observe(r); });
    } else { $$(".reveal").forEach(function (r) { r.classList.add("in"); }); }

    // Kapcsolati űrlap (látványterv — nincs backend, csak visszajelzés)
    var form = $("#contactForm");
    if (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        if (!form.checkValidity()) { form.reportValidity(); return; }
        var msg = $("#formMsg"); if (msg) msg.classList.add("show");
        form.reset();
      });
    }

    var yr = $("#year"); if (yr) yr.textContent = new Date().getFullYear();
    onScroll();
  }

  /* ---------- Init ---------- */
  applyI18n();
  renderProduct();
  renderDrinks();
  initShared();
})();
