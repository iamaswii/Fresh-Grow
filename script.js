// Mobile Menu Toggle
const mobileBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    // Animate icon
    const icon = mobileBtn.querySelector('i');
    if (navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-xmark');
    } else {
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
    }
});

// Menu Filtering
const filterBtns = document.querySelectorAll('.filter-btn');
const menuItems = document.querySelectorAll('.menu-item');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');
        
        const filterValue = btn.getAttribute('data-filter');
        
        menuItems.forEach(item => {
            if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                item.style.display = 'flex';
                // Add fade in animation
                item.style.opacity = '0';
                setTimeout(() => {
                    item.style.opacity = '1';
                }, 50);
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// Scroll Reveal Animation
const revealElements = document.querySelectorAll('.glass-card, .hero-content, .section-header, .discount-card');

const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target); // Reveal only once
        }
    });
}, {
    root: null,
    threshold: 0.15, // Trigger when 15% visible
});

revealElements.forEach(el => {
    el.classList.add('reveal-element');
    revealObserver.observe(el);
});

// --- Amazon Product Links ---

// 1. Meat Masala Card
const meatCard = document.querySelector('.feature-card.glass-card:nth-child(1)');
if (meatCard) {
    meatCard.style.cursor = 'pointer';
    meatCard.addEventListener('click', () => {
        window.open('https://www.amazon.in/dp/B0DYC8P4QC', '_blank');
    });
}
// 2. sambar card
const sambarCard = document.querySelector('.feature-card.glass-card:nth-child(2)'); 
if (sambarCard) {
    sambarCard.style.cursor = 'pointer';
    sambarCard.addEventListener('click', () => {
        window.open('https://www.amazon.in/dp/B0DZT5QC71', '_blank');
    });
}

// 3.kadala card
const kadalaCard = document.querySelector('.feature-card.glass-card:nth-child(3)');
if (kadalaCard) {
    kadalaCard.style.cursor = 'pointer';
    kadalaCard.addEventListener('click', () => {
        window.open('https://www.amazon.in/dp/B0DZ2ZDH6G', '_blank'); 
    });
}



// Sticky Navbar Background on Scroll
const header = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.style.background = 'rgba(13, 13, 13, 0.9)';
        header.style.backdropFilter = 'blur(10px)';
        header.style.boxShadow = '0 5px 20px rgba(0,0,0,0.5)';
        header.style.padding = '10px 0';
    } else {
        header.style.background = 'transparent';
        header.style.backdropFilter = 'none';
        header.style.boxShadow = 'none';
        header.style.padding = '20px 0';
    }
});
