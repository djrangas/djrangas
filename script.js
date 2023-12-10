document.addEventListener('DOMContentLoaded', function () {
    // Elements
    const darkModeToggle = document.getElementById('darkModeToggle');
    const subscribeModal = new bootstrap.Modal(document.getElementById('subscribeModal'));

    // Check Dark Mode State from Local Storage
    const darkModeEnabled = localStorage.getItem('darkMode') === 'enabled';

    // Set Dark Mode
    setDarkMode(darkModeEnabled);

    // Dark Mode Toggle Button Event Listener
    darkModeToggle.addEventListener('click', function () {
        const newDarkMode = document.body.classList.contains('dark-mode') ? false : true;
        setDarkMode(newDarkMode);
    });

    // Show Subscribe Modal
    subscribeModal.show();

    // Dark Mode Function
    function setDarkMode(enable) {
        if (enable) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('darkMode', 'enabled');
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('darkMode', 'disabled');
        }
        updateStyles(enable);
    }

    // Update Styles Function
    function updateStyles(isDarkMode) {
        const logo = document.querySelector('.logo');
        const logoPath = isDarkMode ? 'Ass/images/logo-no-background.svg' : 'Ass/images/logo-no-background.svg';
        logo.setAttribute('src', logoPath);

        const sunIcon = document.getElementById('sunIcon');
        const moonIcon = document.getElementById('moonIcon');

        if (isDarkMode) {
            sunIcon.style.display = 'none';
            moonIcon.style.display = 'inline';
        } else {
            sunIcon.style.display = 'inline';
            moonIcon.style.display = 'none';
        }
    }
});
