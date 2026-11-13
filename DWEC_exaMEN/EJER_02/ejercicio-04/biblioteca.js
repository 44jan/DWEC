// biblioteca.js · EJERCICIO 02-04
//
// CONCEPTOS PARA PRINCIPIANTES:
//  - find: busca en una lista y devuelve el PRIMER elemento que cumple la condición.
//          Si ninguno cumple, devuelve undefined ("nada").
//  - findIndex: igual, pero devuelve la POSICIÓN del elemento (0, 1, 2...) o -1 si no está.
//  - splice(posición, cuántos): BORRA elementos de la lista en esa posición.
//  - === significa "es exactamente igual".

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

// Añade un libro AL FINAL de la lista.
function agregarLibro(nuevoLibro) {
    libros.push(nuevoLibro)
}

// Devuelve la lista de libros.
function obtenerLibros() {
    return libros
}

// BUSCAR UN LIBRO POR SU ID
// find recorre la lista libro a libro. En cada uno ejecuta la función:
// si devuelve true (el id del libro es igual al id que buscamos), find para
// y nos da ese libro.
function buscarLibro(id) {
    const libro = libros.find(function(libro) {
        return libro.id === id
    })

    return libro
}

// ELIMINAR UN LIBRO POR SU ID (se hace en 2 pasos)
function eliminarLibro(id) {
    // PASO 1: averiguar en qué POSICIÓN de la lista está ese libro.
    const indice = libros.findIndex(function(libro) {
        return libro.id === id
    })

    // PASO 2: borrar 1 elemento a partir de esa posición.
    // OJO: si el libro no existiera, indice valdría -1 y splice(-1, 1) borraría
    // el ÚLTIMO libro por error. Para evitarlo se podría escribir:
    //     if (indice !== -1) { libros.splice(indice, 1) }
    libros.splice(indice, 1)
}

// Lista de funciones que otros archivos pueden importar.
export {
    agregarLibro,
    obtenerLibros,
    buscarLibro,
    eliminarLibro
}
