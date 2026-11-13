# 🎮 Tienda de videojuegos: inventario, pedidos y almacén

Una tienda de videojuegos quiere automatizar la gestión de su almacén. Tu tarea es programar, en `tienda.js`, las funciones que usará su sistema: crear el inventario, hacer búsquedas, calcular valores, procesar pedidos en cola y gestionar un carrito que permite deshacer acciones.

No hay interfaz web: todo se ejecuta con **Node.js** y la salida se ve en la terminal.

## Archivos

| Archivo | ¿Lo modificas? | Para qué sirve |
| --- | --- | --- |
| `datos.js` | No | Datos de partida (inventario en matriz, novedades y pedidos) |
| `tienda.js` | **Sí** | Aquí escribes tus funciones |
| `pruebas.js` | No | Comprueba automáticamente cada función |
| `main.js` | No | Genera el informe completo |

## Cómo trabajar

1. Completa las funciones de `tienda.js` **en orden**: muchas usan las anteriores.
2. Ejecuta `node pruebas.js` cada vez que termines una función (✅ bien, ❌ resultado distinto, 💥 error).
3. Cuando las 45 pruebas estén en verde, ejecuta `node main.js`.

## Normas

- Sintaxis **ES6**: `const`/`let`, funciones flecha, plantillas de texto y `export`.
- Usa **métodos de arrays**, no bucles `for` (en la 6.1 puedes usar `while`).
- Salvo en la **Parte 5**, las funciones **no deben modificar** los arrays que reciben. Si necesitas ordenar, copia antes con `[...array]`.
- No cambies el nombre ni los parámetros de las funciones.

## Los datos

El inventario llega como **matriz**, donde cada fila es `[titulo, plataforma, precio, stock]`:

```js
['Zelda Odyssey', 'switch', 60, 3]
```

Los pedidos llegan como **texto** con el formato `cliente|juego:cantidad;juego:cantidad`:

```js
'Carlos|Zelda Odyssey:1;Minecraft Plus:2'
```

## Parte 1 · El inventario

| Función | Qué hace | Métodos orientativos |
| --- | --- | --- |
| 1.1 `crearInventario(matriz)` | Convierte la matriz en un array de objetos `{ titulo, plataforma, precio, stock }`. Si no recibe un array, devuelve `[]` | `Array.isArray`, `map`, `fila[0]` |
| 1.2 `ampliarInventario(inventario, matrizNovedades)` | Inventario nuevo con las novedades al final | `concat` |
| 1.3 `titulosOrdenados(inventario)` | Títulos en orden alfabético respetando tildes | `map`, `sort`, `localeCompare` |
| 1.4 `ordenarPorPrecio(inventario, descendente)` | Copia ordenada por precio | spread, `sort`, `reverse` |
| 1.5 `tresMasBaratos(inventario)` | Títulos de los tres más baratos | `slice`, `map` |

## Parte 2 · Búsquedas

| Función | Qué hace | Métodos orientativos |
| --- | --- | --- |
| 2.1 `buscarJuego(inventario, titulo)` | El juego o `undefined` (sin distinguir mayúsculas) | `find`, `toLowerCase` |
| 2.2 `existeJuego(inventario, titulo)` | `true` / `false` | `map` + `includes` (obligatorio) |
| 2.3 `posicionJuego(inventario, titulo)` | Posición o `-1` | `findIndex` |
| 2.4 `agotados(inventario)` | Títulos de los juegos con stock 0 | `filter`, `map` |
| 2.5 `juegosEntre(inventario, minimo, maximo)` | Juegos en ese rango de precio | `filter` |

## Parte 3 · Cálculos

| Función | Qué hace | Métodos orientativos |
| --- | --- | --- |
| 3.1 `valorAlmacen(inventario)` | Suma de precio × stock | `reduce` |
| 3.2 `juegoMasCaro(inventario)` | El objeto del juego más caro | `reduce` |
| 3.3 `unidadesPorPlataforma(inventario)` | `{ switch: 9, playstation: 7, xbox: 4, pc: 21 }` | `reduce` con un objeto como acumulador |
| 3.4 `hayAgotados(inventario)` | ¿Alguno sin stock? | `some` |
| 3.5 `preciosValidos(inventario)` | ¿Todos los precios son números > 0? | `every`, `typeof` |

