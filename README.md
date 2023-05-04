# javaScript-entregas
TÍTULO DEL PROYECTO:
Bitcoin Marketplace

USO DE JAVASCRIPT - Entrega 1:
En la página /exchanger se corre el script para intercambiar Bitcoin por USD tomando el código de main.js
Al iniciar la página el usuario es preguntado por cuánto BTC quiere intercambiar por USD mediante un prompt.
Si el usuario va a vender más de 5 BTC obtiene un descuento del 50% en la comisión.  Esta acción se advierte mediante un alert.
El simulador devuelve mediante un alert el valor a pagar en USD incluyendo la comisión.
En console.log se pueden ver todos los cálculos de la simulación por separado.
Se aplica un ciclo while que se activa una vez el usuario decide hacer otra cotización indicándolo en un prompt.
Solo hasta que el usuario decide no hacer más cotizaciones el ciclo finaliza.
Una vez finaliza el ciclo, se da las gracias al usuario por haber cotizado con nosotros, a través de un alert.

USO DE JAVASCRIPT - Entrega 2:
A las funcionalidades de la Entrega - 1 se le agregan las siguientes:
- Se puede acceder al simulador dando click en la opicón INGRESAR, en el submenú EXCHANGER
- El enlace al Exchanger fue agregado a todas las páginas del sitio.
- Verificación de mayoría de edad antes de comenzar el simulador. Solo usuarios que declaren tener más de 18 años pueden hacer una cotización.  La decaración de la edad se muestra en la consola.
- Se utiliza un Array con diferentes precios de BTC dependiendo de la moneda que el usuario quiera a cambio por la venta.  Se puede escoger entre 4 monedas.
- Se agrega un nuevo formulario en caso que el cliente desee que se le envíe la cotización a su correo indicando la fecha y la hora de la cotización con un alert.

USO DE JAVASCRIPT - Re-Entrega 2:
Nuevas funciones para divisas (línea 23-43), recolectar información para envío de correo y almacenamiento para formato csv (línea 76-99).  Se utiliza el método map para crear el nuevo Array de monedas disponibles (línea 36-37) y se agregan las variables a la consola y las alertas.

USO DE JAVASCRIPT - ENTREGA 3:
Para esta entrega se hacen grandes cambios en el código al enlazarlo con el HTML.  Los inputs con los que trabaja el sistema ya no se obtienen a través de prompts sino mediante cajas de texto en el HTML usando DOM.
Se utiliza el localStorage para almacenar los pares Crito/FIAT seleccionados por el usuario.
Se usan eventos onclick en los botones para aumentar la interacción y hacer que aparezcan y desaparezcan elementos en el HTML.
