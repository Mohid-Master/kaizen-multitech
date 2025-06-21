// ===========================================
// animations.js - GSAP Animations
// This file assumes GSAP and ScrollTrigger are loaded before it.
// ===========================================

// Initialize GSAP animations
function initGsapAnimations() {
    // Ensure ScrollTrigger is registered
    gsap.registerPlugin(ScrollTrigger);

    // Clear any existing ScrollTriggers on elements to prevent duplicates when called multiple times
    // (Important for dynamically generated content if initGsapAnimations is called again)
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());

    // Hero Section Animations (on page load)
    gsap.from(".gsap-hero-heading", { opacity: 0, y: 50, duration: 1.2, ease: "power3.out" });
    gsap.from(".gsap-hero-subheading", { opacity: 0, y: 50, duration: 1.2, delay: 0.3, ease: "power3.out" });
    gsap.from(".gsap-hero-btn", { opacity: 0, y: 50, duration: 1.2, delay: 0.6, ease: "power3.out" });

    // Animated Logo Text in Hero Section
    const animatedLogoText = document.getElementById('animatedLogoText');
    if (animatedLogoText) {
        gsap.from(animatedLogoText, {
            opacity: 0,
            scale: 0.8,
            duration: 1.5,
            delay: 1.0, // Appears after main hero content
            ease: "elastic.out(1, 0.75)" // A bouncy, interactive feel
        });

        // Hover/Touch Interaction for the animated logo text
        animatedLogoText.addEventListener('mouseenter', () => {
            gsap.to(animatedLogoText, { scale: 1.1, duration: 0.3, textShadow: "0 0 25px #00ffff, 0 0 35px #ff00ff, 0 0 50px #00ffff", ease: "power1.out" });
        });
        animatedLogoText.addEventListener('mouseleave', () => {
            gsap.to(animatedLogoText, { scale: 1.0, duration: 0.3, textShadow: "0 0 10px rgba(0, 255, 255, 0.8), 0 0 20px rgba(255, 0, 255, 0.6)", ease: "power1.out" });
        });
    }

    // General Fade-in Up Animation for Sections (on scroll)
    // This targets common content elements like section headings, subheadings, and service cards
    gsap.utils.toArray(".gsap-reveal-fade-up").forEach(element => {
        gsap.from(element, {
            opacity: 0,
            y: 60,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: element,
                start: "top 85%", // Animation starts when element top is 85% down from viewport top
                toggleActions: "play none none none", // Play animation once
            }
        });
    });

    // Campaign Section "Pop Out" Animation (applied to dynamically generated items)
    // This will re-apply the animation logic to any elements with .gsap-campaign-pop class
    // It's called after campaigns are generated in script.js
    gsap.utils.toArray(".gsap-campaign-pop").forEach(item => {
        gsap.from(item, {
            opacity: 0,
            y: 50,
            scale: 0.9,
            duration: 1,
            ease: "back.out(1.7)", // A pleasant 'pop' effect
            scrollTrigger: {
                trigger: item,
                start: "top 85%", // Animation starts when element top is 85% down from viewport top
                toggleActions: "play none none none" // Play animation once
            }
        });
    });
}

// Initial call to run GSAP animations after the page loads
// campaigns.js will call initGsapAnimations after generating dynamic content.
// This ensures animations are applied to all elements, including dynamically added ones.
// (Moved to be called by script.js after generateCampaigns for correct order)
// document.addEventListener('DOMContentLoaded', initGsapAnimations); 