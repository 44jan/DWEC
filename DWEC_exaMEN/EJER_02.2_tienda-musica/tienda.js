// tienda.js
// Ejercicio integrador UT 2.1 + UT 2.2: Tienda de música
//
// Completa cada función. No cambies su nombre ni sus parámetros.
// Comprueba tu trabajo con:  node pruebas.js
// Cuando todo esté en verde:  node main.js
//
// Recuerda: salvo en la PARTE 5, las funciones NO deben modificar
// los arrays que reciben. Si necesitas ordenar, copia primero.

// ################################################################
// ###  GUÍA PARA PRINCIPIANTES: LEE ESTO ANTES DE EMPEZAR      ###
// ################################################################
//
// Si nunca has programado en JavaScript, aquí tienes lo mínimo para
// entender TODO este archivo.
//
// 1) COMENTARIOS
//    Todo lo que empieza por // es un comentario: el ordenador lo ignora.
//    Sirve para que las personas entendamos el código.
//
// 2) VARIABLES: cajas con nombre donde guardas un dato
//      const edad = 20;
//    "const" significa que la caja NO se puede volver a llenar con otra cosa.
//    ("let" sí se puede cambiar: let edad = 20; edad = 21;)
//
// 3) TIPOS DE DATOS BÁSICOS
//      'hola'  → texto (string)       25  → número (number)
//      true / false → verdadero/falso (boolean)
//      undefined → "no hay nada / no existe"
//
// 4) ARRAY (lista): varios datos juntos entre corchetes [ ]
//      const frutas = ['pera', 'manzana', 'uva'];
//    Cada dato tiene una POSICIÓN que empieza en 0:
//      frutas[0] → 'pera'   frutas[1] → 'manzana'   frutas[2] → 'uva'
//    frutas.length → cuántos hay (3)
//
// 5) OBJETO: una ficha con datos que tienen nombre, entre llaves { }
//      const producto = { nombre: 'Altavoz', precio: 400 };
//    Para leer un dato: producto.nombre → 'Altavoz'
//
// 6) ARRAY DE OBJETOS (lo que más usamos aquí): una lista de fichas
//      [ { nombre: 'Altavoz', precio: 400 }, { nombre: 'Vinilo', precio: 30 } ]
//
// 7) FUNCIÓN: una "máquina" a la que le das datos (parámetros), hace algo
//    y te devuelve un resultado con "return".
//      const doble = (numero) => { return numero * 2; };
//      doble(5)  → 10
//    Aquí las funciones se escriben con "flecha" (=>). Lo de la izquierda
//    de la flecha son los datos que recibe; lo de la derecha, lo que hace.
//    Si cabe en una línea se puede quitar { } y return:
//      const doble = (numero) => numero * 2;     ← es lo mismo
//
// 8) "export" delante de una función = "permito que OTRO archivo la use".
//    main.js y pruebas.js las importan desde aquí.
//
// 9) IF / ELSE: "si pasa esto, haz esto; si no, haz lo otro"
//      if (edad >= 18) { ... } else { ... }
//
// 10) COMPARAR: === significa "es EXACTAMENTE igual". (Con un solo = se
//     GUARDA un valor, con tres === se COMPARA.)
//       >  mayor    <  menor    >=  mayor o igual    <=  menor o igual
//       &&  significa "Y" (las dos cosas a la vez)
//       !   significa "NO" (le da la vuelta a un true/false)
//
// 11) ${ } dentro de comillas invertidas ` ` mete una variable en un texto:
//       const nombre = 'Ana';   `Hola ${nombre}`  → 'Hola Ana'
//
// 12) ... (tres puntos, "spread") = "saca todo lo que hay dentro".
//       const copia = [...lista];  → copia de la lista
//       { ...objeto, precio: 5 }   → copia del objeto cambiando el precio
//
// ---------------------------------------------------------------
// LOS MÉTODOS DE ARRAYS (lo más importante del examen)
// Un "método" es una función que viene incluida en los arrays y se llama
// con un punto:  lista.metodo(...)
//
// Casi todos reciben OTRA función que se aplica a cada elemento. Por ejemplo:
//      [1, 2, 3].map((n) => n * 10)   →   [10, 20, 30]
//   Léelo así: "para cada elemento n de la lista, devuelve n * 10".
//
//   map ........ convierte cada elemento en otra cosa (la lista resultante
//                tiene el MISMO tamaño). Ej: de objetos a solo sus nombres.
//   filter ..... se queda SOLO con los elementos que cumplen una condición
//                (la lista resultante puede ser más corta).
//   find ....... devuelve el PRIMER elemento que cumple (o undefined).
//   findIndex .. igual, pero devuelve su POSICIÓN (o -1 si no hay).
//   some ....... ¿AL MENOS UNO cumple? → true / false
//   every ...... ¿TODOS cumplen? → true / false
//   reduce ..... junta todos los elementos en UN solo valor (una suma, un máximo...)
//   sort ....... ordena la lista
//   slice ...... copia un trozo de la lista
//   concat ..... une dos listas en una nueva
//   push / pop . añadir / quitar al FINAL.   unshift / shift . añadir / quitar al PRINCIPIO.
//   splice ..... quitar o insertar elementos en cualquier posición
//   split / join  texto → lista   /   lista → texto
//
// ⚠️ MUY IMPORTANTE: unos métodos CAMBIAN la lista original (push, pop,
//    shift, unshift, splice, sort, reverse) y otros crean una NUEVA y dejan
//    la original intacta (map, filter, slice, concat, find...).
//    Por eso, para ordenar SIN estropear la original, primero se hace una
//    copia con [...lista] y se ordena la copia.
// ################################################################

