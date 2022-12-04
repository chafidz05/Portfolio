const navMenu = document.querySelector(".nav-menu");
const navToggle = document.querySelector(".nav-toggle");
const navClose = document.querySelector(".nav-close");

// SHOW MENU
if(navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add("show-menu");
  });
};

// MENU HIDDEN
if(navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove("show-menu");
  });
};

// REMOVE MENU MOBILE
const navLinks = document.querySelectorAll('.nav-link');
function linkAction() {
  const navMenu = document.querySelector('.nav-menu');
  navMenu.classList.remove('show-menu');
}
navLinks.forEach(n => n.addEventListener('click', linkAction));
