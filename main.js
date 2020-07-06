//Select element function
const selectElement = function (element) {
    return document.querySelector(element);
};

let menuToggler = selectElement('.menu-toggle');
let body = selectElement('body');

menuToggler.addEventListener('click', function () {
    body.classList.toggle('open');
});


// Scroll reveal
//sticky navabr
let htmltag=document.querySelector('html');
let bodyTag=document.querySelector('body');
let myNav=document.querySelector('.banner');
letmyElem=document.querySelector('nav li a');


let scrolled= () => {
    let dec =scrollY / (bodyTag.scrollHeight-innerHeight);
    return Math.floor(dec * 100);
}

addEventListener('scroll', () => {
myNav.style.setProperty('background', scrolled () >16 ? "#004466": "none" );
})
//end of sticky navbar



window.sr = ScrollReveal();

sr.reveal('.animate-left', {
    origin: 'left',
    duration: 1000,
    distance: '25rem',
    delay: 300
});

sr.reveal('.animate-right', {
    origin: 'right',
    duration: 1000,
    distance: '25rem',
    delay: 600
});

sr.reveal('.animate-top', {
    origin: 'top',
    duration: 1000,
    distance: '25rem',
    delay: 600
});

sr.reveal('.animate-bottom', {
    origin: 'bottom',
    duration: 1000,
    distance: '25rem',
    delay: 600
});
