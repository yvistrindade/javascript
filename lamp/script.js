/**
 * Eventos de intervalo
 * @author yvis trindade
 */

function piscar(){
   let ligada = false
   //funções para gerar intervalo
   //1000 = (1000ms = 1s)
   setInterval (()=> {
if (ligada === false){
    document.getElementById('lamp').src = "img/on.jpg"
} else {    
document.getElementById('lamp').src = "img/off.jpg"
}
ligada = !ligada //!NOT
   },1000)
}