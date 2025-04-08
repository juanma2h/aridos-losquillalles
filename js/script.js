// Función para abrir WhatsApp en una nueva pestaña
document.querySelector('a[href="https://wa.me/56988389703"]').addEventListener('click', function(event) {
    window.open(this.href, '_blank');
    event.preventDefault();
});
