// EJERCICIO 02-06 · Ordenar una lista con sort
//
// Este archivo solo importa las funciones y muestra la lista antes y después.
// La explicación de sort está en biblioteca.js.

import { ordenarPorPaginas, obtenerLibros } from "./biblioteca.js"

// ANTES de ordenar: los libros salen en su orden original (por id).
console.log(obtenerLibros())

// Ordenamos. sort CAMBIA la lista original, así que ya no vuelve a su orden anterior.
ordenarPorPaginas()

// DESPUÉS de ordenar: de menos a más páginas.
console.log(obtenerLibros())
