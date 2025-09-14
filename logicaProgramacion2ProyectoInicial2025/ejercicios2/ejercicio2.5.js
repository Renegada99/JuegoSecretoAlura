/* Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos */
let numero1 = parseInt(prompt("Ingrese el primer número"));
let numero2 = parseInt(prompt("Ingrese el segundo número"));

function calcularMayor(numero1, numero2) {
  if (numero1 > numero2) {
    return console.log(`El número mayor es: ${numero1}`);
  }else if (numero1 < numero2) {
    return console.log(`El número mayor es: ${numero2}`);
  }else{
    return console.log("Ambos números son iguales");
  }

}

calcularMayor(numero1, numero2);
