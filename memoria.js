//nombre = "juan";
const desconocido = ["no entiendo. tu que me dirias si te escribo", "perdona, pero nose de que hablas, mejor responeme tu,", "lo siento, nose a que te refieres, mejor yo te pregunto,", "primera vez que me hablan de ello, que tal si yo te dogo,", "no conozco el tema, asi que te preguntare a ti,"];
const memoriaAccion = ["listo", "esta hecho", "ya lo hice", "mostrando resultados", "eso fue facil", "okey"];
const memoria = {
    "avi":["aqui estoy","si, en que te ayudo","digame, hay algo para hacer?","te atiendo en ún segundo. lísto, te escucho"],
    "como te llamas": ["soy avi", "mi nombre es avi"],
    "escuchar":()=>{annyang.start();},
    "quien eres": ["soy avi", "llámame avi"],
    "que eres":["soy una maquina","soy un asistente virtual inteligente. llamame avi","soy la computadora hablandote. jjajaja"],
    "ola":["hola","ola"],
    "hola": ["hola, cual es la misión de hoy dia", "hola amigo"],
    "como estas": ["bien", "muy bien, y tu?", "super bien"],
  //  ["quien es " + nombre]: ["no lo conozco", "si se quien es"],
    "pon musica": () => { vervideo("https://www.youtube.com/embed/sEMR16gOXLM"); },
    "musica": () => { vervideo("https://www.youtube.com/embed/sEMR16gOXLM");},
    "canta": () => { vervideo("https://www.youtube.com/embed/videoseries?list=RD_fnpRds601s&start_radio=1&t=8"); },
    "guia para hacer tesis": () => {verdocumento("https://www.sev.gob.mx/centros-rebsamen/files/2017/03/Manual-para-elaboracion-de-tesis-y-trabajos-de-investigacion.pdf");},
    "buscar":["para eso puedes utilizar google","disculpa, no soy un buscador","abre una nueva pestaña","para eso escribe abrir buscador"],
    "abrir buscador":()=>{window.open('https://duckduckgo.com/?q='+"hola", '_blank');},
    "abrir google":()=>{window.open('https://google.com', '_blank');},
    "abrir youtube":()=>{window.open('https://youtube.com', '_blank');}

}

function vervideo(direccion) {
    document.getElementById("contenido-archivo").innerHTML =
        "<iframe width='100%' height='315'" +
        "src='" + direccion + "?&autoplay=1' frameborder='0'" +
        "allow='accelerometer; autoplay; encrypted-media; gyroscope;" +
        "picture-in-picture' allowfullscreen></iframe>"; annyang.abort();
}
function verdocumento(direccion) {
    document.getElementById("contenido-archivo").innerHTML =
        "<iframe width='100%' height='550'" +
        "src='"+direccion+"' frameborder='0' title='documento'></iframe>";
}
