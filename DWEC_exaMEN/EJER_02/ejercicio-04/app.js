// EJERCICIO 02-04 · Buscar un elemento y eliminarlo de una lista
//
// CONCEPTOS PARA PRINCIPIANTES:
//  - Este archivo (app.js) solo USA las funciones; la lógica está en biblioteca.js.
//  - import trae las funciones desde otro archivo (mira el ejercicio 03 para más detalle).

import {
    agregarLibro,
    obtenerLibros,
    buscarLibro,
    eliminarLibro
} from "./biblioteca.js"

// Mostramos la lista inicial (10 libros).
console.log(obtenerLibros())

// Buscamos el libro cuyo id es 5. Nos devuelve el libro entero (el objeto),
// o undefined ("nada") si no existiera.
const libroBuscado = buscarLibro(5)

// Mostramos el libro encontrado ("La sombra del viento").
console.log(libroBuscado)

// Borramos de la lista el libro con id 5.
eliminarLibro(5)

// Mostramos la lista otra vez: ahora tiene 9 libros y falta el nº 5.
console.log(obtenerLibros())
