let menu = document.getElementById('menu');
let panel = document.getElementById('panel');
let overlay = document.getElementById('overlay');

menu.addEventListener('click', function() {

    if (panel.classList.contains('panel-open')) {
        panel.classList.remove('panel-open');
        panel.classList.add('panel-closed');
        menu.src = "./images/apps-grid-icon.svg";
        overlay.classList.remove('overlay-open');
        overlay.classList.add('overlay-closed');
    } else {
        panel.classList.remove('panel-closed');
        panel.classList.add('panel-open');
        menu.src = "./images/close-line-icon.svg";
        overlay.classList.remove('overlay-closed');
        overlay.classList.add('overlay-open');
    }
});

window.addEventListener('resize', function() {
    if (window.innerWidth >= 1020) {
        panel.classList.remove('panel-open');
        panel.classList.add('panel-closed');menu.src = "./images/apps-grid-icon.svg";
        overlay.classList.remove('overlay-open');
        overlay.classList.add('overlay-closed');
    }
});

window.addEventListener('scroll', function() {
    let scroll = window.scrollY;
    if (scroll >= 0 && scroll <= 48) {
        overlay.style.top = 48 - scroll + 'px';
    } else {
        overlay.style.top = 0 + 'px';
    }
});