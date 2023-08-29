/* Манипуляции с меню */
const menuOpenBtn = document.getElementById("open-menu");
const menuCloseBtn = document.getElementById("close-menu");
const menu = document.getElementById("navigation-menu");
const body = document.querySelector(".page__body");

menuOpenBtn.onclick = () => {
	menuOpenBtn.classList.toggle("cut-down");
	menuCloseBtn.classList.toggle("cut-down");
	menu.classList.toggle("cut-down");
	body.classList.toggle("body-overflow-hidden");
};

menuCloseBtn.onclick = () => {
	menuOpenBtn.classList.toggle("cut-down");
	menuCloseBtn.classList.toggle("cut-down");
	menu.classList.toggle("cut-down");
	body.classList.toggle("body-overflow-hidden");
};

/* Миникорзина */
const modalCart = document.querySelector('.minicart');

document.getElementById("open-mini-cart").onclick = function() {
	modalCart.showModal();
};

document.getElementById("close-mini-cart").onclick = function() {
	modalCart.close();
};