// biblioteca.js · EJERCICIO 02-07
//
// CONCEPTOS PARA PRINCIPIANTES:
//  - some  = "alguno": devuelve true si AL MENOS UN elemento cumple la condición.
//  - every = "todos": devuelve true solo si TODOS los elementos cumplen la condición
//            (con que uno falle, devuelve false).
//  - Los dos devuelven un valor lógico (true o false), no una lista.

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

// ¿Hay algún libro con MÁS páginas que el límite?
// "limitePaginas" es un dato que recibe la función (por ejemplo 500).
function hayLibrosLargos(limitePaginas) {
    return libros.some(function(libro) {
        return libro.paginas > limitePaginas
    })
}

// ¿Todos los libros tienen MENOS páginas que el límite?
function todosSonLibrosCortos(limitePaginas) {
    return libros.every(function(libro) {
        return libro.paginas < limitePaginas
    })
}

// Lista de funciones que otros archivos pueden importar.
export {
    hayLibrosLargos,
    todosSonLibrosCortos
}
