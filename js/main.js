let burger = document.querySelector('#burger');
let menu = document.querySelector('#menu');


burger.addEventListener('click', func);

function func() {
	burger.classList.toggle('header__burger_active');
	menu.classList.toggle('menu-header__list_active');
}