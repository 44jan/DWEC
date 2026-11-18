// ============================================================
// EJERCICIO 3 · Informe de validación de formulario
// ============================================================

function generarInformeDeValidacion() {
  // a) Seleccionamos los inputs y leemos lo que ha escrito el usuario (value)
  var nombre = document.querySelector('#nombre').value;
  var email = document.querySelector('#email').value;

  // b) Seleccionamos el div del informe y lo vaciamos para borrar informes anteriores
  var informe = document.querySelector('#informe-errores');
  informe.textContent = '';

  // c) Comprobamos las dos condiciones y guardamos el resultado (true o false)
  var nombreCorrecto = nombre.length > 3;   // más de 3 caracteres
  var emailCorrecto = email.includes('@');  // contiene una @

  // d) Por cada condición que NO se cumple, creamos un <p> con su error
  if (nombreCorrecto === false) {
    var errorNombre = document.createElement('p'); // creamos el párrafo
    errorNombre.textContent = 'El nombre es incorrecto'; // le ponemos el texto
    informe.appendChild(errorNombre); // lo añadimos al div
  }

  if (emailCorrecto === false) {
    var errorEmail = document.createElement('p');
    errorEmail.textContent = 'El email es incorrecto';
    informe.appendChild(errorEmail);
  }

  // e) Si las dos condiciones se cumplen, mostramos un único mensaje de éxito
  if (nombreCorrecto === true && emailCorrecto === true) {
    var valido = document.createElement('p');
    valido.textContent = 'Formulario válido';
    informe.appendChild(valido);
  }
}

// ------------------------------------------------------------
// Evento: al enviar el formulario generamos el informe
// ------------------------------------------------------------
var formulario = document.querySelector('#formulario');

formulario.addEventListener('submit', function (evento) {
  // Evitamos que la página se recargue al enviar
  evento.preventDefault();
  generarInformeDeValidacion();
});
