// Toggle Style Switcher
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
const styleSwitcher = document.querySelector(".style-switcher");

// Tambahkan event listener pada toggler
styleSwitcherToggle.addEventListener("click", () => {
  styleSwitcher.classList.toggle("open");
});

// Tambahkan event listener pada dokumen untuk menghilangkan toggler saat mengklik di luar toggler
document.addEventListener("click", (event) => {
  const targetElement = event.target;
  if (!targetElement.classList.contains("style-switcher-toggler") && !styleSwitcher.contains(targetElement)) {
    styleSwitcher.classList.remove("open");
  }
});

// Menyembunyikan toggler pada saat scroll
window.addEventListener("scroll", () => {
  if (document.querySelector(".style-switcher").classList.contains("open")) {
    document.querySelector(".style-switcher").classList.remove("open");
  }
});

// Warna untuk temanya
const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color) {
  alternateStyles.forEach((style) => {
    if (color === style.getAttribute("title")) {
      style.removeAttribute("disabled");
    } else {
      style.setAttribute("disabled", "true");
    }
  });
}
