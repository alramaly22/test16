document.addEventListener('DOMContentLoaded', function() {
    /*=============== SHOW MENU ===============*/
    const navMenu = document.getElementById('nav-menu'),
        navToggle = document.getElementById('nav-toggle'),
        navClose = document.getElementById('nav-close');

    /*===== MENU SHOW =====*/
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.add('show-menu');
        });
    }

    /*===== MENU HIDDEN =====*/
    if (navClose) {
        navClose.addEventListener('click', () => {
            navMenu.classList.remove('show-menu');
        });
    }

    /*=============== REMOVE MENU MOBILE ===============*/
    const navLink = document.querySelectorAll('.nav__link');
    const linkAction = () => {
        navMenu.classList.remove('show-menu');
    };
    navLink.forEach(n => n.addEventListener('click', linkAction));

    /*=============== ADD SHADOW HEADER ===============*/
    const shadowHeader = () => {
        const header = document.getElementById('header');
        window.scrollY >= 50 ? header.classList.add('shadow-header') :
            header.classList.remove('shadow-header');
    };
    window.addEventListener('scroll', shadowHeader);

}); // ← دي اللي كانت ناقصة