document.addEventListener('DOMContentLoaded', function() {
    // Lógica para la sección de turnos
    const buttons = document.querySelectorAll('.add-service');
    let totalPrice = 0;

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const price = parseInt(this.getAttribute('data-price'));

            if (this.classList.contains('added')) {
                // Si el servicio ya fue añadido, lo quitamos
                totalPrice -= price;
                this.classList.remove('added');
                this.textContent = 'Añadir';
                this.classList.remove('btn-danger');
                this.classList.add('btn-warning');
            } else {
                // Si el servicio no fue añadido, lo sumamos
                totalPrice += price;
                this.classList.add('added');
                this.textContent = 'Quitar';
                this.classList.remove('btn-warning');
                this.classList.add('btn-danger');
            }

            document.getElementById('totalPrice').innerText = totalPrice;
        });
    });

    // Inicialización del Datepicker de jQuery UI
    $(function() {
        $("#datepicker").datepicker();
    });

    // Lógica para el formulario de contacto
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const nombre = document.getElementById('nombre').value;
            const apellido = document.getElementById('apellido').value;
            const email = document.getElementById('email').value;
            const telefono = document.getElementById('telefono').value;
            const mensaje = document.getElementById('mensaje').value;

            // Expresión regular para validar el correo electrónico
            const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

            if (!emailPattern.test(email)) {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Por favor, ingresa un correo electrónico válido.',
                });
                return;
            }

            if (nombre && apellido && email && telefono && mensaje) {
                Swal.fire({
                    icon: 'success',
                    title: '¡Mensaje enviado!',
                    text: 'Tu mensaje ha sido enviado con éxito.',
                });
                contactForm.reset();
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Por favor, completa todos los campos.',
                });
            }
        });
    }

    // Lógica para el formulario de solicitud de turnos
    const solicitudTurnoForm = document.getElementById('solicitudTurno');
    if (solicitudTurnoForm) {
        solicitudTurnoForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const nombre = document.getElementById('nombre').value;
            const apellido = document.getElementById('apellido').value;
            const email = document.getElementById('email').value;
            const telefono = document.getElementById('telefono').value;
            const servicio = document.getElementById('servicio').value;
            const vehiculo = document.getElementById('vehiculo').value;
            const fecha = document.getElementById('datepicker').value;

            // Validación del correo electrónico
            const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!emailPattern.test(email)) {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Por favor, ingresa un correo electrónico válido.',
                });
                return;
            }

            // Validar que todos los campos estén llenos
            if (nombre && apellido && email && telefono && servicio !== 'Selecciona un servicio' && vehiculo !== 'vehículo' && fecha) {
                // Mostrar alerta de éxito
                Swal.fire({
                    icon: 'success',
                    title: '¡Turno guardado!',
                    text: 'Tu turno ha sido guardado exitosamente.',
                });

                // Agregar el turno a la lista
                const listaTurnos = document.getElementById('lista-turnos');
                const turnoItem = document.createElement('li');
                turnoItem.className = 'list-group-item';
                turnoItem.innerHTML = `Nombre: ${nombre} ${apellido}<br>Email: ${email}<br>Teléfono: ${telefono}<br>Servicio: ${servicio}<br>Vehículo: ${vehiculo}<br>Fecha: ${fecha}`;
                listaTurnos.appendChild(turnoItem);

                // Limpiar el formulario
                solicitudTurnoForm.reset();
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Por favor, completa todos los campos.',
                });
            }
        });
    }
});
