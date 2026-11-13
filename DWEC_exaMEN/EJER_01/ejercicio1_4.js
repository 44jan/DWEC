// EJERCICIO 1.4 · Arrays (listas): push, map y filter
//
// CONCEPTOS PARA PRINCIPIANTES:
//  - Un ARRAY es una lista de datos entre corchetes [ ], separados por comas.
//  - push(dato) → añade un elemento AL FINAL de la lista (CAMBIA la lista original).
//  - map(función) → crea una lista NUEVA transformando cada elemento
//    (la lista nueva tiene el mismo tamaño; la original no cambia).
//  - filter(función) → crea una lista NUEVA con solo los elementos que cumplen
//    una condición (puede ser más corta; la original no cambia).
//  - Una función como function (c) { return ... } recibe cada elemento (aquí "c"),
//    y con return decimos qué devolvemos.
//  - Por eso al imprimir "ciudades" al final salen en su forma original (con Roma
//    añadida por el push), y los resultados de map y filter están en otras variables.

var ciudades = ["Madrid", "Buenos Aires", "Tokio", "Nueva York", "París"]; // array inicial

ciudades.push("Roma"); // añado Roma al final

var ciudadesMayusculas = ciudades.map(function (c) { // recorro cada ciudad con map
    return c.toUpperCase(); // devuelvo la ciudad en mayusculas
}); // map devuelve un array nuevo

var ciudadesFiltradas = ciudades.filter(function (c) { // recorro cada ciudad con filter
    return c.length > 6; // me quedo con las de mas de 6 caracteres
}); // filter devuelve un array nuevo

console.log(ciudades); // imprimo el array original
console.log(ciudadesMayusculas); // imprimo el de mayusculas
console.log(ciudadesFiltradas); // imprimo el filtrado
