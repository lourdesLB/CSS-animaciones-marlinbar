/*Realizado por Maria Lourdes Linares*/


botones = document.querySelectorAll(".animacion_boton");
botones.forEach((boton) => {
    boton.addEventListener("click", detener_reanudar);
  });

function detener_reanudar(evento){
    const boton = evento.target;
    const animacion = evento.target.parentNode;
    const subanimaciones = animacion.querySelectorAll(".subanimacion");
    subanimaciones.forEach((animacion)=>{
        animacion.style.animationPlayState = animacion.style.animationPlayState=="paused" ? "running" : "paused"; 
    });  
    boton.innerHTML = boton.innerHTML=="Detener" ? "Reanudar" : "Detener";
}

// Primera idea: tratando cada animacion por separado
// finalente decidi realizar una unica funcion generica (ver mas arriba)

/* Detener/reanudar animacion1 */
// boton1 = document.getElementById('boton_1');
// boton1.addEventListener("click", detener_reanudar1);

// function detener_reanudar1(evento){
//     console.log(evento)
//     const animation_state = document.querySelector(".anim1_bola1").style.animationPlayState || 'running';
//     // console.log(animation_state)

//     if (animation_state === 'running'){
//         document.querySelector(".anim1_bola1").style.animationPlayState = 
//             'paused';
//         document.querySelector(".anim1_bola2").style.animationPlayState = 
//             'paused';
//         document.getElementById('boton_1').innerHTML = 'Reanudar';
//     }
//     else {
//         document.querySelector(".anim1_bola1").style.animationPlayState = 
//             'running';
//         document.querySelector(".anim1_bola2").style.animationPlayState = 
//             'running';
//         document.getElementById('boton_1').innerHTML = 'Detener';    
//     }
// }

// /*Detener/reanudar animacion2 */
// boton2 = document.getElementById('boton_2');
// boton2.addEventListener("click", detener_reanudar2);

// function detener_reanudar2(evento){
//     const animation_state = document.querySelector(".anim2_arco1").style.animationPlayState || 'running';

//     if (animation_state === 'running'){
//         document.querySelector(".anim2_arco1").style.animationPlayState = 
//             'paused';
//         document.querySelector(".anim2_arco2").style.animationPlayState = 
//             'paused';
//         document.getElementById('boton_2').innerHTML = 'Reanudar';
//     }
//     else {
//         document.querySelector(".anim2_arco1").style.animationPlayState = 
//             'running';
//         document.querySelector(".anim2_arco2").style.animationPlayState = 
//             'running';
//         document.getElementById('boton_2').innerHTML = 'Detener';    
//     }
    
// }