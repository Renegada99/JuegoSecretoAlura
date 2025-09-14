/* Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion 
con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.*/

let lenguajesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];
console.log(lenguajesDeProgramacion);

/*Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.*/

lenguajesDeProgramacion.push('Java','Ruby','GoLang');
console.log(lenguajesDeProgramacion);

/*Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.*/
function mostrarLenguajes() {
    console.log(lenguajesDeProgramacion);
}

console.log(mostrarLenguajes());

/* Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso. */
function mostrarLenguajesInvertido() {
    console.log(lenguajesDeProgramacion.reverse());
}

console.log(mostrarLenguajesInvertido());

