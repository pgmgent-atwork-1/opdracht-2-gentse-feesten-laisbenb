const overlay = document.getElementById('overlay');
const hamburger = document.getElementById('hamburger-menu-button');
const closeButton = document.getElementById('closeMenu');

function openMenu() {
   overlay.style.display = "flex";
};

function closeMenu() {
    overlay.style.display = "none";
};

hamburger.addEventListener("click", openMenu);
closeButton.addEventListener("click", closeMenu);