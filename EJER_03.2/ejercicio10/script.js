// ============================================================
// EJERCICIO 10 · Generador de "Lorem Ipsum"
// ============================================================

var cantidad = document.querySelector('#cantidad');
var botonGenerar = document.querySelector('#boton-generar');
var resultado = document.querySelector('#resultado');

// Texto de relleno que se repetirá en cada párrafo
var textoLorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

// 1) Al hacer clic en "Generar"
botonGenerar.addEventListener('click', function () {
  // 2) Obtenemos el número del input. value es texto, así que usamos Number
  var numero = Number(cantidad.value);

  // 3) Vaciamos el resultado por si ya tenía contenido
  resultado.textContent = '';

  // 6) DocumentFragment: caja en memoria donde construimos todos los párrafos
  var fragmento = document.createDocumentFragment();

  // 4) Bucle que se repite "numero" veces
  for (var i = 0; i < numero; i++) {
    // 5) Creamos un <p>, le ponemos el texto y lo añadimos al fragmento
    var parrafo = document.createElement('p');
    parrafo.textContent = textoLorem;
    fragmento.appendChild(parrafo);
  }

  // Pasamos todos los párrafos a la página de una sola vez
  resultado.appendChild(fragmento);
});
