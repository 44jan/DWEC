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
