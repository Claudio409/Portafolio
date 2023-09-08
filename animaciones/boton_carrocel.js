const boton_izquirdo = document.getElementById('boton_iquierdo');
const boton_derecho = document.getElementById('boton_derecho');
const anchoTarjeta= document.getElementById('tarjeta').offsetWidth;
const carrosel = document.getElementById('carrosol');
const tarjetas = document.querySelectorAll('.tarjeta');
/*Cidgo para pasarlo pero sin q sea la primera tarjeta
izquierdo.addEventListener('click', ()=>{
    const tarjetaAEsconder = tarjetas[indiceActual];
    tarjetaAEsconder.style.transform = 'scale(.9)';
    tarjetaAEsconder.classList.add('fondo_tajetas_soft_skill');
    setTimeout(()=>{
        const newposition_izq = carrosel.scrollLeft  + anchoTarjeta;
        carrosel.scrollTo({
            left: newposition_izq,
            behavior:"smooth",
        });
        setTimeout(()=>{
            tarjetaAEsconder.style.transform = 'scale(1)';
            tarjetaAEsconder.classList.remove('fondo_tajetas_soft_skill');
        },300);
        indiceActual = (indiceActual+1)%tarjetas.length;
    }, 300)
});*/

let indiceActual = 0;
function boton_carrosel(izquierdo, derecho, cards){
    izquierdo.addEventListener('click', ()=>{
        // Encuentra la primera tarjeta visible en la pantalla
        let tarjetaAEsconder;
        for (const t of cards) {
            const posicionTarjeta = t.getBoundingClientRect();
            if (posicionTarjeta.left >= 0) {
                tarjetaAEsconder = t;
                break;
            }
        }
        
        // Aplica la transformación de escala solo a la primera tarjeta visible en la pantalla
        if (tarjetaAEsconder) {
            tarjetaAEsconder.style.transform = 'scale(.4)';
            tarjetaAEsconder.style.transition = '400ms';
            tarjetaAEsconder.classList.add('fondo_tajetas_soft_skill');
        }
        
        setTimeout(()=>{
            let newposition_izq = carrosel.scrollLeft  + anchoTarjeta;
            if (newposition_izq >= carrosel.scrollWidth - carrosel.clientWidth) {
                newposition_izq = 0;
            }
            carrosel.scrollTo({
                left: newposition_izq,
                behavior:"smooth",
            });
            
            setTimeout(()=>{
                if (tarjetaAEsconder) {
                    tarjetaAEsconder.style.transform = 'scale(1)';
                    tarjetaAEsconder.classList.remove('fondo_tajetas_soft_skill');
                }
            },400);
        }, 400)
    });
    
    derecho.addEventListener('click',()=>{
    let tarjetaAEsconder;
        for (const t of cards) {
            const posicionTarjeta = t.getBoundingClientRect(); //parte que lo hace inverso
            if (posicionTarjeta.right <= window.innerWidth) { //parte que lo hace inverso
                tarjetaAEsconder = t; //parte que lo hace inverso
            }
        }
    if (tarjetaAEsconder) {
            tarjetaAEsconder.style.transform = 'scale(.4)';
            tarjetaAEsconder.style.transition = '400ms';
            tarjetaAEsconder.classList.add('fondo_tajetas_soft_skill');
    }
    setTimeout(()=>{
        let newposition_der = carrosel.scrollLeft  - anchoTarjeta;
        if (newposition_der < 0) {
            newposition_der = carrosel.scrollWidth - carrosel.clientWidth;
        }
        carrosel.scrollTo({
            left: newposition_der,
            behavior:"smooth",
        });
        setTimeout(()=>{
            if (tarjetaAEsconder) {
                tarjetaAEsconder.style.transform = 'scale(1)';
                tarjetaAEsconder.classList.remove('fondo_tajetas_soft_skill');
            }
        },400);
    }, 400);
    });
}

boton_carrosel(boton_izquirdo, boton_derecho, tarjetas);