## Parte 4 · Pedidos

| Función | Qué hace | Métodos orientativos |
| --- | --- | --- |
| 4.1 `parsearPedido(texto)` | Convierte el texto en `{ cliente, lineas: [{ titulo, cantidad }] }` | `split` (tres veces), `map`, `Number` |
| 4.2 `puedeServirse(inventario, pedido)` | ¿Existen todos los juegos y hay stock suficiente? | `every`, `buscarJuego` |
| 4.3 `totalPedido(inventario, pedido)` | Importe total | `reduce` |
| 4.4 `servirPedido(inventario, pedido)` | Inventario **nuevo** con el stock descontado | `map`, `find`, `{ ...objeto }` |
| 4.5 `generarTicket(inventario, pedido)` | Ticket como un único texto con saltos de línea | `map`, `join('\n')` |

Ejemplo de ticket:

```
Cliente: Carlos
1 x Zelda Odyssey = 60 €
2 x Minecraft Plus = 60 €
TOTAL: 120 €
```

## Parte 5 · Cola de pedidos y carrito con «deshacer»

Aquí **sí** se modifican los arrays recibidos (cola y pila).

| Función | Qué hace | Métodos orientativos |
| --- | --- | --- |
| 5.1 `atenderSiguiente(cola)` | Saca y devuelve el primer pedido | `shift` |
| 5.2 `agregarUrgente(cola, pedido)` | Lo coloca el primero; devuelve la nueva longitud | `unshift` |
| 5.3 `agregarAlCarrito(carrito, historial, titulo)` | Añade al carrito y apunta `{ accion: 'agregar', titulo }` | `push` |
| 5.4 `quitarDelCarrito(carrito, historial, titulo)` | Quita la primera aparición y apunta `{ accion: 'quitar', titulo, posicion }`. Devuelve `true` o `false` | `indexOf`, `splice` |
| 5.5 `deshacer(carrito, historial)` | Revierte la última acción. Devuelve `true` o `false` | `pop`, `lastIndexOf`, `splice` |

Comportamiento esperado del carrito:

```js
agregarAlCarrito(carrito, historial, 'Halo Wars');  // ['Halo Wars']
agregarAlCarrito(carrito, historial, 'FIFA Pro');   // ['Halo Wars', 'FIFA Pro']
agregarAlCarrito(carrito, historial, 'Halo Wars');  // ['Halo Wars', 'FIFA Pro', 'Halo Wars']
quitarDelCarrito(carrito, historial, 'Halo Wars');  // ['FIFA Pro', 'Halo Wars']
deshacer(carrito, historial);                       // ['Halo Wars', 'FIFA Pro', 'Halo Wars']
deshacer(carrito, historial);                       // ['Halo Wars', 'FIFA Pro']
```

## Parte 6 · Informe final

| Función | Qué hace | Métodos orientativos |
| --- | --- | --- |
| 6.1 `procesarCola(inventario, cola)` | Atiende todos los pedidos en orden; devuelve `{ inventario, servidos, rechazados }`. El stock se actualiza pedido a pedido | `while`, `atenderSiguiente`, `puedeServirse`, `servirPedido`, `push` |
| 6.2 `juegosVendidos(pedidos)` | Títulos vendidos sin repetidos y ordenados | `map`, `flat`, `filter` + `indexOf`, `sort` |
| 6.3 `graficoStock(inventario)` | `'Halo Wars: ■■■■ (4)'` por cada juego | `map`, `new Array(n).fill('■')`, `join` |

## Resultado esperado de `node main.js` (fragmento)

```
Pedidos en cola: Tienda Online, Carlos, Laura, Sergio, Nuria, Diego, Elena
...
Rechazados por falta de stock: [ 'Laura', 'Sergio', 'Diego' ]

Total facturado: 540 €
Valor del almacén tras las ventas: 970 €
```