// ================================================================
// PARTE 1 · EL CATÁLOGO
// ================================================================

// 1.1 Convierte la matriz [[nombre, categoria, precio, stock], ...]
//     en un array de objetos { nombre, categoria, precio, stock }.
//     Si lo que recibe no es un array, devuelve [].
export const crearCatalogo = (matriz) => {
  // QUÉ HACE: recibe una "tabla" (lista de listas) y la convierte en una
  // lista de fichas (objetos). Ejemplo:
  //    ['Tocadiscos', 'equipos', 200, 3]
  //    se convierte en
  //    { nombre: 'Tocadiscos', categoria: 'equipos', precio: 200, stock: 3 }
  //
  // Array.isArray(matriz) pregunta: "¿lo que me han dado es una lista?"
  // El ! de delante significa NO. Es decir: "si NO es una lista..."
  // (Si alguien nos pasa un texto como 'hola', no podemos trabajar con él.)
  if (!Array.isArray(matriz)) {
    // ...devolvemos una lista vacía y la función TERMINA aquí (return corta todo).
    return [];
  }
  // map recorre cada fila y la transforma en un objeto.
  // "fila" es el nombre que le damos a cada elemento en cada vuelta.
  // fila[0] es el primer dato de la fila (el nombre), fila[1] el segundo...
  // Los paréntesis ( ) que rodean las llaves { } son OBLIGATORIOS: sin ellos
  // JavaScript pensaría que las llaves son el cuerpo de la función y no un objeto.
  return matriz.map((fila) => ({ nombre: fila[0], categoria: fila[1], precio: fila[2], stock: fila[3] }));
};

// 1.2 Devuelve un catálogo NUEVO con las novedades (que llegan en
//     formato matriz) añadidas al final.
export const ampliarCatalogo = (catalogo, matrizNovedades) => {
  // QUÉ HACE: junta el catálogo que ya teníamos con los productos nuevos.
  // Paso 1: las novedades vienen como "tabla", así que primero las
  //         convertimos a objetos usando la función de arriba (crearCatalogo).
  //         ¡Reutilizar funciones que ya hiciste es lo normal!
  // Paso 2: concat pega dos listas y crea una NUEVA. El catálogo original
  //         NO cambia (el enunciado lo exige). Si usáramos push, sí cambiaría.
  return catalogo.concat(crearCatalogo(matrizNovedades));
};

