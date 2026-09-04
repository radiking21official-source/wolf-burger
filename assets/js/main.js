/* ============================================================
   WOLF BURGER — main.js
   ============================================================ */
(function () {
  "use strict";
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };

  /* ---------- Helpers ---------- */
  function fmt(n) {
    if (n === null || n === undefined) return "—";
    return n.toLocaleString("hu-HU") + " Ft";
  }
  function el(tag, cls, html) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html !== undefined) e.innerHTML = html;
    return e;
  }
  function tagBadge(t) {
    if (t === "hot") return '<span class="tag tag--chili" title="' + (LANG === "en" ? "Spicy" : "Csípős") + '" aria-label="' + (LANG === "en" ? "Spicy" : "Csípős") + '">🌶️</span>';
    var map = { "new": ["tag--new", "ÚJ", "NEW"], vega: ["tag--vega", "VEGA", "VEG"], kid: ["tag--kid", "GYEREK", "KIDS"] };
    var m = map[t]; if (!m) return "";
    var lbl = (LANG === "en") ? m[2] : m[1];
    return '<span class="tag ' + m[0] + '">' + lbl + '</span>';
  }
  function slugify(s) {
    return s.toLowerCase()
      .replace(/[áàâ]/g, "a").replace(/[éèê]/g, "e").replace(/[íî]/g, "i")
      .replace(/[óòôöő]/g, "o").replace(/[úùûüű]/g, "u")
      .replace(/[„”"'’]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
  }
  window.WB = window.WB || {}; window.WB.slugify = slugify;
  var CAT_EMOJI = { burgerek: "🍔", koretek: "🍟", falatkak: "🧀", desszert: "🍩", italok: "🥤", sorok: "🍺", froccsok: "🍷", kavek: "☕", extrak: "➕" };

  /* ---------- i18n ---------- */
  var LANG = localStorage.getItem("wb_lang") || "hu";
  var I18N = window.WB_I18N || { hu: {}, en: {} };

  function applyI18n() {
    var dict = I18N[LANG] || {};
    $$("[data-i18n]").forEach(function (node) {
      var key = node.getAttribute("data-i18n");
      if (dict[key] !== undefined && dict[key] !== "") node.textContent = dict[key];
    });
    if (dict.doc_title) document.title = dict.doc_title;
    document.documentElement.lang = LANG;
    $$(".lang button").forEach(function (b) { b.classList.toggle("active", b.getAttribute("data-lang") === LANG); });
  }
  function setLang(l) {
    LANG = l; localStorage.setItem("wb_lang", l);
    applyI18n(); renderMenu(); renderFeatured(); buildMarquee();
  }
  $$(".lang button").forEach(function (b) {
    b.addEventListener("click", function () { setLang(b.getAttribute("data-lang")); });
  });

  /* ---------- Menu render ---------- */
  var MENU = window.WB_MENU;
  function priceCell(it) {
    var burgerLbl = (I18N[LANG].menu_burger_label) || "Burger";
    var menuLbl = (I18N[LANG].menu_menu_label) || "Menü";
    if (it.m) {
      return '<b>' + fmt(it.b) + '</b><span class="menu-price">' + menuLbl + ': ' + fmt(it.m) + '</span>';
    }
    if (it.b2) {
      return '<b>' + it.unit + ' · ' + fmt(it.b) + '</b><span class="menu-price">' + it.unit2 + ' · ' + fmt(it.b2) + '</span>';
    }
    return '<b>' + fmt(it.b) + '</b>';
  }
  function cardPrice(it) {
    var d = I18N[LANG] || {};
    if (it.b === null || it.b === undefined) return '<b style="font-size:.92rem">' + (d.price_ask || "—") + '</b>';
    var small = "";
    if (it.m) small = (d.menu_menu_label || "Menü") + " " + fmt(it.m);
    else if (it.b2) small = it.unit + " / " + it.unit2 + " " + fmt(it.b2);
    else if (it.unit) small = it.unit;
    return '<b>' + fmt(it.b) + '</b>' + (small ? '<small>' + small + '</small>' : "");
  }
  function menuCard(it, catId) {
    var d = I18N[LANG] || {};
    var img = it.img || it.thumb;
    var isHot = (it.tags || []).indexOf("hot") > -1;
    var badges = (it.tags || []).filter(function (t) { return t !== "hot"; }).map(tagBadge).join("");
    var nameHtml = it.name + (isHot ? ' <span class="chili" title="' + (LANG === "en" ? "Spicy" : "Csípős") + '">🌶️</span>' : "");
    var posStyle = it.pos ? ' style="object-position:' + it.pos + '"' : "";
    var media = '<div class="pcard__media">' +
      (img ? '<img src="' + img + '" alt="' + it.name + '" loading="lazy"' + posStyle + '><div class="pcard__grad"></div>'
           : '<div class="pcard__ph">' + (CAT_EMOJI[catId] || "🍔") + '</div>') +
      (badges ? '<div class="pcard__badges">' + badges + '</div>' : '') +
      '<span class="pcard__details">' + (d.details || "Részletek") +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="m9 18 6-6-6-6"/></svg></span>' +
      '</div>';
    var body = '<div class="pcard__body"><div class="pcard__top">' +
      '<div class="pcard__name">' + nameHtml + '</div>' +
      '<div class="pcard__price">' + cardPrice(it) + '</div></div>' +
      (it[LANG] ? '<div class="pcard__ing">' + it[LANG] + '</div>' : '') +
      (it.kcal ? '<div class="pcard__kcal">~ <b>' + it.kcal + '</b> ' + (d.kcal_label || "kcal") + '</div>' : '') +
      '</div>';
    var a = el("a", "pcard", media + body);
    a.href = "termek.html?id=" + slugify(it.name);
    return a;
  }
  function renderMenu() {
    if (!MENU) return;
    var tabsWrap = $("#menuTabs"), panelsWrap = $("#menuPanels");
    tabsWrap.innerHTML = ""; panelsWrap.innerHTML = "";
    MENU.categories.forEach(function (cat, i) {
      var tab = el("button", "menu-tab" + (i === 0 ? " active" : ""), cat[LANG]);
      tab.setAttribute("data-cat", cat.id);
      tabsWrap.appendChild(tab);

      var panel = el("div", "menu-panel" + (i === 0 ? " active" : ""));
      panel.id = "panel-" + cat.id;
      var grid = el("div", "menu-grid");
      (MENU.items[cat.id] || []).forEach(function (it) { grid.appendChild(menuCard(it, cat.id)); });
      panel.appendChild(grid);
      panelsWrap.appendChild(panel);
    });
    // tab switching
    $$(".menu-tab", tabsWrap).forEach(function (tab) {
      tab.addEventListener("click", function () {
        $$(".menu-tab").forEach(function (t) { t.classList.remove("active"); });
        $$(".menu-panel").forEach(function (p) { p.classList.remove("active"); });
        tab.classList.add("active");
        var p = $("#panel-" + tab.getAttribute("data-cat"));
        if (p) p.classList.add("active");
      });
    });
  }

  /* ---------- Featured burgers ---------- */
  function renderFeatured() {
    var grid = $("#featuredGrid"); if (!grid || !MENU) return;
    grid.innerHTML = "";
    var feats = (MENU.items.burgerek || []).filter(function (b) { return b.featured; });
    var menuLbl = (I18N[LANG].menu_menu_label) || "Menü";
    feats.forEach(function (b, i) {
      var tag = (b.tags && b.tags.indexOf("new") > -1) ? '<span class="fcard__tag">' + (LANG === "en" ? "NEW" : "ÚJ") + '</span>' : "";
      var chili = (b.tags && b.tags.indexOf("hot") > -1) ? ' 🌶️' : "";
      var card = el("a", "fcard reveal" + (i ? " d" + i : ""),
        '<img src="' + b.img + '" alt="' + b.name + '" loading="lazy"' + (b.pos ? ' style="object-position:' + b.pos + '"' : "") + '>' + tag +
        '<div class="fcard__body"><h3>' + b.name + chili + '</h3><p>' + (b[LANG] || "") + '</p>' +
        '<div class="fcard__price"><b>' + fmt(b.b) + '</b><small>' + menuLbl + ': ' + fmt(b.m) + '</small></div></div>');
      card.href = "termek.html?id=" + slugify(b.name);
      grid.appendChild(card);
    });
    observeReveals();
  }

  /* ---------- Gallery ---------- */
  var GALLERY = [
    { src: "assets/img/food-spread.jpg", cls: "wide" },
    { src: "assets/img/fourcheese-burger.jpg", cls: "tall" },
    { src: "assets/img/onion-rings.jpg", cls: "tall" },
    { src: "assets/img/bacon-burger.jpg", cls: "" },
    { src: "assets/img/fonok-burger.jpg", cls: "" },
    { src: "assets/img/chicken-burger.jpg", cls: "" },
    { src: "assets/img/fries.jpg", cls: "wide" },
    { src: "assets/img/camembert-burger.jpg", cls: "" },
    { src: "assets/img/hero-portrait.jpg", cls: "" }
  ];
  function renderGallery() {
    var g = $("#galleryGrid"); if (!g) return;
    GALLERY.forEach(function (im, i) {
      var it = el("button", "gitem " + im.cls,
        '<img src="' + im.src + '" alt="Wolf Burger" loading="lazy">' +
        '<span class="gitem__zoom"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3M11 8v6M8 11h6"/></svg></span>');
      it.setAttribute("data-index", i);
      it.addEventListener("click", function () { openLightbox(i); });
      g.appendChild(it);
    });
  }

  /* ---------- Lightbox ---------- */
  var lb = $("#lightbox"), lbImg = $("#lbImg"), lbIndex = 0;
  function openLightbox(i) {
    lbIndex = i; lbImg.src = GALLERY[i].src; lb.classList.add("open");
    lb.setAttribute("aria-hidden", "false"); document.body.style.overflow = "hidden";
  }
  function closeLightbox() { lb.classList.remove("open"); lb.setAttribute("aria-hidden", "true"); document.body.style.overflow = ""; }
  function lbStep(d) { lbIndex = (lbIndex + d + GALLERY.length) % GALLERY.length; lbImg.src = GALLERY[lbIndex].src; }
  if (lb) {
    $("#lbClose").addEventListener("click", closeLightbox);
    $("#lbNext").addEventListener("click", function () { lbStep(1); });
    $("#lbPrev").addEventListener("click", function () { lbStep(-1); });
    lb.addEventListener("click", function (e) { if (e.target === lb) closeLightbox(); });
    document.addEventListener("keydown", function (e) {
      if (!lb.classList.contains("open")) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") lbStep(1);
      if (e.key === "ArrowLeft") lbStep(-1);
    });
  }

  /* ---------- Marquee (duplicate for seamless loop) ---------- */
  function buildMarquee() {
    var m = $("#marquee"); if (!m) return;
    // remove any previous clone
    m.querySelectorAll("[data-clone]").forEach(function (n) { n.remove(); });
    var originals = $$("span", m).filter(function (s) { return !s.hasAttribute("data-clone"); });
    originals.forEach(function (s) {
      var c = s.cloneNode(true); c.setAttribute("data-clone", "1"); m.appendChild(c);
    });
  }

  /* ---------- Reveal on scroll ---------- */
  var io;
  function observeReveals() {
    if (!("IntersectionObserver" in window)) { $$(".reveal").forEach(function (r) { r.classList.add("in"); }); return; }
    if (!io) {
      io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
      }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    }
    $$(".reveal:not(.in)").forEach(function (r) { io.observe(r); });
  }

  /* ---------- Header + scrollspy ---------- */
  var header = $("#header");
  var sections = ["home", "about", "menu", "delivery", "gallery", "vouchers", "contact"];
  function onScroll() {
    var y = window.pageYOffset;
    header.classList.toggle("scrolled", y > 40);
    $("#toTop").classList.toggle("show", y > 600);
    // parallax
    var hb = $("#heroBg");
    if (hb && y < window.innerHeight) hb.style.transform = "translateY(" + (y * 0.28) + "px)";
    // scrollspy
    var cur = "home";
    for (var i = 0; i < sections.length; i++) {
      var s = document.getElementById(sections[i]);
      if (s && s.getBoundingClientRect().top <= 140) cur = sections[i];
    }
    $$(".nav__link").forEach(function (a) {
      a.classList.toggle("active", a.getAttribute("href") === "#" + cur);
    });
  }
  var ticking = false;
  window.addEventListener("scroll", function () {
    if (!ticking) { window.requestAnimationFrame(function () { onScroll(); ticking = false; }); ticking = true; }
  }, { passive: true });

  /* ---------- Mobile nav ---------- */
  var toggle = $("#navToggle");
  function closeNav() { document.body.classList.remove("nav-open"); toggle.setAttribute("aria-expanded", "false"); }
  toggle.addEventListener("click", function () {
    var open = document.body.classList.toggle("nav-open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });
  $$("#navMenu .nav__link").forEach(function (a) { a.addEventListener("click", closeNav); });
  $$("[data-close-nav]").forEach(function (n) { n.addEventListener("click", closeNav); });

  /* ---------- Contact form ---------- */
  var form = $("#contactForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }
      $("#formMsg").classList.add("ok");
      form.reset();
      setTimeout(function () { $("#formMsg").scrollIntoView({ behavior: "smooth", block: "center" }); }, 60);
    });
  }

  /* ---------- Cookie banner ---------- */
  var cookie = $("#cookie");
  function hideCookie(val) { localStorage.setItem("wb_cookie", val); cookie.classList.remove("show"); }
  if (cookie) {
    if (!localStorage.getItem("wb_cookie")) { setTimeout(function () { cookie.classList.add("show"); }, 1400); }
    $("#cookieAccept").addEventListener("click", function () { hideCookie("all"); });
    $("#cookieDecline").addEventListener("click", function () { hideCookie("necessary"); });
    var oc = $("#openCookie");
    if (oc) oc.addEventListener("click", function (e) { e.preventDefault(); localStorage.removeItem("wb_cookie"); cookie.classList.add("show"); });
  }

  /* ---------- Back to top ---------- */
  $("#toTop").addEventListener("click", function () { window.scrollTo({ top: 0, behavior: "smooth" }); });

  /* ---------- Init ---------- */
  $("#year").textContent = new Date().getFullYear();
  applyI18n();
  renderMenu();
  renderFeatured();
  renderGallery();
  buildMarquee();
  observeReveals();
  onScroll();
})();
