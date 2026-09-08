// Buzón CUC Escucha - Validación y envío del formulario
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('sugerenciaForm');
    const mensajeExito = document.getElementById('mensajeExito');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const nombre = document.getElementById('nombre').value.trim();
        const email = document.getElementById('email').value.trim();
        const programa = document.getElementById('programa').value.trim();
        const categoria = document.getElementById('categoria').value;
        const mensaje = document.getElementById('mensaje').value.trim();

        if (!nombre || !email || !programa || !categoria || !mensaje) {
            alert(' Por favor, completa todos los campos del formulario.');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert(' Por favor, ingresa un correo electrónico válido.');
            return;
        }

        mensajeExito.style.display = 'block';
        form.reset();

        setTimeout(() => {
            mensajeExito.style.display = 'none';
        }, 5000);

        console.log('Sugerencia enviada:', { nombre, email, programa, categoria, mensaje });
    });
});