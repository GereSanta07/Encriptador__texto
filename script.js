const textArea = document.querySelector(".contenedor_input");
const mensaje = document.querySelector(".contenedor_mensaje");
let listaCaracteres=["Á","É","Í","Ó","Ú","á","é","í","ó","ú","''","ñ","Ñ","!","@","¡","#","$","%","^",
    "&","*","(",")","+","=","{","}","|","[","]","\\",":",";","/",",",".","¿","?"];

    /*La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"*/

function botonEncriptar(){
    const textoEncriptado = encriptar (textArea.value);
    mensaje.value = textoEncriptado;
    //para hacer que el campo se limpie luego de dar en encriptar se hace esto:
    textArea.value= "";
    //para quitar la imagen del campo del mensaje se hace:
    mensaje.style.backgroundImage= "none";
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i=0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){ //metodo includes realiza una verificacion de las letras que contiene la palabra 
            //metodo replace reemplaza
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}

function botonDesencriptar(){
    const textoEncriptado = desencriptar (textArea.value);
    mensaje.value = textoEncriptado;
    //para hacer que el campo se limpie luego de dar en encriptar se hace esto:
    textArea.value= "";
    mensaje.style.backgroundImage= "none";
    
}

function desencriptar(stringDesencriptado){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase()

    for(let i=0; i < matrizCodigo.length; i++){
        if(stringDesencriptado.includes(matrizCodigo[i][1])){ //metodo includes realiza una verificacion de las letras que contiene la palabra 
            //metodo replace reemplaza
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);
        }
    }
    return stringDesencriptado;
}

function boton_copiar(){
    const parrafo = mensaje.value; //obtiene el contenido del contenedor del mensaje
    navigator.clipboard.writeText(parrafo).then(() =>{
        console.log( "texto copiado con exito");
    }).catch(error =>{
        console.error("No pudo ser copiado el texto ", error)
    })
    
}

function validarCaracteres(texto){
    for(let i=0;i<listaCaracteres.length;i++){
        if(texto.includes(listaCaracteres[i])){
            return false;
        }
    }
    return true;
}

function searchMayusculas(texto){
    return /[A-Z]/.test(texto);
}

function verificacion(){
   const input =textArea.value;
    if(validarCaracteres(input)==true && input!=""&& !searchMayusculas(input)){
        botonEncriptar();
    }else{
        alert("no se aceptan caracteres especiales, solo minusculas");
    }
}