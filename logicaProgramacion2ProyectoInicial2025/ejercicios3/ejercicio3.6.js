/* Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro. */

let numero = parseInt(prompt("Ingrese un número"));
let contador = 0;

function multiplicacion(numero) {
    while (contador <= 10) {
        console.log (numero * contador);
        contador ++;
    }
    return;
}

multiplicacion(numero);