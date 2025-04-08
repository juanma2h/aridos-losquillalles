// Validación adicional al enviar el formulario (opcional)
document.querySelector('form').addEventListener('submit', function (event) {
    const nombre = document.getElementById('nombre').value;
    const telefono = document.getElementById('telefono').value;
    const correo = document.getElementById('correo').value;

    // Validar si todos los campos obligatorios están llenos
    if (!nombre || !telefono || !correo) {
        alert('Por favor, complete todos los campos obligatorios.');
        event.preventDefault(); // Evita el envío del formulario si hay campos vacíos
        return;
    }

    // Validación del formato del correo electrónico
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(correo)) {
        alert('Por favor, ingrese un correo electrónico válido.');
        event.preventDefault(); // Evita el envío si el correo no es válido
        return;
    }

    // Validación del número de teléfono (solo números)
    const telefonoPattern = /^[0-9]{9}$/; // Validación simple para números de 9 dígitos
    if (!telefonoPattern.test(telefono)) {
        alert('Por favor, ingrese un número de teléfono válido (solo números, 9 dígitos).');
        event.preventDefault(); // Evita el envío si el teléfono no es válido
        return;
    }
});

// Función para abrir WhatsApp desde el botón
document.getElementById('whatsappBtn').addEventListener('click', function () {
    const message = "Hola, me podrías ayudar con ";
    const phoneNumber = "+56963581313"; // Número de WhatsApp
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
});

// Animación de los botones en la parte inferior
document.addEventListener('DOMContentLoaded', function () {
    const whatsappButton = document.getElementById('whatsappBtn');
    whatsappButton.style.transition = 'transform 0.3s ease';
    
    whatsappButton.addEventListener('mouseenter', function () {
        whatsappButton.style.transform = 'scale(1.1)';
    });

    whatsappButton.addEventListener('mouseleave', function () {
        whatsappButton.style.transform = 'scale(1)';
    });
});