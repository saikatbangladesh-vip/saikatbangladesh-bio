// Particle Canvas Animation
function initParticles() {
    const canvas = document.getElementById('particleCanvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particles = [];
    const particleCount = 80;
    
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 0.5;
            this.speedX = Math.random() * 0.5 - 0.25;
            this.speedY = Math.random() * 0.5 - 0.25;
            this.opacity = Math.random() * 0.5 + 0.2;
        }
        
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            
            if (this.x > canvas.width) this.x = 0;
            if (this.x < 0) this.x = canvas.width;
            if (this.y > canvas.height) this.y = 0;
            if (this.y < 0) this.y = canvas.height;
        }
        
        draw() {
            ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }
    
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }
    
    function connectParticles() {
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 120) {
                    ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 * (1 - distance / 120)})`;
                    ctx.lineWidth = 0.5;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }
    }
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });
        
        connectParticles();
        requestAnimationFrame(animate);
    }
    
    animate();
    
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// Load content from config
function loadConfigContent() {
    if (typeof CONFIG === 'undefined') {
        console.error('CONFIG not found. Please make sure config.js is loaded.');
        return;
    }

    // Update profile information
    const profileName = document.querySelector('.profile-name');
    const profileTagline = document.querySelector('.profile-tagline');
    const profileImage = document.querySelector('.profile-image img');
    const modalIcon = document.querySelector('.modal-icon img');
    
    if (profileName) profileName.textContent = CONFIG.profile.name;
    if (profileTagline) profileTagline.textContent = CONFIG.profile.tagline;
    if (profileImage) profileImage.src = CONFIG.profile.logo;
    if (modalIcon) modalIcon.src = CONFIG.profile.logo;

    // Update social links
    const linksContainer = document.querySelector('.links-container');
    if (linksContainer) {
        linksContainer.innerHTML = '';
        
        CONFIG.socialLinks.forEach(link => {
            if (link.enabled) {
                const platformClass = link.platform.toLowerCase().replace(/\//, '').replace(/\s+/g, '');
                const linkElement = document.createElement('a');
                linkElement.href = link.url;
                linkElement.className = `social-link ${platformClass}`;
                linkElement.target = '_blank';
                linkElement.innerHTML = `
                    <div class="icon-wrapper"><img src="${link.icon}" alt="${link.platform}"></div>
                    <div class="link-content">
                        <span class="platform-name">${link.platform}</span>
                        <span class="username">${link.username}</span>
                    </div>
                `;
                linksContainer.appendChild(linkElement);
            }
        });
    }

    // Update share modal
    const shareOptions = document.querySelector('.share-options');
    if (shareOptions) {
        const twitterLink = shareOptions.querySelector('a[href*="twitter"]');
        const facebookLink = shareOptions.querySelector('a[href*="facebook"]');
        const emailLink = shareOptions.querySelector('a[href*="mailto"]');
        
        if (twitterLink) twitterLink.href = `https://twitter.com/intent/tweet?url=${CONFIG.share.websiteUrl}`;
        if (facebookLink) facebookLink.href = `https://www.facebook.com/sharer/sharer.php?u=${CONFIG.share.websiteUrl}`;
        if (emailLink) emailLink.href = `mailto:?subject=Check out my bio link&body=${CONFIG.share.websiteUrl}`;
    }

    const qrCodeImg = document.querySelector('.qr-code img');
    if (qrCodeImg) qrCodeImg.src = CONFIG.share.qrCode;

    const linkInput = document.getElementById('linkInput');
    if (linkInput) linkInput.value = CONFIG.share.displayUrl;

    // Update footer
    const footerText = document.querySelector('.footer p:first-child');
    const footerCredit = document.querySelector('.footer-credit');
    
    if (footerText) {
        const year = new Date().getFullYear();
        footerText.innerHTML = `Copyright © <span id="currentYear">${year}</span> ${CONFIG.footer.copyrightName}. All rights reserved.`;
    }
    if (footerCredit) footerCredit.textContent = CONFIG.footer.creditText;

    // Update subscribe modal
    const modalHeader = document.querySelector('.modal-header h2');
    const modalDescription = document.querySelector('.modal-header p');
    if (modalHeader) modalHeader.textContent = CONFIG.profile.name;
    if (modalDescription) {
        modalDescription.innerHTML = `Receive the latest updates from <span class="highlight">${CONFIG.profile.name}</span> straight to your email inbox.`;
    }
}

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Load content from config file
    loadConfigContent();
    
    // Initialize particle animation
    initParticles();
    
    // Get all modal elements
    const subscribeModal = document.getElementById('subscribeModal');
    const shareModal = document.getElementById('shareModal');
    const subscribeBtn = document.getElementById('subscribeBtn');
    const shareBtn = document.getElementById('shareBtn');
    const closeSubscribe = document.getElementById('closeSubscribe');
    const closeShare = document.getElementById('closeShare');
    const subscribeForm = document.getElementById('subscribeForm');
    const copyBtn = document.getElementById('copyBtn');
    const linkInput = document.getElementById('linkInput');
    const toast = document.getElementById('toast');

    // Check if user has already subscribed
    function isSubscribed() {
        return localStorage.getItem('isSubscribed') === 'true';
    }

    function getSubscribedEmail() {
        return localStorage.getItem('subscribedEmail');
    }

    // No visual changes to button

    // Open Subscribe Modal
    subscribeBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Check if already subscribed
        if (isSubscribed()) {
            const email = getSubscribedEmail();
            showToast(`You are already subscribed with ${email}`);
            return;
        }
        
        // Calculate scrollbar width
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
        document.body.style.paddingRight = scrollbarWidth + 'px';
        subscribeModal.classList.add('active');
        document.body.classList.add('modal-open');
    });

    // Open Share Modal
    shareBtn.addEventListener('click', function(e) {
        e.preventDefault();
        // Calculate scrollbar width
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
        document.body.style.paddingRight = scrollbarWidth + 'px';
        shareModal.classList.add('active');
        document.body.classList.add('modal-open');
    });

    // Close Subscribe Modal
    closeSubscribe.addEventListener('click', function() {
        subscribeModal.classList.remove('active');
        document.body.classList.remove('modal-open');
        document.body.style.paddingRight = '';
    });

    // Close Share Modal
    closeShare.addEventListener('click', function() {
        shareModal.classList.remove('active');
        document.body.classList.remove('modal-open');
        document.body.style.paddingRight = '';
    });

    // Close modals when clicking outside
    subscribeModal.addEventListener('click', function(e) {
        if (e.target === subscribeModal) {
            subscribeModal.classList.remove('active');
            document.body.classList.remove('modal-open');
            document.body.style.paddingRight = '';
        }
    });

    shareModal.addEventListener('click', function(e) {
        if (e.target === shareModal) {
            shareModal.classList.remove('active');
            document.body.classList.remove('modal-open');
            document.body.style.paddingRight = '';
        }
    });

    // Handle Subscribe Form Submission
    subscribeForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const emailInput = document.getElementById('emailInput');
        const email = emailInput.value;

        // Check if already subscribed (double check)
        if (isSubscribed()) {
            showToast('You have already subscribed!');
            subscribeModal.classList.remove('active');
            document.body.classList.remove('modal-open');
            document.body.style.paddingRight = '';
            return;
        }

        // Save subscription to localStorage
        localStorage.setItem('isSubscribed', 'true');
        localStorage.setItem('subscribedEmail', email);
        localStorage.setItem('subscriptionDate', new Date().toISOString());

        // Here you can add your email subscription logic (send to backend)
        console.log('Subscribed with email:', email);

        // Show toast notification
        showToast('Successfully subscribed! Thank you for subscribing.');

        // Close modal and reset form
        subscribeModal.classList.remove('active');
        document.body.classList.remove('modal-open');
        document.body.style.paddingRight = '';
        emailInput.value = '';
    });

    // Copy Link Functionality
    copyBtn.addEventListener('click', function() {
        linkInput.select();
        linkInput.setSelectionRange(0, 99999); // For mobile devices

        // Copy to clipboard
        navigator.clipboard.writeText(linkInput.value).then(function() {
            // Show success toast
            showToast('Link copied to clipboard!');
            
            // Change button text temporarily
            const originalText = copyBtn.textContent;
            copyBtn.textContent = 'Copied!';

            setTimeout(function() {
                copyBtn.textContent = originalText;
            }, 2000);
        }).catch(function(err) {
            console.error('Failed to copy: ', err);
            showToast('Failed to copy link.');
        });
    });

    // Toast Notification Function
    function showToast(message) {
        const toastMessage = document.getElementById('toastMessage');
        toastMessage.textContent = message;
        toast.classList.add('active');

        setTimeout(function() {
            toast.classList.remove('active');
        }, 3000);
    }

    // Add smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add animation on scroll for social links
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all social links
    document.querySelectorAll('.social-link').forEach(link => {
        observer.observe(link);
    });

    // Add click animation to buttons
    const buttons = document.querySelectorAll('button, .social-link');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');

            this.appendChild(ripple);

            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Add keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        // Press 'Esc' to close modals
        if (e.key === 'Escape') {
            if (subscribeModal.classList.contains('active')) {
                subscribeModal.classList.remove('active');
                document.body.classList.remove('modal-open');
                document.body.style.paddingRight = '';
            }
            if (shareModal.classList.contains('active')) {
                shareModal.classList.remove('active');
                document.body.classList.remove('modal-open');
                document.body.style.paddingRight = '';
            }
        }

        // Press 'S' to open subscribe modal
        if (e.key === 's' || e.key === 'S') {
            if (!subscribeModal.classList.contains('active') && !shareModal.classList.contains('active')) {
                // Check if already subscribed
                if (isSubscribed()) {
                    const email = getSubscribedEmail();
                    showToast(`You are already subscribed with ${email}`);
                    return;
                }
                
                const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
                document.body.style.paddingRight = scrollbarWidth + 'px';
                subscribeModal.classList.add('active');
                document.body.classList.add('modal-open');
            }
        }
    });

    // Add loading animation
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
    });

    // Track link clicks (you can integrate with analytics)
    document.querySelectorAll('.social-link').forEach(link => {
        link.addEventListener('click', function() {
            const platform = this.querySelector('span').textContent;
            console.log('Clicked on:', platform);
            // You can add Google Analytics or other tracking here
        });
    });

    // Add parallax effect to background
    let lastScrollY = window.scrollY;
    window.addEventListener('scroll', function() {
        const currentScrollY = window.scrollY;
        const background = document.querySelector('.background-animation');
        
        if (background) {
            const scrollDiff = currentScrollY - lastScrollY;
            background.style.transform = `translateY(${currentScrollY * 0.5}px)`;
        }
        
        lastScrollY = currentScrollY;
    });
});

// Add ripple effect styles dynamically
const style = document.createElement('style');
style.textContent = `
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }

    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }

    body.loaded {
        animation: fadeIn 0.5s ease;
    }
`;
document.head.appendChild(style);
