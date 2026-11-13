// EJERCICIO 02-07 · Preguntas de sí/no sobre una lista: some y every
//
// Este archivo solo importa las funciones y las prueba.
// Las dos funciones devuelven true (sí) o false (no).

import {
    hayLibrosLargos,
    todosSonLibrosCortos
} from "./biblioteca.js"

// ¿Hay ALGÚN libro con más de 500 páginas? → true (Don Quijote tiene 863)
console.log(hayLibrosLargos(500))
// ¿Hay ALGÚN libro con más de 1000 páginas? → false (ninguno)
console.log(hayLibrosLargos(1000))

// ¿TODOS los libros tienen menos de 1000 páginas? → true
console.log(todosSonLibrosCortos(1000))
// ¿TODOS los libros tienen menos de 300 páginas? → false (Don Quijote tiene 863)
console.log(todosSonLibrosCortos(300))
