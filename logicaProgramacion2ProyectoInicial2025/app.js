//QuerySelector es aquel que trae el selector que se quiera utilizar, en este caso el título 
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignatextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
}

function verificarIntento() {
  let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
  // console.log(typeof(numeroDeUsuario));
  // console.log(numeroDeUsuario);
  // console.log(numeroSecreto);
  // console.log(typeof(numeroSecreto));
  // console.log(numeroDeUsuario === numeroSecreto);
  // console.log(intentos);

  if (numeroDeUsuario === numeroSecreto) {
    asignatextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
    document.getElementById('reiniciar').removeAttribute('disabled');
  } else {
    //El usuario no acertó
    if (numeroDeUsuario > numeroSecreto) {
      asignatextoElemento('p', 'El número secreto es menor');
    } else {
      asignatextoElemento('p', 'El número secreto es mayor');
    }
    intentos++;
    limpiarCajaTexto();
  }
  return;
}

function generarNumeroSecreto() {
  let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

  console.log(numeroGenerado);
  console.log(listaNumerosSorteados);
  // Si ya sorteamos todos los números
  if(listaNumerosSorteados.length == numeroMaximo){
    asignatextoElemento('p', 'Sorteados todos los números posibles. ¡¡Fin del juego!!')
  }else{
    // Si el número generado está incluido en la lista
    if (listaNumerosSorteados.includes(numeroGenerado)) {
      return generarNumeroSecreto;
    }else{
      listaNumerosSorteados.push(numeroGenerado);
      return numeroGenerado;
    }
  } 
}

function limpiarCajaTexto() {
  document.querySelector('#valorUsuario').value = "";
  return;
}

function condicionesIniciales() {
  asignatextoElemento('h1', 'Juego del número secreto');
  asignatextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
  numeroSecreto = generarNumeroSecreto();
  intentos = 1;
}

function reiniciarJuego() {
  //limpiar caja
  limpiarCajaTexto();
  //Indicar mensaje de intervalo de número
  //Generar el número aleatorio
  //Inicializar el número intentos
  condicionesIniciales();
  //Deshabilitar el botón de nuevo juego
  document.querySelector('#reiniciar').setAttribute('disabled', true);
  
}

//Llamado de la función.
condicionesIniciales();
