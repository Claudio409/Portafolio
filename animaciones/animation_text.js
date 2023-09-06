//Capturar el texto del html y agregarlo a un arry
const text_sobreMi= document.getElementById('text_sobreMI');
const texto = capturarEnArray(text_sobreMi);
let contadorFrase = 0;
function capturarEnArray(html){
    const textsArray = [];
    const text= html.textContent; //capturo el html en formato texto
    const mitad = Math.floor(text.length/2 - 5); //agarro la mitad de caracteres del texto
    textsArray.push(text.slice(0,mitad));
    textsArray.push(text.slice(mitad));
    return textsArray;
}

function escribir(oracion){
    let contadorLetra = 0;
    const animation = setInterval(()=>{
        text_sobreMi.textContent = oracion.slice(0, contadorLetra);
        contadorLetra++;
        if (contadorLetra > oracion.length){
            clearInterval(animation);
            setTimeout(()=>{
                text_sobreMi.textContent = "";
                OtraFrase();
            }, 500);
        }
    }, 100);
}

function OtraFrase(){
    const oracion = texto[contadorFrase];
    contadorFrase = (contadorFrase + 1) % texto.length; //% significa el modulo o llamado residuo... esto sirve para que el contador nunca salga mayor a los valores del array
    escribir(oracion);
}
OtraFrase();