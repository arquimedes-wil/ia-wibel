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
function hablar() {

  if (memoria[dialogo] == undefined) {
    /* if (contenidoAleer.indexOf(dialogo) !== -1) {
      leido();
      document.getElementById("interaccion").innerHTML +=
        "<br><p class='wibel'>" + respuesta2 + "</p><br>";
      speechSynthesis.speak(new SpeechSynthesisUtterance(respuesta2));
      escroll();
    } else {} */
      respuesta = desconocido[Math.floor(Math.random() * desconocido.length)];
      document.getElementById("interaccion").innerHTML +=
        "<br><p class='wibel'>" + respuesta + "</p><br>";
      speechSynthesis.speak(new SpeechSynthesisUtterance(respuesta));
      escroll();
    

  } else {
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
    }
  }
}



/* //lector de txt
var contenidoAleer = "";
var respuesta2 = "";
function leerArchivo(e) {
  var archivo = e.target.files[0];
  if (!archivo) {
    return;
  }
  var lector = new FileReader();
  lector.onload = function (e) {
    var contenido = e.target.result;
    mostrarContenido(contenido);
    contenidoAleer = contenido;
  };
  lector.readAsText(archivo);
}
function mostrarContenido(contenido) {
  var elemento = document.getElementById('contenido-archivo');
  elemento.innerHTML = contenido;
}
document.getElementById('file-input')
  .addEventListener('change', leerArchivo, false);

function leido() {
  var UbicacionDePalabra = contenidoAleer.indexOf(dialogo);
  var textoEntreComas = contenidoAleer.substring(contenidoAleer.lastIndexOf(",", UbicacionDePalabra), contenidoAleer.indexOf(",", UbicacionDePalabra));
  var textoEntrePuntos = contenidoAleer.substring(contenidoAleer.lastIndexOf(".", UbicacionDePalabra), contenidoAleer.indexOf(".", UbicacionDePalabra));
  var textoEntreComayPunto = contenidoAleer.substring(contenidoAleer.lastIndexOf(",", UbicacionDePalabra), contenidoAleer.indexOf(".", UbicacionDePalabra));
  var textoEntrePuntoyComa = contenidoAleer.substring(contenidoAleer.lastIndexOf(".", UbicacionDePalabra), contenidoAleer.indexOf(",", UbicacionDePalabra));
  matrizParaElegir = [textoEntreComas.length, textoEntrePuntos.length, textoEntrePuntoyComa.length, textoEntreComayPunto.length];
  matrizParaLeer = [textoEntreComas, textoEntrePuntos, textoEntrePuntoyComa, textoEntreComayPunto];
  if (Math.min.apply(null, matrizParaElegir) == 0) {
    matrizParaElegir.splice(matrizParaElegir.indexOf(Math.min.apply(null, matrizParaElegir)), 1, 99999);
    respuesta2 = matrizParaLeer[matrizParaElegir.indexOf(Math.min.apply(null, matrizParaElegir))];
  } else {
    respuesta2 = matrizParaLeer[matrizParaElegir.indexOf(Math.min.apply(null, matrizParaElegir))];
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
    const comandos = {'ola':() =>{speechSynthesis.speak(new SpeechSynthesisUtterance("SALUDOS"));},
    "quien eres":()=>{hablayang("quien eres");}
  };
    // Agrega nuestros comandos a annyang
    annyang.addCommands(comandos);
    annyang.addCommands(memoria);
    
    // Empieza a escuchar.
    annyang.start();
    }