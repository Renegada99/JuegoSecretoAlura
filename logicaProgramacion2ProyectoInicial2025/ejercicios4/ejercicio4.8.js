/* Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número. */

let listaNumero = [1,2,3,4,5];
let listaCuadrado = [];

function calcularCuadrado(listaNumero) {
    for (let i = 0; i < listaNumero.length; i++) {
        listaCuadrado.push(listaNumero[i]*listaNumero[i]);
    }
    return listaCuadrado;
}

console.log(listaNumero);
console.log(calcularCuadrado(listaNumero));