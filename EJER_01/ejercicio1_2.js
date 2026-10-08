var coche = { // creo el objeto coche
    marca: "Toyota", // marca (string)
    modelo: "Corolla", // modelo (string)
    año: 2020, // año (number)
    estaDisponible: false // disponible (boolean)
}; // fin del objeto

console.table(coche); // muestro el objeto en forma de tabla

var { marca, modelo } = coche; // desestructuracion: saco marca y modelo
console.log(marca); // imprimo la marca
console.log(modelo); // imprimo el modelo

coche.estaDisponible = true; // cambio la disponibilidad a true
coche.color = "rojo"; // añado la propiedad color
delete coche.año; // elimino la propiedad año

console.table(coche); // muestro el objeto modificado
