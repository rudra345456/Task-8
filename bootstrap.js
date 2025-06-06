document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbar");
  const scrollTopBtn = document.getElementById("scrollTopBtn");
  const themeToggle = document.getElementById("themeToggle");

  // Navbar scroll effect
  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 50);
    scrollTopBtn.style.display = window.scrollY > 100 ? "block" : "none";
  });

  // Scroll to top
  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Dark Mode Toggle
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });

  // Initialize AOS (Animate On Scroll)
  AOS.init();
});
