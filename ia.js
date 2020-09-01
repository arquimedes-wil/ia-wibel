dialogo = "";
document.getElementById("texto").focus();
function dialogar() {
  dialogo = document.getElementById("texto").value;
  document.getElementById("interaccion").innerHTML += "<br><p class='usuario'>" + dialogo + "</p><br>";
  document.getElementById("texto").value = "";
  document.getElementById("texto").focus();
  escroll();
  setTimeout("hablar()", 1000);
}
//funciones fijas
function escroll() {
  var elmnt = document.getElementById("interaccion");
  elmnt.scrollTop += 120;
}
function dialogarkey() {
  if (event.keyCode == 13) {
    dialogar();
  }
}
var palabraNueva = false;
var clave = "";
var responder = "";
function hablar() {

  if (memoria[dialogo] == undefined && palabraNueva == false) {//si no encuentra en su memoria escrita
    if(localStorage.getItem(dialogo)==undefined){//busca en su memoria local aprendida, 
      //si no encuentra aplica este bloque de codigo
      respuesta = desconocido[Math.floor(Math.random() * desconocido.length)] + ". " + dialogo;
    document.getElementById("interaccion").innerHTML +=
      "<br><p class='wibel'>" + respuesta + "</p><br>";
    speechSynthesis.speak(new SpeechSynthesisUtterance(respuesta));
    escroll();
    palabraNueva = true;
    clave=dialogo;
    }else{//si encuentra en su memoria aprendida responde este bloque
      respuesta =localStorage.getItem(dialogo);
    document.getElementById("interaccion").innerHTML +=
      "<br><p class='wibel'>" + respuesta + "</p><br>";
    speechSynthesis.speak(new SpeechSynthesisUtterance(respuesta));
    escroll();
    }
    
  } else {
    if(palabraNueva==true){//aqui anota la nueva palabra en su memoria
    responder=dialogo;
    localStorage.setItem(clave, responder);
    let confirmacionDeGuardado=["okey","de acuerdo","entendido","anotado"];
    respuesta = confirmacionDeGuardado[Math.floor(Math.random() * confirmacionDeGuardado.length)];
    document.getElementById("interaccion").innerHTML +=
      "<br><p class='wibel'>" + respuesta + "</p><br>";
    speechSynthesis.speak(new SpeechSynthesisUtterance(respuesta));
    escroll();
    palabraNueva=false;
  }else{
    respuesta = memoria[dialogo][Math.floor(Math.random() * memoria[dialogo].length)];
    if (respuesta == undefined) {
      memoria[dialogo]();
      respuesta2 = memoriaAccion[Math.floor(Math.random() * memoriaAccion.length)];
      document.getElementById("interaccion").innerHTML +=
        "<br><p class='wibel'>" + respuesta2 + "</p><br>";
      speechSynthesis.speak(new SpeechSynthesisUtterance(respuesta2));
      escroll();
    } else {
      document.getElementById("interaccion").innerHTML +=
        "<br><p class='wibel'>" + respuesta + "</p><br>";
      speechSynthesis.speak(new SpeechSynthesisUtterance(respuesta));
      escroll();
    }}
  }
}

//---------------------------- */
//esto es para el reconocimiento de voz
function hablayang(dialogo) {

  if (memoria[dialogo] == undefined) {
    respuesta = desconocido[Math.floor(Math.random() * desconocido.length)];
    speechSynthesis.speak(new SpeechSynthesisUtterance(respuesta));
  } else {
    respuesta = memoria[dialogo][Math.floor(Math.random() * memoria[dialogo].length)];
    if (respuesta == undefined) {
      memoria[dialogo]();
      respuesta2 = memoriaAccion[Math.floor(Math.random() * memoriaAccion.length)];
      speechSynthesis.speak(new SpeechSynthesisUtterance(respuesta2));

    } else {
      speechSynthesis.speak(new SpeechSynthesisUtterance(respuesta));

    }
  }
}
//anyang
if (annyang) {
  annyang.setLanguage("es-PE");
  // Definamos un comando.
  const comandos = {
    'hola': () => { hablayang("hola"); },
    'avi': () => { hablayang("avi"); },
    'como estas': () => { hablayang("como estas"); },
    'quién eres': () => { hablayang("quien eres"); }
  };
  // Agrega nuestros comandos a annyang
  annyang.addCommands(comandos);
  annyang.addCommands(memoria);

  // Empieza a escuchar.
  //annyang.start();
  annyang.addCallback('errorNetwork', function () {
    alert("no hay internet");
  });

}