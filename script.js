const cadena = document.querySelector("#input");
const resultadoText = document.querySelector("#resultadoText");
const imagen = document.querySelector(".mensajeInformativo img");
const h2Mensaje = document.querySelector(".mensajeInformativo h2");
const pMensaje = document.querySelector(".mensajeInformativo p");
const botonCopiar = document.querySelector(".copiar")


function btnEncriptar(){
    var texto = encriptar(cadena.value)
    resultadoText.classList.remove("hidden")
    resultadoText.value = texto
    imagen.style.display = "none"; // Oculta la imagen
    h2Mensaje.style.display = "none"; // Oculta el h2
    pMensaje.style.display = "none"; // Oculta el p
    botonCopiar.classList.remove("copiar")
    cadena.value = "";
    

}

function encriptar (cdna){
    var caracteres = cdna.split('');
    var encriptada = "";
    for (let i = 0; i < cdna.length; i++) {
        if (caracteres[i] === "a") {
            encriptada += "ai" 
        } else if (caracteres[i] === "e") {
            encriptada += "enter" 
        } else if (caracteres[i] === "i") {
            encriptada += "imes" 
        } else if (caracteres[i] === "o") {
            encriptada += "ober" 
        } else if (caracteres[i] === "u") {
            encriptada += "ufat" 
        } else {
            encriptada += caracteres[i];
        }
    }
    return encriptada
}

function desencriptar(cdna) {
    var encriptada = cdna.replace(/ai/g, "a")
                         .replace(/enter/g, "e")
                         .replace(/imes/g, "i")
                         .replace(/ober/g, "o")
                         .replace(/ufat/g, "u");
    return encriptada;
}

function btnDesencriptar(){
    var texto = desencriptar(cadena.value)
    resultadoText.value = texto
    botonCopiar.classList.remove("copiar")
    cadena.value = "";
}

function btnCopiar(){
    resultadoText.select();
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    resultadoText.style.outline = "none";
    resultadoText.value = "";
    resultadoText.blur();
}