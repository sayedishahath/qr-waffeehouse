// Function to open website (you can replace with actual URL)
function openWebsite() {
    // Replace with your actual website URL
    const websiteUrl = 'https://waffeehouse.in';
    window.open(websiteUrl, '_blank');
}

// Function to open WhatsApp
function openWhatsapp() {
    // Replace with your actual WhatsApp URL
    const whatsappUrl = 'https://wa.me/+97152732369';
    window.open(whatsappUrl, '_blank');
}

// Function to open menu (you can replace with actual URL)
function openMenu() {
    // Replace with your actual menu URL or PDF
    const menuUrl = 'https://app.qaayima.com/restaurant/waffeehousesharjah';
    window.open(menuUrl, '_blank');
}

// Function to open Google Reviews
function openGoogleReview() {
    // Replace with your actual Google Business profile URL
    const googleReviewUrl = 'https://share.google/64qnpRxzv1SPotHsC';
    window.open(googleReviewUrl, '_blank');
}

// Function to open Instagram
function openInstagram() {
    // Replace with your actual Instagram URL
    const instagramUrl = 'https://www.instagram.com/waffeehouse.ae?igsh=MTR2dzNpam0xMWlzbA==';
    window.open(instagramUrl, '_blank');
}

// Add some interactive effects
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.05)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
        
        // Add click animation
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Add ripple effect
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
});

// Add CSS for ripple effect
const style = document.createElement('style');
style.textContent = `
    .nav-link {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