// 1.3 Devuelve los nombres de todos los productos en orden
//     alfabético, respetando las tildes ('Vinilo Ópera' va tras 'Vinilo Jazz').
export const nombresOrdenados = (catalogo) => {
  // QUÉ HACE: saca solo los nombres y los ordena de la A a la Z.
  // Paso 1: map convierte cada producto (objeto) en su nombre (texto).
  //         "p" es cada producto; p.nombre es su nombre.
  //         Ahora tenemos una lista de textos NUEVA.
  // Paso 2: sort ordena esa lista. Como son textos hay que decirle CÓMO
  //         compararlos: (a, b) => a.localeCompare(b).
  //         localeCompare compara textos respetando tildes y la ñ.
  //         (Si usáramos sort() sin nada, la 'Ó' quedaría después de la 'Z'
  //         y el test fallaría.)
  //         Como el sort se hace sobre la lista que creó el map, no estropeamos
  //         el catálogo original.
  return catalogo.map((p) => p.nombre).sort((a, b) => a.localeCompare(b));
};

// 1.4 Devuelve una COPIA del catálogo ordenada por precio,
//     de menor a mayor o, si descendente es true, de mayor a menor.
export const ordenarPorPrecio = (catalogo, descendente = false) => {
  // "descendente = false" significa: si quien llama a la función no pasa
  // este dato, vale false por defecto (orden normal, de menor a mayor).
  //
  // [...catalogo] hace una COPIA de la lista (los tres puntos "sacan" todos
  // los elementos y los meten en una lista nueva).
  // ¿Por qué copiar? Porque sort CAMBIA la lista sobre la que se usa, y el
  // enunciado dice que el catálogo original no puede cambiar.
  //
  // (a, b) => a.precio - b.precio  es la regla de ordenación:
  //   JavaScript compara los productos de dos en dos (a y b).
  //   Si la resta da NEGATIVO, a va antes; si da POSITIVO, va después.
  //   Con precios: 20 - 400 = -380 (negativo) → el de 20 va primero → menor a mayor.
  const copia = [...catalogo].sort((a, b) => a.precio - b.precio);
  if (descendente) {
    // Si piden de mayor a menor, damos la vuelta a la lista con reverse.
    // (reverse sí cambia la lista, pero es la COPIA, así que no pasa nada.)
    return copia.reverse();
  }
  // Si no, devolvemos la copia tal cual (de menor a mayor).
  return copia;
};

// 1.5 Devuelve los nombres de los tres productos más baratos.
export const tresMasBaratos = (catalogo) => {
  // QUÉ HACE: ordena por precio y se queda con los 3 primeros.
  // Se encadenan tres pasos, cada uno trabaja con el resultado del anterior:
  //   1) ordenarPorPrecio(catalogo) → lista ordenada del más barato al más caro
  //   2) .slice(0, 3)               → corta desde la posición 0 hasta la 3
  //                                    (la 3 NO se incluye → quedan las posiciones 0, 1 y 2)
  //   3) .map((p) => p.nombre)      → de cada producto, solo su nombre
  return ordenarPorPrecio(catalogo).slice(0, 3).map((p) => p.nombre);
};

// ================================================================
// PARTE 2 · BÚSQUEDAS
// ================================================================

// 2.1 Devuelve el producto con ese nombre, sin distinguir mayúsculas
//     y minúsculas, o undefined si no existe.
export const buscarProducto = (catalogo, nombre) => {
  // QUÉ HACE: busca en la lista UN producto por su nombre.
  // find recorre la lista y devuelve el PRIMER elemento para el que la
  // condición sea verdadera. Si ninguno cumple devuelve undefined.
  // toLowerCase() convierte un texto a minúsculas. Lo hacemos en los DOS
  // lados para que 'ALTAVOZ', 'Altavoz' y 'altavoz' cuenten como iguales.
  return catalogo.find((p) => p.nombre.toLowerCase() === nombre.toLowerCase());
};

// 2.2 Devuelve true si existe un producto con ese nombre.
//     Obligatorio: usa includes.
export const existeProducto = (catalogo, nombre) => {
  // QUÉ HACE: responde sí (true) o no (false) a "¿existe este producto?".
  // includes pregunta si una lista contiene un valor. Pero solo funciona
  // bien con valores simples (textos, números), NO con objetos.
  // Por eso primero convertimos el catálogo en una lista de nombres en
  // minúsculas con map, y después preguntamos si incluye el nombre buscado
  // (también en minúsculas).
  return catalogo.map((p) => p.nombre.toLowerCase()).includes(nombre.toLowerCase());
};

