window.addEventListener('load', init);

function init(){
    const hero:Element = document.querySelector('.hero');
    const slider:Element = document.querySelector('.slider');
    const logo:Element = document.querySelector('logo');
    const headline:Element = document.querySelector('.headline');
    
    handleNavMenu();
}

function handleNavMenu(){
    const navSlide = () => {
        const navLinks = document.querySelectorAll('.navLinks li');
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