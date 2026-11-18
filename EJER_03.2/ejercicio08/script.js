// ============================================================
// EJERCICIO 8 · Ordenar una lista
// ============================================================

var lista = document.querySelector('#lista');
var botonOrdenar = document.querySelector('#boton-ordenar');

// 1) Al hacer clic en "Ordenar"
botonOrdenar.addEventListener('click', function () {
  // 2) Seleccionamos todos los <li> (devuelve una NodeList)
  var nodos = lista.querySelectorAll('li');

  // 3) Convertimos la NodeList en un Array para poder usar sort()
  var elementos = Array.from(nodos);

  // 4) Ordenamos por el texto. sort compara dos elementos (a y b):
  //    localeCompare devuelve negativo, 0 o positivo según el orden alfabético
  elementos.sort(function (a, b) {
    return a.textContent.localeCompare(b.textContent);
  });

  // 5) Vaciamos la lista original
  lista.textContent = '';

  // 6) Añadimos los elementos ya ordenados. Los <li> siguen existiendo
  //    en memoria, así que podemos volver a insertarlos
  for (var i = 0; i < elementos.length; i++) {
    lista.appendChild(elementos[i]);
  }
});
