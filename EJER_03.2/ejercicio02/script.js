// ============================================================
// EJERCICIO 2 · Control manual del acordeón de FAQ
// ============================================================

// Función que esconde TODAS las respuestas
function ocultarTodasLasRespuestas() {
  // Seleccionamos todos los párrafos que hay dentro de la lista con id "faq"
  var respuestas = document.querySelectorAll('#faq p');

  // Recorremos todos los párrafos y les ponemos la clase "oculto"
  for (var i = 0; i < respuestas.length; i++) {
    // add no duplica la clase si ya la tenía, así que es seguro usarlo
    respuestas[i].classList.add('oculto');
  }
}

// Función que recibe un <h2> (la pregunta) y muestra su respuesta
function revelarRespuesta(pregunta) {
  // Primero escondemos todas, para que solo haya una visible a la vez
  ocultarTodasLasRespuestas();

  // nextElementSibling es el elemento hermano que va justo después del h2: el <p>
  var respuesta = pregunta.nextElementSibling;

  // Le quitamos la clase "oculto" para que se vea
  respuesta.classList.remove('oculto');
}

// ------------------------------------------------------------
// Eventos: delegación (un solo listener en la lista)
// ------------------------------------------------------------
var lista = document.querySelector('#faq');

lista.addEventListener('click', function (evento) {
  // evento.target es el elemento exacto donde se hizo clic.
  // tagName devuelve el nombre de la etiqueta en MAYÚSCULAS
  if (evento.target.tagName === 'H2') {
    revelarRespuesta(evento.target);
  }
});
