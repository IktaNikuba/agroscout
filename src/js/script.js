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

