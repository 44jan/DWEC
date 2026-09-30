// Función que recibe el saldo, la cantidad a retirar y si tiene tarjeta de crédito
function retirar(saldo, cantidad, tieneTarjetaCredito) {
  // Si el saldo alcanza para retirar
  if (saldo >= cantidad) {
    var nuevoSaldo = saldo - cantidad; // calculamos lo que queda
    console.log("Retiro exitoso. Saldo restante: " + nuevoSaldo);
  } else if (tieneTarjetaCredito === true) {
    // No alcanza el saldo PERO tiene tarjeta de crédito
    console.log("Saldo insuficiente, pagando con tarjeta de crédito");
  } else {
    // No alcanza y no tiene tarjeta
    console.log("Saldo insuficiente");
  }
}

// Pruebas
retirar(100, 40, false); // Retiro exitoso
retirar(100, 150, false); // Saldo insuficiente
retirar(100, 150, true); // Pagando con tarjeta