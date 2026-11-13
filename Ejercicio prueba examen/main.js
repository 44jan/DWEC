// main.js
// Informe completo de la tienda de videojuegos. Ejecutar: node main.js
// NO hace falta modificar este archivo: usa las funciones de tienda.js

import { inventarioMatriz, novedadesMatriz, pedidosTexto, pedidoUrgenteTexto } from './datos.js';
import * as tienda from './tienda.js';

console.log('===== 1. INVENTARIO =====');
const inventario = tienda.ampliarInventario(tienda.crearInventario(inventarioMatriz), novedadesMatriz);
console.log('Juegos:', tienda.titulosOrdenados(inventario));
console.log('Más baratos:', tienda.tresMasBaratos(inventario));

console.log('\n===== 2 y 3. BÚSQUEDAS Y CÁLCULOS =====');
console.log('Agotados:', tienda.agotados(inventario));
console.log('Entre 20 y 30 €:', tienda.juegosEntre(inventario, 20, 30).map((j) => j.titulo));
console.log('Más caro:', tienda.juegoMasCaro(inventario).titulo);
console.log('Valor del almacén:', tienda.valorAlmacen(inventario), '€');
console.log('Unidades por plataforma:', tienda.unidadesPorPlataforma(inventario));

console.log('\n===== 4 y 5. COLA DE PEDIDOS =====');
const cola = pedidosTexto.map(tienda.parsearPedido);
tienda.agregarUrgente(cola, tienda.parsearPedido(pedidoUrgenteTexto));
console.log('Pedidos en cola:', cola.map((pedido) => pedido.cliente).join(', '));

const resultado = tienda.procesarCola(inventario, cola);

resultado.servidos.forEach((pedido) => {
  console.log(`\n${tienda.generarTicket(inventario, pedido)}`);
});
console.log('\nRechazados por falta de stock:', resultado.rechazados.map((p) => p.cliente));

console.log('\n===== 5. CARRITO CON DESHACER =====');
const carrito = [];
const historial = [];
tienda.agregarAlCarrito(carrito, historial, 'Halo Wars');
tienda.agregarAlCarrito(carrito, historial, 'FIFA Pro');
tienda.agregarAlCarrito(carrito, historial, 'Halo Wars');
tienda.quitarDelCarrito(carrito, historial, 'Halo Wars');
console.log('Carrito:', carrito);
tienda.deshacer(carrito, historial);
console.log('Tras deshacer:', carrito);
tienda.deshacer(carrito, historial);
console.log('Tras deshacer otra vez:', carrito);

console.log('\n===== 6. INFORME FINAL =====');
console.log('Juegos vendidos:', tienda.juegosVendidos(resultado.servidos));
const facturado = resultado.servidos.reduce(
  (total, pedido) => total + tienda.totalPedido(inventario, pedido),
  0,
);
console.log('Total facturado:', facturado, '€');
console.log('Valor del almacén tras las ventas:', tienda.valorAlmacen(resultado.inventario), '€');
console.log('\nStock final:');
tienda.graficoStock(resultado.inventario).forEach((linea) => console.log(linea));
