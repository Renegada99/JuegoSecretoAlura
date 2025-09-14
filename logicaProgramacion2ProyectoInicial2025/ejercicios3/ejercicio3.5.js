/* Crea una función que muestre en pantalla el área y el perímetro de una sala circular, 
utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14. */

let radio = parseFloat(prompt("Digite el radio"));
let pi = 3.14;

function areaCirculo(radio) {
    return pi * (radio * radio);
}

function perimetroCirculo(radio) {
    return 2 * pi * radio;
}

let area = areaCirculo(radio);
let perimetro = perimetroCirculo(radio);

console.log(`El area de circulo es: ${area}, el perimetro del circulo es: ${perimetro}`);