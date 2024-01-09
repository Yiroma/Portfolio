document.addEventListener("DOMContentLoaded", function () {
  initTyped();
  initDarkMode();
  initNavigation();
  initMenu();
  initToggleButtons();
});

function initTyped() {
  const typed = new Typed(".multi-text", {
    strings: ["💻Développeur Web", "📱Développeur Web mobile"],
    typeSpeed: 30,
    backSpeed: 30,
    backDelay: 1000,
    loop: true,
  });
}

function initDarkMode() {
  const checkbox = document.getElementById("checkbox");
  const elements = document.querySelectorAll("*");
  const imageLogo = document.getElementById("logo");
  const iconDarkMode = document.getElementById("iconDarkMode");

  checkbox.addEventListener("change", () => {
    elements.forEach((element) => element.classList.toggle("dark"));

    imageLogo.src = checkbox.checked
      ? "./assets/logos/logo-white200x150.svg"
      : "./assets/logos/logo-blue200x150.svg";
    iconDarkMode.src = checkbox.checked ? "./assets/icons/moon.webp" : "./assets/icons/sun.webp";
  });
}

function initNavigation() {
  const links = document.querySelectorAll(".navbar ul.menu li a");

  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");

      document.querySelectorAll("section").forEach((section) => {
        section.style.display = "none";
      });

      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        targetSection.style.display = "initial";

        links.forEach((link) => link.classList.remove("active"));
        this.classList.add("active");
      }
    });

    if (link.getAttribute("href") === "#home") {
      link.classList.add("active");
      const sectionHome = document.querySelector("#home");
      if (sectionHome) {
        sectionHome.style.display = "initial";
      }
    }
  });
}

function initMenu() {
  const menuToggle = document.getElementById("menu-toggle");
  const menuLinks = document.querySelectorAll(".navbar a");
  const menuLabel = document.getElementById("menu-label");

  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menuToggle.checked = false;
    });
  });

  menuLabel.addEventListener("click", () => {
    menuToggle.checked = false;
  });
}

function initToggleButtons() {
  const toggleButtons = document.querySelectorAll(".toggle-button");

  toggleButtons.forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".hidden-section").forEach((section) => {
        section.style.display = "block";
      });
    });
  });
}
