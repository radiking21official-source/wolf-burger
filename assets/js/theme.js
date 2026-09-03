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
      if (p && VALID.indexOf(p) > -1) { localStorage.setItem("wb_theme", p); return p; }
    } catch (e) {}
    try { var s = localStorage.getItem("wb_theme"); if (s && VALID.indexOf(s) > -1) return s; } catch (e) {}
    return "1";
  }

  function apply(t) {
    root.setAttribute("data-theme", t);
    try { localStorage.setItem("wb_theme", t); } catch (e) {}
    document.querySelectorAll("[data-theme-set]").forEach(function (b) {
      b.classList.toggle("active", b.getAttribute("data-theme-set") === t);
    });
  }

  // apply ASAP
  apply(getInitial());

  // wire switcher once DOM is ready
  function wire() {
    document.querySelectorAll("[data-theme-set]").forEach(function (b) {
      b.addEventListener("click", function () { apply(b.getAttribute("data-theme-set")); });
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
    apply(root.getAttribute("data-theme") || "1");
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", wire);
  else wire();
})();
