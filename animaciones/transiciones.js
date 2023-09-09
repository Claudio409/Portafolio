import { capturarClass } from "./funciones_captura_id_class.offwidth.js";

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

function aparecer_con_rotacion(target){
    ScrollReveal().reveal(capturarClass(target), {
        delay: '500',
        easing: 'cubic-bezier(0, 0, 0, 0.91)',
        origin: 'bottom left',
        distance: '-6rem',
        scale: 0.6,
        rotate: {
            x: 90,
            y: 0,
            z: 0
        },
        transformOrigin: '0% 50%',//cambia el punto de giro
        duration: 1000,
    });
}


/*animaciones*/
animacionDeCaida('animation_img_me');
aparecerLetfAndRight('nav_link');
aparecerPocoAPoco('text_hola', 'title_sobreMi', 'text_sobreMI', 'text_sobreMi_mas')
aparecer_con_rotacion('container_one_img');
aparecer_con_rotacion('container_two_img');