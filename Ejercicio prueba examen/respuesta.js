// tienda.js  (SOLUCIÓN COMENTADA)
// Tienda de videojuegos. Cada función lleva una explicación paso a paso.
//
// Ideas que se repiten en todo el archivo:
//  - "export" deja la función disponible para otros archivos (pruebas.js y main.js).
//  - (x) => ...  es una función flecha: igual que function (x) { ... }
//  - map, filter, find, reduce... NO modifican el array original, crean cosas nuevas.

// ================================================================
// PARTE 1 · EL INVENTARIO
// ================================================================

// 1.1 Convierte la matriz [[titulo, plataforma, precio, stock], ...]
//     en un array de objetos.
export const crearInventario = (matriz) => {
  // Si lo que llega NO es un array, devolvemos una lista vacía y terminamos.
  if (!Array.isArray(matriz)) {
    return [];
  }
  // map recorre cada fila. Cada fila es una lista: ['Zelda Odyssey', 'switch', 60, 3]
  // fila[0] es el título, fila[1] la plataforma, fila[2] el precio, fila[3] el stock.
  // Los paréntesis alrededor de { ... } son para que JS entienda que devolvemos un objeto.
  return matriz.map((fila) => ({
    titulo: fila[0],
    plataforma: fila[1],
    precio: fila[2],
    stock: fila[3],
  }));
};

// 1.2 Devuelve un inventario NUEVO con las novedades añadidas al final.
export const ampliarInventario = (inventario, matrizNovedades) => {
  // Primero convertimos las novedades a objetos (con la función de arriba).
  // concat une dos arrays y devuelve uno NUEVO; el original no se toca.
  return inventario.concat(crearInventario(matrizNovedades));
};

// 1.3 Devuelve los títulos en orden alfabético, respetando tildes.
export const titulosOrdenados = (inventario) => {
  // map saca solo los títulos: ['Zelda Odyssey', 'Mario Racer', ...]
  // sort ordena. Si usáramos sort() solo, 'Árbol' iría al final (la Á tiene un código mayor).
  // localeCompare compara como lo haría un diccionario en español, así que 'Árbol' va con la A.
  // sort recibe una función con dos elementos (a, b) y decide quién va antes.
  return inventario.map((j) => j.titulo).sort((a, b) => a.localeCompare(b));
};

// 1.4 Devuelve una COPIA del inventario ordenada por precio.
export const ordenarPorPrecio = (inventario, descendente = false) => {
  // [...inventario] hace una copia. IMPORTANTE: sort modifica el array sobre el que se llama,
  // y el enunciado dice que no podemos tocar el original.
  // a.precio - b.precio: si da negativo, a va antes; si da positivo, b va antes.
  const copia = [...inventario].sort((a, b) => a.precio - b.precio);
  // descendente = false es un valor por defecto: si no lo pasan, vale false.
  if (descendente) {
    // reverse da la vuelta al array (de menor a mayor pasa a mayor a menor).
    return copia.reverse();
  }
  return copia;
};

// 1.5 Devuelve los títulos de los tres juegos más baratos.
export const tresMasBaratos = (inventario) => {
  // Reutilizamos la función anterior (por eso se hacen en orden).
  // slice(0, 3) corta desde la posición 0 hasta la 3 (sin incluir la 3): los 3 primeros.
  // Después map se queda solo con el título.
  return ordenarPorPrecio(inventario).slice(0, 3).map((j) => j.titulo);
};

// ================================================================
// PARTE 2 · BÚSQUEDAS
// ================================================================

// 2.1 Devuelve el juego con ese título (sin distinguir mayúsculas) o undefined.
export const buscarJuego = (inventario, titulo) => {
  // find recorre el array y devuelve el PRIMER elemento para el que la función dé true.
  // Si no encuentra ninguno, devuelve undefined.
  // toLowerCase pasa todo a minúsculas para que 'FIFA PRO' y 'fifa pro' sean iguales.
  return inventario.find((j) => j.titulo.toLowerCase() === titulo.toLowerCase());
};

