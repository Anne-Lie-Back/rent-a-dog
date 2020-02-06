window.addEventListener('load', init);

function init(){
    const hero:Element = document.querySelector('.hero');
    const slider:Element = document.querySelector('.slider');
    const logo:Element = document.querySelector('logo');
    const headline:Element = document.querySelector('.headline');
    handleNavMenu();
    handleDogPiano();
}

function handleNavMenu(){
    const navSlide = () => {
        const navLinks = document.querySelectorAll('.navLinks li');
        const navContainer = document.querySelector('.navLinks')
        const burger:Element = document.querySelector('.burger');
        const nav:Element = document.querySelector('.navLinks');
        
        burger.addEventListener('click', () => {
            nav.classList.toggle('nav-active');

            navLinks.forEach((link:any, index)=>{
                if(link.style.animation){
                    link.style.animation = '';
                }
                else{
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
                    
                }
            })
        }); 
    }
    navSlide();
}

function handleDogPiano(){
    document.querySelector('.contactBall0').addEventListener('mouseover', () => {
        const audio = new Audio('./audio/doggo0.wav');
        audio.play();
    });
    document.querySelector('.contactBall1').addEventListener('mouseover', () => {
        const audio = new Audio('./audio/doggo1.wav');
        audio.play();
    });
    document.querySelector('.contactBall2').addEventListener('mouseover', () => {
        const audio = new Audio('./audio/doggo2.wav');
        audio.play();
    });
    document.querySelector('.contactBall3').addEventListener('mouseover', () => {
        const audio = new Audio('./audio/doggo3.wav');
        audio.play();
    }); 
    document.querySelector('.contactBall4').addEventListener('mouseover', () => {
        const audio = new Audio('./audio/doggo4.wav');
        audio.play();
    }); 
    document.querySelector('.contactBall5').addEventListener('mouseover', () => {
        const audio = new Audio('./audio/doggo5.wav');
        audio.play();
    }); 
    document.querySelector('.contactBall6').addEventListener('mouseover', () => {
        const audio = new Audio('./audio/doggo6.wav');
        audio.play();
    }); 
}