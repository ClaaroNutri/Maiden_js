
let luz="on";

let imagenEddy=document.querySelector("#imagen");
console.log(imagenEddy);

let prender=document.querySelector("#boton");
console.log(prender);

let fondo=document.querySelector("#back")

let sonido=document.querySelector("#musica")

let sonidoBoton=document.querySelector("#botonOn")

prender.addEventListener("click", ()=> {prenderLuz()})

function prenderLuz() {
    if (luz=="on"){
        luz="off"
        prender.innerHTML="Off"
        imagenEddy.style.opacity=1
        back.style.backgroundColor="white"
        colorBoton()
        moverBoton()
        encender()
        
        
    }else {
        luz="off"
        imagenEddy.style.opacity=0
        prender.innerHTML="On"
        back.style.backgroundColor="black"
        colorBoton()
        moverBoton()
        encender()
        
    }
}

function colorBoton(){
    if(luz==="off"){
        prender.style.backgroundColor="red"
        
    }
    else {
        luz="on"
        prender.style.backgroundcolor="brown"
       
    }
}

function moverBoton(){
    if(luz==="off"){
        prender.style.position=("relative")
    }else{
        
        prender.style.position=("absolute")
        
    }
}

function encender(){
    if(sonido.paused){
        sonidoBoton.play()
        sonido.play()

    }else{
        sonidoBoton.play()
        sonido.pause()
        sonido.currentTime=0
    }
}