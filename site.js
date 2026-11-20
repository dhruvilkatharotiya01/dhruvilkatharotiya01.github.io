document.addEventListener("DOMContentLoaded", function () {
  var header = document.querySelector("header.site");

  // Header turns into a dark bar once you scroll (like Google Sites)
  function onScroll() { header.classList.toggle("scrolled", window.scrollY > 10); }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  // Projects dropdown: hover on desktop, click/tap anywhere
  document.querySelectorAll(".dd > button").forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      var dd = btn.parentElement;
      var open = dd.classList.toggle("open");
      btn.setAttribute("aria-expanded", open);
    });
  });
  document.addEventListener("click", function () {
    document.querySelectorAll(".dd.open").forEach(function (d) { d.classList.remove("open"); });
  });

  // Mobile hamburger
  var mb = document.querySelector(".menu-btn");
  if (mb) mb.addEventListener("click", function (e) {
    e.stopPropagation();
    var open = header.classList.toggle("menu-open");
    mb.setAttribute("aria-expanded", open);
  });
  document.querySelectorAll("nav.main a").forEach(function (a) {
    a.addEventListener("click", function () { header.classList.remove("menu-open"); });
  });
});
