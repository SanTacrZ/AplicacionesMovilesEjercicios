document.addEventListener('DOMContentLoaded', () => {
    const teclado = document.getElementById('teclado');
    const teclas = document.querySelectorAll('.tecla');

    // Store original values
    teclas.forEach(tecla => {
        // Only store for single digits (0-9), ignore "Borrar"
        if (tecla.value.length === 1 && !isNaN(tecla.value)) {
            tecla.dataset.originalValue = tecla.value;
        }
    });

    // Event listener for mouse entering the keypad area
    teclado.addEventListener('mouseenter', () => {
        teclas.forEach(tecla => {
            if (tecla.dataset.originalValue) {
                tecla.value = '*';
                // Add a slight animation class if we wanted, 
                // but value swap is instant as requested.
            }
        });
    });

    // Event listener for mouse leaving the keypad area
    teclado.addEventListener('mouseleave', () => {
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
                }
            }
        });
    });

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
