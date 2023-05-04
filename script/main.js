
// Re - Entrega 3: Se cambian los inputs de prompts a casillas de texto en el HTML. Esta nueva presentación permite multiples cotizaciones sin tener que usar ciclos.  Hay elementos del HTML que aparecen y desaparecen en función de lo que el usuario va ingresando.  

// Esconder el simulador cuando se cargue la página y función para verificación de edad

window.addEventListener('load', function() {
  const mostrarSimulador = document.getElementById('simulador');
  mostrarSimulador.style.display.none;
});



function verificar(){
  let edadUsuario;
  edadUsuario=Number(document.getElementById("edad").value);
  if(edadUsuario>17){
      const mostrarSimulador = document.getElementById('simulador');
      mostrarSimulador.style.display = 'block'
      document.getElementById("mensajeMenorEdad").hidden = true
      alert("El usuario es mayor de edad y ha declarado tener: " + edadUsuario + " años");

  }else{
      const mostrarSimulador = document.getElementById('simulador');    
      mostrarSimulador.style.display.none
      alert("Debes ser mayor de edad para vender en nuestro sitio ")
              
      }
  }

function exchange() {
  const cantidad = parseFloat(document.getElementById("cantidad").value);
  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;
  localStorage.setItem("from", from);
  localStorage.setItem("to", to);
  const criptoGuardada = localStorage.getItem("from");
  const fiatGuardada = localStorage.getItem("to");
  if (criptoGuardada) {
    document.getElementById("from").value = criptoGuardada;    
    console.log("la Criptomoneda guardada es: " + criptoGuardada);
  }
  if (fiatGuardada) {
    document.getElementById("to").value = fiatGuardada;
    console.log("La moneda FIAT guardada es : " + fiatGuardada);
  }
  // Tasas de intercambio de Cripto a FIAT
 const rates = {
      BTC: {USD: 30000, COP: 150000000, PEN: 107000, CLP: 24000000},
      USDT: {USD: 1.0001, COP: 4500, PEN: 3.71, CLP: 807},
  }
  
    
  // Cálculo del total de la conversión incluyendo comisión
  const exchanged = cantidad * rates[from][to];


  // mostrar los resultados
 document.getElementById("result").textContent = `${cantidad} ${from} = ${exchanged.toFixed(2)} ${to}`;
}

function comisionAplicada(){
  const cantidad = parseFloat(document.getElementById("cantidad").value);
  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;
  const comisionBaja = 0.01;
  const comisionAlta = 0.02;
  
  const rates = {
      BTC: {USD: 30000, COP: 150000000, PEN: 107000, CLP: 24000000},
      USDT: {USD: 1.0001, COP: 4500, PEN: 3.71, CLP: 807},
      }
  const exchanged = cantidad * rates[from][to];  
  console.log("La cantidad base para comision es: " + exchanged);
  let valorComision = exchanged * comisionAlta;
  let valorTotal = exchanged + valorComision;
  
  
   if (from === "BTC" && cantidad > 5 || from === "USDT" && cantidad > 150000) {
      valorComision = exchanged * comisionBaja;
      valorTotal = exchanged +(exchanged * comisionBaja);
      console.log("Tienes derecho a un descuento, el valor total de la comisión es: " + valorComision);
      
   } else {
      
      console.log("No tienes derecho a descuento, el valor de la comisión es: " + valorComision);
  }
  
  document.getElementById("resultadoComision").textContent = `${"Comisión"} = ${valorComision.toFixed(2)} ${to}`

  document.getElementById("totalConComision").textContent = `${"Valor Total"} = ${valorTotal.toFixed(2)} ${to}`


}


// Variable para llamar el pop up
const modal = document.getElementById("modal");
const modalContent = document.getElementById("modal-content");

// Botón que abre el pop up
const btn = document.getElementById("open-modal");

// Almacenar los botones Enviar y Salir
const enviarBtn = document.getElementById("Enviar");
const salirBtn = document.getElementById("Salir");

// Cuando el usuario da click en el botón, aparece el pop up
btn.onclick = function() {
  modal.style.display = "block";
  document.getElementById("cotizacionEnviada").hidden = true;
}

// Cuando el usuario da click por fuera del pop up, este se cierra
window.onclick = function(event) {
if (event.target == modal) {
  modal.style.display = "none";
  
}
}

// Cuando el usuario da click en el botón enviar
enviarBtn.onclick = function() {

document.getElementById("modalContent").hidden = true;
document.getElementById("cotizacionEnviada").hidden = false

function cliente (nombres, email, cedula){
  this.nombres = nombres,
  this.email = email,
  this.cedula = cedula
  
  }

 
      const inputNombre = document.getElementById("nombre");
      const inputEmail = document.getElementById("email");
      const inputCedula = document.getElementById("identificacion");

      const nombres = inputNombre.value;
      const email = inputEmail.value;
      const cedula = inputCedula.value;
      const clienteNuevo = new cliente(nombres, email, cedula);
      console.log("Los datos del cliente nuevo son: " , clienteNuevo);
      const datosCliente = Object.entries(clienteNuevo);
      const clienteDB = datosCliente.join(";");
      console.log("El nuevo cliente agregado en Base de datos es: "+ clienteDB);

  
}

// Cuando el usuario da click en el botón Salir
salirBtn.onclick = function() {

modal.style.display = "none";
}



  
    