// 2.3 Devuelve la posición del producto en el catálogo, o -1.
export const posicionProducto = (catalogo, nombre) => {
  // QUÉ HACE: dice en qué posición de la lista está el producto.
  // findIndex es como find, pero en vez del producto devuelve su POSICIÓN
  // (0 es el primero, 1 el segundo...). Si no lo encuentra devuelve -1.
  return catalogo.findIndex((p) => p.nombre.toLowerCase() === nombre.toLowerCase());
};

// 2.4 Devuelve un array con los NOMBRES de los productos sin stock.
export const agotados = (catalogo) => {
  // QUÉ HACE: lista los nombres de los productos que tienen 0 unidades.
  // Dos pasos encadenados (patrón MUY común en exámenes):
  //   1) filter: me quedo solo con los productos cuyo stock es 0.
  //   2) map: de esos productos, me quedo solo con el nombre.
  return catalogo.filter((p) => p.stock === 0).map((p) => p.nombre);
};

// 2.5 Devuelve los productos con precio entre minimo y maximo
//     (ambos incluidos).
export const productosEntre = (catalogo, minimo, maximo) => {
  // QUÉ HACE: se queda con los productos cuyo precio esté dentro de un rango.
  // "ambos incluidos" significa que si el precio es justo igual al mínimo o
  // al máximo también vale. Por eso se usa >= (mayor o igual) y <= (menor o igual).
  // && significa "Y": tienen que cumplirse las dos condiciones a la vez.
  // filter devuelve los productos completos (objetos), no solo los nombres.
  return catalogo.filter((p) => p.precio >= minimo && p.precio <= maximo);
};

// ================================================================
// PARTE 3 · CÁLCULOS
// ================================================================

// 3.1 Valor total del almacén: suma de precio × stock.
export const valorAlmacen = (catalogo) => {
  // QUÉ HACE: calcula cuánto dinero valen todas las unidades guardadas.
  // Ejemplo: 3 tocadiscos a 200 € = 600 €; 4 altavoces a 400 € = 1600 €; ... y se suma todo.
  //
  // reduce junta toda la lista en UN solo valor. Funciona con una "mochila"
  // (el acumulador, aquí llamado "total") que va guardando lo que llevamos:
  //   - Empieza en 0 (ese 0 del final es el valor inicial de la mochila).
  //   - Por cada producto p, se calcula: lo que había + precio × stock.
  //   - Lo que devuelve la flecha pasa a ser la mochila de la siguiente vuelta.
  //   - Al acabar, reduce devuelve lo que haya en la mochila.
  return catalogo.reduce((total, p) => total + p.precio * p.stock, 0);
};

// 3.2 Devuelve el producto (el objeto completo) más caro.
export const productoMasCaro = (catalogo) => {
  // QUÉ HACE: encuentra el producto con el precio más alto.
  // También se hace con reduce. Ahora la "mochila" (caro) guarda "el más
  // caro que he visto hasta ahora". En cada vuelta comparamos:
  //   (p.precio > caro.precio ? p : caro)
  //   Esto es un "if corto" y se lee: ¿el precio de p es mayor que el de caro?
  //   Si sí → me quedo con p. Si no → sigo con caro.
  // Aquí no hay valor inicial: en ese caso reduce empieza usando el primer
  // producto de la lista como mochila.
  return catalogo.reduce((caro, p) => (p.precio > caro.precio ? p : caro));
};

