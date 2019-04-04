const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");
const contactForm = document.querySelector(".sub-form");
const message = document.querySelector(".thanks-message");

let showMenu = false;
let submitted = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    showMenu = true;
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuBranding.classList.add("show");
    menuNav.classList.add("show");
    navItems.forEach(i => i.classList.add("show"));
  } else {
    showMenu = false;
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuBranding.classList.remove("show");
    menuNav.classList.remove("show");
    navItems.forEach(i => i.classList.remove("show"));
  }
}
function hideElement() {
  if (!submitted) {
    contactForm.classList.add("hide");
    message.classList.add("show");
    submitted = true;
  } else {
    contactForm.classList.remove("hide");
    message.classList.remove("show");
    submitted = false;
  }
}
