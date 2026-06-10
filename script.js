// ========== DEFAULT CONFIGURATION (Agar URL mein kuch nahi to yeh use hoga) ==========
const DEFAULT_CONFIG = {
    name: "Glamour Lounge",
    phone: "+92 300 1234567"
};

// ========== YE FUNCTION URL SE NAME AUR PHONE READ KAREGA ==========
function getURLParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// ========== FINAL VALUES - URL SE YA DEFAULT SE ==========
const urlBusinessName = getURLParameter('business');
const urlPhone = getURLParameter('phone');

const finalBusinessName = urlBusinessName ? decodeURIComponent(urlBusinessName) : DEFAULT_CONFIG.name;
const finalPhone = urlPhone ? decodeURIComponent(urlPhone) : DEFAULT_CONFIG.phone;

// ========== HERO SLIDER IMAGES (.jpg extension) ==========
const heroImages = [
    "images/slide1.jpg",
    "images/slide2.jpg", 
    "images/slide3.jpg",
    "images/slide4.jpg"
];

// ========== MAIN SERVICES (8 services) .jpg ==========
const servicesData = [
    { img: "images/Body-Spa.jpg", title: "Body Spa", desc: "Relaxing full body treatments" },
    { img: "images/Eyelash.jpg", title: "Eyelash", desc: "Volume lashes & extensions" },
    { img: "images/Hair.jpg", title: "Hair", desc: "Styling, cutting & treatments" },
    { img: "images/Make-Up.jpg", title: "Make-Up", desc: "Professional makeup artistry" },
    { img: "images/Mehndi.jpg", title: "Mehndi", desc: "Traditional & bridal mehndi" },
    { img: "images/Nails.jpg", title: "Nails", desc: "Manicure, pedicure & nail art" },
    { img: "images/Skin.jpg", title: "Skin", desc: "Facials & skin treatments" },
    { img: "images/Vouchers.jpg", title: "Vouchers", desc: "Gift vouchers available" }
];

// ========== MAKEUP SERVICES DETAILS .jpg ==========
const makeupServicesData = [
    { img: "images/Bridal-Makeup-Barat.jpg", title: "Bridal Makeup (Baraat)", desc: "Complete bridal look for baraat" },
    { img: "images/Bridal-Makeup-Walima.jpg", title: "Bridal Makeup (Walima)", desc: "Elegant walima look" },
    { img: "images/Mehndi-Makeup.jpg", title: "Mehndi Makeup", desc: "Colorful mehndi event makeup" },
    { img: "images/Nikkah-Engagment-Makeup.jpg", title: "Nikkah/Engagement", desc: "Soft & elegant bridal look" },
    { img: "images/Party-Makeup.jpg", title: "Party Makeup", desc: "Glamorous party look" },
    { img: "images/function-Makeup.jpg", title: "Royal Bridal Package", desc: "Premium bridal experience" },
    { img: "images/evening-makeup.jpg", title: "Evening Makeup", desc: "Perfect for formal events" },
    { img: "images/makeup.jpg", title: "Celebrity Makeup", desc: "Red carpet ready look" }
];

// ========== HAIR SERVICES DETAILS .jpg ==========
const hairServicesData = [
    { img: "images/Hair-Care.jpg", title: "Hair Care", desc: "Deep conditioning & treatments" },
    { img: "images/Hair-Dye.jpg", title: "Hair Dye", desc: "Professional hair coloring" },
    { img: "images/Hair-Style.jpg", title: "Hair Style", desc: "Trendy cuts & styling" }
];

// ========== GALLERY IMAGES .jpg ==========
const galleryImages = [
    "images/image.jpg", "images/image1.jpg", "images/image2.jpg", "images/image3.jpg",
    "images/image4.jpg", "images/image5.jpg", "images/image6.jpg", "images/image7.jpg",
    "images/image8.jpg", "images/image9.jpg", "images/image10.jpg", "images/image11.jpg",
    "images/image12.jpg", "images/image13.jpg", "images/image15.jpg", "images/image14.jpg"
];

// ========== YE FUNCTION SARI JAGAH NAME AUR PHONE UPDATE KAREGA ==========
function updateBusinessInfo() {
    // Navbar mein name
    const businessNameElem = document.getElementById('businessName');
    if(businessNameElem) businessNameElem.innerText = finalBusinessName;
    
    // Footer mein name
    const footerBusinessNameElem = document.getElementById('footerBusinessName');
    if(footerBusinessNameElem) footerBusinessNameElem.innerText = finalBusinessName;
    
    const footerBizNameElem = document.getElementById('footerBizName');
    if(footerBizNameElem) footerBizNameElem.innerText = finalBusinessName;
    
    // Contact section mein phone
    const contactPhoneElem = document.getElementById('contactPhone');
    if(contactPhoneElem) contactPhoneElem.innerText = finalPhone;
    
    const whatsappNumberElem = document.getElementById('whatsappNumber');
    if(whatsappNumberElem) whatsappNumberElem.innerText = finalPhone;
    
    // Browser tab ka title
    document.title = `${finalBusinessName} | Premium Beauty Parlor`;
}

// ========== HERO SLIDER CODE ==========
let currentSlide = 0;
let slideInterval;
const slider = document.getElementById('heroSlider');
const dotsContainer = document.getElementById('sliderDots');
let totalSlides = heroImages.length;

function createSlides() {
    if(!slider) return;
    slider.innerHTML = '';
    heroImages.forEach((img) => {
        const slide = document.createElement('div');
        slide.className = 'slide';
        slide.style.backgroundImage = `url('${img}')`;
        slide.style.backgroundSize = 'cover';
        slide.style.backgroundPosition = 'center';
        slider.appendChild(slide);
    });
}

