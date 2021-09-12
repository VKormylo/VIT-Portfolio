// --------------------------------
// -------- THEME CHANGING --------
// --------------------------------

const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click", function () {
  document.body.classList.toggle("theme-dark");
  themeBtn.classList.toggle("dark");
});

// ------------------------------
// -------- FIXED HEADER --------
// ------------------------------

const headerSection = document.querySelector(".header");
const headerTop = document.querySelector(".header-top");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }
    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-70px",
  }
);
obs.observe(headerSection);

// -----------------------------
// -------- BURGER MENU --------
// -----------------------------

const burgerBtn = document.querySelector(".burger-menu");
const mainNav = document.querySelector(".main-nav");
const ctaBtn = document.querySelector(".cta");

burgerBtn.addEventListener("click", function () {
  burgerBtn.classList.toggle("open");
  mainNav.classList.toggle("visible");
  ctaBtn.classList.toggle("visible");
});

// ------------------------------------------
// -------- SMOOTH SCROLL TO SECTION --------
// ------------------------------------------

const allLinks = document.querySelectorAll(".link");
allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    const href = link.getAttribute("href");
    e.preventDefault();

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile navigation
    if (mainNav.classList.contains("visible")) {
      burgerBtn.classList.toggle("open");
      mainNav.classList.toggle("visible");
      ctaBtn.classList.toggle("visible");
    }
  });
});

// --------------------------------------
// -------- SETTING CURRENT YEAR --------
// --------------------------------------

const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;