// 2.2 Devuelve true si existe un juego con ese título. Obligatorio: includes.
export const existeJuego = (inventario, titulo) => {
  // Primero map crea una lista solo con los títulos en minúsculas.
  // includes pregunta: "¿esta lista contiene este texto?" y responde true o false.
  return inventario.map((j) => j.titulo.toLowerCase()).includes(titulo.toLowerCase());
};

// 2.3 Devuelve la posición del juego o -1.
export const posicionJuego = (inventario, titulo) => {
  // findIndex es como find, pero en vez del elemento devuelve su posición.
  // Si no lo encuentra, devuelve -1 automáticamente.
  return inventario.findIndex((j) => j.titulo.toLowerCase() === titulo.toLowerCase());
};

// 2.4 Devuelve los TÍTULOS de los juegos sin stock.
export const agotados = (inventario) => {
  // filter se queda con los juegos que cumplen la condición (stock igual a 0).
  // Después map transforma esos juegos en solo su título.
  return inventario.filter((j) => j.stock === 0).map((j) => j.titulo);
};

// 2.5 Devuelve los juegos con precio entre minimo y maximo (incluidos).
export const juegosEntre = (inventario, minimo, maximo) => {
  // && significa "y": las dos condiciones tienen que cumplirse a la vez.
  return inventario.filter((j) => j.precio >= minimo && j.precio <= maximo);
};

// ================================================================
// PARTE 3 · CÁLCULOS
// ================================================================

// 3.1 Valor total del almacén: suma de precio × stock.
export const valorAlmacen = (inventario) => {
  // reduce recorre el array acumulando un resultado.
  // "total" es lo acumulado hasta ahora, y empieza en 0 (el último argumento de reduce).
  // En cada vuelta sumamos precio × stock del juego actual.
  return inventario.reduce((total, j) => total + j.precio * j.stock, 0);
};

// 3.2 Devuelve el juego (objeto completo) más caro.
export const juegoMasCaro = (inventario) => {
  // Aquí lo que acumulamos es "el más caro hasta ahora" (empieza siendo el primero).
  // En cada vuelta comparamos: si el actual es más caro, pasa a ser el nuevo campeón;
  // si no, nos quedamos con el que ya teníamos.
  // (condicion ? a : b) significa: si se cumple, a; si no, b.
  return inventario.reduce((caro, j) => (j.precio > caro.precio ? j : caro));
};

// 3.3 Devuelve las unidades en stock por plataforma: { switch: 9, pc: 21, ... }
export const unidadesPorPlataforma = (inventario) => {
  // Ahora el acumulador es un OBJETO vacío {} (último argumento).
  return inventario.reduce((acc, j) => {
    // acc[j.plataforma] es el contador de esa plataforma.
    // La primera vez no existe (undefined), y por eso "|| 0" lo convierte en 0.
    // Después le sumamos el stock de este juego.
    acc[j.plataforma] = (acc[j.plataforma] || 0) + j.stock;
    // Siempre hay que devolver el acumulador para la siguiente vuelta.
    return acc;
  }, {});
};

// 3.4 Devuelve true si hay AL MENOS un juego agotado.
export const hayAgotados = (inventario) => {
  // some devuelve true en cuanto UNO cumpla la condición.
  return inventario.some((j) => j.stock === 0);
};

// 3.5 Devuelve true si TODOS los precios son números mayores que 0.
export const preciosValidos = (inventario) => {
  // every devuelve true solo si TODOS cumplen la condición.
  // typeof j.precio === 'number' comprueba que sea un número (y no un texto).
  return inventario.every((j) => typeof j.precio === 'number' && j.precio > 0);
};

// ================================================================
// PARTE 4 · PEDIDOS
// ================================================================