function createDots() {
    if(!dotsContainer) return;
    dotsContainer.innerHTML = '';
    for(let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('div');
        dot.className = 'dot';
        if(i === currentSlide) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(dot);
    }
}

function updateDots() {
    document.querySelectorAll('.dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === currentSlide);
    });
}

function goToSlide(index) {
    currentSlide = index;
    if(slider) slider.style.transform = `translateX(-${currentSlide * 100}%)`;
    updateDots();
    resetInterval();
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    goToSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    goToSlide(currentSlide);
}

function startAutoSlide() {
    slideInterval = setInterval(() => {
        nextSlide();
    }, 4000);
}

function resetInterval() {
    clearInterval(slideInterval);
    startAutoSlide();
}

// ========== LOAD SERVICES ==========
function loadServices() {
    const container = document.getElementById('servicesGrid');
    if(container) {
        container.innerHTML = servicesData.map(service => `
            <div class="service-card">
                <img src="${service.img}" alt="${service.title}" onerror="this.src='https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=400'">
                <h3>${service.title}</h3>
                <p>${service.desc}</p>
            </div>
        `).join('');
    }
}

function loadMakeupServices() {
    const servicesContainer = document.getElementById('servicesGrid');
    if(servicesContainer && servicesContainer.parentNode) {
        const makeupHTML = `
            <div class="section-header" style="margin-top: 60px;">
                <span class="subtitle">Specialized</span>
                <h2>Makeup Services</h2>
                <p>Professional makeup for every occasion</p>
            </div>
            <div class="services-grid" id="makeupGrid">
                ${makeupServicesData.map(service => `
                    <div class="service-card">
                        <img src="${service.img}" alt="${service.title}" onerror="this.src='https://images.unsplash.com/photo-1516490981167-dc990a242afe?w=400'">
                        <h3>${service.title}</h3>
                        <p>${service.desc}</p>
                    </div>
                `).join('')}
            </div>
        `;
        servicesContainer.insertAdjacentHTML('afterend', makeupHTML);
    }
}

function loadHairServices() {
    const makeupGrid = document.getElementById('makeupGrid');
    if(makeupGrid) {
        const hairHTML = `
            <div class="section-header" style="margin-top: 60px;">
                <span class="subtitle">Expert Care</span>
                <h2>Hair Services</h2>
                <p>Premium hair treatments & styling</p>
            </div>
            <div class="services-grid" id="hairGrid">
                ${hairServicesData.map(service => `
                    <div class="service-card">
                        <img src="${service.img}" alt="${service.title}" onerror="this.src='https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400'">
                        <h3>${service.title}</h3>
                        <p>${service.desc}</p>
                    </div>
                `).join('')}
            </div>
        `;
        makeupGrid.insertAdjacentHTML('afterend', hairHTML);
    }
}

function loadGallery() {
    const container = document.getElementById('galleryGrid');
    if(container) {
        container.innerHTML = galleryImages.map(img => `
            <div class="gallery-item">
                <img src="${img}" alt="Gallery Image" onerror="this.src='https://images.unsplash.com/photo-1487412727138-550c7b8c8f0a?w=400'">
                <div class="gallery-overlay">
                    <i class="fas fa-search-plus"></i>
                </div>
            </div>
        `).join('');
    }
}

// ========== MOBILE MENU ==========
function initMobileMenu() {
    const toggleBtn = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    if(toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            const navLinksEl = document.getElementById('navLinks');
            if(navLinksEl) navLinksEl.classList.remove('active');
        });
    });
}

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if(target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

function initActiveNav() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if(pageYOffset >= sectionTop) {
                current = section.getAttribute('id');
            }
        });
        navLinks.forEach(link => {
            link.classList.remove('active');
            if(link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

function initContactForm() {
    const form = document.getElementById('contactForm');
    if(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('✨ Thank you! We will contact you soon. 📞');
            form.reset();
        });
    }
}

// ========== LINK GENERATOR (Aapke liye helper) ==========
function setupLinkGenerator() {
    const generateBtn = document.getElementById('generateLinkBtn');
    if(generateBtn) {
        generateBtn.addEventListener('click', function() {
            let name = document.getElementById('genName').value;
            let phone = document.getElementById('genPhone').value;
            if(name && phone) {
                let baseUrl = window.location.href.split('?')[0];
                let link = baseUrl + '?business=' + encodeURIComponent(name) + '&phone=' + encodeURIComponent(phone);
                document.getElementById('generatedLinkOutput').innerHTML = '<strong>✅ Customer ko ye link send karein:</strong><br><a href="'+link+'" target="_blank">'+link+'</a>';
            } else {
                alert('Please enter both business name and phone number');
            }
        });
    }
}

// ========== SAB KUCH START KARO ==========
function init() {
    updateBusinessInfo();
    createSlides();
    createDots();
    loadServices();
    loadMakeupServices();
    loadHairServices();
    loadGallery();
    startAutoSlide();
    initMobileMenu();
    initSmoothScroll();
    initActiveNav();
    initContactForm();
    setupLinkGenerator();
    
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    if(prevBtn) prevBtn.addEventListener('click', prevSlide);
    if(nextBtn) nextBtn.addEventListener('click', nextSlide);
    
    window.addEventListener('resize', () => {
        goToSlide(currentSlide);
    });
}

document.addEventListener('DOMContentLoaded', init);