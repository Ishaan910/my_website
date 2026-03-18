/**
 * Portfolio Logic for ishaantheguy
 * Handles intro transitions and navigation
 */

document.addEventListener('DOMContentLoaded', () => {
    // Element Selectors
    const greeting = document.getElementById('greeting-text');
    const nameContent = document.getElementById('name-content');
    const enterBtn = document.getElementById('enter-btn');
    const introScreen = document.getElementById('intro-screen');
    const homePage = document.getElementById('home-page');
    const progressLink = document.getElementById('progress-link');
    const progressSection = document.getElementById('progress-section');

    /**
     * 1. INTRO SEQUENCE TIMING
     * After 'Hello' fades out (approx 1.5s), we reveal the name and tag.
     */
    setTimeout(() => {
        if (greeting) {
            greeting.classList.add('hidden');
        }
        if (nameContent) {
            nameContent.classList.remove('hidden');
            nameContent.classList.add('fadeIn');
        }
    }, 1600); 

    /**
     * 2. TRANSITION TO HOME PAGE
     * Smoothly fades out the intro and reveals the main content.
     */
    if (enterBtn) {
        enterBtn.addEventListener('click', () => {
            // Apply a fade-out effect to the entire intro screen
            introScreen.style.transition = 'opacity 0.6s ease';
            introScreen.style.opacity = '0';

            setTimeout(() => {
                introScreen.classList.add('hidden');
                homePage.classList.remove('hidden');
                
                // Ensure we start at the top of the page
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }, 600);
        });
    }

    /**
     * 3. PROGRESS SECTION TOGGLE
     * Displays the expertise bars when the chart icon is clicked.
     */
    if (progressLink) {
        progressLink.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Toggle visibility
            progressSection.classList.toggle('hidden');
            
            // If revealed, scroll to it smoothly
            if (!progressSection.classList.contains('hidden')) {
                progressSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }
});