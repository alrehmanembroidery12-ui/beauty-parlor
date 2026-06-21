// ========== DEFAULT CONFIGURATION ==========
const DEFAULT_CONFIG = {
    name: "Glamour Lounge",
    phone: "+92 300 1234567",
    location: "Gulberg III, Lahore, Pakistan"
};

// ========== CHECK IF ADMIN MODE ==========
const urlParams = new URLSearchParams(window.location.search);
const isAdmin = urlParams.get('admin') === '1';

if(isAdmin) {
    document.body.classList.add('admin-mode');
}

// ========== VIDEO FALLBACK ==========
const heroVideo = document.getElementById('heroVideo');
const heroFallback = document.getElementById('heroFallback');

if(heroVideo) {
    heroVideo.addEventListener('error', function() {
        heroFallback.style.display = 'block';
        heroFallback.style.backgroundImage = "url('images/slide1.jpg')";
        heroVideo.style.display = 'none';
    });
}

// ========== URL SE PARAMETERS READ KARO ==========
function getURLParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// ========== FINAL VALUES ==========
const urlBusinessName = getURLParameter('business');
const urlPhone = getURLParameter('phone');
const urlLocation = getURLParameter('location');

const finalBusinessName = urlBusinessName ? decodeURIComponent(urlBusinessName) : DEFAULT_CONFIG.name;
const finalPhone = urlPhone ? decodeURIComponent(urlPhone) : DEFAULT_CONFIG.phone;
const finalLocation = urlLocation ? decodeURIComponent(urlLocation) : DEFAULT_CONFIG.location;

// ========== HERO SLIDER IMAGES (Fallback) ==========
const heroImages = [
    "images/slide1.jpg",
    "images/slide2.jpg", 
    "images/slide3.jpg",
    "images/slide4.jpg"
];

// ========== MAIN SERVICES ==========
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

// ========== MAKEUP SERVICES ==========
const makeupServicesData = [
    { img: "images/Bridal-Makeup-Barat.jpg", title: "Bridal Makeup (Baraat)", desc: "Complete bridal look for baraat" },
    { img: "images/Bridal-Makeup-Walima.jpg", title: "Bridal Makeup (Walima)", desc: "Elegant walima look" },
    { img: "images/Mehndi-Makeup.jpg", title: "Mehndi Makeup", desc: "Colorful mehndi event makeup" },
    { img: "images/Nikkah-Engagment-Makeup.jpg", title: "Nikkah/Engagement", desc: "Soft & elegant bridal look" },
    { img: "images/Party-Makeup.jpg", title: "Party Makeup", desc: "Glamorous party look" },
    { img: "images/Bridal-Makeup-Barat.jpg", title: "Royal Bridal Package", desc: "Premium bridal experience" },
    { img: "images/Party-Makeup.jpg", title: "Evening Makeup", desc: "Perfect for formal events" },
    { img: "images/Mehndi-Makeup.jpg", title: "Celebrity Makeup", desc: "Red carpet ready look" }
];

// ========== HAIR SERVICES ==========
const hairServicesData = [
    { img: "images/Hair-Care.jpg", title: "Hair Care", desc: "Deep conditioning & treatments" },
    { img: "images/Hair-Dye.jpg", title: "Hair Dye", desc: "Professional hair coloring" },
    { img: "images/Hair-Style.jpg", title: "Hair Style", desc: "Trendy cuts & styling" }
];

// ========== GALLERY IMAGES ==========
const galleryImages = [
    "images/image.jpg", "images/image1.jpg", "images/image2.jpg", "images/image3.jpg",
    "images/image4.jpg", "images/image5.jpg", "images/image6.jpg", "images/image7.jpg",
    "images/image8.jpg", "images/image9.jpg", "images/image10.jpg", "images/image11.jpg",
    "images/image12.jpg", "images/image.jpg", "images/image1.jpg", "images/image2.jpg"
];

// ========== UPDATE BUSINESS INFO ==========
function updateBusinessInfo() {
    const nameElem = document.getElementById('businessName');
    if(nameElem) nameElem.innerText = finalBusinessName;
    
    const footerName1 = document.getElementById('footerBusinessName');
    if(footerName1) footerName1.innerText = finalBusinessName;
    
    const footerName2 = document.getElementById('footerBizName');
    if(footerName2) footerName2.innerText = finalBusinessName;
    
    const contactPhone = document.getElementById('contactPhone');
    if(contactPhone) contactPhone.innerText = finalPhone;
    
    const whatsappNumber = document.getElementById('whatsappNumber');
    if(whatsappNumber) whatsappNumber.innerText = finalPhone;
    
    const locationElem = document.getElementById('businessLocation');
    if(locationElem) locationElem.innerText = finalLocation;
    
    document.title = `${finalBusinessName} | Premium Beauty Parlor`;
}

