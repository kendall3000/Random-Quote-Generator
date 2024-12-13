// Get the theme toggle button
const toggleButton = document.getElementById('theme-toggle');

// Check for saved user preference in localStorage
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    document.body.classList.add('dark-mode');
    document.body.style.cursor = "url('assets/images/moon.webp'), auto"; // Set dark mode cursor
}

// Add event listener to toggle theme
toggleButton.addEventListener('click', () => {
    // Toggle the dark-mode class on the body element
    document.body.classList.toggle('dark-mode');

    // Update the cursor and save the user's theme preference to localStorage
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        document.body.style.cursor = "url('assets/images/moon.webp'), auto"; // Dark mode cursor
    } else {
        localStorage.setItem('theme', 'light');
        document.body.style.cursor = "url('assets/images/sun.jpg'), auto"; // Light mode cursor
    }
});
