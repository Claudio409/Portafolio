import { capturarAnchodeTarjeta, capturarID, capturarTodasClass } from "./funciones_captura_id_class.offwidth.js";

function boton_carrosel(carrosel, izquierdo, derecho,anchoDetarjeta, cards, fondo){
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
            tarjetaAEsconder.classList.add(fondo);
        }
        
        setTimeout(()=>{
            let newposition_izq = carrosel.scrollLeft  + anchoDetarjeta;
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
                    tarjetaAEsconder.classList.remove(fondo);
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
            tarjetaAEsconder.classList.add(fondo);
    }
    setTimeout(()=>{
        let newposition_der = carrosel.scrollLeft  - anchoDetarjeta;
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
                tarjetaAEsconder.classList.remove(fondo);
            }
        },400);
    }, 400);
    });
}
//boton_carrosel(carrosel, boton_izquirdo, boton_derecho, anchod de tarjeta, clase tarjeta, fondo)
boton_carrosel(capturarID('carrosol'),capturarID('boton_iquierdo'), capturarID('boton_derecho'), capturarAnchodeTarjeta('tarjeta'),capturarTodasClass('.tarjeta'),'fondo_tajetas_soft_skill');
boton_carrosel(capturarID('Carrosel_hobbies'),capturarID('Boton_izquierdo_hobbies'),capturarID('boton_derecho_hobbies'),capturarAnchodeTarjeta('card_ancho'),capturarTodasClass('.card'),'fondo_cards');