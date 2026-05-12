

(() => {
  "use strict";
  const menuBtn      = document.getElementById("menu-btn");
  const mobileNav    = document.getElementById("mobile-nav");
  const overlay      = document.getElementById("mobile-overlay");
  const themeToggle  = document.getElementById("theme-toggle");
  const themeIcon    = themeToggle.querySelector("i");
  const typingEl     = document.getElementById("typing-text");
  const yearEl       = document.getElementById("year");
  const revealEls    = document.querySelectorAll(".reveal, .reveal-left, .reveal-right");

  // FOOTER YEAR
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // MOBILE NAV — DRAWER
  function openMenu() {
    mobileNav.classList.add("open");
    overlay.classList.add("open");
    menuBtn.classList.add("open");
    menuBtn.setAttribute("aria-expanded", "true");
    mobileNav.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeMenu() {
    mobileNav.classList.remove("open");
    overlay.classList.remove("open");
    menuBtn.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
    mobileNav.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  function toggleMenu() {
    mobileNav.classList.contains("open") ? closeMenu() : openMenu();
  }

  menuBtn.addEventListener("click", toggleMenu);
  overlay.addEventListener("click", closeMenu);

  // Close on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && mobileNav.classList.contains("open")) {
      closeMenu();
    }
  });

  // Close when a mobile nav link is clicked
  mobileNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  // Close on resize past breakpoint
  const mediaQuery = window.matchMedia("(min-width: 900px)");
  mediaQuery.addEventListener("change", (e) => {
    if (e.matches) closeMenu();
  });

  // DARK / LIGHT THEME
  const THEME_KEY = "yk-theme";

  function applyTheme(theme) {
    if (theme === "light") {
      document.body.classList.add("light");
      themeIcon.classList.replace("fa-moon", "fa-sun");
      themeToggle.setAttribute("aria-label", "Switch to dark mode");
    } else {
      document.body.classList.remove("light");
      themeIcon.classList.replace("fa-sun", "fa-moon");
      themeToggle.setAttribute("aria-label", "Switch to light mode");
    }
  }

  // Restore saved preference (or respect OS preference)
  const saved = localStorage.getItem(THEME_KEY);
  if (saved) {
    applyTheme(saved);
  } else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
    applyTheme("light");
  }

  themeToggle.addEventListener("click", () => {
    const isLight = document.body.classList.contains("light");
    const next = isLight ? "dark" : "light";
    applyTheme(next);
    localStorage.setItem(THEME_KEY, next);
  });

  // TYPING ANIMATION
  const WORDS     = ["Web Developer", "Web Designer", "Content Creator", "Video Editor", "UI/UX enthusiast"];
  const TYPE_MS   = 50;   // ms per char typed
  const DELETE_MS = 40;    // ms per char deleted
  const PAUSE_MS  = 2500;  // pause after full word

  let wordIdx  = 0;
  let charIdx  = 0;
  let deleting = false;

  function tick() {
    const word = WORDS[wordIdx];

    if (!deleting) {
      charIdx++;
      typingEl.textContent = word.slice(0, charIdx);

      if (charIdx === word.length) {
        deleting = true;
        setTimeout(tick, PAUSE_MS);
        return;
      }
    } else {
      charIdx--;
      typingEl.textContent = word.slice(0, charIdx);

      if (charIdx === 0) {
        deleting = false;
        wordIdx  = (wordIdx + 1) % WORDS.length;
      }
    }

    setTimeout(tick, deleting ? DELETE_MS : TYPE_MS);
  }

  if (typingEl) tick();

  // SCROLL REVEAL — Intersection Observer
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target); // fire once
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    revealEls.forEach((el) => observer.observe(el));
  } else {
    // Fallback: reveal all immediately
    revealEls.forEach((el) => el.classList.add("active"));
  }

  // HEADER — subtle scroll shadow
  
  const header = document.querySelector(".header");

  const scrollHandler = () => {
    if (window.scrollY > 20) {
      header.style.boxShadow = "0 1px 30px rgba(0,0,0,0.35)";
    } else {
      header.style.boxShadow = "none";
    }
  };

  window.addEventListener("scroll", scrollHandler, { passive: true });

})();
