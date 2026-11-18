// ============================================================
// EJERCICIO 1 · Galería de imágenes programada
// ============================================================

// Función que cambia la imagen grande por la de la miniatura que está en la posición "indice"
function cambiarImagenPrincipal(indice) {
  // a) Seleccionamos TODAS las miniaturas. querySelectorAll devuelve una NodeList
  //    (una lista parecida a un array, donde cada elemento tiene su posición: 0, 1, 2, 3)
  var miniaturas = document.querySelectorAll('.miniatura');

  // b) Con el índice accedemos a la miniatura correcta dentro de la NodeList
  var miniatura = miniaturas[indice];

  // c) Obtenemos el atributo src (la dirección de la imagen) de esa miniatura
  var nuevaRuta = miniatura.getAttribute('src');

  // d) Seleccionamos la imagen grande por su id y cambiamos su src por el de la miniatura
  var imagenPrincipal = document.querySelector('#imagen-principal');
  imagenPrincipal.setAttribute('src', nuevaRuta);
}

// EXTRA: añade la clase "activa" a la miniatura en la posición "indice"
// y se la quita a todas las demás
function resaltarMiniatura(indice) {
  // Volvemos a seleccionar todas las miniaturas
  var miniaturas = document.querySelectorAll('.miniatura');

  // Recorremos la lista con un bucle for: i vale 0, 1, 2, 3...
  for (var i = 0; i < miniaturas.length; i++) {
    if (i === indice) {
      // Es la miniatura elegida: le ponemos la clase (borde de color)
      miniaturas[i].classList.add('activa');
    } else {
      // No es la elegida: nos aseguramos de que no tenga la clase
      miniaturas[i].classList.remove('activa');
    }
  }
}

// ------------------------------------------------------------
// Conectamos las funciones con los clics del usuario
// ------------------------------------------------------------

// Volvemos a seleccionar las miniaturas para poder escuchar sus clics
var listaMiniaturas = document.querySelectorAll('.miniatura');

// Recorremos cada miniatura y le asignamos un evento click
for (var i = 0; i < listaMiniaturas.length; i++) {
  // Truco importante: usamos una función que recibe "posicion" para
  // "guardar" el valor de i de cada vuelta del bucle
  (function (posicion) {
    listaMiniaturas[posicion].addEventListener('click', function () {
      cambiarImagenPrincipal(posicion);
      resaltarMiniatura(posicion);
    });
  })(i);
}

// Al cargar la página, dejamos resaltada la primera miniatura
resaltarMiniatura(0);
