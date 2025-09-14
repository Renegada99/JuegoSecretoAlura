/* Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente
 en reales(moneda brasileña, si deseas puedes hacerlo con el valor del dólar en tu país). 
 Para esto, considera la cotización del dólar igual a R$4,80. */

let dolares = parseFloat(prompt("Ingrese el valor en dolares"));
let pesos = 3986;

function conversion(dolares) {
    return dolares * pesos;
}

let valorConvertido = conversion(dolares);
console.log(`Su dinero en pesos es: ${valorConvertido}`);
