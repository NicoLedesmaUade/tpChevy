document.addEventListener('DOMContentLoaded', function() {
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
});
