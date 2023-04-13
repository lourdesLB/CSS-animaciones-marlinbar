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
