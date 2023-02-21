// -- underline current menu item in header -- //
const home = document.querySelector('#home');
const favourite = document.querySelector('#favourite');
const read = document.querySelector('#read');
if (window.location.pathname.indexOf('/favourite.html') === 0) {
    home.classList.remove('current');
    read.classList.remove('current');
    favourite.classList.add('current');
} else if (window.location.pathname.indexOf('/read.html') === 0) {
    home.classList.remove('current');
    favourite.classList.remove('current');
    read.classList.add('current');
} else {
    favourite.classList.remove('current');
    read.classList.remove('current');
    home.classList.add('current');
};