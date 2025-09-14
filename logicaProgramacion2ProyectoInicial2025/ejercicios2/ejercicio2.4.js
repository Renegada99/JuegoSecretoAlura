/* Crear una función que reciba tres números como parámetros y devuelva su promedio */

var numero1 = parseInt(prompt("Digite el primer número"));
var numero2 = parseInt(prompt("Digite el segundo número"));
var numero3 = parseInt(prompt("Digite el tercer número"));
var promedio = 0;

function calcularPromedio(numero1, numero2, numero3) {
  promedio = ((numero1 + numero2 + numero3)/3);
  return promedio;
}

console.log("El promedio es: ", calcularPromedio(numero1, numero2, numero3));