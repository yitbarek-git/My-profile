const menuBtn = document.getElementById("menu-btn");
const nav = document.querySelector("nav");
const logo = document.querySelector(".logo");
const profile = document.querySelector(".profile");

menuBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  nav.classList.toggle("active");
  profile.style.marginTop = nav.classList.contains("active")
    ? nav.scrollHeight + "px"
    : "0";
});

document.addEventListener("click", (e) => {
  if (!document.querySelector(".header").contains(e.target)) {
    nav.classList.remove("active");
    profile.style.marginTop = "0";
  }
});

window.addEventListener("scroll", () => {
  if (window.innerWidth <= 1000) {
    nav.classList.remove("active");
    profile.style.marginTop = "0";
  }
  logo.style.opacity = window.scrollY > 100 ? "0" : "1";
  logo.style.pointerEvents = window.scrollY > 100 ? "none" : "auto";
});

// Typing text logic
const span = document.querySelector(".typing-text span");
const words = [
  "Web Developer",
  "Web Designer",
  "Content Creator",
  "video Editor",
  "Content Creator",
  "Web Designer",
  "Script Writer",

  "Digital Marketer",
];
let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function type() {
  const current = words[wordIndex];
  span.textContent = current.substring(0, charIndex);

  if (!deleting) {
    charIndex++;
    if (charIndex > current.length) {
      deleting = true;
      setTimeout(type, 2000); // pause at end
      return;
    }
  } else {
    charIndex--;
    if (charIndex === 0) {
      deleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }
  }
  setTimeout(type, deleting ? 80 : 150);
}
type();

const themeToggle = document.getElementById("theme-toggle");
const body = document.body;
const header = document.querySelector("header");

header.addEventListener("click", () => {
  console.log("Header clicked");
});

// load saved theme
if (localStorage.getItem("theme") === "light") {
  body.classList.add("light");
  themeToggle.classList.replace("fa-moon", "fa-sun");
}

themeToggle.addEventListener("click", () => {
  body.classList.toggle("light");

  const isLight = body.classList.contains("light");
  themeToggle.classList.toggle("fa-sun", isLight);
  themeToggle.classList.toggle("fa-moon", !isLight);

  localStorage.setItem("theme", isLight ? "light" : "dark");
});

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  reveals.forEach((el) => {
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 50) {
      // smaller offset
      el.classList.add("active");
    }
  });
}

// Run on load and on scroll
window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll); // ensures button animates on load

window.addEventListener("scroll", revealOnScroll);
revealOnScroll(); // run on load
