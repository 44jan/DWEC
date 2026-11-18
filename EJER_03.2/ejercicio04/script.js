// ============================================================
// EJERCICIO 4 · Constructor de tabla dinámica
// ============================================================

// 1) Array de objetos con los datos
var usuarios = [
  { nombre: 'Ana', edad: 25 },
  { nombre: 'Luis', edad: 30 },
  { nombre: 'Marta', edad: 22 }
];

// 2) Función que recibe el array y construye la tabla
function construirTabla(datos) {
  // 4) Un DocumentFragment es una "caja" en memoria: construimos todo dentro
  //    y solo al final lo pasamos a la página de una vez (más eficiente)
  var fragmento = document.createDocumentFragment();

  // 3) Creamos el elemento <table>
  var tabla = document.createElement('table');

  // Fila de cabecera con los títulos de las columnas (extra: hace la tabla más clara)
  var filaCabecera = document.createElement('tr');
  var thNombre = document.createElement('th');
  thNombre.textContent = 'Nombre';
  var thEdad = document.createElement('th');
  thEdad.textContent = 'Edad';
  filaCabecera.appendChild(thNombre);
  filaCabecera.appendChild(thEdad);
  tabla.appendChild(filaCabecera);

  // Recorremos el array: cada usuario es una fila <tr>
  for (var i = 0; i < datos.length; i++) {
    var fila = document.createElement('tr');

    // Celda con el nombre
    var celdaNombre = document.createElement('td');
    celdaNombre.textContent = datos[i].nombre;

    // Celda con la edad
    var celdaEdad = document.createElement('td');
    celdaEdad.textContent = datos[i].edad;

    // Metemos las celdas en la fila y la fila en la tabla
    fila.appendChild(celdaNombre);
    fila.appendChild(celdaEdad);
    tabla.appendChild(fila);
  }

  // Metemos la tabla dentro del fragmento
  fragmento.appendChild(tabla);

  // 5) Añadimos el fragmento al div. Al hacerlo, su contenido (la tabla)
  //    pasa a la página y el fragmento queda vacío
  var contenedor = document.querySelector('#contenedor-tabla');
  contenedor.appendChild(fragmento);
}

// Llamamos a la función al cargar la página
construirTabla(usuarios);