// 4.1 Convierte 'Carlos|Zelda Odyssey:1;Minecraft Plus:2' en un objeto:
//     { cliente: 'Carlos', lineas: [ { titulo: 'Zelda Odyssey', cantidad: 1 }, ... ] }
export const parsearPedido = (texto) => {
  // split corta un texto en una lista usando un separador.
  // 'Carlos|Zelda Odyssey:1;Minecraft Plus:2'.split('|')
  //   => ['Carlos', 'Zelda Odyssey:1;Minecraft Plus:2']
  const partes = texto.split('|');
  // partes[1] es 'Zelda Odyssey:1;Minecraft Plus:2'. Lo cortamos por ';'
  //   => ['Zelda Odyssey:1', 'Minecraft Plus:2'], y cada trozo lo convertimos en objeto.
  const lineas = partes[1].split(';').map((linea) => {
    // 'Zelda Odyssey:1'.split(':') => ['Zelda Odyssey', '1']
    const datos = linea.split(':');
    // OJO: datos[1] es el TEXTO '1'. Number lo convierte en el número 1.
    return { titulo: datos[0], cantidad: Number(datos[1]) };
  });
  // partes[0] es el nombre del cliente.
  return { cliente: partes[0], lineas };
};

// 4.2 Devuelve true si TODOS los juegos del pedido existen y hay stock suficiente.
export const puedeServirse = (inventario, pedido) => {
  // every: tienen que cumplirse las condiciones en TODAS las líneas del pedido.
  return pedido.lineas.every((linea) => {
    // Buscamos el juego en el inventario (función de la Parte 2).
    const juego = buscarJuego(inventario, linea.titulo);
    // Primero comprobamos que existe (si no, juego.stock daría error) y luego el stock.
    return juego !== undefined && juego.stock >= linea.cantidad;
  });
};

// 4.3 Devuelve el importe total del pedido.
export const totalPedido = (inventario, pedido) => {
  // Acumulamos desde 0. En cada línea: precio del juego × cantidad pedida.
  return pedido.lineas.reduce((total, linea) => {
    return total + buscarJuego(inventario, linea.titulo).precio * linea.cantidad;
  }, 0);
};

// 4.4 Devuelve un inventario NUEVO con el stock descontado. El original no cambia.
export const servirPedido = (inventario, pedido) => {
  // Recorremos TODOS los juegos del inventario.
  return inventario.map((juego) => {
    // ¿Este juego aparece en alguna línea del pedido?
    const linea = pedido.lineas.find((l) => l.titulo.toLowerCase() === juego.titulo.toLowerCase());
    if (linea) {
      // { ...juego, stock: nuevo } copia el objeto y cambia solo el stock.
      // Si hiciéramos juego.stock = ..., modificaríamos el original.
      return { ...juego, stock: juego.stock - linea.cantidad };
    }
    // Si no está en el pedido, devolvemos una copia sin cambios.
    return { ...juego };
  });
};

// 4.5 Devuelve el ticket del pedido como un único texto.
export const generarTicket = (inventario, pedido) => {
  // Convertimos cada línea del pedido en un texto: '2 x Minecraft Plus = 60 €'
  const lineas = pedido.lineas.map((linea) => {
    const importe = buscarJuego(inventario, linea.titulo).precio * linea.cantidad;
    return `${linea.cantidad} x ${linea.titulo} = ${importe} €`;
  });
  // Montamos una lista: [cabecera, ...líneas, total].
  // ...lineas (spread) vuelca dentro todas las líneas del pedido.
  // join('\n') une todo en un solo texto, separando con saltos de línea.
  return [`Cliente: ${pedido.cliente}`, ...lineas, `TOTAL: ${totalPedido(inventario, pedido)} €`].join('\n');
};

// ================================================================
// PARTE 5 · COLA DE PEDIDOS Y CARRITO CON "DESHACER"
// Aquí SÍ se modifican los arrays recibidos.
// ================================================================

// 5.1 COLA (el primero que llega es el primero en salir).
export const atenderSiguiente = (cola) => {
  // shift saca el PRIMER elemento del array y lo devuelve. El array se hace más corto.
  return cola.shift();
};

// 5.2 Coloca el pedido al PRINCIPIO de la cola y devuelve la nueva longitud.
export const agregarUrgente = (cola, pedido) => {
  // unshift mete al principio y devuelve cuántos elementos hay ahora.
  return cola.unshift(pedido);
};

