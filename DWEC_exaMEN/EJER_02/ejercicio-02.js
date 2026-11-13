// EJERCICIO 02-02 · Combinar filter y map
//
// CONCEPTOS PARA PRINCIPIANTES:
//  - filter: se queda SOLO con los elementos que cumplen una condición.
//            Devuelve una lista NUEVA (la original no cambia).
//  - map:    transforma CADA elemento en otra cosa.
//            Devuelve una lista NUEVA del mismo tamaño.
//  - Se pueden usar uno después de otro: primero filter (descarto lo que no
//    quiero) y luego map (convierto lo que queda). Es muy típico en exámenes.
//  - La duración está en SEGUNDOS: 180 segundos son 3 minutos.

// playlist: lista de canciones (cada una es un objeto con titulo, artista y duracion).
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

// PASO 1: filter. Para cada canción, la función comprueba si dura más de 180 segundos.
// Si devuelve la canción (algo "verdadero"), esa canción SE QUEDA en la lista nueva.
// Si no devuelve nada, se descarta.
const cancionesLargas = playlist.filter(function(cancion) {
    if(cancion.duracion > 180) {
        return cancion
    }
})

// PASO 2: map. Cada canción larga (un objeto) se convierte en una frase (un texto).
// El return dice QUÉ texto sustituye a cada canción.
const resultado = cancionesLargas.map(function(cancion) {
    return `La canción '${cancion.titulo}' de ${cancion.artista} dura ${cancion.duracion} segundos.`
})

// Se muestra la lista de frases (una por cada canción de más de 180 segundos).
console.log(resultado)
