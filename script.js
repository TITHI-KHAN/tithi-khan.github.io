document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('navToggle');
    const nav = document.querySelector('nav');

    navToggle.addEventListener('click', function() {
        nav.classList.toggle('nav-open');
        nav.classList.toggle('nav-closed');
    });
});
