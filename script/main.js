// Entrega 2 -->> Cotización con condición de comisión, ciclo, Objeto, Arrays, TRM Variable y función de orden superior para filtrar la mayoría de edad

function mayorQue(n) {
    return(m) => m > n;
}

let mayorDeEdad = mayorQue(17); 

let numero = parseInt(prompt(" Qué edad tiene la persona? "));
let resultadoEdad = mayorDeEdad(numero);

if (resultadoEdad) {
    console.log("El usuario declaró tener " + numero + " años");
    function multiplicarNumeros(solicitud,TRM){
  
        let resultado = solicitud * TRM;
        return resultado;
            
        }
        const TASA = [USD = 30500, COP = 150000000, PEN = 114000, CLP = 24050000];
        let tasaAplicada = TASA[
        prompt("¿Cuál moneda quieres intercambiar por BTC? Escribe: 0 para USD, 1 para COP, 2 para PEN o 3 para CLP")
        ]
        console.log("La tasa de intercambio aplicada es " + tasaAplicada);
    
        let solicitud = parseInt(prompt("Ingresa la cantidad de BTC que quieres vender" ));
        let fee1 = 0.02;
        let fee2 = 0.01;
        let TRM = tasaAplicada;
        let resultado = multiplicarNumeros(solicitud, TRM);
        let comision = resultado * fee2;
        
        if (solicitud > 5) {
                comision = resultado * fee2;
                console.log(" Puedes obtener un descuento en la comisión, tu comisión es " + fee2)
                alert("Has obtenido un descuento en la comisión.  Pasó del 2% al 1%")
            } else{
                comision = resultado * fee1;
                console.log("Solo ventas superiores a 5 BTC obtienen un descuento en la comisión")
                alert(" Vende más de 5 BTC y obtén un descuento del 50% en la comisión")
            }
            let total = resultado + comision;
            multiplicarNumeros(solicitud,TRM); 
            console.log("La cotización es: " + solicitud*TRM);
            console.log("La comisión es de " + comision);
            console.log("El total en USD es de: " + total);
            alert("El total a pagar en la moneda seleccionada incluyendo comisión es de: " + total);
            
           let repetir = prompt("¿Desea otra cotización? Responda Si o No");
           
           if (repetir.toUpperCase() == "NO") {
            let deseaCotizacion = prompt("¿Quieres enviar la cotización a tu correo? responde Si o No");
                    
            if (deseaCotizacion.toUpperCase() == "SI") {
    
    
            let unaCotizacion = {
                nombres:"",
                apellidos:"",
                cedula:"",
                email:"",
                total: total
    
             }
    
            unaCotizacion.nombres = prompt("¿Cuáles son tus nombres?");
            unaCotizacion.apellidos = prompt("¿Cuáles son tus apellidos?");
            unaCotizacion.cedula = prompt("¿Cuál es tu cédula?");
            unaCotizacion.email = prompt("¿Cuál es tu e-mail?");
    
            console.log("Los datos de la cotización son ", unaCotizacion);
            let fechaCotizacion = new Date();
            alert("Correo enviado con cotización para venta de BTC por valor total de " + total + " con fecha: " + fechaCotizacion + " tienes 24 horas para ejecutar la transacción");
    
            } else {
            alert("Gracias por cotizar con nosotros");
    }
            }
            else{
                while (repetir.toUpperCase() == "SI"){ 
                function multiplicarNumeros(solicitud,TRM){
          
                    let resultado = solicitud * TRM;
                    return resultado;
                        
                    }
                    
                    const TASA = [USD = 30500, COP = 150000000, PEN = 114000, CLP = 24050000];
                        let tasaAplicada = TASA[
                        prompt("¿Cuál moneda quieres intercambiar por BTC? Escribe: 0 para USD, 1 para COP, 2 para PEN o 3 para CLP")
                         ]
                    console.log("La tasa de intercambio aplicada es " + tasaAplicada);
    
                    let solicitud = parseInt(prompt("Ingresa la cantidad de BTC que quieres vender" ));
                    let fee1 = 0.02;
                    let fee2 = 0.01;
                    let TRM = tasaAplicada;
                    let resultado = multiplicarNumeros(solicitud, TRM);
                    let comision = resultado * fee2;
                    if (solicitud > 5) {
                        comision = resultado * fee2;
                        console.log(" Puedes obtener un descuento en la comisión, tu comisión es " + fee2)
                        alert("Has obtenido un descuento en la comisión.  Pasó del 2% al 1%")
                    } else{
                        comision = resultado * fee1;
                        console.log("Solo ventas superiores a 5 BTC acceden a descuento en comisión")
                        alert(" Vende más de 5 BTC y accede a un descuento del 50% en la comisión")
                    }
                    let total = resultado + comision;
                    multiplicarNumeros(solicitud,TRM); 
                    console.log("La cotización es: " + solicitud*TRM);
                    console.log("La comisión es de " + comision);
                    console.log("El total en la mineda seleccionada es de: " + total);
                    alert("El total a pagar en la moneda seleccionada incluyendo comisión es de: " + total);
                    repetir = prompt("¿Desea otra cotización? Responda Si o No");
                    if (repetir.toUpperCase() == "NO") {
                        let deseaCotizacion = prompt("¿Quieres enviar la última cotización a tu correo? responde Si o No");
                    
                        if (deseaCotizacion.toUpperCase() == "SI") {
    
    
                        let unaCotizacion = {
                        nombres:"",
                        apellidos:"",
                        cedula:"",
                        email:"",
                        total: total,
                    
                        }
    
                        unaCotizacion.nombres = prompt("¿Cuáles son tus nombres?");
                        unaCotizacion.apellidos = prompt("¿Cuáles son tus apellidos?");
                        unaCotizacion.cedula = prompt("¿Cuál es tu cédula?");
                        unaCotizacion.email = prompt("¿Cuál es tu e-mail?");
                        
                        
                        console.log("Los datos de la cotización son ", unaCotizacion);
                        let fechaCotizacion = new Date();
                        alert("Correo enviado con cotización para venta de BTC por valor total de " + total + " con fecha: " + fechaCotizacion + " tienes 24 horas para ejecutar la transacción");
    
                     } else {
                     alert("Gracias por cotizar con nosotros");
                           
                        endLoop;
                        
                    }}
    
                   
            }}
} else {
    alert("Debes ser mayor de edad para vender en nuestro sitio ")
    
}