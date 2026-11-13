// EJERCICIO 02-01 · Recorrer una lista con forEach
//
// CONCEPTOS PARA PRINCIPIANTES:
//  - forEach("para cada") ejecuta una función UNA VEZ por cada elemento de la lista.
//  - Se usa cuando quieres HACER algo con cada elemento (por ejemplo, escribirlo
//    en pantalla). NO devuelve ninguna lista nueva (para eso está map).
//  - function(cancion) { ... } es una función: "cancion" es el nombre que damos
//    a cada elemento mientras la función trabaja con él.
//  - Cada canción es un objeto; sus datos se leen con punto: cancion.titulo

// playlist es una lista de objetos (cada canción es una ficha con titulo, artista y duracion).
const playlist = [
    {
        titulo: "Blinding Lights",
        artista: "The Weeknd",
        duracion: 200
    },
    {
        titulo: "Shape of You",
        artista: "Ed Sheeran",
        duracion: 234
    },
    {
        titulo: "Havana",
        artista: "Camila Cabello",
        duracion: 217
    },
    {
        titulo: "Believer",
        artista: "Imagine Dragons",
        duracion: 204
    },
    {
        titulo: "Perfect",
        artista: "Ed Sheeran",
        duracion: 263
    },
    {
        titulo: "As It Was",
        artista: "Harry Styles",
        duracion: 167
    },
    {
        titulo: "Bad Guy",
        artista: "Billie Eilish",
        duracion: 194
    },
    {
        titulo: "Levitating",
        artista: "Dua Lipa",
        duracion: 203
    },
    {
        titulo: "Watermelon Sugar",
        artista: "Harry Styles",
        duracion: 174
    },
    {
        titulo: "Counting Stars",
        artista: "OneRepublic",
        duracion: 257
    }
]

// Para cada canción de la lista, se ejecuta lo que hay entre las llaves { }.
playlist.forEach(function(cancion) {
    // Comillas invertidas ` ` + ${ } = texto con datos dentro.
    // Escribe, por ejemplo: Titulo: Havana Artista: Camila Cabello
    console.log(`Titulo: ${cancion.titulo} Artista: ${cancion.artista}`)
})
