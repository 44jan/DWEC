var biblioteca = require("./biblioteca-2.7");

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

console.log("Antes de ordenar:");
console.log(biblioteca.obtenerLibros());
biblioteca.ordenarPorPaginas();
console.log("Después de ordenar:");
console.log(biblioteca.obtenerLibros());

console.log("¿Hay libros de más de 800 páginas? " + biblioteca.hayLibrosLargos(800));
console.log("¿Hay libros de más de 1000 páginas? " + biblioteca.hayLibrosLargos(1000));
console.log("¿Todos tienen menos de 1000 páginas? " + biblioteca.todosSonLibrosCortos(1000));
console.log("¿Todos tienen menos de 500 páginas? " + biblioteca.todosSonLibrosCortos(500));