// Form footer

const form = document.querySelector('#form');
const nombre = document.querySelector('#nombre');
const msj = document.querySelector('#mensaje');
const btn = document.querySelector('#btn-form')

form.addEventListener('submit', e=> {

    e.preventDefault()
    if(nombre.value.length <6){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Debes de poner tu nombre y apellido!',
        })
    }
    if (msj.value.length <5) {  
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Debes de poner un mensaje!',
        })
    }
})
