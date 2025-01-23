document.addEventListener('DOMContentLoaded', () => {
    const menu = document.getElementById('menu');
    const menuList = menu.querySelector('.menu__list');
    const iconMenu = document.querySelector('.icon-menu');
    const body = document.body;

    iconMenu.addEventListener('click', () => {
        menuList.classList.toggle('active');
        body.classList.toggle('body--menu-open');
    });

    menuList.addEventListener('click', (e) => {
        if (e.target.classList.contains('menu__link')) {
            menuList.classList.remove('active');
            body.classList.remove('body--menu-open');
        }
    });
});