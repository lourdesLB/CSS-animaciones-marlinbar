


/* Detener/reanudar animacion1 */

document.getElementById('boton_1').addEventListener(
    'click', (evento) => detener_reanudar1(evento));

function detener_reanudar1(evento){
    document.querySelector(".anim1_bola1").style.animationPlayState = 
            document.querySelector(".anim1_bola1").style.animationPlayState === 'running'? 'paused':'running';
    document.querySelector(".anim1_bola2").style.animationPlayState = 
            document.querySelector(".anim1_bola2").style.animationPlayState === 'running'? 'paused':'running';
}