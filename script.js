var puntaje = 0
var puntaje2 = 0
function formulario1() {
    let nombreUsuario = "";
    nombreUsuario = document.getElementById("nombreUsuario").value;
    if (nombreUsuario == "") {
        alert("ingresa un nombre para jugar")
    } else {
        document.getElementById("pantalla1").style.display = "none";
        document.getElementById("pantalla2").style.display = "block";
    }
    //do { 
    //nombreUsuario = document.getElementById("nombreUsuario").value;
    //}
    //while (nombreUsuario == "");


}

function formulario2(event) {
    console.log('event: ', event)
    const buttonName = event.target.innerHTML
    console.log('buttonName: ', buttonName)
    if (buttonName == "Animales Domésticos") {
        document.getElementById("pantalla2").style.display = "none";
        document.getElementById("pantalla3").style.display = "block";

    } else {
        document.getElementById("pantalla2").style.display = "none";
        document.getElementById("pantalla4").style.display = "block";
    }
}

function resultado1(event) {
    console.log('event: ', event)
    const buttonName = event.target.innerHTML
    console.log('buttonName: ', buttonName)
    //if (buttonName == "enviar") {
        //document.getElementById("pantalla3").style.display = "none";
        //document.getElementById("pantalla5").style.display = "block";

    //} else {}
}

function resultado2(event) {
    console.log('event: ', event)
    const buttonName = event.target.innerHTML
    console.log('buttonName: ', buttonName)
    if (buttonName == "Enviar") {
        document.getElementById("pantalla4").style.display = "none";
        document.getElementById("pantalla5").style.display = "block";

    } else {}

}
function pantalla4(event) {
    console.log('pantalla4: ', event)
    //validar las respuestas del nombreUsuario
    var checkbox= document.forms["formulario4"]["a"]
    //console.log("mane: ", checkbox[0].checked)
    //console.log("mane: ", checkbox[1].checked)
    //console.log("mane: ", checkbox[2].checked)
    //console.log("mane: ", checkbox[3].checked)
     if (checkbox[1].checked == true)  { 
      puntaje = puntaje + 1
    }
    var checkbox = document.forms["formulario4"]["b"]
    if (checkbox[2].checked == true)  { 
      puntaje = puntaje + 1
    }
    
    var checkbox = document.forms["formulario4"]["c"]
    if (checkbox[1].checked == true)  { 
      puntaje = puntaje + 1
    }
   
    //sumar los puntos de sus respuestas
    document.getElementById("puntajeTotal").innerHTML = puntaje;
    document.getElementById("pantalla4").style.display = "none";
    document.getElementById("pantalla5").style.display = "block";
}
//function opcion1(event) {
//var cont=0;
//var respuestaCorrecta=3;
// const opcion1valor = event.target.value
// console.log("opcion1valor", opcion1valor)
// if (opcion1valor== respuestaCorrecta){
//     return cont=1;
// }else{
//   return  cont=0; 

function pantalla3(event) {
    console.log('pantalla3: ', event)
    //validar las respuestas del nombreUsuario
   
    var checkbox1= document.forms["formulario3"]["p1"]
    //console.log("mane: ", checkbox[0].checked)
    //console.log("mane: ", checkbox[1].checked)
    //console.log("mane: ", checkbox[2].checked)
    //console.log("mane: ", checkbox[3].checked)
     if (checkbox1[2].checked == true)  { 
      puntaje2 = puntaje2 + 1
    }
    var checkbox1 = document.forms["formulario3"]["p2"]
    if (checkbox1[0].checked == true)  { 
      puntaje2 = puntaje2 + 1
    }
    
    var checkbox1 = document.forms["formulario3"]["p3"]
    if (checkbox1[3].checked == true)  { 
      puntaje2 = puntaje2 + 1
    }
   
    //sumar los puntos de sus respuestas
    document.getElementById("puntajetotal").innerHTML = puntaje2;
    document.getElementById("pantalla3").style.display = "none";
    document.getElementById("pantalla6").style.display = "block";
    
    

}

function reiniciar(){
  let entrada=""
  if (entrada==""){
   
    document.getElementById("pantalla6").style.display = "none";
    document.getElementById("pantalla1").style.display = "block";
    document.getElementById("formulario3").reset();
    puntaje2=0;
  }
}
function reiniciar2(){
  let entrada=""
  if (entrada==""){
    document.getElementById("pantalla1").style.display = "block";
    document.getElementById("pantalla5").style.display = "none";
    document.getElementById("formulario4").reset();
    puntaje=0;

  }
}