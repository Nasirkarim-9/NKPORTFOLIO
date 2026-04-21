const cursor = document.querySelector('.cursor');
const cursor2 = document.querySelector('.cursor2');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    cursor2.style.left = e.clientX + 'px';
    cursor2.style.top = e.clientY + 'px';
});

document.querySelectorAll('a, button, .project-card, .skill-category').forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.classList.add('cursor-follower');
        cursor2.classList.add('cursor-hover');
    });
    el.addEventListener('mouseleave', () => {
        cursor.classList.remove('cursor-follower');
        cursor2.classList.remove('cursor-hover');
    });
});


const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Nav link click karne pe menu band ho jaye
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});


window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.backdropFilter = 'blur(30px)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
    }
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Contact form submit
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you! Your message has been sent. I\'ll get back to you soon! 🚀');
        e.target.reset();
    });
}


const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
});

document.querySelectorAll('.skill-category, .project-card, .about-stats .stat').forEach(el => {
    observer.observe(el);
});