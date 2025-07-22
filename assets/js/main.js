// Add scroll indicator and progress bar to the DOM
document.body.insertAdjacentHTML('beforeend', `
    <div class="scroll-indicator">
        <i class="fas fa-arrow-up"></i>
    </div>
    <div class="progress-bar"></div>
`);

// Get DOM elements
const scrollIndicator = document.querySelector('.scroll-indicator');
const progressBar = document.querySelector('.progress-bar');

// Handle scroll events
window.addEventListener('scroll', () => {
    // Show/hide scroll indicator
    if (window.scrollY > 500) {
        scrollIndicator.classList.add('visible');
    } else {
        scrollIndicator.classList.remove('visible');
    }
    
    // Update progress bar
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.scrollY / windowHeight) * 100;
    progressBar.style.width = `${scrolled}%`;
});

// Scroll to top when indicator is clicked
scrollIndicator.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Initialize AOS
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 800,
        once: true,
        mirror: false
    });
});

// Initialize Typed.js
const typed = new Typed('.typing-text', {
    strings: ['Developer', 'Data Analyst', 'Solutions Architect'],
    typeSpeed: 50,
    backSpeed: 30,
    backDelay: 1000,
    loop: true
});

// Initialize Particles.js
particlesJS('particles-js', {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: '#64ffda'
        },
        opacity: {
            value: 0.5,
            random: false
        },
        size: {
            value: 3,
            random: true
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#64ffda',
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'repulse'
            },
            onclick: {
                enable: true,
                mode: 'push'
            },
            resize: true
        }
    },
    retina_detect: true
}); 