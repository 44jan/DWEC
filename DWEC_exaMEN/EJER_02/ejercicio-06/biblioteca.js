// biblioteca.js · EJERCICIO 02-06
//
// CONCEPTO PARA PRINCIPIANTES: sort (ordenar)
//  - sort ordena una lista. PERO si le das números sin más, los ordena como si
//    fueran TEXTO (y 15 quedaría antes que 2). Por eso hay que enseñarle cómo comparar.
//  - Esa "regla de comparación" es una función que recibe DOS elementos y devuelve:
//        un número NEGATIVO (-1) → el primero va ANTES
//        un número POSITIVO  (1) → el primero va DESPUÉS
//        0                       → da igual el orden
//  - sort CAMBIA la lista original (no crea una nueva).

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

// ORDENAR LOS LIBROS DE MENOS A MÁS PÁGINAS
function ordenarPorPaginas() {
    // Esta función interna es la regla de comparación: recibe dos libros.
    function compare(libro1, libro2) {
        // Si libro1 tiene MENOS páginas, va antes (-1).
        if(libro1.paginas < libro2.paginas) {
            return -1
        // Si libro1 tiene MÁS páginas, va después (1).
        } else if(libro1.paginas > libro2.paginas) {
            return 1
        // Si tienen las mismas páginas, da igual (0).
        } else {
            return 0
        }
    }

    // Le pasamos a sort nuestra regla de comparación.
    // Atajo equivalente de una línea:  libros.sort((a, b) => a.paginas - b.paginas)
    // Si quisieras ordenar SIN cambiar la lista original, se copia antes: [...libros].sort(compare)
    libros.sort(compare)
}

// Devuelve la lista de libros.
function obtenerLibros() {
    return libros
}

// Lista de funciones que otros archivos pueden importar.
export {
    ordenarPorPaginas,
    obtenerLibros
}
