/* ============================================================
   WOLF BURGER — notice.js
   „Az árak a helyszínen értendők, online rendelésnél felár van" pop-up.
   Főoldalon (index) és az étlapon (etlap) jelenik meg: amikor a látogató
   az egyik oldalról átkattint a másikra (vagy először érkezik).
   Újratöltésnél / ugyanazon az oldalon maradva nem ugrál fel újra.
   ============================================================ */
(function () {
  "use strict";
  var page = /etlap\.html$/i.test(location.pathname) ? "etlap" : "index";
  var last = null;
  try { last = sessionStorage.getItem("wb_price_pop_last"); } catch (e) {}
  if (last === page) return;               // reload ugyanazon az oldalon: nem mutatjuk újra
  try { sessionStorage.setItem("wb_price_pop_last", page); } catch (e) {}

  var LANG = "hu";
  try { LANG = localStorage.getItem("wb_lang") || "hu"; } catch (e) {}
  var d = (window.WB_I18N && (window.WB_I18N[LANG] || window.WB_I18N.hu)) || {};

  var pop = document.createElement("div");
  pop.className = "price-pop";
  pop.setAttribute("role", "dialog");
  pop.setAttribute("aria-modal", "true");
  pop.setAttribute("aria-labelledby", "pricePopTitle");
  pop.innerHTML =
    '<div class="price-pop__box">' +
      '<button class="price-pop__close" aria-label="Bezárás"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M18 6 6 18M6 6l12 12"/></svg></button>' +
      '<div class="price-pop__icon" aria-hidden="true">🐺</div>' +
      '<h3 id="pricePopTitle" data-i18n="pop_title">' + (d.pop_title || "Jó tudni, falkatárs!") + '</h3>' +
      '<p data-i18n="pop_text">' + (d.pop_text || "") + '</p>' +
      '<button class="btn btn--lg price-pop__ok" data-i18n="pop_ok">' + (d.pop_ok || "Értem, köszi!") + '</button>' +
    '</div>';

  function close() {
    pop.classList.remove("show");
    document.removeEventListener("keydown", onKey);
    setTimeout(function () { if (pop.parentNode) pop.parentNode.removeChild(pop); }, 400);
  }
  function onKey(e) { if (e.key === "Escape") close(); }

  function open() {
    document.body.appendChild(pop);
    setTimeout(function () { pop.classList.add("show"); }, 30);
    pop.querySelector(".price-pop__ok").focus({ preventScroll: true });
    pop.addEventListener("click", function (e) { if (e.target === pop) close(); });
    pop.querySelector(".price-pop__close").addEventListener("click", close);
    pop.querySelector(".price-pop__ok").addEventListener("click", close);
    document.addEventListener("keydown", onKey);
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", function () { setTimeout(open, 500); });
  else setTimeout(open, 500);
})();
