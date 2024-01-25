document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.toggle-button');
    const nav = document.querySelector('nav');

    navToggle.addEventListener('click', function() {
        nav.classList.toggle('nav-open');
        nav.classList.toggle('nav-closed');
    });
});
