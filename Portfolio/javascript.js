 // Smooth scrolling function
 function smoothScroll(targetId) {
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
    } else {
        alert("Section not found!");
    }
}

// Navigation button listeners
document.getElementById('about-link').addEventListener('click', function (event) {
    event.preventDefault();
    smoothScroll('profile');
});

document.getElementById('portfolio-link').addEventListener('click', function (event) {
    event.preventDefault();
    smoothScroll('portfolio');
});

document.getElementById('contact-link').addEventListener('click', function (event) {
    event.preventDefault();
    smoothScroll('contact');
});

// Search functionality
document.getElementById('search-button').addEventListener('click', function () {
    const query = document.getElementById('search-input').value.toLowerCase();
    if (query === 'about') {
        smoothScroll('about');
    } else if (query === 'skill' || query === 'about') {
        smoothScroll('skill');
    } else if (query === 'portfolio') {
        smoothScroll('portfolio');
    } else if (query === 'experience') {
        smoothScroll('experience');
    }
    else if (query === 'testimonial') {
        smoothScroll('testimonial');
    }
    else if (query === 'contact') {
        smoothScroll('contact');
    }
    else if (query === 'thanks') {
        smoothScroll('thanks');
    }
    else {
        alert("Section not found! Please search for 'Home', 'Profile', 'Portfolio', or 'Contact'.");
    }
});