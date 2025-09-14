/* Crea una función que devuelva la suma de todos los elementos en una lista. */

let listaNumerosASumar = [1,2,3,4,5];
let sumar = 0;

function calcularSuma(listaNumerosASumar) {
    for (let i = 0; i < listaNumerosASumar.length; i++) {
        sumar += listaNumerosASumar[i];
    }
    return sumar;    
}
console.log(calcularSuma(listaNumerosASumar));