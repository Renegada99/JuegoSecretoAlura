/* Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y 
peso en kilogramos, que se recibirán como parámetros.*/

var altura = parseFloat(prompt("Ingrese su altura en metros"));
var peso = parseFloat(prompt("Ingrese su peso en kilogramos"));
var imc = 0;

// console.log(typeof(altura));
// console.log(typeof(peso));

function indiceMasaCorporal(altura, peso) {
    
    imc = parseFloat(peso/(altura*altura));
    console.log(imc);
    return alert(`Su índice de masa corporal es: ${imc}`)         
}

indiceMasaCorporal(altura, peso);