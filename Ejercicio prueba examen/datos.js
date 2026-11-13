// datos.js
// Datos de partida de la tienda de videojuegos. NO hace falta modificar este archivo.

// Inventario inicial como MATRIZ (array de arrays):
// cada fila es [titulo, plataforma, precio, stock]
export const inventarioMatriz = [
  ['Zelda Odyssey', 'switch', 60, 3],
  ['Mario Racer', 'switch', 50, 0],
  ['FIFA Pro', 'playstation', 70, 5],
  ['Gran Turismo X', 'playstation', 65, 2],
  ['Halo Wars', 'xbox', 55, 4],
  ['Forza Road', 'xbox', 60, 0],
  ['Minecraft Plus', 'pc', 30, 10],
  ['Stardew Farm', 'pc', 15, 8],
];

// Juegos que acaban de llegar al almacén (mismo formato)
export const novedadesMatriz = [
  ['Pixel Quest', 'switch', 25, 6],
  ['Árbol Mágico', 'pc', 20, 3],
];

// Pedidos recibidos como texto:
// "cliente|juego:cantidad;juego:cantidad;..."
export const pedidosTexto = [
  'Carlos|Zelda Odyssey:1;Minecraft Plus:2',
  'Laura|Mario Racer:1',
  'Sergio|FIFA Pro:2;Halo Wars:1',
  'Nuria|Stardew Farm:3;Pixel Quest:1',
  'Diego|Gran Turismo X:3',
  'Elena|Árbol Mágico:2;Minecraft Plus:1',
];

// Pedido urgente que debe atenderse antes que todos los demás
export const pedidoUrgenteTexto = 'Tienda Online|FIFA Pro:4';
