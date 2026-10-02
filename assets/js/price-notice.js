/* Shared on-site price notice. The modal is intentionally session-scoped per page. */
(function () {
  "use strict";
  function lang() { return localStorage.getItem("wb_lang") || "hu"; }
  function dict() { var d = window.WB_I18N || {}; return d[lang()] || d.hu || {}; }
  function key() { return "wb_price_notice_" + (document.body.getAttribute("data-page") || location.pathname); }
  function storageHas() { try { return sessionStorage.getItem(key()) === "1"; } catch (e) { return false; } }
  function storageSet() { try { sessionStorage.setItem(key(), "1"); } catch (e) {} }
  function render() {
    var body = document.body;
    if (!body || body.querySelector("#priceNotice")) return;
    var enabled = body.getAttribute("data-price-notice-popup") === "true";
    var d = dict();
    var modal = document.createElement("div");
    modal.id = "priceNotice";
    modal.className = "price-notice";
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-modal", "true");
    modal.setAttribute("aria-labelledby", "priceNoticeTitle");
    modal.hidden = true;
    modal.innerHTML = '<div class="price-notice__backdrop" data-price-close></div><div class="price-notice__panel" role="document"><button class="price-notice__close" type="button" aria-label="' + (d.price_notice_close || "Close") + '" data-price-close>×</button><h2 id="priceNoticeTitle">' + (d.price_notice_title || "On-site prices") + '</h2><p>' + (d.price_notice_body || "") + '</p><button type="button" class="btn price-notice__ok" data-price-close>' + (d.price_notice_close || "Got it") + '</button></div>';
    body.appendChild(modal);
    body.querySelectorAll("[data-price-close]").forEach(function (el) { el.addEventListener("click", function () { storageSet(); modal.hidden = true; modal.classList.remove("is-open"); }); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape" && modal.classList.contains("is-open")) { storageSet(); modal.hidden = true; modal.classList.remove("is-open"); } });
    if (enabled && !storageHas()) {
      window.setTimeout(function () { modal.hidden = false; modal.classList.add("is-open"); var ok = modal.querySelector(".price-notice__ok"); if (ok) ok.focus(); }, 180);
    }
  }
  function init() {
    render();
    window.addEventListener("wb:languagechange", function () {
      var old = document.getElementById("priceNotice"); if (old) old.remove(); render();
    });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init); else init();
})();
