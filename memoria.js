nombre = "juan";
const desconocido = ["no entiendo", "perdona, pero nose de que hablas", "lo siento, nose a que te refieres", "en eso no te puedo ayudar", "no conozco el tema", "desconozco el tema"];
const memoriaAccion = ["listo", "esta hecho", "ya lo hice", "mostrando resultados", "eso fue facil", "okey"];
const memoria = {
    "como te llamas": ["soy avi", "mi nombre es avi"],
    "quien eres": ["soy avi", "llámame avi"],
    "hola": ["hola, como estas", "hola amigo"],
    "como estas": ["bien", "muy bien y tu?", "super bien"],
    ["quien es " + nombre]: ["no lo conozco", "si se quien es"],
    "pon musica": () => { vervideo("https://www.youtube.com/embed/sEMR16gOXLM"); },
    "poner musica": () => { vervideo("https://www.youtube.com/embed/sEMR16gOXLM"); },
    "guia para hacer tesis": () => {verdocumento("https://www.sev.gob.mx/centros-rebsamen/files/2017/03/Manual-para-elaboracion-de-tesis-y-trabajos-de-investigacion.pdf");},

}

function vervideo(direccion) {
    document.getElementById("contenido-archivo").innerHTML =
        "<iframe width='100%' height='315'" +
        "src='" + direccion + "?rel=0&amp;autoplay=1' frameborder='0'" +
        "allow='accelerometer; autoplay; encrypted-media; gyroscope;" +
        "picture-in-picture' allowfullscreen></iframe>";
}
function verdocumento(direccion) {
    document.getElementById("contenido-archivo").innerHTML =
        "<iframe width='100%' height='550'" +
        "src='"+direccion+"' frameborder='0' title='documento'></iframe>";
}

