const themeSwitch = document.getElementById('theme-switch');
const body = document.body;
const modeLabel = document.getElementById('mode-label');

themeSwitch.addEventListener('change', () => {
    if (themeSwitch.checked) {
        body.classList.add('dark-mode');
        modeLabel.textContent = 'Dark Mode';
    } else {
        body.classList.remove('dark-mode');
        modeLabel.textContent = 'Light Mode';
    }
});
