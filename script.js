// Mobile Menu
const menuButton = document.getElementById("menu-btn");
const navigationMenu = document.querySelector("nav");
const logo = document.querySelector(".logo");
const profileSection = document.querySelector(".profile");

menuButton.addEventListener("click", function(event) {
  event.stopPropagation();
  navigationMenu.classList.toggle("active");
  menuButton.classList.toggle("open");
  profileSection.style.marginTop = navigationMenu.classList.contains("active")
    ? navigationMenu.scrollHeight + "px"
    : "0";
});

// Close menu when clicking outside
document.addEventListener("click", function(event) {
  const header = document.querySelector(".header");
  if (!header.contains(event.target)) {
    navigationMenu.classList.remove("active");
    menuButton.classList.remove("open");
    profileSection.style.marginTop = "0";
  }
});

// Close menu on scroll & logo fade
window.addEventListener("scroll", function() {
  if (window.innerWidth <= 1000) {
    navigationMenu.classList.remove("active");
    menuButton.classList.remove("open");
    profileSection.style.marginTop = "0";
  }

  logo.style.opacity = window.scrollY > 100 ? "0" : "1";
  logo.style.pointerEvents = window.scrollY > 100 ? "none" : "auto";
});

// Typing Animation
const typingSpan = document.querySelector(".typing-text span");
const wordsToType = ["Web Developer", "Web Designer", "Content Creator", "Video Editor", "Digital Marketer"];
let currentWordIndex = 0, currentCharIndex = 0, isDeleting = false;

function typeWriterEffect() {
  const currentWord = wordsToType[currentWordIndex];
  typingSpan.textContent = currentWord.substring(0, currentCharIndex);

  if (!isDeleting) {
    currentCharIndex++;
    if (currentCharIndex > currentWord.length) {
      isDeleting = true;
      setTimeout(typeWriterEffect, 2000);
      return;
    }
  } else {
    currentCharIndex--;
    if (currentCharIndex === 0) {
      isDeleting = false;
      currentWordIndex = (currentWordIndex + 1) % wordsToType.length;
    }
  }

  setTimeout(typeWriterEffect, isDeleting ? 80 : 150);
}
typeWriterEffect();

// Dark/Light Mode
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

if (localStorage.getItem("theme") === "light") {
  body.classList.add("light");
  themeToggle.classList.replace("fa-moon", "fa-sun");
}

themeToggle.addEventListener("click", function() {
  body.classList.toggle("light");
  const isLightMode = body.classList.contains("light");
  themeToggle.classList.replace(isLightMode ? "fa-moon" : "fa-sun", isLightMode ? "fa-sun" : "fa-moon");
  localStorage.setItem("theme", isLightMode ? "light" : "dark");
});

// Reveal Animations
const elementsToReveal = document.querySelectorAll(".reveal");

function checkRevealOnScroll() {
  const windowHeight = window.innerHeight;
  elementsToReveal.forEach(el => {
    if (el.getBoundingClientRect().top < windowHeight - 50) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", checkRevealOnScroll);
window.addEventListener("load", checkRevealOnScroll);
checkRevealOnScroll();