// 3.3 Devuelve un objeto con las unidades en stock de cada categoría:
//     { equipos: 7, accesorios: 29, discos: 14 }
export const unidadesPorCategoria = (catalogo) => {
  // QUÉ HACE: suma las unidades de cada categoría y las guarda en un objeto.
  // Se usa reduce con un objeto vacío {} como mochila inicial ("acc").
  return catalogo.reduce((acc, p) => {
    // p.categoria vale 'equipos', 'accesorios'... Con corchetes acc[...]
    // usamos ese texto como NOMBRE de la propiedad. Es como decir
    // acc['equipos'], que es lo mismo que acc.equipos pero con nombre variable.
    //
    // (acc[p.categoria] || 0): la primera vez que vemos una categoría, aún
    // no existe en el objeto y vale undefined. El || significa "o": si lo de
    // la izquierda es undefined (falso), usa 0 en su lugar.
    // Así: lo que ya había (o 0) + el stock de este producto.
    acc[p.categoria] = (acc[p.categoria] || 0) + p.stock;
    // ¡NO OLVIDES ESTO! En reduce hay que devolver siempre la mochila
    // para que llegue a la siguiente vuelta.
    return acc;
  }, {});
};

// 3.4 Devuelve true si hay AL MENOS un producto agotado.
export const hayAgotados = (catalogo) => {
  // QUÉ HACE: responde true/false a "¿hay algún producto con stock 0?".
  // some significa "alguno": devuelve true en cuanto UN solo elemento cumple.
  return catalogo.some((p) => p.stock === 0);
};

// 3.5 Devuelve true si TODOS los precios son números mayores que 0.
export const preciosValidos = (catalogo) => {
  // QUÉ HACE: responde true/false a "¿todos los precios son correctos?".
  // every significa "todos": devuelve true solo si TODOS cumplen; con que uno
  // falle, devuelve false.
  // typeof p.precio === 'number' comprueba que el precio sea un número
  // (y no, por ejemplo, un texto como 'barato').
  // && "Y" que además sea mayor que 0.
  return catalogo.every((p) => typeof p.precio === 'number' && p.precio > 0);
};

// ================================================================
// PARTE 4 · PEDIDOS
// ================================================================

// 4.1 Convierte el texto 'Lucía|Tocadiscos:1;Vinilo Jazz:2' en:
//     {
//       cliente: 'Lucía',
//       lineas: [
//         { nombre: 'Tocadiscos', cantidad: 1 },
//         { nombre: 'Vinilo Jazz', cantidad: 2 },
//       ],
//     }
//     ¡Ojo! La cantidad debe ser un número, no un string.
export const parsearPedido = (texto) => {
  // QUÉ HACE: convierte un texto en un objeto. Es como "trocear" el texto.
  // split('x') corta un texto por cada 'x' que encuentre y devuelve una lista
  // con los trozos. Ejemplo: 'a-b-c'.split('-') → ['a', 'b', 'c']
  //
  // Paso 1: cortamos por '|' para separar el cliente de los productos.
  //   'Lucía|Tocadiscos:1;Vinilo Jazz:2'.split('|')
  //   → ['Lucía', 'Tocadiscos:1;Vinilo Jazz:2']
  //   partes[0] es 'Lucía' y partes[1] es el resto.
  const partes = texto.split('|');
  // Paso 2: partes[1] ('Tocadiscos:1;Vinilo Jazz:2') se corta por ';' para
  //   separar los productos → ['Tocadiscos:1', 'Vinilo Jazz:2']
  // Paso 3: con map convertimos cada trozo en un objeto.
  const lineas = partes[1].split(';').map((linea) => {
    // 'Tocadiscos:1' se corta por ':' → ['Tocadiscos', '1']
    const datos = linea.split(':');
    // datos[0] es el nombre y datos[1] la cantidad.
    // ¡OJO! datos[1] es el TEXTO '1', no el número 1. Number(...) lo
    // convierte en número de verdad (el enunciado lo exige).
    return { nombre: datos[0], cantidad: Number(datos[1]) };
  });
  // Devolvemos el objeto final. Poner solo "lineas" es un atajo de escribir
  // "lineas: lineas" (cuando la clave y la variable se llaman igual).
  return { cliente: partes[0], lineas };
};