// ========== DYNAMIC OG IMAGE GENERATOR ==========
function generateOGImage(businessName) {
    try {
        const canvas = document.createElement('canvas');
        canvas.width = 1200;
        canvas.height = 630;
        const ctx = canvas.getContext('2d');

        const gradient = ctx.createLinearGradient(0, 0, 1200, 630);
        gradient.addColorStop(0, '#1a1a1a');
        gradient.addColorStop(0.5, '#c7a44b');
        gradient.addColorStop(1, '#1a1a1a');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 1200, 630);

        ctx.beginPath();
        ctx.moveTo(100, 300);
        ctx.lineTo(1100, 300);
        ctx.strokeStyle = '#c7a44b';
        ctx.lineWidth = 3;
        ctx.stroke();

        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 48px Playfair Display, serif';
        ctx.fillText('✨ Beauty Parlor ✨', 600, 200);

        ctx.fillStyle = '#c7a44b';
        let fontSize = 72;
        if (businessName.length > 20) {
            fontSize = 48;
        } else if (businessName.length > 15) {
            fontSize = 56;
        }
        ctx.font = `bold ${fontSize}px Playfair Display, serif`;
        ctx.fillText(businessName || 'Your Parlor', 600, 380);

        ctx.fillStyle = '#aaaaaa';
        ctx.font = '24px Poppins, sans-serif';
        ctx.fillText('Premium Beauty Services • Book Your Appointment Today', 600, 480);

        ctx.fillStyle = '#666666';
        ctx.font = '18px Poppins, sans-serif';
        ctx.fillText('Visit our website for more details', 600, 560);

        return canvas.toDataURL('image/jpeg', 0.9);
    } catch (error) {
        console.error('❌ Error generating OG image:', error);
        return '';
    }
}

// ========== UPDATE OG IMAGE ==========
function updateOGImage() {
    try {
        const businessName = finalBusinessName || DEFAULT_CONFIG.name;
        const ogImage = generateOGImage(businessName);
        
        let ogMeta = document.querySelector('meta[property="og:image"]');
        if (!ogMeta) {
            ogMeta = document.createElement('meta');
            ogMeta.setAttribute('property', 'og:image');
            document.head.appendChild(ogMeta);
        }
        ogMeta.content = ogImage;
        
        let twitterMeta = document.querySelector('meta[name="twitter:image"]');
        if (!twitterMeta) {
            twitterMeta = document.createElement('meta');
            twitterMeta.setAttribute('name', 'twitter:image');
            document.head.appendChild(twitterMeta);
        }
        twitterMeta.content = ogImage;
        
        let ogTitle = document.querySelector('meta[property="og:title"]');
        if (!ogTitle) {
            ogTitle = document.createElement('meta');
            ogTitle.setAttribute('property', 'og:title');
            document.head.appendChild(ogTitle);
        }
        ogTitle.content = `Premium Beauty Parlor - ${businessName}`;
        
        console.log('✅ OG Image updated for:', businessName);
    } catch (error) {
        console.error('❌ Error updating OG image:', error);
    }
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

// ========== LINK GENERATOR ==========
function setupLinkGenerator() {
    if(!isAdmin) return;
    
    const generateBtn = document.getElementById('generateLinkBtn');
    const outputDiv = document.getElementById('generatedLinkOutput');
    
    if(generateBtn) {
        generateBtn.addEventListener('click', function() {
            let name = document.getElementById('genName').value;
            let phone = document.getElementById('genPhone').value;
            let location = document.getElementById('genLocation').value;
            
            if(name && phone) {
                let baseUrl = window.location.href.split('?')[0];
                let link = baseUrl + '?business=' + encodeURIComponent(name) + 
                           '&phone=' + encodeURIComponent(phone) +
                           '&location=' + encodeURIComponent(location || DEFAULT_CONFIG.location);
                
                outputDiv.innerHTML = `
                    <strong>✅ Customer ko ye link send karein:</strong><br>
                    <a href="${link}" target="_blank" style="color:#c7a44b; word-break:break-all;">${link}</a>
                `;
            } else {
                alert('Please enter both business name and phone number');
            }
        });
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

// ========== INITIALIZE ==========
function init() {
    updateBusinessInfo();
    
    setTimeout(function() {
        updateOGImage();
        console.log('✅ OG Image updated');
    }, 500);
    
    loadServices();
    loadMakeupServices();
    loadHairServices();
    loadGallery();
    initMobileMenu();
    initSmoothScroll();
    initActiveNav();
    initContactForm();
    setupLinkGenerator();
}

document.addEventListener('DOMContentLoaded', init);