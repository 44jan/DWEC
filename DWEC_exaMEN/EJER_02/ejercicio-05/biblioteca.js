// biblioteca.js · EJERCICIO 02-05
//
// CONCEPTO PARA PRINCIPIANTES: reduce
//  - reduce "reduce" toda una lista a UN solo valor (por ejemplo una suma).
//  - Funciona con una "mochila" (llamada acumulador) donde se va guardando el resultado.
//  - Se escribe:  lista.reduce(function(mochila, elemento) { return nuevaMochila }, valorInicial)
//  - El valorInicial (el 0 del final) es lo que lleva la mochila al empezar.
//  - Lo que la función devuelve (return) se convierte en la mochila de la siguiente vuelta.

// Esto es un ARRAY (lista entre corchetes [ ]) de OBJETOS (fichas entre llaves { }).
// Cada libro es una ficha con 4 datos: id, titulo, autor y paginas.
// "const libros" guarda la lista entera en una variable.
const libros = [
    {
        id: 1,
        titulo: "El principito",
        autor: "Antoine de Saint-Exupéry",
        paginas: 96
    },
    {
        id: 2,
        titulo: "1984",
        autor: "George Orwell",
        paginas: 328
    },
    {
        id: 3,
        titulo: "Don Quijote de la Mancha",
        autor: "Miguel de Cervantes",
        paginas: 863
    },
    {
        id: 4,
        titulo: "Harry Potter y la piedra filosofal",
        autor: "J.K. Rowling",
        paginas: 309
    },
    {
        id: 5,
        titulo: "La sombra del viento",
        autor: "Carlos Ruiz Zafón",
        paginas: 576
    },
    {
        id: 6,
        titulo: "El Hobbit",
        autor: "J.R.R. Tolkien",
        paginas: 310
    },
    {
        id: 7,
        titulo: "Drácula",
        autor: "Bram Stoker",
        paginas: 488
    },
    {
        id: 8,
        titulo: "Frankenstein",
        autor: "Mary Shelley",
        paginas: 280
    },
    {
        id: 9,
        titulo: "El Alquimista",
        autor: "Paulo Coelho",
        paginas: 192
    },
    {
        id: 10,
        titulo: "Los juegos del hambre",
        autor: "Suzanne Collins",
        paginas: 374
    }
]

// Añade un libro AL FINAL de la lista (push).
function agregarLibro(nuevoLibro) {
    libros.push(nuevoLibro)
}

// Devuelve la lista de libros.
function obtenerLibros() {
    return libros
}

// SUMAR LAS PÁGINAS DE TODOS LOS LIBROS
// La mochila ("total") empieza en 0. Por cada libro, suma sus páginas:
//   Libro 1: 0 + 96  = 96
//   Libro 2: 96 + 328 = 424
//   Libro 3: 424 + 863 = 1287   ... y así hasta el último.
function calcularTotalPaginas() {
    const total = libros.reduce(function(total, libro) {
        return total + libro.paginas
    }, 0)

    // Devolvemos el resultado final de la suma.
    return total
}

// Lista de funciones que otros archivos pueden importar.
export {
    agregarLibro,
    obtenerLibros,
    calcularTotalPaginas
}
