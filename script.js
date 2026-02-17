// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    
    // Preloader
    const preloader = document.querySelector('.preloader');
    window.addEventListener('load', function() {
        setTimeout(() => {
            preloader.classList.add('hide');
        }, 1500);
    });

    // Mobile Navigation
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Header scroll effect
    const header = document.querySelector('.header');
    let lastScroll = 0;

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offset = 80; // Header height offset
                const targetPosition = target.offsetTop - offset;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                
                // For staggered animations
                if (entry.target.classList.contains('feature-card')) {
                    const cards = Array.from(entry.target.parentElement.children);
                    const index = cards.indexOf(entry.target);
                    entry.target.style.animationDelay = `${index * 0.1}s`;
                }
                
                if (entry.target.classList.contains('skill-category')) {
                    const skills = Array.from(entry.target.parentElement.children);
                    const index = skills.indexOf(entry.target);
                    entry.target.style.animationDelay = `${index * 0.1}s`;
                }
                
                if (entry.target.classList.contains('project-card')) {
                    const projects = Array.from(entry.target.parentElement.children);
                    const index = projects.indexOf(entry.target);
                    entry.target.style.animationDelay = `${index * 0.1}s`;
                }
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.feature-card').forEach(card => {
        observer.observe(card);
    });

    document.querySelectorAll('.skill-category').forEach(skill => {
        observer.observe(skill);
    });

    document.querySelectorAll('.project-card').forEach(project => {
        observer.observe(project);
    });

    // Parallax effect for hero section
    const heroLayers = document.querySelectorAll('.hero-layer');
    
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        
        heroLayers.forEach((layer, index) => {
            const speed = index * 0.5 + 0.2;
            const yPos = -(scrolled * speed);
            layer.style.transform = `translateY(${yPos}px)`;
        });
    });

    // Form submission
    const contactForm = document.querySelector('.contact-form form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const message = this.querySelector('textarea').value;
            
            // Basic validation
            if (!name || !email || !message) {
                alert('Please fill in all fields');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address');
                return;
            }
            
            // Simulate form submission (in real implementation, this would send to a server)
            const submitBtn = this.querySelector('.submit-btn');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                alert('Thank you for your message! I will get back to you soon.');
                this.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 2000);
        });
    }

    // Typing effect for hero titles
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

    // Apply typing effect after preloader
    setTimeout(() => {
        const heroTitle = document.querySelector('.hero-title');
        if (heroTitle && !heroTitle.classList.contains('typed')) {
            heroTitle.classList.add('typed');
            const originalText = heroTitle.textContent;
            typeWriter(heroTitle, originalText, 80);
        }
        
        const heroTitleRight = document.querySelector('.hero-text-right .hero-title');
        if (heroTitleRight && !heroTitleRight.classList.contains('typed')) {
            heroTitleRight.classList.add('typed');
            const originalText = heroTitleRight.textContent;
            typeWriter(heroTitleRight, originalText, 80);
        }
    }, 1600);

    // Dynamic year in footer (if added later)
    function updateYear() {
        const yearElements = document.querySelectorAll('.current-year');
        const currentYear = new Date().getFullYear();
        yearElements.forEach(element => {
            element.textContent = currentYear;
        });
    }
    
    updateYear();

    // Add hover effects to project cards
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Skill bars animation (if you want to add skill bars later)
    function animateSkillBars() {
        const skillBars = document.querySelectorAll('.skill-bar');
        
        skillBars.forEach(bar => {
            const width = bar.getAttribute('data-width');
            bar.style.width = '0%';
            
            setTimeout(() => {
                bar.style.width = width + '%';
            }, 200);
        });
    }

    // Active navigation highlight
    function highlightActiveSection() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');
        
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollY >= (sectionTop - 100)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', highlightActiveSection);

    // Cursor trail effect (optional, for extra visual appeal)
    let mouseTrail = [];
    const maxTrailLength = 20;

    document.addEventListener('mousemove', function(e) {
        if (window.innerWidth > 768) { // Only on desktop
            createTrailParticle(e.clientX, e.clientY);
        }
    });

    function createTrailParticle(x, y) {
        const particle = document.createElement('div');
        particle.className = 'cursor-trail';
        particle.style.cssText = `
            position: fixed;
            width: 4px;
            height: 4px;
            background: rgba(37, 99, 235, 0.6);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            left: ${x}px;
            top: ${y}px;
            transform: translate(-50%, -50%);
            transition: all 0.3s ease;
        `;
        
        document.body.appendChild(particle);
        mouseTrail.push(particle);
        
        // Remove old particles
        if (mouseTrail.length > maxTrailLength) {
            const oldParticle = mouseTrail.shift();
            oldParticle.style.opacity = '0';
            setTimeout(() => {
                if (oldParticle.parentNode) {
                    oldParticle.parentNode.removeChild(oldParticle);
                }
            }, 300);
        }
        
        // Fade out current particle
        setTimeout(() => {
            particle.style.opacity = '0';
            particle.style.transform = 'translate(-50%, -50%) scale(0)';
        }, 100);
        
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        }, 400);
    }

    // Performance optimization: Debounce scroll events
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Apply debouncing to scroll events
    const debouncedScroll = debounce(function() {
        // Your scroll-based animations here
    }, 16); // ~60fps

    window.addEventListener('scroll', debouncedScroll);

    console.log('Portfolio website initialized successfully!');
});