function capturarClass(target){
    const clase = document.getElementsByClassName(target);
    return clase;
}
function animacionDeCaida(target){
    ScrollReveal().reveal(capturarClass(target), {
        origin: 'top',
        distance: '50px',
        delay:10000, 
        duration: 1000,
        reset:true});
}
function aparecerLetfAndRight(target){
    ScrollReveal().reveal(capturarClass(target),{
        interval: 100,
    })
}
function aparecerPocoAPoco(target1, target2, target3, target4){
    ScrollReveal().reveal(capturarClass(target1));
    ScrollReveal().reveal(capturarClass(target2),{delay:500});
    ScrollReveal().reveal(capturarClass(target3),{delay:1000});
    ScrollReveal().reveal(capturarClass(target4),{delay:9900})
}
/*animaciones*/
animacionDeCaida('animation_img_me');
aparecerLetfAndRight('nav_link');
aparecerPocoAPoco('text_hola', 'title_sobreMi', 'text_sobreMI', 'text_sobreMi_mas')