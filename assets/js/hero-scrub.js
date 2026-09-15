/* ============================================================
   Wolf Burger — Hero scroll-scrub
   A nyitott burger a hozzávalókból összeáll, ahogy a látogató
   végiggörget a "pinelt" (sticky) hero-szekción.
   Mobil-first, prefers-reduced-motion barát, JS/videó nélkül
   statikus poszterre esik vissza.
   ============================================================ */
(function () {
  var track = document.getElementById('heroTrack');
  var video = document.getElementById('heroVideo');
  var hint  = document.getElementById('heroHint');
  if (!track || !video) return;

  // file:// megnyitáskor a böngészők gyakran tiltják a pontos seek-elést,
  // ezért ott nem scrubolunk, hanem egyszerűen lejátsszuk a klipet loopban,
  // hogy közvetlenül megnyitva is működjön az animáció.
  if (location.protocol === 'file:') {
    try {
      video.loop = true; video.muted = true; video.setAttribute('playsinline', '');
      var kick = function () { var p = video.play(); if (p && p.catch) p.catch(function () {}); };
      if (video.readyState >= 2) kick();
      else video.addEventListener('loadeddata', kick, { once: true });
      window.addEventListener('touchstart', kick, { passive: true, once: true });
      window.addEventListener('pointerdown', kick, { passive: true, once: true });
    } catch (e) {}
    return;
  }

  var reduce = window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Reduced motion: nincs scrub, a pin-szakaszt kilapítjuk és a
  // KÉSZ burgert mutatjuk (utolsó kocka) statikusan.
  if (reduce) {
    track.classList.add('hero-track--static');
    var showFinal = function () {
      try { video.currentTime = (video.duration || 5) - 0.05; } catch (e) {}
    };
    if (video.readyState >= 1) showFinal();
    else video.addEventListener('loadedmetadata', showFinal);
    return;
  }

  var duration = 0;
  var unlocked = false;
  var ticking = false;

  video.pause();

  function onMeta() {
    duration = video.duration || 5;
    update();
  }
  if (video.readyState >= 1) onMeta();
  else video.addEventListener('loadedmetadata', onMeta);

  // iOS/Safari: a currentTime állítást néha egy néma play/pause
  // "oldja fel". Első interakciónál megtesszük, csendben.
  function unlock() {
    if (unlocked) return;
    unlocked = true;
    var p = video.play();
    if (p && typeof p.then === 'function') {
      p.then(function () { video.pause(); }).catch(function () {});
    } else {
      try { video.pause(); } catch (e) {}
    }
  }

  function progress() {
    var scrollable = track.offsetHeight - window.innerHeight;
    if (scrollable <= 0) return 0;
    var top = track.getBoundingClientRect().top;
    var p = (-top) / scrollable;
    return p < 0 ? 0 : (p > 1 ? 1 : p);
  }

  function update() {
    ticking = false;
    if (!duration) return;
    var p = progress();
    var t = p * duration;
    // Kis eltéréseket nem seek-elünk, hogy ne akadjon.
    if (Math.abs(video.currentTime - t) > 0.015) {
      try { video.currentTime = t; } catch (e) {}
    }
    if (hint) hint.style.opacity = p > 0.06 ? '0' : '';
  }

  function onScroll() {
    if (!ticking) {
      ticking = true;
      window.requestAnimationFrame(update);
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  window.addEventListener('touchstart', unlock, { passive: true, once: true });
  window.addEventListener('wheel', unlock, { passive: true, once: true });
  window.addEventListener('pointerdown', unlock, { passive: true, once: true });

  update();
})();
