/* --- 1. Navbar Scroll Effect --- */
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.glass-navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

/* --- 2. Mobile Menu Toggle --- */
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

/* --- 3. Star Rating Interaction --- */
const stars = document.querySelectorAll('.stars-input i');
let selectedRating = 0;

stars.forEach(star => {
    star.addEventListener('mouseover', function() {
        resetStars();
        const rating = this.getAttribute('data-rating');
        highlightStars(rating);
    });

    star.addEventListener('mouseout', function() {
        resetStars();
        if (selectedRating > 0) {
            highlightStars(selectedRating);
        }
    });

    star.addEventListener('click', function() {
        selectedRating = this.getAttribute('data-rating');
        highlightStars(selectedRating);
    });
});

function highlightStars(rating) {
    stars.forEach(s => {
        if (s.getAttribute('data-rating') <= rating) {
            s.classList.replace('far', 'fas'); 
        }
    });
}

function resetStars() {
    stars.forEach(s => {
        s.classList.replace('fas', 'far'); 
    });
}

/* --- 4. Review Form Submission to Google --- */
const reviewForm = document.getElementById('review-form');

if (reviewForm) {
    reviewForm.addEventListener('submit', function(e) {
        e.preventDefault(); 
        
        const googleReviewURL = "https://g.page/r/YOUR_LINK_HERE/review"; 

        if (selectedRating === 0) {
            alert("Please select a star rating!");
            return;
        }

        const name = this.querySelector('input').value;
        alert(`Thank you ${name}! Redirecting you to our Google Review page to finalize your feedback.`);
        
        window.open(googleReviewURL, '_blank'); 
        
        this.reset();
        selectedRating = 0;
        resetStars();
    });
}

/* --- 5. Amazon Links for Menu Cards  --- */
const cards = document.querySelectorAll('.feature-card');


const amazonLinks = [
    "https://www.amazon.in/dp/B0DYC8P4QC", // Meat Masala Link
    "https://www.amazon.in/dp/B0DZT5QC71", // Sambar Paste Link
    "https://www.amazon.in/dp/B0DZ2ZDH6G"  // Kadala Curry Link
];

cards.forEach((card, index) => {
    card.style.cursor = 'pointer'; 
    card.addEventListener('click', () => {
        const link = amazonLinks[index];
        if (link) {
            window.open(link, '_blank'); 
        }
    });
});