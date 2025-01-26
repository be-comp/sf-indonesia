document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbar");
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      navbar.classList.add("bg-white", "shadow-md");
      navbar.classList.remove("bg-transparent");
      updateNavbarTextColor("text-gray-800", "text-gray-600");
    } else {
      navbar.classList.remove("bg-white", "shadow-md");
      navbar.classList.add("bg-transparent");
      updateNavbarTextColor("text-white", "text-gray-200");
    }
  });

  mobileMenuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });

  function updateNavbarTextColor(mainColor, secondaryColor) {
    const mainTexts = navbar.querySelectorAll(".main-text");
    const secondaryTexts = navbar.querySelectorAll(".secondary-text");

    mainTexts.forEach((text) => {
      text.className = `main-text ${mainColor}`;
    });

    secondaryTexts.forEach((text) => {
      text.className = `secondary-text ${secondaryColor}`;
    });
  }
});
