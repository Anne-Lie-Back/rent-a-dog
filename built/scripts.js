window.addEventListener('load', init);
function init() {
    var hero = document.querySelector('.hero');
    var slider = document.querySelector('.slider');
    var logo = document.querySelector('logo');
    var headline = document.querySelector('.headline');
    handleNavMenu();
    handleDogPiano();
}
function handleNavMenu() {
    var navSlide = function () {
        var navLinks = document.querySelectorAll('.navLinks li');
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
function handleDogPiano() {
    document.querySelector('.contactBall0').addEventListener('mouseover', function () {
        var audio = new Audio('./audio/doggo0.wav');
        audio.play();
    });
    document.querySelector('.contactBall1').addEventListener('mouseover', function () {
        var audio = new Audio('./audio/doggo1.wav');
        audio.play();
    });
    document.querySelector('.contactBall2').addEventListener('mouseover', function () {
        var audio = new Audio('./audio/doggo2.wav');
        audio.play();
    });
    document.querySelector('.contactBall3').addEventListener('mouseover', function () {
        var audio = new Audio('./audio/doggo3.wav');
        audio.play();
    });
    document.querySelector('.contactBall4').addEventListener('mouseover', function () {
        var audio = new Audio('./audio/doggo4.wav');
        audio.play();
    });
    document.querySelector('.contactBall5').addEventListener('mouseover', function () {
        var audio = new Audio('./audio/doggo5.wav');
        audio.play();
    });
    document.querySelector('.contactBall6').addEventListener('mouseover', function () {
        var audio = new Audio('./audio/doggo6.wav');
        audio.play();
    });
}
