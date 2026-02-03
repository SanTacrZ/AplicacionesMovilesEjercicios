document.addEventListener('DOMContentLoaded', () => {
    const teclado = document.getElementById('teclado');
    const teclas = document.querySelectorAll('.tecla');

    let isHovering = false;

    function mezclarTeclado() {
        const numeros = [];

        teclas.forEach(tecla => {
            if (tecla.dataset.originalValue) {
                numeros.push(tecla.dataset.originalValue);
            }
        });

        // Algoritmo Fisher-Yates (shuffle)
        for (let i = numeros.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [numeros[i], numeros[j]] = [numeros[j], numeros[i]];
        }

        // Reasign numbers
        let index = 0;
        teclas.forEach(tecla => {
            if (tecla.dataset.originalValue) {
                tecla.dataset.originalValue = numeros[index];
                // Si está sobre el teclado, mostrar asterisco; si no, mostrar el número
                tecla.value = isHovering ? '*' : numeros[index];
                index++;
            }
        });
    }

    // Store original values
    teclas.forEach(tecla => {
        // Only store for single digits (0-9), ignore "Borrar"
        if (tecla.value.length === 1 && !isNaN(tecla.value)) {
            tecla.dataset.originalValue = tecla.value;
        }
    });

    // Event listener for mouse entering the keypad area
    teclado.addEventListener('mouseenter', () => {
        isHovering = true;
        teclas.forEach(tecla => {
            if (tecla.dataset.originalValue) {
                tecla.value = '*';
            }
        });
    });

    // Event listener for mouse leaving the keypad area
    teclado.addEventListener('mouseleave', () => {
        isHovering = false;
        teclas.forEach(tecla => {
            if (tecla.dataset.originalValue) {
                tecla.value = tecla.dataset.originalValue;
            }
        });
    });

    // Optional: Add click functionality to inputs for demonstration
    const display = document.querySelector('.clave');
    teclas.forEach(tecla => {
        tecla.addEventListener('click', () => {
            if (tecla.classList.contains('borrar')) {
                display.value = display.value.slice(0, -1);
            } else if (tecla.classList.contains('ingresar')) {
                // Determine logic for login
                if (display.value.length > 0) {
                    window.location.href = 'bienvenida.html';
                } else {
                    alert('Por favor ingrese su clave');
                }
            } else {
                // If it's a number key (even if it currently shows *)
                // We use the dataset value so it works even when hovered!
                const val = tecla.dataset.originalValue || tecla.value;
                // Don't add 'Borrar' or 'Ingresar' text to display if something weird happens
                if (val !== 'Borrar' && val !== 'Ingresar') {
                    display.value += val;

                    mezclarTeclado(); // Re-mix after each number press
                }
            }
        });
    });

    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const navbar = document.getElementById('navbar');

    if (menuToggle && navbar) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navbar.classList.toggle('active');
        });

        // Close menu when clicking a link
        document.querySelectorAll('#navbar a').forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                navbar.classList.remove('active');
            });
        });
    }

    // Navigation Smooth Scroll
    document.querySelectorAll('.nav-link').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
