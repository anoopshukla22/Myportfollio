document.addEventListener('DOMContentLoaded', function() {
    const imageHover = document.querySelector('.image-hover');

    imageHover.addEventListener('mouseover', function() {
        this.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.3)';
    });

    imageHover.addEventListener('mouseout', function() {
        this.style.boxShadow = 'none';
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const aboutContainer = document.querySelector('.about-container');
    const downloadButton = document.querySelector('.button button');
    const highlightedName = document.querySelector('.highlighted-name');

    // Fade-in animation for the entire content
    aboutContainer.style.opacity = 0;
    aboutContainer.style.animation = 'fadeInUp 1s ease-in-out forwards';

    // Bounce animation for the "Download CV" button
    downloadButton.addEventListener('mouseover', function () {
        this.style.transform = 'scale(2.1)';
    });

    downloadButton.addEventListener('mouseout', function () {
        this.style.transform = 'scale(1)';
    });

    // Subtle scale effect for the highlighted name
    highlightedName.style.transform = 'scale(0)';
    highlightedName.style.transition = 'transform 0.5s ease-out';

    setTimeout(() => {
        highlightedName.style.transform = 'scale(1)';
    }, 500);
});
document.addEventListener('DOMContentLoaded', function () {
    const aboutContainer = document.querySelector('.about-container');
    const downloadButton = document.querySelector('.button button');
    const highlightedName = document.querySelector('.highlighted-name');

    // Fade-in animation for the entire content
    aboutContainer.style.opacity = 0;
    aboutContainer.style.animation = 'fadeInUp 1s ease-in-out forwards';

    // Bounce animation for the "Download CV" button
    downloadButton.addEventListener('mouseover', function () {
        this.style.transform = 'scale(1.1)';
        this.style.backgroundColor = '#ff7f50'; // Coral color on hover
    });

    downloadButton.addEventListener('mouseout', function () {
        this.style.transform = 'scale(1)';
        this.style.backgroundColor = '#3498db'; // Back to the original color on mouseout
    });

    // Subtle scale effect and color change for the highlighted name
    highlightedName.style.transform = 'scale(0)';
    highlightedName.style.transition = 'transform 0.5s ease-out, color 0.5s ease-out';

    setTimeout(() => {
        highlightedName.style.transform = 'scale(1)';
        highlightedName.style.color = '#e74c3c'; // Red color
    }, 500);
});

// document.addEventListener('DOMContentLoaded', function () {
//     // Example: Display an alert when the page is loaded
//     alert('Welcome to my portfolio!');
// });
// Simple interactive feature for contact section
document.querySelector('.contact a').addEventListener('mouseover', function () {
    this.style.color = '#ff4500'; // Change color on hover
});

document.querySelector('.contact a').addEventListener('mouseout', function () {
    this.style.color = '#007bff'; // Restore color on mouseout
});
