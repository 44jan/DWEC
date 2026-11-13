// pruebas.js
// Comprueba automáticamente las funciones. Ejecutar: node pruebas.js
// NO hace falta modificar este archivo.

import { inventarioMatriz, novedadesMatriz, pedidosTexto } from './datos.js';
import * as tienda from './tienda.js';

let aciertos = 0;
let total = 0;

const comprobar = (descripcion, prueba, esperado) => {
  total++;
  try {
    const obtenido = prueba();
    if (JSON.stringify(obtenido) === JSON.stringify(esperado)) {
      aciertos++;
      console.log(`  ✅ ${descripcion}`);
    } else {
      console.log(`  ❌ ${descripcion}`);
      console.log('       esperado:', JSON.stringify(esperado));
      console.log('       obtenido:', JSON.stringify(obtenido));
    }
  } catch (error) {
    console.log(`  💥 ${descripcion} → ${error.message}`);
  }
};

const nuevoInventario = () => tienda.crearInventario(inventarioMatriz);
const inventarioCompleto = () => tienda.ampliarInventario(nuevoInventario(), novedadesMatriz);
const pedidoCarlos = { cliente: 'Carlos', lineas: [{ titulo: 'Zelda Odyssey', cantidad: 1 }, { titulo: 'Minecraft Plus', cantidad: 2 }] };
const pedidoLaura = { cliente: 'Laura', lineas: [{ titulo: 'Mario Racer', cantidad: 1 }] };

console.log('\nPARTE 1 · Inventario');
comprobar('1.1 crearInventario convierte la primera fila', () => nuevoInventario()[0],
  { titulo: 'Zelda Odyssey', plataforma: 'switch', precio: 60, stock: 3 });
comprobar('1.1 crearInventario mantiene la longitud', () => nuevoInventario().length, 8);
comprobar('1.1 crearInventario devuelve [] si no recibe un array', () => tienda.crearInventario('hola'), []);
comprobar('1.2 ampliarInventario añade las novedades', () => inventarioCompleto().length, 10);
comprobar('1.2 ampliarInventario no modifica el original', () => {
  const original = nuevoInventario();
  tienda.ampliarInventario(original, novedadesMatriz);
  return original.length;
}, 8);
comprobar('1.3 titulosOrdenados respeta las tildes', () => tienda.titulosOrdenados(inventarioCompleto()).slice(0, 3),
  ['Árbol Mágico', 'FIFA Pro', 'Forza Road']);
comprobar('1.4 ordenarPorPrecio ascendente', () => tienda.ordenarPorPrecio(nuevoInventario()).map((j) => j.precio),
  [15, 30, 50, 55, 60, 60, 65, 70]);
comprobar('1.4 ordenarPorPrecio descendente', () => tienda.ordenarPorPrecio(nuevoInventario(), true).map((j) => j.precio),
  [70, 65, 60, 60, 55, 50, 30, 15]);
comprobar('1.4 ordenarPorPrecio no modifica el original', () => {
  const original = nuevoInventario();
  tienda.ordenarPorPrecio(original);
  return original[0].titulo;
}, 'Zelda Odyssey');
comprobar('1.5 tresMasBaratos', () => tienda.tresMasBaratos(inventarioCompleto()),
  ['Stardew Farm', 'Árbol Mágico', 'Pixel Quest']);

console.log('\nPARTE 2 · Búsquedas');
comprobar('2.1 buscarJuego sin distinguir mayúsculas', () => tienda.buscarJuego(nuevoInventario(), 'fifa pro').precio, 70);
comprobar('2.1 buscarJuego devuelve undefined si no existe', () => tienda.buscarJuego(nuevoInventario(), 'Tetris'), undefined);
comprobar('2.2 existeJuego (sí)', () => tienda.existeJuego(nuevoInventario(), 'HALO WARS'), true);
comprobar('2.2 existeJuego (no)', () => tienda.existeJuego(nuevoInventario(), 'Tetris'), false);
comprobar('2.3 posicionJuego', () => tienda.posicionJuego(nuevoInventario(), 'Halo Wars'), 4);
comprobar('2.3 posicionJuego devuelve -1', () => tienda.posicionJuego(nuevoInventario(), 'Tetris'), -1);
comprobar('2.4 agotados', () => tienda.agotados(nuevoInventario()), ['Mario Racer', 'Forza Road']);
comprobar('2.5 juegosEntre 50 y 60', () => tienda.juegosEntre(nuevoInventario(), 50, 60).map((j) => j.titulo),
  ['Zelda Odyssey', 'Mario Racer', 'Halo Wars', 'Forza Road']);

console.log('\nPARTE 3 · Cálculos');
comprobar('3.1 valorAlmacen', () => tienda.valorAlmacen(inventarioCompleto()), 1510);
comprobar('3.2 juegoMasCaro', () => tienda.juegoMasCaro(nuevoInventario()).titulo, 'FIFA Pro');
comprobar('3.3 unidadesPorPlataforma', () => tienda.unidadesPorPlataforma(inventarioCompleto()),
  { switch: 9, playstation: 7, xbox: 4, pc: 21 });
comprobar('3.4 hayAgotados (sí)', () => tienda.hayAgotados(nuevoInventario()), true);
comprobar('3.4 hayAgotados (no)', () => tienda.hayAgotados(tienda.crearInventario(novedadesMatriz)), false);
comprobar('3.5 preciosValidos (sí)', () => tienda.preciosValidos(nuevoInventario()), true);
comprobar('3.5 preciosValidos (no)', () => tienda.preciosValidos(tienda.crearInventario([['Gratis', 'pc', 0, 1]])), false);

