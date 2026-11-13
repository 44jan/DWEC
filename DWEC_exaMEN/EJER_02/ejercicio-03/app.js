// EJERCICIO 02-03 · Módulos: repartir el código en varios archivos
//
// CONCEPTOS PARA PRINCIPIANTES:
//  - Un programa grande se divide en varios archivos. Cada archivo es un MÓDULO.
//  - El archivo que TIENE las funciones las "exporta" (export) en biblioteca.js.
//  - El archivo que las QUIERE USAR las "importa" (import), como aquí.
//  - Este archivo (app.js) es el PRINCIPAL: es el que se ejecuta con  node app.js
//  - Para que import/export funcionen hace falta el archivo package.json con "type": "module".

// IMPORTAR: entre llaves los nombres de las funciones que queremos usar,
// y después from + la ruta del archivo. Ese "./" significa "en esta misma carpeta".
// ¡No olvides el .js al final!
import { agregarLibro, obtenerLibros } from "./biblioteca.js"

// Mostramos la lista de libros ANTES de añadir (hay 10).
console.log(obtenerLibros())

// Creamos un libro nuevo. Debe tener los mismos datos que los demás (id, titulo, autor, paginas).
const nuevoLibro = {
    id: 11,
    titulo: "El nombre del viento",
    autor: "Patrick Rothfuss",
    paginas: 880
}

// Llamamos a la función para añadir el libro a la lista (que vive en biblioteca.js).
agregarLibro(nuevoLibro)

// Mostramos la lista DESPUÉS de añadir (ahora hay 11).
console.log(obtenerLibros())
