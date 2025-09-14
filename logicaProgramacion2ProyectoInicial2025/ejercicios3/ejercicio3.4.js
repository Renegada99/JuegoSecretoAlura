/* Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, 
utilizando la altura y la anchura que se proporcionarán como parámetros */

let altura = parseFloat(prompt("Ingrese la altura"));
let anchura = parseFloat(prompt("Ingrese la anchura"));

function calcularArea (altura, anchura){
    return altura * anchura;
}

function calcularPerimetro(altura, anchura) {
    return 2*(altura + anchura);
}

let area = calcularArea(altura, anchura);
let perimetro = calcularPerimetro(altura, anchura);

console.log(`El area de la sala rectangular es: ${area}, el perimetro es: ${perimetro}`);