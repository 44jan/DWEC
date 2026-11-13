// EJERCICIO 1.2 · Objetos: leer, cambiar, añadir y borrar datos
//
// CONCEPTOS PARA PRINCIPIANTES:
//  - Un OBJETO es una "ficha" que agrupa varios datos relacionados.
//  - Cada dato tiene un NOMBRE (clave) y un VALOR, separados por dos puntos.
//  - Se escribe entre llaves { } y los datos se separan con comas.

// Creamos un objeto "coche" con 4 datos.
const coche = {
   marca: "Seat",           // clave: marca  → valor: "Seat" (texto)
   modelo: "Ibiza",
   año: "2011",
   estaDisponible: false    // valor lógico: true o false
}

// DESTRUCTURING: sacar datos del objeto y guardarlos en variables.
// Es un atajo para no escribir:
//     const marca = coche.marca
//     const modelo = coche.modelo
// Los nombres entre llaves tienen que llamarse IGUAL que las claves del objeto.
const {marca, modelo} = coche
console.log(marca, modelo)   // Seat Ibiza

// IMPORTANTE: aunque "coche" sea const, SÍ podemos cambiar cosas DENTRO del objeto.
// Lo que const impide es hacer "coche = otra cosa" (cambiar la caja entera).

// Cambiar el valor de un dato que ya existe: objeto.clave = nuevoValor
coche.estaDisponible = true

// Si la clave NO existe, JavaScript la CREA y la añade al objeto.
coche.color = "rojo"

// delete borra una clave (y su valor) del objeto.
delete coche.año 

// Mostramos el objeto entero para ver cómo ha quedado:
// { marca: 'Seat', modelo: 'Ibiza', estaDisponible: true, color: 'rojo' }
console.log(coche)
