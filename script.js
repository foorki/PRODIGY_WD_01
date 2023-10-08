// script.js
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.style.backgroundColor = '#333'; 
    } else {
        navbar.style.backgroundColor = '#222'; 
    }
});
