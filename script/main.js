
// Re - Entrega 2 completa: nuevas funciones para divisas (línea 23-43), recolectar información para envío de correo y almacenamiento para formato csv (línea 76-99).  Se utiliza el método map para crear el nuevo Array de monedas disponibles (línea 36-37) y se agregan las variables a la consola y las alertas.

function mayorQue(n) {
    return(m) => m > n;
}

let mayorDeEdad = mayorQue(17); 

let numero = parseInt(prompt(" Qué edad tienes? "));
let resultadoEdad = mayorDeEdad(numero);

if (resultadoEdad) {
    console.log("El usuario declaró tener " + numero + " años");

function multiplicarNumeros(solicitud,TRM){
          
    let resultado = solicitud * TRM;
    return resultado;
        
    }

function Divisas(id, nombre, tasa){
        this.id = id;
        this.nombre = nombre;
        this.tasa = parseFloat(tasa);

}

let todasLasDivisas =[
    new Divisas("USD", "Dólar Americano", 30500),
    new Divisas("COP", "Peso Colombiano", 130000000),
    new Divisas("PEN", "Sol Peruano", 115000),
    new Divisas("CLP", "Peso Chileno", 24050000),
];
let divisasDisponibles = todasLasDivisas.map((todasLasDivisas) => todasLasDivisas.nombre);
alert("Las divisas disponibles para intercambiar por BTC son: " + divisasDisponibles.join(", "));

let tasaAplicada =  todasLasDivisas[
    prompt("¿Cuál moneda quieres intercambiar por BTC? Escribe: 0 para USD, 1 para COP, 2 para PEN o 3 para CLP")
]
alert("Escogiste " + tasaAplicada.nombre);
console.log("Los datos de la divisa seleccionada son " , tasaAplicada);
    
    
    let solicitud = parseInt(prompt("Ingresa la cantidad de BTC que quieres vender por " + tasaAplicada.nombre + " ?"));
        let fee1 = 0.02;
        let fee2 = 0.01;
        let TRM = tasaAplicada.tasa;
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
        console.log("La cotización es por: " + tasaAplicada.id + " " + solicitud * TRM);
        console.log("La comisión es de: " + tasaAplicada.id + " " + comision);
        console.log("El total con comisión es de: " + tasaAplicada.id + " " + total);
        alert("El total a pagar incluyendo comisión es de: " + tasaAplicada.id +" " + total);
            
           let repetir = prompt("¿Desea otra cotización? Responda Si o No");
           
           if (repetir.toUpperCase() == "NO") {
            let deseaCotizacion = prompt("¿Quieres enviar la cotización a tu correo? responde Si o No");
                    
            if (deseaCotizacion.toUpperCase() == "SI") {
    
    
                function Cotizacion (nombres, apellidos, cedula, email, total){
                    this.nombres = nombres,
                    this.apellidos = apellidos,
                    this.cedula = cedula,
                    this.email = email,
                    this.total = total
                }
                
                    let cotizacionUno = new Cotizacion(
                        prompt("¿Cuáles son tus nombres?"),
                        prompt("¿Cuáles son tus apellidos?"),
                        prompt("¿Cuál es tu cédula?"),
                        prompt ("Cuál es tu e-mail"),
                        total
                        
                    )
                    
                    let nuevoCliente = Object.values(cotizacionUno);
                    let nuevoClienteBD = nuevoCliente.join(";");
                    console.log("Los datos de la cotización son: " , cotizacionUno);
                    console.log("El nuevo cliente es: " + nuevoClienteBD);
          
                    let fechaCotizacion = new Date();
                    alert("Correo enviado con cotización para venta de " + solicitud + " BTC por valor total de " + tasaAplicada.id + " " + total + " con fecha: " + fechaCotizacion + " tienes 24 horas para ejecutar la transacción");
    
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
                    
                    function Divisas(id, nombre, tasa){
                            this.id = id;
                            this.nombre = nombre;
                            this.tasa = parseFloat(tasa);
                    
                    }
                    
                    let todasLasDivisas =[
                        new Divisas("USD", "Dolar", 30500),
                        new Divisas("COP", "Peso Colombiano", 130000000),
                        new Divisas("PEN", "Sol Peruano", 115000),
                        new Divisas("CLP", "Peso Chileno", 24050000),
                    ];
                    let tasaAplicada =  todasLasDivisas[
                        prompt("¿Cuál moneda quieres intercambiar por BTC? Escribe: 0 para USD, 1 para COP, 2 para PEN o 3 para CLP")
                    ]
                    alert("Escogiste " + tasaAplicada.nombre);
                    console.log("Los datos de la divisa seleccionada son " , tasaAplicada);
                    
                    
                    let solicitud = parseInt(prompt("Ingresa la cantidad de BTC que quieres vender por " + tasaAplicada.nombre + " ?"));
                        let fee1 = 0.02;
                        let fee2 = 0.01;
                        let TRM = tasaAplicada.tasa;
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
                        console.log("La cotización es por: " + tasaAplicada.id + " " + solicitud * TRM);
                        console.log("La comisión es de: " + tasaAplicada.id + " " + comision);
                        console.log("El total con comisión es de: " + tasaAplicada.id + " " + total);
                        alert("El total a pagar incluyendo comisión es de: " + tasaAplicada.id +" " + total);

                    repetir = prompt("¿Desea otra cotización? Responda Si o No");

                    if (repetir.toUpperCase() == "NO") {
                        let deseaCotizacion = prompt("¿Quieres enviar la última cotización a tu correo? responde Si o No");
                    
                        if (deseaCotizacion.toUpperCase() == "SI") {
    
    
                        function Cotizacion (nombres, apellidos, cedula, email, total){
                            this.nombres = nombres,
                            this.apellidos = apellidos,
                            this.cedula = cedula,
                            this.email = email,
                            this.total = total
                        }
                
                    let cotizacionUno = new Cotizacion(
                        prompt("¿Cuáles son tus nombres?"),
                        prompt("¿Cuáles son tus apellidos?"),
                        prompt("¿Cuál es tu cédula?"),
                        prompt ("Cuál es tu e-mail"),
                        total
                        
                    )
                    
                    let nuevoCliente = Object.entries(cotizacionUno);
                    let nuevoClienteBD = nuevoCliente.join(";");
                    console.log("Los datos de la cotización son: " , cotizacionUno);
                    console.log("El nuevo cliente es: " + nuevoClienteBD);
          
                    let fechaCotizacion = new Date();
                    alert("Correo enviado con cotización para venta de " + solicitud + " BTC por valor total de " + tasaAplicada.id + " " + total + " con fecha: " + fechaCotizacion + " tienes 24 horas para ejecutar la transacción");
                           
                        endLoop;
                        
                    }}
    
                   
            }}
} else {
    alert("Debes ser mayor de edad para vender en nuestro sitio ")
    
}





       
    

