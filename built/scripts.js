window.addEventListener('load', init);
function init() {
    var hero = document.querySelector('.hero');
    var slider = document.querySelector('.slider');
    var logo = document.querySelector('logo');
    var headline = document.querySelector('.headline');
    handleNavMenu();
    handleDogPiano();
    idleUser();
}
function handleNavMenu() {
    var navSlide = function () {
        var navLinks = document.querySelectorAll('.navLinks li');
        var fullScreenBurger = document.querySelector('.fullScreenBurger');
        var titleBurger = document.querySelector('.titleBurger');
        var nav = document.querySelector('.navLinks');
        fullScreenBurger.addEventListener('click', toggleBurgerMeny);
        titleBurger.addEventListener('click', toggleBurgerMeny);
        function toggleBurgerMeny() {
            nav.classList.toggle('nav-active');
            navLinks.forEach(function (link, index) {
                if (link.style.animation) {
                    link.style.animation = '';
                }
                else {
                    link.style.animation = "navLinkFade 0.5s ease forwards " + (index / 7 + 0.5) + "s";
                }
            });
        }
        ;
    };
    navSlide();
}
function handleDogPiano() {
    var contactBall = document.querySelectorAll('.contactBall');
    var _loop_1 = function (i) {
        contactBall[i].addEventListener('mouseover', function () {
            var audio = new Audio('./audio/doggo' + i + '.wav');
            audio.play();
        });
    };
    for (var i = 0; i < contactBall.length; ++i) {
        _loop_1(i);
    }
}
;
function idleUser() {
    var t;
    window.onload = resetTimer;
    window.onmousemove = resetTimer;
    window.onmousedown = resetTimer; // catches touchscreen presses as well      
    window.ontouchstart = resetTimer; // catches touchscreen swipes as well 
    window.onclick = resetTimer; // catches touchpad clicks as well
    window.onkeypress = resetTimer;
    window.addEventListener('scroll', resetTimer, true); // improved; see comments
    var secretDoggo = document.querySelector('.secretDoggo');
    function revealTheSecretDoggo() {
        secretDoggo.style.display = "block";
        secretDoggo.style.animation = "slideInDoggo 15s ease-in";
    }
    function resetTimer() {
        clearTimeout(t);
        t = setTimeout(revealTheSecretDoggo, 1000); // time is in milliseconds
    }
}
