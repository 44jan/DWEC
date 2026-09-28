var playlist = [
  { titulo: "Bohemian Rhapsody", artista: "Queen", duracion: 354 },
  { titulo: "Hotel California", artista: "Eagles", duracion: 391 },
  { titulo: "Imagine", artista: "John Lennon", duracion: 187 },
  { titulo: "Smells Like Teen Spirit", artista: "Nirvana", duracion: 301 },
  { titulo: "Billie Jean", artista: "Michael Jackson", duracion: 294 },
  { titulo: "Yesterday", artista: "The Beatles", duracion: 125 },
  { titulo: "Wonderwall", artista: "Oasis", duracion: 258 },
  { titulo: "Shape of You", artista: "Ed Sheeran", duracion: 233 },
  { titulo: "Come Together", artista: "The Beatles", duracion: 259 },
  { titulo: "Zombie", artista: "The Cranberries", duracion: 306 },
  { titulo: "Creep", artista: "Radiohead", duracion: 238 },
  { titulo: "Hey Jude", artista: "The Beatles", duracion: 431 }
];
 
var largas = playlist.filter((cancion) => cancion.duracion > 180);
 
var mensajes = largas.map((cancion) => {
  return "La canción '" + cancion.titulo + "' de " + cancion.artista + " dura " + cancion.duracion + " segundos.";
});
 
console.log(mensajes);