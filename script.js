document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('Mode-toggle');
    toggle.addEventListener('change', () => {
        document.body.classList.toggle('dark-mode');
    });
});