// 5.3 Añade el título al final del carrito y lo apunta en el historial.
export const agregarAlCarrito = (carrito, historial, titulo) => {
  // push añade al final.
  carrito.push(titulo);
  // El historial es nuestro "cuaderno" de lo que hemos hecho, para poder deshacerlo.
  historial.push({ accion: 'agregar', titulo });
};

// 5.4 Quita la PRIMERA aparición del título y lo apunta en el historial.
export const quitarDelCarrito = (carrito, historial, titulo) => {
  // indexOf devuelve la posición del primer elemento igual, o -1 si no está.
  const posicion = carrito.indexOf(titulo);
  if (posicion === -1) {
    // No estaba: no tocamos nada y devolvemos false.
    return false;
  }
  // splice(posicion, 1) borra 1 elemento a partir de esa posición.
  carrito.splice(posicion, 1);
  // Guardamos la posición porque la necesitaremos para deshacer.
  historial.push({ accion: 'quitar', titulo, posicion });
  return true;
};

// 5.5 PILA (la última acción es la primera en deshacerse).
export const deshacer = (carrito, historial) => {
  // Si no hay nada que deshacer, devolvemos false.
  if (historial.length === 0) {
    return false;
  }
  // pop saca el ÚLTIMO elemento del array: la acción más reciente.
  const ultima = historial.pop();
  if (ultima.accion === 'agregar') {
    // Lo último que hicimos fue añadir, así que lo quitamos.
    // lastIndexOf busca desde el final (la última aparición del título).
    carrito.splice(carrito.lastIndexOf(ultima.titulo), 1);
  } else {
    // Lo último fue quitar, así que lo volvemos a meter en su sitio.
    // splice(posicion, 0, x) no borra nada (0) y INSERTA x en esa posición.
    carrito.splice(ultima.posicion, 0, ultima.titulo);
  }
  return true;
};

// ================================================================
// PARTE 6 · INFORME FINAL
// ================================================================

// 6.1 Atiende uno a uno todos los pedidos de la cola.
//     Devuelve { inventario, servidos, rechazados }
export const procesarCola = (inventario, cola) => {
  // "actual" es el inventario que se va actualizando pedido a pedido.
  let actual = inventario;
  const servidos = [];
  const rechazados = [];
  // while repite mientras haya pedidos en la cola.
  while (cola.length > 0) {
    // Sacamos el siguiente (así la cola se va vaciando).
    const pedido = atenderSiguiente(cola);
    if (puedeServirse(actual, pedido)) {
      // Se puede: descontamos el stock y lo apuntamos como servido.
      actual = servirPedido(actual, pedido);
      servidos.push(pedido);
    } else {
      // No se puede: lo apuntamos como rechazado y el stock no cambia.
      rechazados.push(pedido);
    }
  }
  // { inventario: actual, servidos, rechazados } (cuando el nombre coincide, basta escribirlo una vez).
  return { inventario: actual, servidos, rechazados };
};

// 6.2 Devuelve los títulos vendidos SIN repetidos y en orden alfabético.
export const juegosVendidos = (pedidos) => {
  return pedidos
    // Por cada pedido sacamos sus títulos: [[a, b], [c], ...]
    .map((pedido) => pedido.lineas.map((linea) => linea.titulo))
    // flat aplana: de [[a, b], [c]] pasa a [a, b, c]
    .flat()
    // Quitar repetidos: nos quedamos con un título solo si su PRIMERA posición (indexOf)
    // es la posición actual (i). Si es una repetición, indexOf apunta a una anterior.
    .filter((titulo, i, todos) => todos.indexOf(titulo) === i)
    // Y por último, orden alfabético.
    .sort((a, b) => a.localeCompare(b));
};

// 6.3 Devuelve un texto por juego: 'Halo Wars: ■■■ (3)'
export const graficoStock = (inventario) => {
  // new Array(3) crea una lista de 3 huecos vacíos; fill('■') rellena cada hueco con ■;
  // join('') los pega sin separador: '■■■'.
  return inventario.map((j) => `${j.titulo}: ${new Array(j.stock).fill('■').join('')} (${j.stock})`);
};
