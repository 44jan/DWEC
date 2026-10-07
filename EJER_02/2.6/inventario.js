// Crea y devuelve un objeto producto
export function crearProducto(nombre, categoria, precio, stock) {
  return {
    nombre: nombre,
    categoria: categoria,
    precio: precio,
    stock: stock,
  };
}

// Devuelve los productos de una categoría concreta
export function filtrarPorCategoria(inventario, categoria) {
  return inventario.filter(function (producto) {
    return producto.categoria === categoria;
  });
}

// Devuelve los productos con stock 0
export function listarProductosAgotados(inventario) {
  return inventario.filter(function (producto) {
    return producto.stock === 0;
  });
}

// Suma precio * stock de todos los productos
export function calcularValorTotalInventario(inventario) {
  return inventario.reduce(function (total, producto) {
    return total + producto.precio * producto.stock;
  }, 0);
}

// Muestra un resumen en consola (exportación por defecto)
export default function resumenInventario(inventario) {
  var categorias = []; // aquí guardamos las categorías sin repetir
  for (var producto of inventario) {
    // si la categoría no está todavía en la lista, la añadimos
    if (categorias.includes(producto.categoria) === false) {
      categorias.push(producto.categoria);
    }
  }
  console.log("Total de productos: " + inventario.length);
  console.log("Categorías distintas: " + categorias.length);
  console.log("Valor total: " + calcularValorTotalInventario(inventario));
}