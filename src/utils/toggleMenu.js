const menu = document.getElementById("mobile-menu");
const menuButton = document.getElementById("menu-button");

menuButton.addEventListener("click", () => {
    menu.classList.toggle("open");
})