// 4.2 Devuelve true si TODOS los productos del pedido existen
//     y tienen stock suficiente.
export const puedeServirse = (catalogo, pedido) => {
  // QUÉ HACE: comprueba si podemos entregar el pedido completo.
  // every = "¿TODAS las líneas del pedido cumplen?". Si una falla, no se puede servir.
  return pedido.lineas.every((linea) => {
    // Buscamos el producto en el catálogo usando la función que ya hicimos (2.1).
    // Si no existe, producto valdrá undefined.
    const producto = buscarProducto(catalogo, linea.nombre);
    // Dos condiciones unidas con && ("Y"):
    //   1) producto !== undefined → el producto existe
    //   2) producto.stock >= linea.cantidad → hay unidades suficientes
    // EL ORDEN IMPORTA: si el producto no existe (undefined), leer
    // producto.stock daría ERROR. Pero el && se detiene en cuanto la
    // primera condición es falsa, así que nunca llega a leer .stock.
    return producto !== undefined && producto.stock >= linea.cantidad;
  });
};

// 4.3 Devuelve el importe total del pedido.
export const totalPedido = (catalogo, pedido) => {
  // QUÉ HACE: suma lo que cuesta cada línea del pedido.
  // reduce con mochila "total" que empieza en 0.
  // En cada línea: buscamos el producto en el catálogo (para saber su
  // precio) y multiplicamos precio × cantidad pedida. Se suma a la mochila.
  return pedido.lineas.reduce((total, linea) => {
    return total + buscarProducto(catalogo, linea.nombre).precio * linea.cantidad;
  }, 0);
};

// 4.4 Devuelve un catálogo NUEVO en el que se ha restado del stock
//     la cantidad pedida de cada producto. El original no cambia.
//     Pista: { ...producto, stock: nuevoStock } crea una copia del objeto.
export const servirPedido = (catalogo, pedido) => {
  // QUÉ HACE: simula entregar el pedido: resta las unidades vendidas del
  // stock, pero SIN estropear el catálogo original (devuelve uno nuevo).
  // map recorre cada producto del catálogo y devuelve una lista nueva del
  // mismo tamaño.
  return catalogo.map((producto) => {
    // ¿Este producto está en el pedido? find busca su línea dentro del pedido
    // (si no está, linea será undefined).
    const linea = pedido.lineas.find((l) => l.nombre.toLowerCase() === producto.nombre.toLowerCase());
    // "if (linea)" significa "si linea existe" (undefined cuenta como falso).
    if (linea) {
      // Sí está en el pedido → devolvemos una COPIA del producto con el
      // stock cambiado. { ...producto, stock: X } se lee: "copia todo lo de
      // producto, pero el stock ponlo a X". El último valor sobrescribe al
      // copiado.
      // NO hacemos producto.stock = ... porque eso estropearía el original.
      return { ...producto, stock: producto.stock - linea.cantidad };
    }
    // No está en el pedido → devolvemos una copia igual, sin cambios.
    return { ...producto };
  });
};

// 4.5 Devuelve el ticket del pedido como un único texto:
//     Cliente: Lucía
//     1 x Tocadiscos = 200 €
//     2 x Vinilo Jazz = 60 €
//     TOTAL: 260 €
//     Pista: construye un array de líneas y únelas con '\n'.
export const generarTicket = (catalogo, pedido) => {
  // QUÉ HACE: construye el texto del ticket de compra.
  // Paso 1: por cada línea del pedido creamos una frase con map.
  const lineas = pedido.lineas.map((linea) => {
    // Importe de esa línea: precio del catálogo × cantidad.
    const importe = buscarProducto(catalogo, linea.nombre).precio * linea.cantidad;
    // Comillas invertidas ` ` permiten meter variables con ${ }.
    return `${linea.cantidad} x ${linea.nombre} = ${importe} €`;
  });
  // Paso 2: montamos una lista con TODAS las frases en orden:
  //   [ cabecera, ...lineas, total ]
  //   Los tres puntos "vuelcan" las frases de "lineas" en medio de la lista.
  // Paso 3: join('\n') une todas las frases en UN solo texto poniendo entre
  //   ellas un salto de línea ('\n' es el símbolo del "Enter").
  return [`Cliente: ${pedido.cliente}`, ...lineas, `TOTAL: ${totalPedido(catalogo, pedido)} €`].join('\n');
};

// ================================================================
// PARTE 5 · COLA DE PEDIDOS Y CARRITO CON "DESHACER"
// En esta parte SÍ se modifican los arrays recibidos.
// ================================================================
// IDEA: aquí los métodos push/shift/unshift/pop/splice SÍ se usan porque
// se pide cambiar la lista original.
//   COLA = como la cola del súper: el primero que llega es el primero en salir.
//   PILA = como una pila de platos: el último que pones es el primero que quitas.

