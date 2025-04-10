// ========== Loader ==========
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// ========== Dark / Light Mode ==========
const themeToggle = document.getElementById('themeToggle');
const userPref = localStorage.getItem('theme');

if (userPref === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggle.textContent = '🌞 Modo claro';
}

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    themeToggle.textContent = isDark ? '🌞 Modo claro' : '🌙 Modo oscuro';
});

// ========== WhatsApp click ==========
const whatsappLink = document.querySelector('a[href*="wa.me"]');
if (whatsappLink) {
    whatsappLink.addEventListener('click', function (event) {
        window.open(this.href, '_blank');
        event.preventDefault();
    });
}

// ========== Validación de formulario de cotización ==========
const form = document.querySelector('#form-cotizacion');
if (form) {
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        let valido = true;
        const nombre = form.querySelector('#nombre');
        const correo = form.querySelector('#correo');
        const telefono = form.querySelector('#telefono');
        const mensaje = form.querySelector('#mensaje');

        limpiarErrores();

        if (nombre.value.trim() === '') {
            mostrarError(nombre, 'Por favor ingresa tu nombre');
            valido = false;
        }

        if (!validarCorreo(correo.value)) {
            mostrarError(correo, 'Correo inválido');
            valido = false;
        }

        if (!/^\d{9,}$/.test(telefono.value)) {
            mostrarError(telefono, 'Teléfono inválido (mín. 9 dígitos)');
            valido = false;
        }

        if (mensaje.value.trim().length < 10) {
            mostrarError(mensaje, 'Escribe un mensaje más detallado');
            valido = false;
        }

        if (valido) {
            alert('¡Gracias! Hemos recibido tu solicitud de cotización.');
            form.reset();
        } else {
            const primerError = form.querySelector('.error');
            primerError.scrollIntoView({ behavior: 'smooth' });
        }
    });

    function mostrarError(input, mensaje) {
        const error = document.createElement('p');
        error.classList.add('error');
        error.style.color = 'red';
        error.style.marginTop = '0.25em';
        error.style.fontSize = '0.9em';
        error.textContent = mensaje;
        input.parentElement.appendChild(error);
        input.classList.add('error-input');
    }

    function limpiarErrores() {
        form.querySelectorAll('.error').forEach(e => e.remove());
        form.querySelectorAll('.error-input').forEach(e => e.classList.remove('error-input'));
    }

    function validarCorreo(correo) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo);
    }
}
// Ocultar loader cuando todo carga
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    loader.classList.add('hidden');
});

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('cotizacionForm');
    const status = document.getElementById('form-status');

    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevenir envío si hay errores

        if (form.checkValidity()) {
            status.textContent = "✅ ¡Formulario válido! (Acá podrías enviarlo por email o guardarlo)";
            status.style.color = "#4caf50";

            // Acá podrías usar EmailJS, PHP, o lo que quieras para procesarlo realmente
        } else {
            status.textContent = "❌ Por favor completa los campos obligatorios correctamente.";
            status.style.color = "#c62828";
        }
    });

    // Validación en vivo
    const campos = form.querySelectorAll('input, select');
    campos.forEach(campo => {
        campo.addEventListener('input', () => {
            campo.classList.remove('error');
            status.textContent = '';
        });
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('cotizacionForm');
    const status = document.getElementById('form-status');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        if (form.checkValidity()) {
            emailjs.sendForm('gmail_service', 'template_cotizacion', form)
                .then(function () {
                    status.textContent = "✅ ¡Mensaje enviado correctamente!";
                    status.style.color = "#4caf50";
                    form.reset();
                }, function (error) {
                    status.textContent = "❌ Error al enviar. Inténtalo nuevamente.";
                    status.style.color = "#c62828";
                    console.error(error);
                });
        } else {
            status.textContent = "❌ Por favor completa los campos obligatorios correctamente.";
            status.style.color = "#c62828";
        }
    });
});

