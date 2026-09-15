/* ============================================================
   WOLF BURGER — theme.js  (self-contained, all pages)
   3 hangulat / vibes: 1 Jeges (default), 2 Naplemente, 3 Tűz & fa
   ============================================================ */
(function () {
  var VALID = ["1", "2", "3"];
  var root = document.documentElement;

  function getInitial() {
    try {
      var p = new URLSearchParams(location.search).get("theme");
      if (p && VALID.indexOf(p) > -1) { localStorage.setItem("wb_theme", p); localStorage.setItem("wb_theme_explicit", "1"); return p; }
    } catch (e) {}
    var explicit = false, stored = null;
    try { explicit = localStorage.getItem("wb_theme_explicit") === "1"; stored = localStorage.getItem("wb_theme"); } catch (e) {}
    var dft = root.getAttribute("data-default-theme");
    // A page-level default (e.g. aloldalak = Tűz & fa) wins over a value that was
    // NOT an explicit user choice (older builds auto-persisted "1").
    if (dft && VALID.indexOf(dft) > -1 && !explicit) return dft;
    if (stored && VALID.indexOf(stored) > -1) return stored;
    if (dft && VALID.indexOf(dft) > -1) return dft;
    return "1";
  }

  // persist = true only when the user explicitly picks a theme (or via ?theme).
  // A page-level data-default-theme must NOT leak into localStorage / other pages.
  function apply(t, persist) {
    root.setAttribute("data-theme", t);
    if (persist) { try { localStorage.setItem("wb_theme", t); localStorage.setItem("wb_theme_explicit", "1"); } catch (e) {} }
    document.querySelectorAll("[data-theme-set]").forEach(function (b) {
      b.classList.toggle("active", b.getAttribute("data-theme-set") === t);
    });
  }

  // apply ASAP (init: do not persist — the source already decided persistence)
  apply(getInitial(), false);

  // wire switcher once DOM is ready
  function wire() {
    document.querySelectorAll("[data-theme-set]").forEach(function (b) {
      b.addEventListener("click", function () { apply(b.getAttribute("data-theme-set"), true); });
    });
    var toggle = document.getElementById("themeToggle");
    var panel = document.getElementById("themePanel");
    if (toggle && panel) {
      toggle.addEventListener("click", function (e) {
        e.stopPropagation();
        panel.classList.toggle("open");
      });
      document.addEventListener("click", function (e) {
        if (panel.classList.contains("open") && !panel.contains(e.target) && e.target !== toggle) panel.classList.remove("open");
      });
    }
    apply(root.getAttribute("data-theme") || "1", false);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", wire);
  else wire();
})();
