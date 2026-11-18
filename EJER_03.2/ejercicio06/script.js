// ============================================================
// EJERCICIO 6 · Pestañas de contenido (tabs)
// ============================================================

// Div que contiene los botones: en él pondremos el único listener (delegación)
var pestanas = document.querySelector('#pestanas');

pestanas.addEventListener('click', function (evento) {
  // Solo actuamos si se ha hecho clic en un botón
  if (evento.target.tagName === 'BUTTON') {
    // 3) Primero ocultamos TODOS los contenidos
    var contenidos = document.querySelectorAll('.contenido');
    for (var i = 0; i < contenidos.length; i++) {
      contenidos[i].classList.add('oculto');
    }

    // 4) Leemos el data-id del botón pulsado (por ejemplo "tab2")
    var id = evento.target.dataset.id;

    // Buscamos el contenido cuyo id coincide y le quitamos la clase "oculto"
    var contenidoElegido = document.getElementById(id);
    contenidoElegido.classList.remove('oculto');
  }
});

// Al cargar la página mostramos la primera pestaña
document.getElementById('tab1').classList.remove('oculto');
