// ===========================================
// script.js - Core UI Logic and Event Handlers
// ===========================================

// Preloader Logic
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        gsap.to(preloader, { opacity: 0, duration: 0.5, onComplete: () => preloader.style.display = 'none' });
    }
});

// Smooth Scrolling for Navigation
document.querySelectorAll('.nav-menu a.nav-link').forEach(anchor => {
    // Only apply smooth scroll to links that are not dropdown toggles themselves
    // And also check if the link is part of the mobile dropdown (i.e. starts with #)
    if (!anchor.classList.contains('dropdown-toggle') || (window.innerWidth <= 768 && anchor.getAttribute('href').startsWith('#'))) {
        anchor.addEventListener('click', function (e) {
            // Prevent default behavior only if it's a smooth scroll target
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);

                // Close mobile menu if open
                if (window.innerWidth <= 768) {
                    navMenu.classList.remove('active');
                    hamburger.classList.remove('active');
                    navOverlay.classList.remove('active');
                    document.body.style.overflow = ''; // Re-enable body scroll
                    // Also close mobile dropdown if it was open
                    const campaignsDropdownMobile = document.getElementById('campaigns-dropdown');
                    if(campaignsDropdownMobile) campaignsDropdownMobile.classList.remove('active');
                }

                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    }
});

// Hamburger Menu Toggle (Sidebar)
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navOverlay = document.getElementById('navOverlay');

function toggleMobileMenu() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    navOverlay.classList.toggle('active');
    // Toggle body scroll lock
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
}

hamburger.addEventListener('click', toggleMobileMenu);
navOverlay.addEventListener('click', toggleMobileMenu); // Close menu when overlay is clicked


// Campaign Dropdown Menu Logic
const campaignsDropdown = document.getElementById('campaigns-dropdown');
const campaignsToggle = campaignsDropdown.querySelector('.dropdown-toggle');
const dropdownMenu = campaignsDropdown.querySelector('.dropdown-menu');

// Desktop dropdown hover behavior
campaignsDropdown.addEventListener('mouseenter', () => {
    if (window.innerWidth > 768) {
        gsap.to(dropdownMenu, { duration: 0.2, autoAlpha: 1, display: 'block', y: 0 });
    }
});
campaignsDropdown.addEventListener('mouseleave', () => {
    if (window.innerWidth > 768) {
        gsap.to(dropdownMenu, { duration: 0.2, autoAlpha: 0, display: 'none', y: -10 });
    }
});

// Mobile dropdown toggle behavior (click)
campaignsToggle.addEventListener('click', (e) => {
    if (window.innerWidth <= 768) {
        e.preventDefault(); // Prevent default scroll to #campaigns-section immediately
        campaignsDropdown.classList.toggle('active'); // This class controls display in mobile CSS
        // Optionally animate mobile dropdown
        if (campaignsDropdown.classList.contains('active')) {
             gsap.fromTo(dropdownMenu.children, {y: 10, opacity: 0}, {y: 0, opacity: 1, stagger: 0.05, duration: 0.3});
        }
    }
});


// Theme Switcher Logic
const themeRadios = document.querySelectorAll('.theme-switcher-desktop input[name="theme"]');
const magicButton = document.getElementById('themeSwitcherMobile');
const body = document.body;
const themes = ['light', 'dark', 'neon']; // Order of themes

// Set initial theme from localStorage or default to light
let currentThemeIndex = 0;
const savedTheme = localStorage.getItem('websiteTheme') || 'light';
currentThemeIndex = themes.indexOf(savedTheme);
if (currentThemeIndex === -1) { 
    currentThemeIndex = 0;
}
body.classList.add(`theme-${themes[currentThemeIndex]}`);

// Check radio button for desktop
const initialRadio = document.querySelector(`.theme-switcher-desktop input[value="${themes[currentThemeIndex]}"]`);
if (initialRadio) {
    initialRadio.checked = true;
}

// Function to convert hex or rgb string to r,g,b format for CSS variables
function hexToRgb(hex) {
    if (!hex) return '0, 0, 0'; 
    if (hex.startsWith('rgb')) {
        const parts = hex.match(/\d+/g);
        return parts ? `${parts[0]}, ${parts[1]}, ${parts[2]}` : '0, 0, 0';
    }
    let r = 0, g = 0, b = 0;
    if (hex.length === 7) { 
        r = parseInt(hex.substring(1, 3), 16);
        g = parseInt(hex.substring(3, 5), 16);
        b = parseInt(hex.substring(5, 7), 16);
    } else if (hex.length === 4) { 
        r = parseInt(hex[1] + hex[1], 16);
        g = parseInt(hex[2] + hex[2], 16);
        b = parseInt(hex[3] + hex[3], 16);
    }
    return `${r}, ${g}, ${b}`;
}

// Update primary and accent color RGB for dynamic shadows and glassmorphism
function updateColorRgbVariables() {
    const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--primary-color');
    const accentColor = getComputedStyle(document.documentElement).getPropertyValue('--accent-color');
    
    document.documentElement.style.setProperty('--primary-color-rgb', hexToRgb(primaryColor));
    document.documentElement.style.setProperty('--accent-color-rgb', hexToRgb(accentColor));
}

