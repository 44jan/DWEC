// Importamos la función por defecto y las demás funciones
import resumenInventario, {
  crearProducto,
  filtrarPorCategoria,
  listarProductosAgotados,
  calcularValorTotalInventario,
} from "./inventario.js";

// Array vacío donde guardaremos los productos
var inventario = [];

// Añadimos 6 productos con varias categorías (uno con stock 0)
inventario.push(crearProducto("Portátil", "Electrónica", 800, 5));
inventario.push(crearProducto("Auriculares", "Electrónica", 50, 0));
inventario.push(crearProducto("Camiseta", "Ropa", 15, 20));
inventario.push(crearProducto("Pantalón", "Ropa", 30, 10));
inventario.push(crearProducto("Novela", "Libros", 12, 8));
inventario.push(crearProducto("Manual de Java", "Libros", 40, 3));

// 1. Productos de la categoría Ropa
console.log("Productos de Ropa:");
console.log(filtrarPorCategoria(inventario, "Ropa"));

// 2. Productos agotados
console.log("Productos agotados:");
console.log(listarProductosAgotados(inventario));

// 3. Valor total del inventario
console.log("Valor total del inventario: " + calcularValorTotalInventario(inventario));

// 4. Resumen completo
resumenInventario(inventario);