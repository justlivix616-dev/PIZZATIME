// Hamburger Menu Toggle
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
    
    links.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7}s`;
        }
    });
});

// Reveal Elements on Scroll
const revealElements = () => {
    const hiddenElements = document.querySelectorAll('.hidden');
    
    hiddenElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        // Check if element is in viewport
        if (elementTop < window.innerHeight && elementBottom > 0) {
            element.classList.remove('hidden');
        }
    });
};

// Call reveal on scroll
window.addEventListener('scroll', revealElements);

// Call reveal on page load
window.addEventListener('load', revealElements);

// Also trigger on DOMContentLoaded
document.addEventListener('DOMContentLoaded', revealElements);
