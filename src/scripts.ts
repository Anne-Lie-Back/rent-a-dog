window.addEventListener('load', init);

function init(){
    const hero:Element = document.querySelector('.hero');
    const slider:Element = document.querySelector('.slider');
    const logo:Element = document.querySelector('logo');
    const headline:Element = document.querySelector('.headline');
    handleNavMenu();
    handleDogPiano();
    idleUser();
}

function handleNavMenu(){
    const navSlide = () => {
        const navLinks = document.querySelectorAll('.navLinks li');
        const fullScreenBurger:Element = document.querySelector('.fullScreenBurger');
        const titleBurger:Element = document.querySelector('.titleBurger');
        const nav:Element = document.querySelector('.navLinks');
        
        fullScreenBurger.addEventListener('click', toggleBurgerMeny);
        titleBurger.addEventListener('click', toggleBurgerMeny);

        function toggleBurgerMeny(){
            nav.classList.toggle('nav-active');

            navLinks.forEach((link:any, index)=>{
                if(link.style.animation){
                    link.style.animation = '';
                }
                else{
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
                    
                }
            })
        }; 
    }
    navSlide();
}

function handleDogPiano(){
    const contactBall = document.querySelectorAll<HTMLElement>('.contactBall');

    for (let i = 0; i < contactBall.length; ++i) {
        contactBall[i].addEventListener('mouseover', () => {
            const audio = new Audio('./audio/doggo'+ i +'.wav');
            audio.play();
        });
      }
};

function idleUser() {
    let t;
    window.onload = resetTimer;
    window.onmousemove = resetTimer;
    window.onmousedown = resetTimer;  // catches touchscreen presses as well      
    window.ontouchstart = resetTimer; // catches touchscreen swipes as well 
    window.onclick = resetTimer;      // catches touchpad clicks as well
    window.onkeypress = resetTimer;   
    window.addEventListener('scroll', resetTimer, true); // improved; see comments
    const secretDoggo = <HTMLElement>document.querySelector('.secretDoggo');

    function revealTheSecretDoggo() {
        secretDoggo.style.display = "block";
        secretDoggo.style.animation = "slideInDoggo 15s ease-in";
    }

    function resetTimer() {
        clearTimeout(t);
        t = setTimeout(revealTheSecretDoggo, 1000);  // time is in milliseconds
    }
}
