// ============================================================
// EJERCICIO 5 · Lista de tareas avanzada
// ============================================================

// Seleccionamos los tres elementos que vamos a usar
var input = document.querySelector('#texto');
var botonAnadir = document.querySelector('#boton-anadir');
var lista = document.querySelector('#lista');

// 1) Clic en "Añadir"
botonAnadir.addEventListener('click', function () {
  // Leemos el texto y quitamos espacios sobrantes con trim()
  var texto = input.value.trim();

  // Solo añadimos si no está vacío
  if (texto !== '') {
    // Creamos el <li> y le ponemos el texto
    var li = document.createElement('li');
    li.textContent = texto;

    // 2) Creamos el botón "Eliminar" y lo metemos dentro del <li>
    var botonEliminar = document.createElement('button');
    botonEliminar.textContent = 'Eliminar';
    botonEliminar.className = 'eliminar'; // clase para reconocerlo luego
    li.appendChild(botonEliminar);

    // Añadimos el <li> a la lista
    lista.appendChild(li);

    // Vaciamos el input y le devolvemos el foco para escribir otra tarea
    input.value = '';
    input.focus();
  }
});

// 3) Clic en "Eliminar" (delegación: un solo listener en la lista,
//    porque los botones se crean dinámicamente y no existen al cargar la página)
lista.addEventListener('click', function (evento) {
  // Comprobamos que se ha pulsado un botón con la clase "eliminar"
  if (evento.target.classList.contains('eliminar')) {
    // parentNode es el padre del botón: el <li> que lo contiene
    var li = evento.target.parentNode;
    // remove() elimina el elemento de la página
    li.remove();
  }
});
