// Definir la clase Producto
class Producto {
    constructor(nombre, precio, imagen) {
      this.nombre = nombre;
      this.precio = precio;
      this.imagen = imagen;
    }
  }
  
  // Crear una instancia de producto
  const producto1 = new Producto("Tag Heuer Formula 1 Cuarzo", 2000, "https://joyeriainter.com/wp-content/uploads/2021/12/reloj-tag-heuer-formula-1-DAWAZ1010BA0842-01-600x600.webp");

  const producto2 = new Producto("Argolla Oro y Esmeraldas", 2000, "https://joyeriainter.com/wp-content/uploads/2023/01/anillo-DAREMRP2926EA-02-600x600.webp");

  const producto3 = new Producto("Gafas Santos de Cartier", 1000, "https://joyeriainter.com/wp-content/uploads/2022/04/gafas-cartier-santos-DACT0230S00259-01-600x600.webp");

  const producto4 = new Producto("Gafas C Cartier", 700 ,"https://joyeriainter.com/wp-content/uploads/2022/04/gafas-cartier-c-DACT0127S00455-01-600x600.webp");

  const producto5 = new Producto("Frederique Constant Classic", 1000, "https://joyeriainter.com/wp-content/uploads/2022/06/reloj-frederique-constant-DAFC292MS5B6-01-600x600.webp");

  const producto6 = new Producto("Tissot T-Navigator", 1200, "https://joyeriainter.com/wp-content/uploads/2021/11/reloj-tissot-quickster-DAT0624271705701-01-600x600.webp");


  // Array para almacenar los productos
  const productos = [];
  
  // Agregar los productos al array
  productos.push(producto1);
  productos.push(producto2);
  productos.push(producto3);
  productos.push(producto4);
  productos.push(producto5);
  productos.push(producto6);
  
  
  // Mostrar los productos en el HTML utilizando map()
  const productosContainer = document.getElementById("productos-container");
  
  productos.map((producto) => {
    const productoElement = document.createElement("div");
    productoElement.innerHTML = `
      <h3>${producto.nombre}</h3>
      <p>Precio: $${producto.precio}</p>
      <img src="${producto.imagen}" alt="${producto.nombre}">
    `;
    productosContainer.appendChild(productoElement);
  });
  
  // Mostrar los productos en el HTML utilizando forEach()
  productos.forEach((producto) => {
    const productoElement = document.createElement("div");
    productoElement.innerHTML = `
      <h3>${producto.nombre}</h3>
      <p>Precio: $${producto.precio}</p>
      <img src="${producto.imagen}" alt="${producto.nombre}">
    `;
    productosContainer.appendChild(productoElement);
  });
  
