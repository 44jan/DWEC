// biblioteca.js · EJERCICIO 02-03
//
// Este archivo guarda los DATOS (los libros) y las FUNCIONES para usarlos.
// El archivo app.js las importa y las usa.

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

// FUNCIÓN: recibe un libro (nuevoLibro) y lo añade a la lista.
// push añade un elemento AL FINAL de la lista (y cambia la lista original).
function agregarLibro(nuevoLibro) {
    libros.push(nuevoLibro)
}

// FUNCIÓN: devuelve la lista de libros (return = "esto es lo que te doy").
// Se usa porque desde otros archivos no podemos ver directamente la variable "libros".
function obtenerLibros() {
    return libros
}

// EXPORT: lista de lo que este archivo "regala" a los demás.
// Lo que no esté aquí (como la variable libros) solo se puede usar dentro de este archivo.
export { agregarLibro, obtenerLibros }
