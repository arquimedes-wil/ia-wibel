dialogo = "";
nombre = "";

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
    if (contenidoAleer.indexOf(dialogo) !== -1) {
      leido();
      document.getElementById("interaccion").innerHTML +=
        "<br><p class='wibel'>" + respuesta2 + "</p><br>";
      speechSynthesis.speak(new SpeechSynthesisUtterance(respuesta2));
      escroll();
    } else {
      respuesta = desconocido[Math.floor(Math.random() * desconocido.length)];
      document.getElementById("interaccion").innerHTML +=
        "<br><p class='wibel'>" + respuesta + "</p><br>";
      speechSynthesis.speak(new SpeechSynthesisUtterance(respuesta));
      escroll();
    }

  } else {
    respuesta = memoria[dialogo][Math.floor(Math.random() * memoria[dialogo].length)];
    if (respuesta == undefined) {
      memoria[dialogo]();
      respuesta = "esta hecho";
      document.getElementById("interaccion").innerHTML +=
        "<br><p class='wibel'>" + respuesta + "</p><br>";
      speechSynthesis.speak(new SpeechSynthesisUtterance(respuesta));
      escroll();
    } else {
      document.getElementById("interaccion").innerHTML +=
        "<br><p class='wibel'>" + respuesta + "</p><br>";
      speechSynthesis.speak(new SpeechSynthesisUtterance(respuesta));
      escroll();
    }
  }
}

desconocido = ["no entiendo", "perdona, pero nose de que hablas", "lo siento, nose a que te refieres", "en eso no te puedo ayudar", "no conozco el tema", "desconozco el tema"];

//lector de txt
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


//txt

//esto es para el reconocimiento de voz
let rec;
function microfono() {
  if (!("webkitSpeechRecognition" in window)) {
    alert("disculpas, no puedes usar la API");
  } else {
    rec = new webkitSpeechRecognition();
    rec.lang = "es-PE";
    rec.continuous = true;
    rec.interimResults = true;
    rec.addEventListener("result", iniciar);
  }
  rec.start();
}

function iniciar(event) {
  for (let i = event.resultIndex; i < event.results.length; i++) {
    document.getElementById('texto').value = event.results[i][0].transcript;
  }
}

//-----------------------------------------------

//anyang
/*     if (annyang) {
        annyang.setLanguage("es-PE");

        // Definamos un comando.
    const comandos = {'hola':() =>{document.getElementById("interaccion").innerHTML +=
    "<br><p class='wibel'>" + "hola" + "</p><br>";
    escroll();},
    "avi":()=>{dialogar();},
    "como estas":()=>{alert("quien pregunta");}
  };

    // Agrega nuestros comandos a annyang
    annyang.addCommands(comandos);

    // Empieza a escuchar.
    annyang.start();
    } */