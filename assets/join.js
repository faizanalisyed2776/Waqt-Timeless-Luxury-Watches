document.addEventListener('DOMContentLoaded', function() {
 
    // Auth Toggle Functionality
    const loginBtn = document.getElementById('loginBtn');
    const signupBtn = document.getElementById('signupBtn');
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const activeIndicator = document.querySelector('.active-indicator');
    
    // Set initial active form
    loginBtn.classList.add('active');
    loginForm.classList.add('active');
    signupForm.classList.remove('active');
    
    // Toggle between login and signup forms
    loginBtn.addEventListener('click', function() {
        if (!this.classList.contains('active')) {
            loginBtn.classList.add('active');
            signupBtn.classList.remove('active');
            loginForm.classList.add('active');
            signupForm.classList.remove('active');
            activeIndicator.style.transform = 'translateX(0)';
        }
    });
    
    signupBtn.addEventListener('click', function() {
        if (!this.classList.contains('active')) {
            signupBtn.classList.add('active');
            loginBtn.classList.remove('active');
            signupForm.classList.add('active');
            loginForm.classList.remove('active');
            activeIndicator.style.transform = 'translateX(100%)';
        }
    });

    // CTA Button to trigger signup
    const ctaSignupBtn = document.getElementById('ctaSignupBtn');
    if (ctaSignupBtn) {
        ctaSignupBtn.addEventListener('click', function() {
            signupBtn.click();
            window.scrollTo({
                top: document.querySelector('.auth-section').offsetTop - 100,
                behavior: 'smooth'
            });
        });
    }

    // Toggle Password Visibility
    document.querySelectorAll('.toggle-password').forEach(button => {
        button.addEventListener('click', function() {
            const input = this.parentElement.querySelector('input');
            const icon = this.querySelector('i');
            
            if (input.type === 'password') {
                input.type = 'text';
                icon.classList.remove('fa-eye');
                icon.classList.add('fa-eye-slash');
            } else {
                input.type = 'password';
                icon.classList.remove('fa-eye-slash');
                icon.classList.add('fa-eye');
            }
        });
    });

    // Password Strength Indicator
    const passwordInput = document.getElementById('signupPassword');
    const strengthBars = document.querySelectorAll('.strength-bar');
    const strengthText = document.querySelector('.strength-text');
    
    if (passwordInput) {
        passwordInput.addEventListener('input', function() {
            const password = this.value;
            let strength = 0;
            
            // Check password length
            if (password.length >= 8) strength++;
            if (password.length >= 12) strength++;
            
            // Check for special characters
            if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) strength++;
            
            // Check for numbers
            if (/\d/.test(password)) strength++;
            
            // Check for uppercase letters
            if (/[A-Z]/.test(password)) strength++;
            
            // Update strength bars
            strengthBars.forEach((bar, index) => {
                if (index < strength) {
                    bar.style.backgroundColor = getStrengthColor(strength);
                } else {
                    bar.style.backgroundColor = '';
                }
            });
            
            // Update strength text
            const strengthMessages = ['Very Weak', 'Weak', 'Moderate', 'Strong', 'Very Strong'];
            strengthText.textContent = strengthMessages[strength] || 'Password strength';
            strengthText.style.color = getStrengthColor(strength);
        });
    }
    
    function getStrengthColor(strength) {
        const colors = ['#ff4d4d', '#ff8c1a', '#ffcc00', '#66cc33', '#339900'];
        return colors[strength] || '';
    }

    // Form Validation
    const loginFormElement = document.getElementById('loginForm');
    const signupFormElement = document.getElementById('signupForm');
    
    if (loginFormElement) {
        loginFormElement.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;
            
            // Simple validation
            if (!email || !password) {
                showNotification('Please fill in all fields', 'error');
                return;
            }
            
            // In a real app, you would send this to your backend
            showNotification('Login successful! Redirecting...', 'success');
            
            // Simulate redirect
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 1500);
        });
    }
    
    if (signupFormElement) {
        signupFormElement.addEventListener('submit', function(e) {
            e.preventDefault();
            const firstName = document.getElementById('signupFirstName').value;
            const lastName = document.getElementById('signupLastName').value;
            const email = document.getElementById('signupEmail').value;
            const password = document.getElementById('signupPassword').value;
            const confirmPassword = document.getElementById('signupConfirmPassword').value;
            const agreeTerms = document.getElementById('signupAgree').checked;
            
            // Validation
            if (!firstName || !lastName || !email || !password || !confirmPassword) {
                showNotification('Please fill in all fields', 'error');
                return;
            }
            
            if (password !== confirmPassword) {
                showNotification('Passwords do not match', 'error');
                return;
            }
            
            if (password.length < 8) {
                showNotification('Password must be at least 8 characters', 'error');
                return;
            }
            
            if (!agreeTerms) {
                showNotification('You must agree to the terms and conditions', 'error');
                return;
            }
            
            // In a real app, you would send this to your backend
            showNotification('Account created successfully! Welcome to Waqt.', 'success');
            
            // Simulate redirect
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 1500);
        });
    }

    // Testimonial Carousel
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    const dots = document.querySelectorAll('.dot');
    let currentTestimonial = 0;
    let carouselInterval;
    
    function showTestimonial(index) {
        testimonialCards.forEach(card => card.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        testimonialCards[index].classList.add('active');
        dots[index].classList.add('active');
        currentTestimonial = index;
    }
    
    function nextTestimonial() {
        let nextIndex = currentTestimonial + 1;
        if (nextIndex >= testimonialCards.length) nextIndex = 0;
        showTestimonial(nextIndex);
    }
    
    // Next testimonial
    document.querySelector('.carousel-next').addEventListener('click', function() {
        nextTestimonial();
        resetCarouselInterval();
    });
    
    // Previous testimonial
    document.querySelector('.carousel-prev').addEventListener('click', function() {
        let prevIndex = currentTestimonial - 1;
        if (prevIndex < 0) prevIndex = testimonialCards.length - 1;
        showTestimonial(prevIndex);
        resetCarouselInterval();
    });
    
    // Dot navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            showTestimonial(index);
            resetCarouselInterval();
        });
    });
    
    // Auto-rotate testimonials
    function startCarouselInterval() {
        carouselInterval = setInterval(nextTestimonial, 5000);
    }
    
    function resetCarouselInterval() {
        clearInterval(carouselInterval);
        startCarouselInterval();
    }
    
    startCarouselInterval();

    // Notification function
    function showNotification(message, type = 'success') {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.classList.add('fade-out');
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }

    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');
    
    if (hamburger && nav) {
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            nav.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking a link
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (hamburger) hamburger.classList.remove('active');
            if (nav) nav.classList.remove('active');
        });
    });
    
    // Back to Top Button
    const backToTopBtn = document.querySelector('.back-to-top');
    
    if (backToTopBtn) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopBtn.classList.add('active');
            } else {
                backToTopBtn.classList.remove('active');
            }
        });
        
        backToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});