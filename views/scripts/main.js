document.querySelector('.navbar-toggler').addEventListener('click', () => {
    let navbarMenu = document.querySelector('.navbar-menu');

    if (navbarMenu.style.display === 'flex') {
        navbarMenu.style.display = 'none';
        return
    }

    navbarMenu.style.display = 'flex';
    navbarMenu.style.zIndex = 300000;
});