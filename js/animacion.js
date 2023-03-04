
let luz="off";

let imagenEddy=document.querySelector("#imagen");
console.log(imagenEddy);

let prender=document.querySelector("#boton");
console.log(prender);

let fondo=document.querySelector("#back")

let sonido=document.querySelector("#musica")

let sonidoBoton=document.querySelector("#botonOn")

prender.addEventListener("click", ()=> {prenderLuz()})

function prenderLuz() {
    if (luz=="off"){
        luz="on"
        prender.innerHTML="On"
        imagenEddy.style.opacity=1
        back.style.backgroundColor="white"
        colorBoton()
        moverBoton()
        encender()
        
    }else {
        luz="off"
        imagenEddy.style.opacity=0
        prender.innerHTML="Off"
        back.style.backgroundColor="black"
        colorBoton()
        moverBoton()
        encender()
    }
}

function colorBoton(){
    if(luz==="on"){
        prender.style.backgroundColor="red"
    }
    else {
        prender.style.backgroundcolor="brown"
    }
}

function moverBoton(){
    if(luz==="on"){
        prender.style.position=("relative")
    }else{
        prender.style.position=("absolute")
    }
}

function encender(){
    if(luz==="on"){
        sonidoBoton.play()
        sonido.play()

    }else{
        sonidoBoton.play()
        sonido.paused()
        sonido.currentTime=0
    }
}