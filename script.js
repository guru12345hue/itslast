// Movie Data
const movies = {
    nowShowing: [
        {
            title: "Pushpa 2: The Rule",
            poster: "https://images.pexels.com/photos/8724759/pexels-photo-8724759.jpeg",
            language: "Telugu",
            genre: "Action",
            duration: "2h 45m",
            showTimings: ["10:30 AM", "2:00 PM", "6:15 PM", "9:45 PM"]
        },
        {
            title: "Joker: Folie à Deux",
            poster: "https://images.pexels.com/photos/5662857/pexels-photo-5662857.jpeg",
            language: "English",
            genre: "Drama",
            duration: "2h 10m",
            showTimings: ["11:15 AM", "3:00 PM", "7:30 PM"]
        },
        {
            title: "Kalki 2898 AD",
            poster: "https://images.pexels.com/photos/3062541/pexels-photo-3062541.jpeg",
            language: "Telugu",
            genre: "Sci-Fi",
            duration: "2h 50m",
            showTimings: ["12:00 PM", "4:00 PM", "8:30 PM"]
        },
        {
            title: "Mr. & Mrs. Mahi",
            poster: "https://images.pexels.com/photos/4400608/pexels-photo-4400608.jpeg",
            language: "Hindi",
            genre: "Romance",
            duration: "2h 5m",
            showTimings: ["10:00 AM", "1:15 PM", "5:00 PM", "8:00 PM"]
        }
    ],
    comingSoon: [
        {
            title: "Indian 2",
            poster: "https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg",
            language: "Telugu / Tamil",
            releaseDate: "31 May 2025"
        },
        {
            title: "The Batman: Part II",
            poster: "https://images.pexels.com/photos/2817445/pexels-photo-2817445.jpeg",
            language: "English",
            releaseDate: "15 June 2025"
        },
        {
            title: "Game Changer",
            poster: "https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg",
            language: "Telugu",
            releaseDate: "20 June 2025"
        },
        {
            title: "Deadpool & Wolverine",
            poster: "https://images.pexels.com/photos/7234256/pexels-photo-7234256.jpeg",
            language: "English",
            releaseDate: "26 July 2025"
        }
    ]
};

const pricing = [
    { category: "Silver", price: 120 },
    { category: "Gold", price: 180 },
    { category: "Platinum", price: 250 },
    { category: "Balcony (AC)", price: 300 },
    { category: "Recliner (VIP)", price: 400 }
];

const foodMenu = {
    combos: [
        { name: "Classic Combo", items: "Salted Popcorn + Pepsi (Medium)", price: 150 },
        { name: "Movie Munch", items: "Nachos + Cheese Dip + Pepsi (Large)", price: 180 },
        { name: "Couple Combo", items: "2 Cheese Burgers + Fries + 2 Cold Drinks", price: 320 }
    ],
    snacks: [
        { name: "Salted Popcorn (Medium)", price: 70 },
        { name: "Caramel Popcorn (Large)", price: 120 },
        { name: "Cheese Nachos", price: 90 },
        { name: "Veg Burger", price: 80 },
        { name: "French Fries", price: 70 },
        { name: "Samosa (2 pieces)", price: 40 }
    ],
    desserts: [
        { name: "Softy Ice Cream (Cone)", price: 50 },
        { name: "Brownie with Ice Cream", price: 90 },
        { name: "Pepsi / Coke (Medium)", price: 50 },
        { name: "Coffee (Hot)", price: 40 },
        { name: "Mineral Water (1 L)", price: 20 }
    ]
};

// Hero Slider
const slides = [
    {
        image: "https://images.pexels.com/photos/3945317/pexels-photo-3945317.jpeg",
        title: "Pushpa 2: The Rule",
        tagline: "The saga continues"
    },
    {
        image: "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg",
        title: "Joker: Folie à Deux",
        tagline: "Madness is the only way"
    },
    {
        image: "https://images.pexels.com/photos/7991321/pexels-photo-7991321.jpeg",
        title: "Special Offer",
        tagline: "Wednesday discount on all tickets",
        isPromo: true
    }
];

