const textToType = "Software & Cybersecurity Engineer";
const typingElement = document.getElementById("typing-text");
let i = 0;

function typeWriter() {
    if (i < textToType.length) {
        typingElement.innerHTML += textToType.charAt(i);
        i++;
        setTimeout(typeWriter, 50); // Speed of typing
    }
}

// Start typing slightly after page load
setTimeout(typeWriter, 500);

// --- Scroll Reveal Logic ---

// Setup the "camera" settings
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15 // Triggers when 15% of the element is visible
};

// Create the observer
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        // If the element crosses into the screen
        if (entry.isIntersecting) {
            entry.target.classList.add('active'); // Add the CSS class to animate it
            observer.unobserve(entry.target);     // Stop watching it so it only animates once
        }
    });
}, observerOptions);

// Find all elements with the 'reveal' class and tell the observer to watch them
document.querySelectorAll('.reveal').forEach((element) => {
    observer.observe(element);
});

// --- HAMBURGER MENU LOGIC ---
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li a');

// 1. Toggle the menu open/closed when clicking the hamburger icon
if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// 2. Automatically close the menu when a specific link is clicked
links.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// 3. Close the menu if the user clicks anywhere outside of it
document.addEventListener('click', (event) => {
    if (navLinks.classList.contains('active')) {
        const isClickInsideMenu = navLinks.contains(event.target);
        const isClickOnHamburger = hamburger.contains(event.target);

        if (!isClickInsideMenu && !isClickOnHamburger) {
            navLinks.classList.remove('active');
        }
    }
});


// --- Email Copy-to-Clipboard Fallback ---
// document.querySelector('.btn[href^="mailto"]').addEventListener('click', function (e) {
//     const email = "madhavramdev6@gmail.com"; // Put your actual email here

//     // Copy to clipboard
//     navigator.clipboard.writeText(email).then(() => {
//         // Optional: Change button text temporarily to show it worked
//         const originalText = this.innerText;
//         this.innerText = "Email Copied!";
//         setTimeout(() => {
//             this.innerText = originalText;
//         }, 2000);
//     });
// });