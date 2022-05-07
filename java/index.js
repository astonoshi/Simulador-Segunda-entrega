
    const pedirDatos = () => {
    const nombre = prompt('¿Cual es tu nombre?');
    const apellido = prompt('¿Cual es tu apellido?');
    const fecha = prompt('¿Cuál es la fecha de tu viaje?');
    
    
    
    alert (`Bienvenido/a a nuestra aplicaciòn de viajes`);

}
    pedirDatos()

    let opcion = mostrarDestinos();
    if (opcion !==7)
    {
        venderViaje(opcion);
    }
    else { "Gracias por su compra" }

        

    function mostrarDestinos() {     
        return prompt('¿Qué destino desea visitar? \n 1. París  u$s 800 \n 2. Madrid u$s 700 \n 3. Barcelona u$s 600 \n 4. Londres u$s 500 \n 5. Tokio u$s 400 \n 6. Nueva York u$s 300\n 7. Fin');
        
    }


    function venderViaje(opcion) {

        if (opcion == 1) {
            alert(`Has seleccionado París`);
            }
        else if (opcion == 2) {
            alert ('Has seleccionado Madrid.' );
        }
        else if (opcion == 3) {
            alert ('Has seleccionado Barcelona.' );
        }
        else if (opcion == 4) {
            alert ('Has seleccionado Londres.' );
        }
        else if (opcion == 5) {
            alert ('Has seleccionado Tokio.' );
        }
        else if (opcion == 6) {
            alert ('Has seleccionado Nueva York.' );
        }
        else  {
            alert ("Opciòn invàlida"); 
        }
        }
        const monto = () => {
            if (opcion == 1) {
                return 800;
            }
            else if (opcion == 2) {
                return 700;
            }
            else if (opcion == 3) {
                return 600;
            }
            else if (opcion == 4) {
                return 500;
            }
            else if (opcion == 5) {
                return 400;
            }
            else if (opcion == 6) {
                return 300;
            }
            else { return 0 }
        }
        alert (`El monto total a pagar es: ${monto()}`);
        
        const cantidad = () => {
            return prompt('¿Cuántas personas viajan?');
        }
        alert (`El monto total a pagar es: ${monto() * cantidad()}`);


            

        
    
    


        
        


        




    








    



    





