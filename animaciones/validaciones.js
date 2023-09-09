//forma general
/*
const inputNacimiento = document.querySelector('[data-form-birth]');
inputNacimiento.addEventListener('blur', (evento) => {
    validarNacimiento(evento.target);
})

function validarNacimiento(input){
    const fechaCliente = new Date(input.value);
    let mensaje = '';
    if(!mayorDeEdad(fechaCliente)){
        mensaje = 'No eres mayor de edad';
    }
    input.setCustomValidity(mensaje);
}

function mayorDeEdad(fecha){
    const fechaActual = new Date();
    const diferenciaFechas = new Date(fecha.getUTCFullYear()+18, fecha.getUTCMonth(), fecha.getUTCDay());
    return diferenciaFechas <= fechaActual;
}
*/

//Forma ordenada

export function validar(input){
    const tipoDeInput = input.dataset.tipo;
    if(validadores[tipoDeInput]){
        validadores[tipoDeInput](input);
    }

    if(input.validity.valid){
        input.parentElement.classList.remove('input-container--invalid');
        input.parentElement.querySelector('.input-message-error').innerHTML = ''
    }else{
        input.parentElement.classList.add('input-container--invalid');
        input.parentElement.querySelector('.input-message-error').innerHTML = mostrarMensajeDeError(tipoDeInput,input)
    }
}

const tipoDeErrores = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'customError',
];

const mensajesDeError ={
    nombre: {
        valueMissing:'El campo nombre no puede estar vacio'
    },
    email: {
        valueMissing:'El campo correo no puede estar vacio',
        typeMismatch: 'El correo no es válido'
    },
    password:{
        valueMissing:'El campo contraseña no puede estar vacio',
        patternMismatch:'Minimo 6 caracteres, maximo 12, debe contener una letra minuscula, una letra mayuscula, un número y no puede contener caracteres especiales'
    },
    nacimiento:{
        valueMissing:'El campo fecha de nacimiento no puede estar vacio',
        customError: 'No eres mayor de edad'
    },
    numero:{
        valueMissing:'El campo número telefónico no puede estar vacio',
        patternMismatch:'El formato requerido es XXXXXXXXX 9 números'
    },
    direccion:{
        valueMissing:'El campo dirección no puede estar vacio',
        patternMismatch:'La dirección debe contener entre 10 a 40 caracteres.'
    },
    ciudad:{
        valueMissing:'El campo ciudad no puede estar vacio',
        patternMismatch:'La ciudad debe contener entre 4 a 20 caracteres.'
    },
    departamento:{
        valueMissing:'El campo departamento no puede estar vacio',
        patternMismatch:'El departamento debe contener entre 4 a 20 caracteres.'
    }
}

const validadores = {
    nacimiento: (input) => validarNacimiento(input),
}

function mostrarMensajeDeError(tipoDeInput,input){
    let mensaje = '';
    tipoDeErrores.forEach((error) => {
        if(input.validity[error]){
            mensaje = mensajesDeError[tipoDeInput][error];
        }
    });
    return mensaje;
}

function validarNacimiento(input){
    const fechaCliente = new Date(input.value);
    let mensaje = '';
    if(mayorDeEdad(fechaCliente)){
        mensaje = 'No eres mayor de edad';
    }
    input.setCustomValidity(mensaje);
}

function mayorDeEdad(fecha){
    const fechaActual = new Date();
    const diferenciaFechas = new Date(fecha.getUTCFullYear()+18, fecha.getUTCMonth(), fecha.getUTCDay());
    return diferenciaFechas >= fechaActual;
}