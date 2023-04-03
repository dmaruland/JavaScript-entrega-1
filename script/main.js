
// Ejemplo 1: Cotización simple sin condición de descuento
/*function multiplicarNumeros(solicitud,TRM){
  
let resultado = solicitud * TRM;
return resultado;
    
}
let solicitud = parseInt(prompt("Ingresa el valor de USD que quieres vender por COP "));
let TRM = 4500;
let resultado = multiplicarNumeros(solicitud, TRM);
let comision = resultado * 0.1;
let total = resultado + comision;
multiplicarNumeros(solicitud,TRM); 
console.log("La cotización es: " + solicitud*TRM);
console.log("La comisión es de " + comision);
alert("El total a pagar incluyendo comisión es de " + total);*/

// Ejemplo 2: Agregar descuento por ventas superiores a 10.000 USD
    /*function multiplicarNumeros(solicitud,TRM){
  
    let resultado = solicitud * TRM;
    return resultado;
        
    }
    let solicitud = parseInt(prompt("Ingresa el valor de USD que quieres vender por COP "));
    let fee1 = 0.1
    let fee2 = 0.05;
    let TRM = 4500;
    let resultado = multiplicarNumeros(solicitud, TRM);
    let comision = resultado * fee2;
    if (solicitud > 10000) {
        comision = resultado * fee2;
        console.log(" Puedes acceder a un descuento en la comisión, tu comisión es " + fee2)
        alert("Has accedido a un descuento en la comisión.  Pasó del 10% al 5%")
    } else{
        comision = resultado * fee1;
        console.log("Solo ventas superiores a 10.000 USD acceden a descuento en comisión")
        alert(" Vende más de 10.000 USD y accede a un descuento del 50% en la comisión")
    }
    let total = resultado + comision;
    multiplicarNumeros(solicitud,TRM); 
    console.log("La cotización es: " + solicitud*TRM);
    console.log("La comisión es de " + comision);
    console.log("El total en COP es de: " + total);
    alert("El total a pagar en pesos incluyendo comisión es de: " + total); */
    

// Ejemplo 3: Cotización con condición de comisión y ciclo
function multiplicarNumeros(solicitud,TRM){
  
    let resultado = solicitud * TRM;
    return resultado;
        
    }
    
    let solicitud = parseInt(prompt("Ingresa el valor de BTC que quieres vender por USD "));
    let fee1 = 0.02;
    let fee2 = 0.01;
    let TRM = 28500;
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
    alert("El total a pagar en USD incluyendo comisión es de: " + total);
    
   let repetir = prompt("¿Desea otra cotización? Responda Si o No");
   if (repetir.toUpperCase() == "NO") {
    alert("Gracias por cotizar con nosotros");}
    else{
        while (repetir.toUpperCase() == "SI"){ 
        function multiplicarNumeros(solicitud,TRM){
  
            let resultado = solicitud * TRM;
            return resultado;
                
            }
            
            let solicitud = parseInt(prompt("Ingresa el valor de BTC que quieres vender por USD "));
            let fee1 = 0.02;
            let fee2 = 0.01;
            let TRM = 28500;
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
            console.log("El total en USD es de: " + total);
            alert("El total a pagar en USD incluyendo comisión es de: " + total);
            repetir = prompt("¿Desea otra cotización? Responda Si o No");
            if (repetir.toUpperCase() == "NO") {
                alert("Gracias por cotizar con nosotros");
                endLoop;
                
            }}
    } 