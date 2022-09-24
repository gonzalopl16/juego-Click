let player = document.getElementById('player');
let punto = document.getElementById('puntos');
let Tiempo = document.getElementById('tiempo');
let Mensaje = document.getElementById('mensaje');
let Container = document.getElementById('quitar');
let puntos = 0;
let tiempo = 10;
let necesarios = 100;
player.addEventListener('click',sumarPuntos);


//Funciones
function sumarPuntos(){
    if(tiempo === 10){
        setInterval(restarTiempo,1000);
    }
    if(tiempo !== 0){
        puntos++;
    }
    punto.innerHTML = `Puntaje: <b> ${puntos} / ${necesarios}</b>`;
    let numeroRandom = Math.round(Math.random()*450);
    let numeroRandom2 = Math.round(Math.random()*450);
    player.style.marginTop = `${numeroRandom}px`;
    player.style.marginLeft= `${numeroRandom2}px`;
    if(puntos === necesarios){
        mostrar('Ganaste');
        tiempo = null;
    }
}

function restarTiempo(){
    if(tiempo !== 0){
        tiempo--;
    }
    Tiempo.innerHTML = `&nbsp;&nbsp Tiempo: ${tiempo}`
    if(tiempo === 0){
        mostrar('perdiste');
    }
}

function mostrar(mensaje){
    Mensaje.innerHTML = `<h2>${mensaje}</h2>
    <button id="button">Reiniciar</button>`;
    let resetBtn = document.querySelector('button');
    resetBtn.addEventListener('click', () => {
        location.reload();
    });
}