// ========== Loader ==========
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// ========== Dark / Light Mode ==========
const themeToggle = document.getElementById('themeToggle');
const userPref = localStorage.getItem('theme');

if (userPref === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggle.textContent = '🌞 Modo claro';
}

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    themeToggle.textContent = isDark ? '🌞 Modo claro' : '🌙 Modo oscuro';
});

// ========== WhatsApp click ==========
const whatsappLink = document.querySelector('a[href*="wa.me"]');
if (whatsappLink) {
    whatsappLink.addEventListener('click', function (event) {
        window.open(this.href, '_blank');
        event.preventDefault();
    });
}

// ========== Validación de formulario de cotización ==========
const form = document.querySelector('#form-cotizacion');
if (form) {
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        let valido = true;
        const nombre = form.querySelector('#nombre');
        const correo = form.querySelector('#correo');
        const telefono = form.querySelector('#telefono');
        const mensaje = form.querySelector('#mensaje');

        limpiarErrores();

        if (nombre.value.trim() === '') {
            mostrarError(nombre, 'Por favor ingresa tu nombre');
            valido = false;
        }

        if (!validarCorreo(correo.value)) {
            mostrarError(correo, 'Correo inválido');
            valido = false;
        }

        if (!/^\d{9,}$/.test(telefono.value)) {
            mostrarError(telefono, 'Teléfono inválido (mín. 9 dígitos)');
            valido = false;
        }

        if (mensaje.value.trim().length < 10) {
            mostrarError(mensaje, 'Escribe un mensaje más detallado');
            valido = false;
        }

        if (valido) {
            alert('¡Gracias! Hemos recibido tu solicitud de cotización.');
            form.reset();
        } else {
            const primerError = form.querySelector('.error');
            primerError.scrollIntoView({ behavior: 'smooth' });
        }
    });

    function mostrarError(input, mensaje) {
        const error = document.createElement('p');
        error.classList.add('error');
        error.style.color = 'red';
        error.style.marginTop = '0.25em';
        error.style.fontSize = '0.9em';
        error.textContent = mensaje;
        input.parentElement.appendChild(error);
        input.classList.add('error-input');
    }

    function limpiarErrores() {
        form.querySelectorAll('.error').forEach(e => e.remove());
        form.querySelectorAll('.error-input').forEach(e => e.classList.remove('error-input'));
    }

    function validarCorreo(correo) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo);
    }
}
// Ocultar loader cuando todo carga
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    loader.classList.add('hidden');
});

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('cotizacionForm');
    const status = document.getElementById('form-status');

    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevenir envío si hay errores

        if (form.checkValidity()) {
            status.textContent = "✅ ¡Formulario válido! (Acá podrías enviarlo por email o guardarlo)";
            status.style.color = "#4caf50";

            // Acá podrías usar EmailJS, PHP, o lo que quieras para procesarlo realmente
        } else {
            status.textContent = "❌ Por favor completa los campos obligatorios correctamente.";
            status.style.color = "#c62828";
        }
    });

    // Validación en vivo
    const campos = form.querySelectorAll('input, select');
    campos.forEach(campo => {
        campo.addEventListener('input', () => {
            campo.classList.remove('error');
            status.textContent = '';
        });
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('cotizacionForm');
    const status = document.getElementById('form-status');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        if (form.checkValidity()) {
            emailjs.sendForm('gmail_service', 'template_cotizacion', form)
                .then(function () {
                    status.textContent = "✅ ¡Mensaje enviado correctamente!";
                    status.style.color = "#4caf50";
                    form.reset();
                }, function (error) {
                    status.textContent = "❌ Error al enviar. Inténtalo nuevamente.";
                    status.style.color = "#c62828";
                    console.error(error);
                });
        } else {
            status.textContent = "❌ Por favor completa los campos obligatorios correctamente.";
            status.style.color = "#c62828";
        }
    });
});

