var biblioteca = require("./biblioteca-2.3");

console.log("Colección inicial:");
console.log(biblioteca.obtenerLibros());

biblioteca.agregarLibro({ id: 11, titulo: "Drácula", autor: "Bram Stoker", paginas: 418 });
console.log("Después de agregar:");
console.log(biblioteca.obtenerLibros());