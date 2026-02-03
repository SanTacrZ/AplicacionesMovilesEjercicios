// Este ejemplo asume que luego agregas un botón para el menú.
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelector('.nav-links');
    const menuBtn = document.createElement('button');
    menuBtn.innerText = 'Menu';
    menuBtn.classList.add('menu-btn');
    document.querySelector('.navbar').prepend(menuBtn);

    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });
});
