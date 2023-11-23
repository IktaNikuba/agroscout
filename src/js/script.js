/* Манипуляции с меню */
const menuOpenBtn = document.getElementById("open-menu");
const menuCloseBtn = document.getElementById("close-menu");
const menu = document.getElementById("navigation-menu");
const body = document.querySelector(".page__body");

menuOpenBtn.onclick = () => {
	"use strict";
	menuOpenBtn.classList.toggle("cut-down");
	menuCloseBtn.classList.toggle("cut-down");
	menu.classList.toggle("cut-down");
	body.classList.toggle("stop-scroll--md");
};

menuCloseBtn.onclick = () => {
	"use strict";
	menuOpenBtn.classList.toggle("cut-down");
	menuCloseBtn.classList.toggle("cut-down");
	menu.classList.toggle("cut-down");
	body.classList.toggle("stop-scroll--md");
};

/* Миникорзина */
const modalCart = document.querySelector('.mini-cart');

document.getElementById("open-mini-cart").onclick = () => {
	"use strict";
	modalCart.showModal();
	body.classList.toggle("stop-scroll");
};

document.getElementById("close-mini-cart").onclick = () => {
	"use strict";
	modalCart.close();
	body.classList.toggle("stop-scroll");
};

/* Табы */
