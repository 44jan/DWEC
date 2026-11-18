// ============================================================
// EJERCICIO 9 · Filtro de búsqueda manual en una lista
// ============================================================

// Array de objetos con las ciudades y su país
var ciudades = [
  { ciudad: 'Madrid', pais: 'España' },
  { ciudad: 'Barcelona', pais: 'España' },
  { ciudad: 'París', pais: 'Francia' },
  { ciudad: 'Lyon', pais: 'Francia' },
  { ciudad: 'Roma', pais: 'Italia' },
  { ciudad: 'Milán', pais: 'Italia' }
];

var lista = document.querySelector('#lista-ciudades');
var buscador = document.querySelector('#buscador');

// Pinta la lista en la página: un <li> por cada ciudad
function pintarCiudades() {
  for (var i = 0; i < ciudades.length; i++) {
    var li = document.createElement('li');
    li.textContent = ciudades[i].ciudad + ' (' + ciudades[i].pais + ')';
    // Guardamos el país en un data-pais para poder filtrar después
    li.dataset.pais = ciudades[i].pais;
    lista.appendChild(li);
  }
}

// Función principal: recibe el texto (país) y oculta los <li> que no lo contienen
function filtrarPorPais(texto) {
  // Pasamos a minúsculas y quitamos espacios para comparar sin problemas
  var buscado = texto.trim().toLowerCase();

  // Seleccionamos todos los <li> de la lista
  var items = lista.querySelectorAll('li');

  // Recorremos cada <li>
  for (var i = 0; i < items.length; i++) {
    var pais = items[i].dataset.pais.toLowerCase();

    if (pais.includes(buscado)) {
      // Contiene el texto: lo mostramos (cadena vacía = estilo por defecto)
      items[i].style.display = '';
    } else {
      // No lo contiene: lo ocultamos
      items[i].style.display = 'none';
    }
  }
}

// Cada vez que se escribe en el buscador, filtramos
buscador.addEventListener('input', function () {
  filtrarPorPais(buscador.value);
});

// Pintamos la lista al cargar la página
pintarCiudades();