// 5.1 COLA (el primero que llega es el primero en salir):
//     saca y devuelve el primer pedido de la cola.
export const atenderSiguiente = (cola) => {
  // shift QUITA el primer elemento de la lista y lo DEVUELVE.
  // La lista original se queda sin ese elemento (por eso es una "cola").
  return cola.shift();
};

// 5.2 Coloca el pedido al PRINCIPIO de la cola y devuelve
//     la nueva longitud de la cola.
export const agregarUrgente = (cola, pedido) => {
  // unshift AÑADE un elemento al PRINCIPIO de la lista (se "cuela").
  // Además devuelve cuántos elementos hay ahora, justo lo que piden.
  return cola.unshift(pedido);
};

// 5.3 Añade el nombre al final del carrito y apunta la acción en el
//     historial: { accion: 'agregar', nombre }
export const agregarAlCarrito = (carrito, historial, nombre) => {
  // push AÑADE un elemento al FINAL de la lista.
  carrito.push(nombre);
  // Apuntamos en el historial lo que acabamos de hacer, para poder
  // deshacerlo luego. { accion: 'agregar', nombre } es un objeto; poner solo
  // "nombre" es el atajo de "nombre: nombre".
  historial.push({ accion: 'agregar', nombre });
};

// 5.4 Quita la PRIMERA aparición del nombre en el carrito y apunta en
//     el historial: { accion: 'quitar', nombre, posicion }
//     Devuelve true, o false (sin tocar nada) si no estaba.
export const quitarDelCarrito = (carrito, historial, nombre) => {
  // indexOf busca un valor en la lista y devuelve la posición de la PRIMERA
  // vez que aparece (o -1 si no está).
  const posicion = carrito.indexOf(nombre);
  if (posicion === -1) {
    // No estaba en el carrito: devolvemos false y salimos SIN tocar nada.
    return false;
  }
  // splice(posición, cuántos) BORRA elementos de la lista.
  // splice(posicion, 1) → borra 1 elemento en esa posición.
  carrito.splice(posicion, 1);
  // Guardamos en el historial qué quitamos y DÓNDE estaba, para poder
  // volver a ponerlo en el mismo sitio si el usuario pulsa "deshacer".
  historial.push({ accion: 'quitar', nombre, posicion });
  return true;
};

// 5.5 PILA (la última acción es la primera en deshacerse):
//     saca la última acción del historial y la revierte:
//     - si fue 'agregar', quita la ÚLTIMA aparición de ese nombre;
//     - si fue 'quitar', vuelve a insertarlo en su posición original.
//     Devuelve true, o false si el historial estaba vacío.
export const deshacer = (carrito, historial) => {
  // .length es cuántos elementos tiene la lista. Si es 0, no hay nada que deshacer.
  if (historial.length === 0) {
    return false;
  }
  // pop QUITA el ÚLTIMO elemento de la lista y lo devuelve.
  // Así sacamos la última acción realizada (como el último plato de la pila).
  const ultima = historial.pop();
  if (ultima.accion === 'agregar') {
    // Antes se AGREGÓ un producto → para deshacer hay que QUITARLO.
    // lastIndexOf es como indexOf pero busca desde el FINAL, así que
    // encuentra la última vez que aparece. Esa posición se la pasamos a splice
    // para borrar 1 elemento.
    carrito.splice(carrito.lastIndexOf(ultima.nombre), 1);
  } else {
    // Antes se QUITÓ un producto → para deshacer hay que VOLVER A PONERLO.
    // splice(posición, 0, elemento): con 0 NO borra nada, solo INSERTA el
    // elemento en esa posición (la que guardamos en el historial).
    carrito.splice(ultima.posicion, 0, ultima.nombre);
  }
  return true;
};

// ================================================================
// PARTE 6 · INFORME FINAL
// ================================================================