let currentSlide = 0;

// Initialize slider
function initSlider() {
    const slider = document.querySelector('.slider');
    const dotsContainer = document.getElementById('dots');
    
    slides.forEach((slide, index) => {
        // Create slide
        const slideDiv = document.createElement('div');
        slideDiv.className = `slide ${index === 0 ? 'active' : ''}`;
        slideDiv.style.backgroundImage = `linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.3)), url(${slide.image})`;
        
        // Add content
        const content = document.createElement('div');
        content.className = 'slide-content';
        content.innerHTML = `
            <div class="${slide.isPromo ? 'promo-tag' : 'now-showing-tag'}">
                ${slide.isPromo ? 'Limited Time Offer' : 'Now Showing'}
            </div>
            <h2>${slide.title}</h2>
            <p>${slide.tagline}</p>
            <button class="book-btn">🎟 Book Now</button>
        `;
        
        slideDiv.appendChild(content);
        slider.appendChild(slideDiv);
        
        // Create dot
        const dot = document.createElement('div');
        dot.className = `dot ${index === 0 ? 'active' : ''}`;
        dot.onclick = () => goToSlide(index);
        dotsContainer.appendChild(dot);
    });
}

function changeSlide(direction) {
    const newSlide = (currentSlide + direction + slides.length) % slides.length;
    goToSlide(newSlide);
}

function goToSlide(n) {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    
    currentSlide = n;
    
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
}

// Initialize movies
function initMovies() {
    const nowShowingGrid = document.getElementById('nowShowingGrid');
    const comingSoonGrid = document.getElementById('comingSoonGrid');
    
    // Now Showing Movies
    movies.nowShowing.forEach(movie => {
        const card = document.createElement('div');
        card.className = 'movie-card';
        card.innerHTML = `
            <div class="movie-poster">
                <img src="${movie.poster}" alt="${movie.title}">
            </div>
            <div class="movie-info">
                <h3>${movie.title}</h3>
                <p>${movie.language} | ${movie.genre} | ${movie.duration}</p>
                <div class="show-timings">
                    ${movie.showTimings.map(time => `<span>${time}</span>`).join('')}
                </div>
                <button class="book-btn">Book Now</button>
            </div>
        `;
        nowShowingGrid.appendChild(card);
    });
    
    // Coming Soon Movies
    movies.comingSoon.forEach(movie => {
        const card = document.createElement('div');
        card.className = 'movie-card';
        card.innerHTML = `
            <div class="movie-poster">
                <img src="${movie.poster}" alt="${movie.title}">
            </div>
            <div class="movie-info">
                <h3>${movie.title}</h3>
                <p>${movie.language}</p>
                <p class="release-date">Releasing: ${movie.releaseDate}</p>
            </div>
        `;
        comingSoonGrid.appendChild(card);
    });
}

// Initialize pricing
function initPricing() {
    const pricingTable = document.getElementById('pricingTable');
    
    pricing.forEach(item => {
        const row = document.createElement('div');
        row.className = 'price-row';
        row.innerHTML = `
            <span>${item.category}</span>
            <span>₹${item.price}</span>
        `;
        pricingTable.appendChild(row);
    });
}

// Food menu
function showMenu(category) {
    const menuContent = document.getElementById('menuContent');
    const buttons = document.querySelectorAll('.menu-tabs button');
    
    // Update active button
    buttons.forEach(button => {
        button.classList.remove('active');
        if(button.textContent.toLowerCase().includes(category)) {
            button.classList.add('active');
        }
    });
    
    // Display menu items
    const items = foodMenu[category];
    menuContent.innerHTML = items.map(item => `
        <div class="menu-item">
            <span>${item.name}</span>
            <span>₹${item.price}</span>
        </div>
    `).join('');
}

// Mobile menu
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if(window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Initialize everything when the page loads
document.addEventListener('DOMContentLoaded', () => {
    initSlider();
    initMovies();
    initPricing();
    showMenu('combos'); // Show combos by default
    
    // Start auto-sliding
    setInterval(() => changeSlide(1), 5000);
});