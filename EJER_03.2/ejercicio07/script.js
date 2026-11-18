// ============================================================
// EJERCICIO 7 · Carrito de la compra con total dinámico
// ============================================================

var productos = document.querySelector('#productos');
var carrito = document.querySelector('#carrito');
var total = document.querySelector('#total');

// 2) Recorre los <li> del carrito, suma sus precios y escribe el total
function calcularTotal() {
  var items = carrito.querySelectorAll('li');
  var suma = 0;

  for (var i = 0; i < items.length; i++) {
    // dataset.price devuelve TEXTO ("10"), así que lo pasamos a número con Number
    suma = suma + Number(items[i].dataset.price);
  }

  total.textContent = suma;
}

// 1) Clic en "Añadir al carrito" (delegación en la lista de productos)
productos.addEventListener('click', function (evento) {
  if (evento.target.classList.contains('anadir')) {
    // El li del producto es el padre del botón pulsado
    var producto = evento.target.parentNode;

    // cloneNode(true) copia el li entero, con todo lo que tiene dentro
    var copia = producto.cloneNode(true);

    // La copia trae el botón "Añadir al carrito": lo quitamos
    copia.querySelector('.anadir').remove();

    // EXTRA: le ponemos un botón "Quitar"
    var botonQuitar = document.createElement('button');
    botonQuitar.textContent = 'Quitar';
    botonQuitar.className = 'quitar';
    copia.appendChild(botonQuitar);

    // Añadimos la copia al carrito
    carrito.appendChild(copia);

    // 3) Recalculamos el total
    calcularTotal();
  }
});

// EXTRA: clic en "Quitar" (delegación en el carrito)
carrito.addEventListener('click', function (evento) {
  if (evento.target.classList.contains('quitar')) {
    // Eliminamos el li que contiene el botón
    evento.target.parentNode.remove();

    // Recalculamos el total
    calcularTotal();
  }
});
