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
