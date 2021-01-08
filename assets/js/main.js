'using strict'
/* MENU SHOW */
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId);

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        });
    }
}
/*llamar a la funcion showMenu */
showMenu('nav-toggle', 'nav-menu');
/*...======================================...*/

/* REMOVE MENU MOVILE */
const navLink = document.querySelectorAll('.nav_link');

function linkAction() {
    //active link
    navLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');

    //remove menu movile
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show');
}
navLink.forEach(n => n.addEventListener('click', linkAction));