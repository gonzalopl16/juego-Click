let player = document.getElementById('player');
let punto = document.getElementById('puntos');
let Tiempo = document.getElementById('tiempo');
let Mensaje = document.getElementById('mensaje');
let Container = document.getElementById('quitar');
let puntos = 0;
let tiempo = 60;
let necesarios = 100;
player.addEventListener('mouseover',sumarPuntos);


//Funciones
function sumarPuntos(){
    puntos++;
    punto.innerHTML = `Puntaje: <b> ${puntos} / ${necesarios}</b>`;
    let numeroRandom = Math.round(Math.random()*450);
    let numeroRandom2 = Math.round(Math.random()*450);
    player.style.marginTop = `${numeroRandom}px`;
    player.style.marginLeft= `${numeroRandom2}px`;
    if(puntos === necesarios){
        mostrar('Ganaste');
        document.getElementById('quitar').removeChild(this);
    }
}

function restarTiempo(){
    tiempo--;
    Tiempo.innerHTML = `&nbsp;&nbsp Tiempo: ${tiempo}`
    if(tiempo === 0){
        mostrar('perdiste');
        document.getElementById('quitar').removeChild(this);
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

function delate(){
}

setInterval(restarTiempo,1000);