let mainNav = document.getElementById('nav-list-container');

console.log('main nav', mainNav);

let navBarToggle = document.getElementById('js-navbar-toggle');
navBarToggle.addEventListener('click', function () {
    mainNav.classList.toggle('active');
    console.log('function called');
});
