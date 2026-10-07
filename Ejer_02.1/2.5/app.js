var biblioteca = require("./biblioteca-2.5");

console.log("Colección inicial:");
console.log(biblioteca.obtenerLibros());

biblioteca.agregarLibro({ id: 11, titulo: "Drácula", autor: "Bram Stoker", paginas: 418 });
console.log("Después de agregar:");
console.log(biblioteca.obtenerLibros());

console.log("Libro con id 3:");
console.log(biblioteca.buscarLibro(3));

biblioteca.eliminarLibro(4);
console.log("Después de eliminar el id 4:");
console.log(biblioteca.obtenerLibros());

console.log("Total de páginas: " + biblioteca.calcularTotalPaginas());