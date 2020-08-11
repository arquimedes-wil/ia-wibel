dialogo = "";
conteo = 0;

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
    if (conteo == 1) {//se necesita optener el nombre
        document.getElementById("interaccion").innerHTML +=
            "<br><p class='wibel'>mucho gusto " + dialogo + ", ¿en que necesitas ayuda? </p><br>";
        escroll();
        //conteo++;
    }
    if (dialogo === "hola"||dialogo==="ola") {
        document.getElementById("interaccion").innerHTML +=
            "<br><p class='wibel'>"+saludo[Math.floor(Math.random()*saludo.length)]+"</p><br>";
        escroll();
        //conteo++;
    }
}
saludo=["hola, como estas","hola, soy wibel, y tu ¿quien eres?","hola, soy wibel, cual es tu nombre","hola"];
