// ===== Navigation Functionality =====
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle mobile menu
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Navbar scroll effect
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// ===== Active Navigation Link =====
const sections = document.querySelectorAll('section[id]');

function setActiveNav() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLink?.classList.add('active');
        } else {
            navLink?.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', setActiveNav);

// ===== Tab Switching for Experience Section =====
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const tabName = btn.getAttribute('data-tab');
        
        // Remove active from all
        tabBtns.forEach(b => b.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));
        
        // Add active to clicked
        btn.classList.add('active');
        document.getElementById(`${tabName}-tab`).classList.add('active');
    });
});

// ===== Download Resume Handler =====
const downloadResumeBtn = document.getElementById('downloadResume');
if (downloadResumeBtn) {
    downloadResumeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Please upload your CV/Resume PDF and update this link!\n\nTo add your CV:\n1. Upload your CV.pdf to the project folder\n2. Update this line in script.js:\n   window.location.href = "your-cv.pdf";');
        // After uploading your CV, uncomment this line and update the path:
        // window.location.href = 'path-to-your-cv.pdf';
    });
}

// ===== Back to Top Button =====
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 500) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ===== Scroll Animation Observer =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Elements to animate on scroll
const animateElements = document.querySelectorAll('.education-card, .skill-card, .highlight-card, .stat-item, .achievement-card, .leadership-card, .testimonial-card');

animateElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(element);
});

// ===== Contact Form Handling =====
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    console.log('Form data:', data);
    
    // Show success message
    alert('Thank you for your message! I will get back to you soon. 😊\n\nNote: To make this form functional, you need to:\n1. Set up a backend (like Netlify Forms, Formspree, or EmailJS)\n2. Or connect to your own API endpoint');
    
    // Reset form
    contactForm.reset();
    
    // In a real implementation, you would do something like:
    /*
    fetch('your-backend-endpoint', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        alert('Message sent successfully!');
        contactForm.reset();
    })
    .catch(error => {
        alert('Error sending message. Please try again.');
    });
    */
});

// ===== Smooth Scroll for All Links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for fixed navbar
            
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===== Typing Effect for Hero Title (Optional Enhancement) =====
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Uncomment to enable typing effect on page load
// window.addEventListener('load', () => {
//     const nameElement = document.querySelector('.name');
//     const originalText = nameElement.textContent;
//     typeWriter(nameElement, originalText, 80);
// });

// ===== Parallax Effect for Hero Background =====
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.gradient-orb');
    
    parallaxElements.forEach((element, index) => {
        const speed = (index + 1) * 0.3;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// ===== Dynamic Year in Footer =====
const currentYear = new Date().getFullYear();
const footerYear = document.querySelector('.footer-bottom p');
if (footerYear) {
    footerYear.textContent = `© ${currentYear} Alia Syafiqah. All Rights Reserved. Made with 💙 and ☕`;
}

// ===== Lazy Loading Images =====
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.dataset.src || img.src;
    });
} else {
    // Fallback for browsers that don't support lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}

// ===== Performance: Debounce Scroll Events =====
function debounce(func, wait = 10, immediate = true) {
    let timeout;
    return function() {
        const context = this, args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Apply debounce to scroll events
window.addEventListener('scroll', debounce(() => {
    setActiveNav();
}, 10));

// ===== Accessibility: Focus Management =====
const focusableElements = document.querySelectorAll(
    'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
);

// Trap focus in mobile menu when open
navToggle.addEventListener('click', () => {
    if (navMenu.classList.contains('active')) {
        navMenu.querySelector('a')?.focus();
    }
});

// Close mobile menu on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
        navToggle.focus();
    }
});

// ===== Progress Bar Animation on Scroll =====
const progressBars = document.querySelectorAll('.progress-fill');

const progressObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBar = entry.target;
            const width = progressBar.style.width;
            progressBar.style.width = '0';
            setTimeout(() => {
                progressBar.style.width = width;
            }, 100);
            progressObserver.unobserve(progressBar);
        }
    });
}, { threshold: 0.5 });

progressBars.forEach(bar => {
    progressObserver.observe(bar);
});

// ===== Console Easter Egg =====
console.log('%c🧶 Hi there! Welcome to my portfolio!', 'color: #6366f1; font-size: 20px; font-weight: bold;');
console.log('%cLooking for a creative developer? Let\'s connect!', 'color: #ec4899; font-size: 14px;');
console.log('%c✨ Built with HTML, CSS, and JavaScript', 'color: #a0a0a0; font-size: 12px;');

// ===== Initialize Everything on DOM Load =====
document.addEventListener('DOMContentLoaded', () => {
    // Set initial active nav
    setActiveNav();
    
    // Add loaded class to body for CSS animations
    document.body.classList.add('loaded');
    
    // Log success
    console.log('Portfolio initialized successfully! 🚀');
    
    // Check if all required images are loaded
    const images = document.querySelectorAll('img');
    let loadedImages = 0;
    
    images.forEach(img => {
        if (img.complete) {
            loadedImages++;
        } else {
            img.addEventListener('load', () => {
                loadedImages++;
                if (loadedImages === images.length) {
                    console.log('All images loaded! ✨');
                }
            });
        }
    });
});

// ===== Service Worker Registration (Optional - for PWA) =====
// Uncomment if you want to make this a Progressive Web App
/*
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('ServiceWorker registration successful');
            })
            .catch(err => {
                console.log('ServiceWorker registration failed: ', err);
            });
    });
}
*/
