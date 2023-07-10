/* Открытие и закрытие навигационного меню */

const menuOpenBtn = document.getElementById("open-menu");
const menuCloseBtn = document.getElementById("close-menu");
const menu = document.getElementById("navigation-menu");
const body = document.querySelector(".page__body")

menuOpenBtn.onclick = function() {
    menuOpenBtn.classList.toggle("cut-down");
    menuCloseBtn.classList.toggle("cut-down");
    menu.classList.toggle("cut-down");
    body.classList.toggle("overflow-hidden")
};

menuCloseBtn.onclick = function() {
    menuOpenBtn.classList.toggle("cut-down");
    menuCloseBtn.classList.toggle("cut-down");
    menu.classList.toggle("cut-down");
    body.classList.toggle("overflow-hidden")
};