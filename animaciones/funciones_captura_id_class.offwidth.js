function capturarID(nombre){
    const target = document.getElementById(nombre);
    return target;
}
function capturarTodasClass(nombre){
    const target = document.querySelectorAll(nombre);
    return target;
}
function capturarAnchodeTarjeta(nombre){
    const target = document.getElementById(nombre).offsetWidth;
    return target;
}

export {
    capturarID,
    capturarTodasClass,
    capturarAnchodeTarjeta,
}