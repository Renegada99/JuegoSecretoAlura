/*Crea una función que calcule el promedio de los elementos en una lista de números. */
let listaNumeros = [1,1,1,4,5];
let suma = 0;

function calcularPromedio(listaNumeros) {
    for (let i = 0; i < listaNumeros.length; i++) {
        suma += listaNumeros[i];
    }
    console.log(suma);
    let promedio = suma/listaNumeros.length;
    return console.log('El promedio es: ', promedio);
}

calcularPromedio(listaNumeros);