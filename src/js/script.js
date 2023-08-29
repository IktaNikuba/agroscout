/* Манипуляции с меню */
const menuOpenBtn = document.getElementById("open-menu");
const menuCloseBtn = document.getElementById("close-menu");
const menu = document.getElementById("navigation-menu");
const body = document.querySelector(".page__body");

menuOpenBtn.onclick = () => {
	menuOpenBtn.classList.toggle("cut-down");
	menuCloseBtn.classList.toggle("cut-down");
	menu.classList.toggle("cut-down");
	body.classList.toggle("body-overflow-hidden--md");
};

menuCloseBtn.onclick = () => {
	menuOpenBtn.classList.toggle("cut-down");
	menuCloseBtn.classList.toggle("cut-down");
	menu.classList.toggle("cut-down");
	body.classList.toggle("body-overflow-hidden--md");
};

/* Миникорзина */
const modalCart = document.querySelector('.mini-cart');

document.getElementById("open-mini-cart").onclick = function() {
	modalCart.showModal();
	body.classList.toggle("body-overflow-hidden");
};

document.getElementById("close-mini-cart").onclick = function() {
	modalCart.close();
	body.classList.toggle("body-overflow-hidden");
};