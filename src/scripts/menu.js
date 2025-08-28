document.addEventListener('DOMContentLoaded', () => {
    const burgerBtn = document.querySelector('.header__burger-button');
    const menu = document.querySelector('.menu');

    burgerBtn.addEventListener('click', () => {
        menu.classList.toggle('menu--active');

        if (menu.classList.contains('menu--active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });

    document.addEventListener('click', (e) => {
        if (!menu.contains(e.target) && !burgerBtn.contains(e.target)) {
            menu.classList.remove('menu--active');
            document.body.style.overflow = '';
        }
    });
});
