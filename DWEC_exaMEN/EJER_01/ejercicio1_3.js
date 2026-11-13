// EJERCICIO 1.3 · Juntar objetos con el operador spread (...)
//
// CONCEPTOS PARA PRINCIPIANTES:
//  - Los tres puntos ... ("spread") significan "saca todos los datos de este
//    objeto y ponlos aquí".
//  - Sirve para COMBINAR varios objetos en uno nuevo, sin modificar los originales.
//  - Si dos objetos tienen una clave con el MISMO nombre, gana el que se escribe
//    el ÚLTIMO (sobrescribe al anterior).
//  - var es la forma antigua de declarar variables (hoy se usa const / let),
//    pero funciona igual.
//  - Después de // al final de cada línea tienes la explicación línea a línea.

var producto = { // objeto producto
    nombre: "Portatil", // nombre del producto
    precio: 800 // precio del producto
}; // fin de producto

var cliente = { // objeto cliente
    nombreCliente: "Ana", // nombre del cliente
    esPremium: true // si es premium
}; // fin de cliente

var pedido = { ...producto, ...cliente }; // junto los dos objetos con spread
console.log(pedido); // muestro el pedido

var cliente2 = { // cliente con la propiedad nombre repetida
    nombre: "Luis", // mismo nombre de propiedad que producto
    esPremium: false // si es premium
}; // fin de cliente2

var pedido2 = { ...producto, ...cliente2 }; // combino producto y cliente2
console.log(pedido2); // el nombre de cliente2 sobrescribe al de producto