console.log('\nPARTE 4 · Pedidos');
comprobar('4.1 parsearPedido', () => tienda.parsearPedido(pedidosTexto[0]), pedidoCarlos);
comprobar('4.1 parsearPedido convierte la cantidad en número', () => typeof tienda.parsearPedido(pedidosTexto[1]).lineas[0].cantidad, 'number');
comprobar('4.2 puedeServirse (sí)', () => tienda.puedeServirse(nuevoInventario(), pedidoCarlos), true);
comprobar('4.2 puedeServirse (no, sin stock)', () => tienda.puedeServirse(nuevoInventario(), pedidoLaura), false);
comprobar('4.2 puedeServirse (no, juego inexistente)', () =>
  tienda.puedeServirse(nuevoInventario(), { cliente: 'X', lineas: [{ titulo: 'Tetris', cantidad: 1 }] }), false);
comprobar('4.3 totalPedido', () => tienda.totalPedido(nuevoInventario(), pedidoCarlos), 120);
comprobar('4.4 servirPedido descuenta el stock', () => {
  const nuevo = tienda.servirPedido(nuevoInventario(), pedidoCarlos);
  return [nuevo[0].stock, nuevo[6].stock];
}, [2, 8]);
comprobar('4.4 servirPedido no modifica el original', () => {
  const original = nuevoInventario();
  tienda.servirPedido(original, pedidoCarlos);
  return original[0].stock;
}, 3);
comprobar('4.5 generarTicket', () => tienda.generarTicket(nuevoInventario(), pedidoCarlos),
  'Cliente: Carlos\n1 x Zelda Odyssey = 60 €\n2 x Minecraft Plus = 60 €\nTOTAL: 120 €');

console.log('\nPARTE 5 · Cola y carrito');
comprobar('5.1 atenderSiguiente saca el primero', () => {
  const cola = ['A', 'B', 'C'];
  return [tienda.atenderSiguiente(cola), cola];
}, ['A', ['B', 'C']]);
comprobar('5.2 agregarUrgente lo pone el primero', () => {
  const cola = ['A', 'B'];
  return [tienda.agregarUrgente(cola, 'URGENTE'), cola];
}, [3, ['URGENTE', 'A', 'B']]);
comprobar('5.3 agregarAlCarrito', () => {
  const carrito = [];
  const historial = [];
  tienda.agregarAlCarrito(carrito, historial, 'Halo Wars');
  return [carrito, historial];
}, [['Halo Wars'], [{ accion: 'agregar', titulo: 'Halo Wars' }]]);
comprobar('5.4 quitarDelCarrito', () => {
  const carrito = ['Halo Wars', 'FIFA Pro', 'Halo Wars'];
  const historial = [];
  const quitado = tienda.quitarDelCarrito(carrito, historial, 'Halo Wars');
  return [quitado, carrito, historial];
}, [true, ['FIFA Pro', 'Halo Wars'], [{ accion: 'quitar', titulo: 'Halo Wars', posicion: 0 }]]);
comprobar('5.4 quitarDelCarrito devuelve false si no está', () => tienda.quitarDelCarrito(['Halo Wars'], [], 'Tetris'), false);
comprobar('5.5 deshacer un "quitar" lo devuelve a su sitio', () => {
  const carrito = ['FIFA Pro', 'Halo Wars'];
  const historial = [{ accion: 'quitar', titulo: 'Halo Wars', posicion: 0 }];
  tienda.deshacer(carrito, historial);
  return carrito;
}, ['Halo Wars', 'FIFA Pro', 'Halo Wars']);
comprobar('5.5 deshacer un "agregar" quita la última aparición', () => {
  const carrito = ['Halo Wars', 'FIFA Pro', 'Halo Wars'];
  const historial = [{ accion: 'agregar', titulo: 'Halo Wars' }];
  tienda.deshacer(carrito, historial);
  return [carrito, historial];
}, [['Halo Wars', 'FIFA Pro'], []]);
comprobar('5.5 deshacer con historial vacío', () => tienda.deshacer([], []), false);

console.log('\nPARTE 6 · Informe final');
comprobar('6.1 procesarCola separa servidos y rechazados', () => {
  const cola = pedidosTexto.map(tienda.parsearPedido);
  const resultado = tienda.procesarCola(inventarioCompleto(), cola);
  return [resultado.servidos.map((p) => p.cliente), resultado.rechazados.map((p) => p.cliente), cola.length];
}, [['Carlos', 'Sergio', 'Nuria', 'Elena'], ['Laura', 'Diego'], 0]);
comprobar('6.2 juegosVendidos (sin repetidos y ordenados)', () =>
  tienda.juegosVendidos([tienda.parsearPedido(pedidosTexto[0]), tienda.parsearPedido(pedidosTexto[5])]),
  ['Árbol Mágico', 'Minecraft Plus', 'Zelda Odyssey']);
comprobar('6.3 graficoStock', () => tienda.graficoStock(tienda.crearInventario([['Halo Wars', 'xbox', 55, 3], ['Vacío', 'pc', 10, 0]])),
  ['Halo Wars: ■■■ (3)', 'Vacío:  (0)']);

console.log(`\nResultado: ${aciertos} de ${total} pruebas superadas`);
