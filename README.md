# KAIZEN MULTI-TECH - Innovative Software & Digital Solutions

## Project Overview

This project is a sophisticated, single-page website demo for "KAIZEN MULTI-TECH," a company specializing in software and digital solutions. It is designed to be highly professional, visually appealing, and fully responsive across all devices (desktop, tablet, and mobile). The demo incorporates advanced frontend technologies to showcase dynamic content, interactive elements, and a customizable user experience, making it ideal for client presentations and portfolio showcasing.

## Features

*   **Fully Responsive Design:** Optimized for seamless viewing and interaction on desktops, tablets (`<=992px`, `<=768px`), and mobile phones (`<=480px`).
*   **Dynamic Theme System:**
    *   Offers three distinct themes: **Light (Apple-like)**, **Dark (Blueish)**, and **Neon**.
    *   Theme switching is instant and smooth, utilizing CSS custom properties (variables) for elegant transitions.
    *   Includes a desktop-specific radio-button switcher and a mobile-friendly "Magic Button" to cycle themes.
*   **Hero Section with Video Background:** Features a captivating, looping video background to immediately grab attention, with a solid image fallback for broader compatibility.
*   **Dynamic Campaigns Section:**
    *   Campaigns are dynamically loaded and rendered using JavaScript templating, allowing for easy future updates via a data array.
    *   Each campaign item includes an image, title, and description.
*   **Nested Navigation for Campaigns:**
    *   **Desktop:** The "Campaigns" navigation item includes a dropdown menu that displays individual campaign links on hover.
    *   **Mobile:** The hamburger menu-triggered sidebar also expands to show campaign sub-links on tap, improving mobile navigation.
*   **Interactive Hero Text Animation:** "KAIZEN MULTI-TECH" text in the hero section features a subtle animation on load and a dynamic hover/touch effect, demonstrating advanced interactivity.
*   **Floating WhatsApp Contact Button:** Replaces the generic chat icon, providing a direct link to WhatsApp for quick client communication. Includes glassmorphism effects in the Neon theme.
*   **Smooth Scroll Animations (GSAP):**
    *   Elements elegantly fade in and slide up as they scroll into view (`gsap-reveal-fade-up`).
    *   Campaign cards have a distinct "pop-out" animation (`gsap-campaign-pop`).
    *   Ensures a modern and engaging user experience while maintaining performance.
*   **Professional UI/UX:** Clean typography (Poppins, Lato), well-defined sections, subtle hover effects, and strategic use of spacing contribute to a polished and premium feel.
*   **Reliable Image & Video Loading:** All images (excluding the Hero video) utilize `Lorem Picsum` with `seed` values for consistent and error-free loading, visually matching the desired futuristic/tech aesthetic.
*   **Modular Code Structure:** Separated HTML, CSS, and JavaScript into distinct files for better organization and maintainability (`index.html`, `style.css`, `script.js`, `animations.js`).
*   **"Back to Top" Button:** A subtle fixed button for easy navigation on long pages.
*   **Customizable Favicons:** Includes multiple favicon types for broad browser and device support.
*   **"Developed by Mohid" Signature:** Clearly indicates the developer in the footer.

## Project Structure

```
├── KAIZEN_MULTI-TECH_DEMO/
│   ├── index.html        # Main HTML structure of the website
│   ├── style.css         # All CSS rules, including themes and responsiveness
│   ├── script.js         # Core JavaScript logic, event handlers, theme switching, dynamic content generation (campaigns)
│   └── animations.js     # Dedicated JavaScript for GSAP animations and ScrollTrigger setup
│   ├── assets/           # (Optional) Folder for local images/videos if not using external URLs
│   │   └── favicon.png   # Example favicon (replace with actual files)
│   └── README.md         # This documentation file
```

## How to Run

1.  **Clone or Download:** Get the project files by cloning the repository or downloading the zip file.
2.  **Create Folder Structure:** Ensure you have the `index.html`, `style.css`, `script.js`, and `animations.js` files in the same directory.
3.  **Update WhatsApp Number:**
    *   Open `script.js`.
    *   Find the line: `const whatsappNumber = '+923XXXXXXXXX';`
    *   **Replace `+923XXXXXXXXX` with your actual WhatsApp number** (e.g., `+923001234567`).
4.  **Open in Browser:** Simply open the `index.html` file in your preferred web browser.

No complex setup or server environment is required for this demo.

## Customization

*   **Content:**
    *   **Text:** All textual content (headings, paragraphs, button texts) can be directly edited within `index.html`.
    *   **Campaigns:** The data for the "Campaigns" section is stored in the `campaignsData` array within `script.js`. You can easily add, edit, or remove campaign items here.
*   **Images:**
    *   Currently, placeholder images from `Lorem Picsum` are used (e.g., `https://picsum.photos/seed/digital_campaign/600/400`).
    *   To use your own images (including the stunning AI-generated ones you created), simply **replace the `imgSrc` URLs** in the `campaignsData` array (`script.js`) and other `<img>` tags (`index.html`) with the direct public URLs of your desired images. **Ensure these URLs are stable and publicly accessible.**
*   **Hero Video:**
    *   The video URL for the hero section is in `index.html`: `<source src="https://videos.pexels.com/video-files/3209828/3209828-hd_1920_1080_25fps.mp4" type="video/mp4">`.
    *   You can replace `https://videos.pexels.com/...mp4` with a link to your own hosted MP4 video file if you prefer.
*   **Themes:** The default colors and properties for the "light", "dark", and "neon" themes are defined using CSS variables in `style.css` (`:root`, `body.theme-dark`, `body.theme-neon`). These can be easily modified to match specific brand guidelines.

## Technologies Used

*   **HTML5:** Semantic structure.
*   **CSS3:** Styling, responsive design, and CSS variables for theming.
*   **JavaScript (Vanilla JS):** Core logic, DOM manipulation, event handling, dynamic content generation.
*   **GSAP (GreenSock Animation Platform):** Advanced JavaScript animation library for smooth scroll-triggered and interactive effects.
*   **ScrollTrigger (GSAP Plugin):** Integrates animations with scroll progress.
*   **Font Awesome:** Icon library.
*   **Google Fonts:** Custom typography.
*   **Lorem Picsum:** Reliable placeholder image service for development and demos.

## Development Notes

*   **Performance:** Code is structured to optimize for performance, primarily using CSS `transform` properties for animations to leverage hardware acceleration.
*   **Modularity:** Separation of concerns between HTML, CSS, and JS files promotes cleaner code and easier maintenance.
*   **Responsiveness:** Extensive use of media queries to ensure a consistent and positive user experience across various screen sizes.
*   **Z-Index Management:** Careful handling of `z-index` properties prevents elements from obscuring each other.

---

**Developed by Mohid**
[Link to Mohid's Portfolio: https://i-am-mohid.netlify.app/](https://i-am-mohid.netlify.app/)
