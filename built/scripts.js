window.addEventListener('load', init);
function init() {
    var hero = document.querySelector('.hero');
    var slider = document.querySelector('.slider');
    var logo = document.querySelector('logo');
    var headline = document.querySelector('.headline');
    handleNavMenu();
}
function handleNavMenu() {
    var navSlide = function () {
        var navLinks = document.querySelectorAll('.navLinks li');
        var navContainer = document.querySelector('.navLinks');
        var burger = document.querySelector('.burger');
        var nav = document.querySelector('.navLinks');
        burger.addEventListener('click', function () {
            nav.classList.toggle('nav-active');
            navLinks.forEach(function (link, index) {
                if (link.style.animation) {
                    link.style.animation = '';
                }
                else {
                    link.style.animation = "navLinkFade 0.5s ease forwards " + (index / 7 + 0.5) + "s";
                }
            });
        });
    };
    navSlide();
}
