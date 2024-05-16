document.addEventListener("DOMContentLoaded", function () {
  const typed = new Typed(".multi-text", {
    strings: ["💻Développeur Web", "📱Développeur Web mobile"],
    typeSpeed: 30,
    backSpeed: 30,
    backDelay: 1000,
    loop: true,
  });

  const checkbox = document.getElementById("checkbox");
  const elements = document.getElementsByTagName("*");
  const imageLogo = document.getElementById("logo");
  const iconDarkMode = document.getElementById("iconDarkMode");

  checkbox.addEventListener("change", () => {
    for (let i = 0; i < elements.length; i++) {
      elements[i].classList.toggle("dark");
    }

    if (checkbox.checked) {
      imageLogo.src = "./assets/logo_dark.png";
      iconDarkMode.src = "./assets/moon_icon.png";
    } else {
      imageLogo.src = "./assets/logo_light.png";
      iconDarkMode.src = "./assets/sun_icon.png";
    }
  });

  const navbar = document.querySelector(".navbar");
  const links = document.querySelectorAll(".navbar ul.menu li a");

  links.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");

      const sections = document.querySelectorAll("section");
      sections.forEach(function (section) {
        section.style.display = "none";
      });

      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        targetSection.style.display = "initial";

        links.forEach(function (link) {
          link.classList.remove("active");
        });
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

  const toggleButtons = document.querySelectorAll(".toggle-button");

  toggleButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const hiddenSections = document.querySelectorAll(".hidden-section");

      hiddenSections.forEach((section) => {
        section.style.display = "block";
      });
    });
  });
});
