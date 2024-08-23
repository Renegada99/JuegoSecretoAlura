//Cambios de forma dinámica a los elementos HTML a través de JavaScript

// querySelector selecciona la etiqueta html en la que va a aplicar cambios
// let parrafo = document.querySelector('p');
// innerHTML agrega texto al objeto titulo
// parrafo.innerHTML = 'Indica un número del 1 al 10';

//Funciones

let numeroSecreto = 0;
let intentos = 0;
let numeroMaximo = 10;

//Declaración de una lista vacia
let listaNumeroSorteados = [];

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

//Función que se usa en el botón de intentar
function verificarIntento() {
    //Convertir el string numeroDeUsuario por numero 
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    // Imprime el tipo de valor de numeroDeUsuario y numeroSecreto
    // console.log(typeof (numeroDeUsuario));
    // console.log(typeof (numeroSecreto));
    // console.log(numeroDeUsuario);
    //console.log(numeroSecreto);
    //console.log(intentos);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el número ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acertó
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El número secreto es menor');
        } else {
            asignarTextoElemento('p', 'el número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

//Forma 1:
// function limpiarCaja() {
//     let valorCaja = document.querySelector('#valorUsuario');
//     valorCaja.value = '';
// }

//Forma 2: (OPTIMIZADO)
function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    console.log(numeroGenerado);
    console.log(listaNumeroSorteados);
    //Si ya se sorteron todos los números
    if (listaNumeroSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Sorteados todos los números posibles');
    } else {
        //Si el número generado está incluido en la lista
        if (listaNumeroSorteados.includes(numeroGenerado)) {
            //Recursividad
            return generarNumeroSecreto();
        } else {
            listaNumeroSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    //Indicar mensaje de intervalo de números
    //Mejor forma usando funciones
    asignarTextoElemento('h1', 'Juego del número secreto!!!');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    //Generar el número aleatorio
    numeroSecreto = generarNumeroSecreto();
    //Inicializar el número de intentos
    intentos = 1;
}

function reiniciarJuego() {
    //limpiar la caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números
    //Generar el número aleatorio
    //Inicializar el número de intentos
    condicionesIniciales();
    //Deshabilitar el botón de "nuevo juego"
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();