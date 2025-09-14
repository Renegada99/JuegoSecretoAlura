/* Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista. */
let listaNumeros2 = [2,3,1,5];
let mayor = listaNumeros2[0];
let menor = listaNumeros2[0];

function mostrarMayorMenor(listaNumeros2) {
    for (let i = 0; i < listaNumeros2.length; i++) {
        if(listaNumeros2[i] > mayor){
           mayor = listaNumeros2[i];
        }
        if (listaNumeros2[i] < menor) {
           menor = listaNumeros2[i]; 
        }
        
    }
    return `Mayor: ${mayor} y Menor: ${menor}`;
}

console.log(mostrarMayorMenor(listaNumeros2));