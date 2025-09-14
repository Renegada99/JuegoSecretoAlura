/*Crea una función que calcule el valor del factorial de un número pasado como parámetro. */

let numero = parseInt(prompt("Ingrese un número"));

function calcularFactorial(numero) {
    if (numero === 0) {
        return 1;
    } else {
        return numero * calcularFactorial(numero-1);
    }
}
let factorial = calcularFactorial(numero);
console.log(`El factorial del número ${numero} es ${factorial}`);