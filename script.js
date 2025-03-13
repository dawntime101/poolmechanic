document.getElementById('service-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Add form submission logic here
    alert('Thank you for your request! We will contact you soon.');
});

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
// Water Ripple Effect
function createRipple() {
    const ripple = document.createElement('div');
    ripple.classList.add('water-ripple');
    document.body.appendChild(ripple);
    
    // Randomly position and animate
    ripple.style.left = `${Math.random() * 100}%`;
    ripple.style.top = `${Math.random() * 100}%`;
    
    setTimeout(() => {
        ripple.remove();
    }, 3000);
}

// Create ripples periodically
setInterval(createRipple, 2000);
        });
    });
});
