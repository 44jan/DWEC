var libros = [
  { id: 1, titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes", paginas: 863 },
  { id: 2, titulo: "Cien años de soledad", autor: "Gabriel García Márquez", paginas: 471 },
  { id: 3, titulo: "1984", autor: "George Orwell", paginas: 328 },
  { id: 4, titulo: "El principito", autor: "Antoine de Saint-Exupéry", paginas: 96 },
  { id: 5, titulo: "La sombra del viento", autor: "Carlos Ruiz Zafón", paginas: 487 },
  { id: 6, titulo: "Fahrenheit 451", autor: "Ray Bradbury", paginas: 249 },
  { id: 7, titulo: "Rayuela", autor: "Julio Cortázar", paginas: 600 },
  { id: 8, titulo: "El Hobbit", autor: "J. R. R. Tolkien", paginas: 310 },
  { id: 9, titulo: "Crimen y castigo", autor: "Fiódor Dostoyevski", paginas: 545 },
  { id: 10, titulo: "Rebelión en la granja", autor: "George Orwell", paginas: 144 }
];

function agregarLibro(nuevoLibro) {
  libros.push(nuevoLibro);
}

function obtenerLibros() {
  return libros;
}

function buscarLibro(id) {
  return libros.find((libro) => libro.id === id);
}

function eliminarLibro(id) {
  var indice = libros.findIndex((libro) => libro.id === id);
  if (indice !== -1) {
    libros.splice(indice, 1);
  }
}

module.exports = {
  agregarLibro,
  obtenerLibros,
  buscarLibro,
  eliminarLibro
};