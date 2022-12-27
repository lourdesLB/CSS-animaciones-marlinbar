


/* Detener/reanudar animacion1 */

document.getElementById('boton_1').addEventListener(
    'click', (evento) => detener_reanudar1(evento));

function detener_reanudar1(evento){

    if (document.querySelector(".anim1_bola1").style.animationPlayState == 'running'){
        document.querySelector(".anim1_bola1").style.animationPlayState = 
            'paused';
        document.querySelector(".anim1_bola2").style.animationPlayState = 
            'paused';
        document.getElementById('boton_1').innerHTML = 'Reanudar';
    }
    else {
        document.querySelector(".anim1_bola1").style.animationPlayState = 
            'running';
        document.querySelector(".anim1_bola2").style.animationPlayState = 
            'running';
        document.getElementById('boton_1').innerHTML = 'Detener';    
    }
}

/*Detener/reanudas animacion2 */

document.getElementById('boton_2').addEventListener(
    'click', (evento) => detener_reanudar2(evento));

function detener_reanudar2(evento){

    if (document.querySelector(".anim2_arco1").style.animationPlayState == 'running'){
        document.querySelector(".anim2_arco1").style.animationPlayState = 
            'paused';
        document.querySelector(".anim2_arco2").style.animationPlayState = 
            'paused';
        document.getElementById('boton_2').innerHTML = 'Reanudar';
    }
    else {
        document.querySelector(".anim2_arco1").style.animationPlayState = 
            'running';
        document.querySelector(".anim2_arco2").style.animationPlayState = 
            'running';
        document.getElementById('boton_2').innerHTML = 'Detener';    
    }
    
}