// 6.1 Atiende uno a uno (con atenderSiguiente) todos los pedidos de la
//     cola. Si puede servirse, actualiza el catálogo con servirPedido y lo
//     guarda en servidos; si no, en rechazados. Al terminar la cola queda vacía.
//     Devuelve { catalogo, servidos, rechazados }
export const procesarCola = (catalogo, cola) => {
  // QUÉ HACE: va atendiendo los pedidos de la cola uno a uno. Los que se
  // pueden servir van a "servidos" y los que no, a "rechazados".
  //
  // "let" (en vez de const) porque esta variable SÍ va a cambiar: servirPedido
  // no modifica el catálogo, devuelve uno nuevo, y lo vamos guardando aquí.
  let actual = catalogo;
  // Dos listas vacías donde iremos metiendo los pedidos.
  const servidos = [];
  const rechazados = [];
  // while = "mientras": repite el bloque { } mientras la condición sea verdadera.
  // Aquí: mientras la cola tenga pedidos (longitud mayor que 0).
  // Cada vuelta saca un pedido con atenderSiguiente, así que la cola se va
  // vaciando y el bucle acaba solo.
  while (cola.length > 0) {
    // Sacamos el primer pedido de la cola.
    const pedido = atenderSiguiente(cola);
    // Comprobamos con el stock ACTUAL (el que queda después de servir los
    // pedidos anteriores; por eso actualizamos "actual" cada vez).
    if (puedeServirse(actual, pedido)) {
      // Se puede: actualizamos el catálogo y guardamos el pedido en servidos.
      actual = servirPedido(actual, pedido);
      servidos.push(pedido);
    } else {
      // No se puede (falta stock o no existe): va a rechazados.
      rechazados.push(pedido);
    }
  }
  // Devolvemos un objeto con las tres cosas. "servidos" es el atajo de
  // "servidos: servidos".
  return { catalogo: actual, servidos, rechazados };
};

// 6.2 Recibe un array de pedidos y devuelve los nombres de los productos
//     vendidos, SIN repetidos y en orden alfabético.
export const productosVendidos = (pedidos) => {
  // QUÉ HACE: lista qué productos se han vendido, sin repetir ninguno y
  // ordenados de la A a la Z. Son 4 pasos encadenados:
  return pedidos
    // PASO 1: cada pedido se convierte en una lista con los nombres de sus líneas.
    //   Resultado: [ ['Tocadiscos','Vinilo Jazz'], ['Altavoz','Cables'], ... ]
    //   (una lista de listas, porque cada pedido da una lista).
    .map((pedido) => pedido.lineas.map((linea) => linea.nombre))
    // PASO 2: flat() "aplana" la lista de listas en una sola lista.
    //   Resultado: ['Tocadiscos','Vinilo Jazz','Altavoz','Cables', ...]
    .flat()
    // PASO 3: quitar repetidos. filter recibe 3 datos en cada vuelta:
    //   el elemento (nombre), su posición (i) y la lista entera (todos).
    //   todos.indexOf(nombre) da la posición de la PRIMERA vez que aparece.
    //   Si esa posición es igual a la actual (i), es su primera aparición
    //   → se queda. Si no, es una repetición → se descarta.
    .filter((nombre, i, todos) => todos.indexOf(nombre) === i)
    // PASO 4: ordenar alfabéticamente (igual que en 1.3).
    .sort((a, b) => a.localeCompare(b));
};

// 6.3 Devuelve un array de textos con una barra por producto:
//     'Altavoz: ■■■ (3)'
//     Obligatorio: crea la barra con new Array(...).fill('■')
export const graficoStock = (catalogo) => {
  // QUÉ HACE: por cada producto crea una línea de texto con una "barra"
  // hecha de cuadraditos, tantos como unidades en stock.
  // La barra se hace así (con stock 3):
  //   new Array(3)      → crea una lista con 3 huecos vacíos
  //   .fill('■')        → rellena todos los huecos con '■' → ['■','■','■']
  //   .join('')         → une los elementos en un texto SIN nada entre ellos → '■■■'
  // Si el stock es 0, la barra queda vacía y la línea sale 'Radio:  (0)'
  // (con dos espacios seguidos, tal y como pide el test).
  return catalogo.map((p) => `${p.nombre}: ${new Array(p.stock).fill('■').join('')} (${p.stock})`);
};
