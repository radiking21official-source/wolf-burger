/* ============================================================
   WOLF BURGER — youtube.js
   A főoldali YouTube-szekció és a lábléc-link ITT állítható be.
   Amíg mindkét érték üres, a szekció rejtve marad.
     video   : egy videó azonosítója (pl. "dQw4w9WgXcQ") → beágyazott lejátszó (elsőbbséget élvez)
     playlist: lejátszási lista azonosítója (a csatorna feltöltései: "UU" + a csatornaazonosító UC utáni része)
     channel : a csatorna teljes URL-je (pl. "https://www.youtube.com/@wolfburger") → gomb + lábléc-link
   ============================================================ */
(function () {
  "use strict";
  var YT = {
    video: "",
    playlist: "UUd00EXEqdI1YFkg2-YkE-RA",   // a csatorna összes feltöltött videója (lejátszási lista)
    channel: "https://www.youtube.com/@wolfburger2020"
  };

  var sec = document.getElementById("youtube");
  if (!sec || (!YT.video && !YT.playlist && !YT.channel)) return;
  var frame = document.getElementById("ytFrame"), btn = document.getElementById("ytBtn"), foot = document.getElementById("ytFooter");
  if ((YT.video || YT.playlist) && frame) {
    var src = YT.video
      ? "https://www.youtube-nocookie.com/embed/" + encodeURIComponent(YT.video)
      : "https://www.youtube-nocookie.com/embed/videoseries?list=" + encodeURIComponent(YT.playlist);
    frame.innerHTML = '<iframe src="' + src +
      '" title="Wolf Burger – YouTube" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe>';
    frame.hidden = false;
  }
  if (YT.channel) {
    if (btn) { btn.href = YT.channel; btn.hidden = false; }
    if (foot) { foot.querySelector("a").href = YT.channel; foot.hidden = false; }
  }
  sec.hidden = false;
})();
