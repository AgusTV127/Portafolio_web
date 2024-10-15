// Carrusel de imágenes
let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-images img');
    if (index >= slides.length) {
        currentSlide = 0; // Volver al primer slide
    } else if (index < 0) {
        currentSlide = slides.length - 1; // Volver al último slide
    } else {
        currentSlide = index;
    }
    // Ocultar todas las imágenes
    slides.forEach(slide => {
        slide.style.display = 'none';
    });
    // Mostrar solo la imagen actual
    slides[currentSlide].style.display = 'block';
}

// Cambiar el slide cuando se hace clic en "anterior" o "siguiente"
function changeSlide(step) {
    showSlide(currentSlide + step);
}

// Mostrar el primer slide al cargar la página
window.onload = function() {
    showSlide(currentSlide);
};

// Validación del formulario de contacto
document.getElementById('contactForm').addEventListener('submit', function(event) {
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;

    if (!nombre || !email || !mensaje) {
        alert('Por favor, completa todos los campos.');
        event.preventDefault(); // Evitar el envío si falta algún campo
    } else if (!validateEmail(email)) {
        alert('Por favor, introduce un correo válido.');
        event.preventDefault(); // Evitar el envío si el email no es válido
    }
});

// Función para validar el formato del email
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

// Interactividad en la sección "Sobre mí"
document.querySelector('.editable').addEventListener('input', function() {
    // Guardar cambios en localStorage para mantenerlos entre sesiones
    localStorage.setItem('sobreMi', this.innerText);
});

// Cargar el contenido editable guardado
window.onload = function() {
    const savedText = localStorage.getItem('sobreMi');
    if (savedText) {
        document.querySelector('.editable').innerText = savedText;
    }

    // Mostrar el primer slide del carrusel
    showSlide(currentSlide);
};
