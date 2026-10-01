(function () {
  "use strict";

  var STORAGE_KEY = "aliensriot-lang";
  var DEFAULT_LANG = "ru";

  function getSavedLang() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      return null;
    }
  }

  function saveLang(lang) {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      /* private mode / blocked storage: ignore, just don't persist */
    }
  }

  function applyLang(lang) {
    var dict = window.I18N[lang] || window.I18N[DEFAULT_LANG];

    document.documentElement.setAttribute("lang", lang);

    document.querySelectorAll("[data-i18n]").forEach(function (node) {
      var key = node.getAttribute("data-i18n");
      var value = dict[key];
      if (value === undefined) return;
      node.textContent = value;
    });

    document.querySelectorAll("[data-i18n-html]").forEach(function (node) {
      var key = node.getAttribute("data-i18n-html");
      var value = dict[key];
      if (value === undefined) return;
      node.innerHTML = value;
    });

    document.querySelectorAll("[data-i18n-attr]").forEach(function (node) {
      var spec = node.getAttribute("data-i18n-attr");
      spec.split(";").forEach(function (pair) {
        var parts = pair.split(":");
        var attr = parts[0];
        var key = parts[1];
        if (!attr || !key) return;
        var value = dict[key.trim()];
        if (value === undefined) return;
        node.setAttribute(attr.trim(), value);
      });
    });

    document.querySelectorAll(".lang-toggle button").forEach(function (btn) {
      var isActive = btn.getAttribute("data-lang") === lang;
      btn.setAttribute("aria-pressed", isActive ? "true" : "false");
    });
  }

  function initLangToggle() {
    var saved = getSavedLang();
    var browserLang = (navigator.language || "ru").slice(0, 2);
    var startLang = saved || (browserLang === "en" ? "en" : DEFAULT_LANG);

    applyLang(startLang);

    document.querySelectorAll(".lang-toggle button").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var lang = btn.getAttribute("data-lang");
        applyLang(lang);
        saveLang(lang);
      });
    });
  }

  function initYear() {
    var el = document.getElementById("year");
    if (el) el.textContent = new Date().getFullYear();
  }

    function initBurger() {
    var burger = document.querySelector(".nav__burger");
    var menu = document.getElementById("nav-mobile");
    if (!burger || !menu) return;

    function closeMenu() {
      menu.classList.remove("is-open");
      burger.setAttribute("aria-expanded", "false");
    }

    function toggleMenu() {
      var isOpen = menu.classList.toggle("is-open");
      burger.setAttribute("aria-expanded", isOpen ? "true" : "false");
    }

    burger.addEventListener("click", toggleMenu);

    menu.querySelectorAll(".nav__mobile-link").forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    initLangToggle();
    initYear();
    initBurger();
  });
})();