// Call initially to set RGB variables
updateColorRgbVariables();

// Event listener for desktop radio buttons
themeRadios.forEach(radio => {
    radio.addEventListener('change', (event) => {
        const selectedTheme = event.target.value;
        body.className = ''; 
        body.classList.add(`theme-${selectedTheme}`);
        localStorage.setItem('websiteTheme', selectedTheme);
        currentThemeIndex = themes.indexOf(selectedTheme); 
        updateColorRgbVariables(); 
    });
});

// Event listener for mobile magic button
magicButton.addEventListener('click', () => {
    currentThemeIndex = (currentThemeIndex + 1) % themes.length;
    const nextTheme = themes[currentThemeIndex];
    body.className = '';
    body.classList.add(`theme-${nextTheme}`);
    localStorage.setItem('websiteTheme', nextTheme);
    const nextRadio = document.querySelector(`.theme-switcher-desktop input[value="${nextTheme}"]`);
    if (nextRadio) {
        nextRadio.checked = true;
    }
    updateColorRgbVariables(); 
});


// WhatsApp Button Link (replace YOURPHONENUMBER)
const whatsappButton = document.getElementById('whatsappButton');
const whatsappNumber = '+923322473167'; // Replace with the actual WhatsApp number (e.g., +923001234567)
whatsappButton.href = `https://wa.me/${whatsappNumber}?text=Hello%20Kaizen%20Multi-Tech%2C%20I%20am%20interested%20in%20your%20services.`;


// Contact Form Submission (Client-side only for demo)
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault(); 

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    if (name && email && subject && message) {
        alert('Thank you for your message, ' + name + '! We have received your inquiry and will get back to you within 24 hours.');
        contactForm.reset(); 
    } else {
        alert('Please ensure all required fields are filled.');
    }
});

// Back to Top Button Functionality
const backToTopBtn = document.getElementById('backToTopBtn');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) { 
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


// ===========================================
// campaigns.js - Dynamic Campaign Generation
// This part of the code is conceptually separate but included here for single-file delivery
// In a real project, this might be its own file or loaded via an API.
// ===========================================

const campaignsData = [
    {
        id: "campaign-spectrum",
        imgSrc: "./spectrum.jpeg", // Updated seed
        title: "Spectrum Services",
        description: "Optimizing broadband and communication services for enhanced user experience and network reliability."
    },
    {
        id: "campaign-telecom",
        imgSrc: "./mobile1.jpeg", // Updated seed
        title: "Telecom Solutions",
        description: "Delivering cutting-edge telecommunication infrastructure and services to connect businesses and communities."
    },
    {
        id: "campaign-infinity",
        imgSrc: "infinity.jpeg", // Matches your AI image style
        title: "Infinity Project",
        description: "A long-term initiative focused on expanding digital reach and providing limitless connectivity solutions."
    },
    {
        id: "campaign-cars-inspection",
        imgSrc: "./carInspection.jpeg", // Matches your AI image style
        title: "Cars Inspection Service",
        description: "Providing comprehensive vehicle inspection services to ensure safety, performance, and compliance for buyers and sellers."
    },
    {
        id: "campaign-cars-sales",
        imgSrc: "cars.jpeg", // Matches your AI image style
        title: "Cars Sales & Purchase",
        description: "Streamlining the process of buying and selling vehicles with secure platforms and expert guidance."
    },
    {
        id: "campaign-property-sale",
        imgSrc: "cityTech.jpeg", 
        title: "Property Sale & Purchase",
        description: "Facilitating seamless real estate transactions with advanced listings, virtual tours, and legal support."
    }
];

function generateCampaigns() {
    const campaignsGrid = document.getElementById('campaignsGrid');
    const dropdownMenuUl = document.querySelector('.nav-dropdown .dropdown-menu');

    if (campaignsGrid && dropdownMenuUl) {
        let gridHtmlContent = '';
        let dropdownHtmlContent = '';

        campaignsData.forEach(campaign => {
            // Generate content for the main campaigns grid
            gridHtmlContent += `
                <div class="campaign-item gsap-campaign-pop" id="${campaign.id}">
                    <img src="${campaign.imgSrc}" alt="${campaign.title}">
                    <div class="campaign-content">
                        <h3>${campaign.title}</h3>
                        <p>${campaign.description}</p>
                    </div>
                </div>
            `;
            // Generate content for the dropdown menu
            dropdownHtmlContent += `
                <li><a href="#${campaign.id}" class="nav-link">${campaign.title}</a></li>
            `;
        });
        campaignsGrid.innerHTML = gridHtmlContent;
        dropdownMenuUl.innerHTML = dropdownHtmlContent;

        // Re-initialize GSAP ScrollTrigger for newly added elements
        // This function is defined in animations.js
        if (typeof initGsapAnimations === 'function') {
            initGsapAnimations(); 
        } else {
            console.warn("initGsapAnimations function not found. Animations might not be initialized.");
        }
    }
}

// Call to generate campaigns when the DOM is ready
document.addEventListener('DOMContentLoaded', generateCampaigns);