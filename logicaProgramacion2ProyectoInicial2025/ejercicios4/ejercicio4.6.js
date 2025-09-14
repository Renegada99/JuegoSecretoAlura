/* Crea una función que devuelva la posición en la lista donde 
se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista. */

let listaElementos = ["a", "b", "c"];
let elementoBuscado = 'a';
function encontrarPosicion(listaElementos, elementoBuscado) {
    if (listaElementos.includes(elementoBuscado)){
        return listaElementos.indexOf(elementoBuscado);
    }else{
        return -1;
    }
}
console.log(encontrarPosicion(listaElementos, elementoBuscado));