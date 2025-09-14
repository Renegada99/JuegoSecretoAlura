/* Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista 
con la suma de los elementos uno a uno.*/

let lista1 = [1,2,3,4,5];
let lista2 = [6,7,8,9,0];
let suma = [];

function sumarListas(lista1, lista2) {
    for (let i = 0; i < lista1.length; i++) {
        suma.push(lista1[i]+lista2[i]);
    }
    return suma;
}
console.log(lista1);
console.log(lista2);
console.log(sumarListas(lista1, lista2));