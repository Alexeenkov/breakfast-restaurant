let header__burger = document.querySelector('.header__burger');
let header_menu = document.querySelector('.header-menu');
let body = document.querySelector('body');
let header__link = document.querySelectorAll('.menu__link');

header__burger.onclick = function() {
    header__burger.classList.toggle('active');
    header_menu.classList.toggle('active');
    body.classList.toggle('lock');
}

for (item of header__link) {
    item.onclick = function() {
        header__burger.classList.remove('active');
        header_menu.classList.remove('active');
        body.classList.remove('lock');
    }
}