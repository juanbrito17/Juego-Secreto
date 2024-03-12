let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto; 
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorDeUsuario').value);
    if (numeroSecreto === numeroDeUsuario) {
        asignarTextoElemento('p' , `Felicitaciones, acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
            if (numeroSecreto > numeroDeUsuario) {
                asignarTextoElemento('p' , 'Erraste, el número es mayor'); 
            } else{
                asignarTextoElemento('p' , 'Erraste, el número es menor');   
            }
            intentos++;
            limpiarCaja();
    }
   return; 
}
function limpiarCaja() {
   // let valorCaja = document.querySelector('#valorDeUsuario');
    //valorCaja.value = '';
   document.querySelector('#valorDeUsuario').value = '';
}
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*10)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    //Si ya todos los numeross se sortearon
    if(listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se han sorteado todos los números posibles');
    } else{
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}
function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', `Digite un número entre 1 y ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;

}
function reiniciarJuego() {
    //Limpiar la caja
    limpiarCaja();
    //indicar mensaje de inicio
    //Generar el número aleatorio
    //inicializar el numero de intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo Juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}
condicionesIniciales();
