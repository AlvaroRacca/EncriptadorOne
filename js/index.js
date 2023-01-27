function ponerFrase(frase){
    document.getElementById("ver-section").innerHTML = `
        <textarea id="output" class="output" rows="8" readonly></textarea>
        <button id="btCopiar" onclick="copiar()">Copiar</button>
    `;
}

function validarFrase(frase) {
    /* Expresión regular para encontrar mayúsculas y carácteres con acento */
    let regex = /[A-ZÀ-ú]/;
    return (!regex.test(frase) && frase != '');
}

function encriptar(frase){
    /* var texto = document.querySelector('#texto-encriptar').value; */
    var textoEncriptado = frase.replace(/e/gi, 'enter').replace(/i/gi, 'imes').replace(/a/gi, 'ai').replace(/o/gi, 'ober').replace(/u/gi, 'ufat');
    return textoEncriptado;
}

function desencriptar(frase){
    var textoEncriptado = frase.replace(/enter/gi, 'e').replace(/imes/gi, 'i').replace(/ai/gi, 'a').replace(/ober/gi, 'o').replace(/ufat/gi, 'u');
    return textoEncriptado;
}


function encriptado(){
    let frase = document.getElementById("texto-encriptar").value;
    if(validarFrase(frase)){
        ponerFrase(frase);
    document.getElementById("output").value = encriptar(frase);
    } else {
        alert("su mensaje esté vacío o tal vez contiene mayúsculas y/o acentos");
        document.getElementById("output").value = '';
    }
    
}

function desencriptado(){
    let frase = document.getElementById("texto-encriptar").value;
    if(validarFrase(frase)){
        ponerFrase(frase);
        document.getElementById("output").value = desencriptar(frase);
    } else{
        alert("su mensaje esté vacío o tal vez contiene mayúsculas y/o acentos");
        document.getElementById("output").value = '';
    }
    
}

function copiar() {
    /* Obtenemos el texto a copiar */
    let copiedText = document.getElementById("output").value;

    /* Lo copiamos al portapapeles */
    navigator.clipboard.writeText(copiedText);
}

/* var btdesencriptar = document.querySelector('#btDesencriptar');
btdesencriptar.onclick = desencriptar; */
