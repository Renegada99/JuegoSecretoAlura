/* Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola. */

let nombre = prompt("Ingrese su nombre");

function saludo (nombre){
  console.log(`¡Hola ${nombre}!`);
}

saludo(nombre);