// Nombre y apellidos: ______________________________

// Importamos el array de tareas de partida desde datos.js
// (import/export son módulos de JavaScript: datos.js "exporta" y aquí "importamos")
import { tareasIniciales } from './datos.js';

// ============================================================
// Constantes y elementos de la página (ya definidos: no los cambies)
// ============================================================

// Los tres estados posibles, EN ORDEN de izquierda a derecha en el tablero.
// El orden importa: mover una tarea = cambiar su posición dentro de este array
const ESTADOS = ['porhacer', 'encurso', 'hecha'];

// Máximo de horas pendientes que permite el tablero
const LIMITE_HORAS = 40;

// Seleccionamos con querySelector los elementos de la página que vamos a usar
const formularioTarea = document.querySelector('#formulario-tarea');
// formulario.elements permite acceder a un campo por su atributo name
const campoHoras = formularioTarea.elements.horas;
const mensajeFormulario = document.querySelector('#mensaje-formulario');
const buscador = document.querySelector('#buscador');
const botonArchivar = document.querySelector('#boton-archivar');
const tablero = document.querySelector('#tablero');
const listaHoras = document.querySelector('#horas-asignatura');
const progreso = document.querySelector('#progreso');

// Objeto que relaciona cada estado con su columna (<ul>) del HTML
const columnas = {
  porhacer: document.querySelector('#col-porhacer'),
  encurso: document.querySelector('#col-encurso'),
  hecha: document.querySelector('#col-hecha')
};

// Objeto que relaciona cada estado con el contador numérico de su columna
const contadores = {
  porhacer: document.querySelector('#num-porhacer'),
  encurso: document.querySelector('#num-encurso'),
  hecha: document.querySelector('#num-hecha')
};

// Se desactiva la validación del navegador: los mensajes los muestras tú (apartado 1)
formularioTarea.noValidate = true;

// Tareas del tablero. Es una copia: los datos originales no se tocan
// (map recorre el array y { ...tarea } crea una copia de cada objeto)
let tareas = tareasIniciales.map((tarea) => ({ ...tarea }));

// Repinta todo a partir del array de tareas (ya hecha: la usarás en el apartado 4)
const repintar = () => {
  pintarTablero(buscarTareas(tareas, buscador.value));
  pintarResumen(tareas);
};


// ============================================================
// APARTADO 1 · Formulario y validación
// ============================================================

// 1.1 · Devuelve el texto del error de un campo según su `validity` ('' si es válido)
const mensajeDeError = (campo) => {
  // campo.validity es un objeto con booleanos que dicen QUÉ falla en el campo
  // (valueMissing, tooShort, rangeUnderflow...). Lo guardamos en una variable corta
  var v = campo.validity;

  // 1º: campo obligatorio y vacío
  if (v.valueMissing) {
    return 'Este campo es obligatorio';
  }
  // 2º: texto demasiado corto. campo.minLength es el minlength del HTML,
  // así el número sale del propio campo y no lo escribimos a mano
  if (v.tooShort) {
    return 'Escribe al menos ' + campo.minLength + ' caracteres';
  }
  // 3º: número por debajo del mínimo o por encima del máximo.
  // campo.min y campo.max son los atributos min y max del HTML
  if (v.rangeUnderflow || v.rangeOverflow) {
    return 'Debe estar entre ' + campo.min + ' y ' + campo.max;
  }
  // 4º: error personalizado (el que pone comprobarHoras con setCustomValidity).
  // Su texto está guardado en validationMessage
  if (v.customError) {
    return campo.validationMessage;
  }
  // Si no falla nada, devolvemos cadena vacía
  return '';
};

// 1.2 · Muestra u oculta el error de un campo y devuelve si es válido
const validarCampo = (campo) => {
  // Calculamos el mensaje de error del campo
  var mensaje = mensajeDeError(campo);

  // nextElementSibling es el elemento que va justo después del campo:
  // el <small class="error">. Escribimos ahí el mensaje (vacío = no se ve nada)
  campo.nextElementSibling.textContent = mensaje;

  // Si hay mensaje, el campo es inválido: añadimos la clase "invalido" (borde rojo)
  // Si no hay mensaje, se la quitamos
  if (mensaje !== '') {
    campo.classList.add('invalido');
    return false;
  } else {
    campo.classList.remove('invalido');
    return true;
  }
};

// 1.3 · Aplica (o quita) el error personalizado de #horas según el límite de horas pendientes
const comprobarHoras = () => {
  // Sumamos las horas de las tareas que NO están hechas
  var pendientes = 0;
  for (var i = 0; i < tareas.length; i++) {
    if (tareas[i].estado !== 'hecha') {
      pendientes = pendientes + tareas[i].horas;
    }
  }

  // Horas que se están escribiendo ahora. Number('') da 0,
  // así que un campo vacío cuenta como 0 horas
  var escritas = Number(campoHoras.value);

  // Si nos pasamos del límite, marcamos error personalizado con setCustomValidity.
  // Llegar justo a 40 es válido, por eso usamos > y no >=
  if (pendientes + escritas > LIMITE_HORAS) {
    campoHoras.setCustomValidity(
      'Superas el límite de ' + LIMITE_HORAS + ' h pendientes (ahora hay ' + pendientes + ' h)'
    );
  } else {
    // Una cadena vacía quita el error personalizado
    campoHoras.setCustomValidity('');
  }
};

// 1.4 · Deja el formulario como recién cargado
const limpiarFormulario = () => {
  // reset() devuelve cada campo a su valor inicial
  formularioTarea.reset();

  // Quitamos el error personalizado de las horas
  campoHoras.setCustomValidity('');

  // Vaciamos todos los mensajes de error
  var errores = formularioTarea.querySelectorAll('.error');
  for (var i = 0; i < errores.length; i++) {
    errores[i].textContent = '';
  }

  // Quitamos la clase "invalido" de todos los campos que la tengan
  var invalidos = formularioTarea.querySelectorAll('.invalido');
  for (var j = 0; j < invalidos.length; j++) {
    invalidos[j].classList.remove('invalido');
  }
};

// 1.5 · Eventos del formulario (change, input y keydown)
// Usamos DELEGACIÓN: un solo listener en el formulario, y evento.target nos dice
// qué campo concreto lo ha provocado (los eventos "suben" desde el campo al formulario)

// change: ocurre cuando el usuario termina de editar un campo y lo abandona
formularioTarea.addEventListener('change', (evento) => {
  comprobarHoras();
  validarCampo(evento.target);
});

// input: ocurre en cada pulsación mientras se escribe
formularioTarea.addEventListener('input', (evento) => {
  // Solo revalidamos si el campo YA estaba marcado como inválido:
  // así el error desaparece en cuanto se corrige, pero no se avisa
  // de errores mientras se escribe por primera vez
  if (evento.target.classList.contains('invalido')) {
    comprobarHoras();
    validarCampo(evento.target);
  }
});

// keydown: ocurre al pulsar una tecla. Con Escape limpiamos el formulario
formularioTarea.addEventListener('keydown', (evento) => {
  if (evento.key === 'Escape') {
    limpiarFormulario();
  }
});


// ============================================================
// APARTADO 2 · Cálculos con los datos (funciones puras)
// ============================================================
// "Pura" = solo usa lo que recibe por parámetro, no toca la página
// ni modifica la lista original, y devuelve un resultado nuevo

// 2.1 · Tareas cuyo título o asignatura contienen el texto buscado
const buscarTareas = (lista, texto) => {
  // trim() quita espacios al principio y al final; toLowerCase() pasa a minúsculas
  // para no distinguir mayúsculas de minúsculas
  var buscado = texto.trim().toLowerCase();

  // Texto vacío: devolvemos todas las tareas en un array NUEVO (slice() copia el array)
  if (buscado === '') {
    return lista.slice();
  }

  // filter se queda solo con las tareas para las que la función devuelve true
  return lista.filter((tarea) => {
    // includes dice si un texto contiene a otro
    if (tarea.titulo.toLowerCase().includes(buscado)) {
      return true;
    } else if (tarea.asignatura.toLowerCase().includes(buscado)) {
      return true;
    } else {
      return false;
    }
  });
};

// 2.2 · Reparte las tareas en un objeto con una lista por cada estado
const agruparPorEstado = (lista) => {
  // Siempre tiene las tres propiedades, aunque estén vacías
  var grupos = { porhacer: [], encurso: [], hecha: [] };

  // Recorremos la lista en orden y metemos cada tarea en el array de su estado.
  // grupos[tarea.estado] equivale a grupos.porhacer, grupos.encurso o grupos.hecha
  for (var i = 0; i < lista.length; i++) {
    grupos[lista[i].estado].push(lista[i]);
  }

  return grupos;
};

// 2.3 · Suma las horas de cada asignatura, de más a menos horas
const horasPorAsignatura = (lista) => {
  // Paso 1: acumulamos en un objeto { DWEC: 9, DWES: 9, ... }
  var sumas = {};
  for (var i = 0; i < lista.length; i++) {
    var asig = lista[i].asignatura;
    if (sumas[asig] === undefined) {
      // Primera vez que vemos esta asignatura: empezamos en 0
      sumas[asig] = 0;
    }
    sumas[asig] = sumas[asig] + lista[i].horas;
  }

  // Paso 2: convertimos el objeto en un array de { asignatura, horas }
  var resultado = [];
  var nombres = Object.keys(sumas); // Object.keys da la lista de claves del objeto
  for (var j = 0; j < nombres.length; j++) {
    resultado.push({ asignatura: nombres[j], horas: sumas[nombres[j]] });
  }

  // Paso 3: ordenamos. sort llama a esta función con dos elementos (a y b):
  // negativo = a va antes, positivo = b va antes
  resultado.sort((a, b) => {
    if (a.horas !== b.horas) {
      // Más horas primero (b - a ordena de mayor a menor)
      return b.horas - a.horas;
    } else {
      // Empate: orden alfabético con localeCompare
      return a.asignatura.localeCompare(b.asignatura);
    }
  });

  return resultado;
};


// ============================================================
// APARTADO 3 · Pintar la página
// ============================================================

// 3.1 · Devuelve (sin insertarla) la tarjeta <li> de una tarea
const crearTarjeta = (tarea) => {
  // Creamos el <li> y le ponemos las clases: "tarjeta" y la de prioridad
  var li = document.createElement('li');
  li.className = 'tarjeta prioridad-' + tarea.prioridad;
  // dataset.id crea el atributo data-id="..." en el HTML
  li.dataset.id = tarea.id;

  // Título de la tarea. textContent escribe texto plano (más seguro que innerHTML)
  var titulo = document.createElement('strong');
  titulo.className = 'titulo';
  titulo.textContent = tarea.titulo;

  // Línea con asignatura y horas: "DIW · 4 h"
  var meta = document.createElement('span');
  meta.className = 'meta';
  meta.textContent = tarea.asignatura + ' · ' + tarea.horas + ' h';

  // Botón de retroceder
  var botonAtras = document.createElement('button');
  botonAtras.type = 'button';
  botonAtras.dataset.accion = 'retroceder';
  botonAtras.textContent = '←';
  // Desactivado si la tarea está en la primera columna (posición 0 de ESTADOS)
  botonAtras.disabled = ESTADOS.indexOf(tarea.estado) === 0;

  // Botón de avanzar
  var botonAdelante = document.createElement('button');
  botonAdelante.type = 'button';
  botonAdelante.dataset.accion = 'avanzar';
  botonAdelante.textContent = '→';
  // Desactivado si está en la última columna (última posición de ESTADOS)
  botonAdelante.disabled = ESTADOS.indexOf(tarea.estado) === ESTADOS.length - 1;

  // appendChild mete cada elemento dentro del <li>, en este orden
  li.appendChild(titulo);
  li.appendChild(meta);
  li.appendChild(botonAtras);
  li.appendChild(botonAdelante);

  // Devolvemos la tarjeta sin insertarla en la página todavía
  return li;
};

// 3.2 · Reparte las tarjetas de lista en las tres columnas y actualiza los contadores
const pintarTablero = (lista) => {
  // Separamos las tareas por estado
  var grupos = agruparPorEstado(lista);

  // Repetimos lo mismo para cada uno de los tres estados
  for (var i = 0; i < ESTADOS.length; i++) {
    var estado = ESTADOS[i];

    // Vaciamos la columna (textContent = '' borra todos sus hijos)
    columnas[estado].textContent = '';

    // Añadimos una tarjeta por cada tarea de ese estado
    for (var j = 0; j < grupos[estado].length; j++) {
      columnas[estado].appendChild(crearTarjeta(grupos[estado][j]));
    }

    // El contador muestra cuántas tarjetas tiene la columna
    contadores[estado].textContent = grupos[estado].length;
  }
};

// 3.3 · Pinta el resumen: horas por asignatura y progreso
const pintarResumen = (lista) => {
  // --- Horas por asignatura ---
  // Vaciamos la lista antes de rellenarla
  listaHoras.textContent = '';
  var datos = horasPorAsignatura(lista);
  for (var i = 0; i < datos.length; i++) {
    var li = document.createElement('li');
    // Formato "DWES — 9 h" (guion largo con espacios)
    li.textContent = datos[i].asignatura + ' — ' + datos[i].horas + ' h';
    listaHoras.appendChild(li);
  }

  // --- Progreso ---
  // Contamos las tareas hechas
  var hechas = 0;
  for (var j = 0; j < lista.length; j++) {
    if (lista[j].estado === 'hecha') {
      hechas = hechas + 1;
    }
  }

  // Porcentaje redondeado. Si no hay tareas, 0 (así evitamos dividir entre cero)
  var porcentaje = 0;
  if (lista.length > 0) {
    porcentaje = Math.round((hechas / lista.length) * 100);
  }

  progreso.textContent = 'Hechas: ' + hechas + ' de ' + lista.length + ' (' + porcentaje + ' %)';
};


// ============================================================
// APARTADO 4 · Interacción
// ============================================================

// 4.1 · Mueve una tarea `paso` columnas (+1 avanza, -1 retrocede)
const moverTarea = (id, paso) => {
  // Buscamos la tarea con ese id
  var tarea = null;
  for (var i = 0; i < tareas.length; i++) {
    if (tareas[i].id === id) {
      tarea = tareas[i];
    }
  }

  // Si no existe, no hacemos nada
  if (tarea === null) {
    return;
  }

  // Calculamos la nueva posición dentro de ESTADOS
  var nueva = ESTADOS.indexOf(tarea.estado) + paso;

  // Si se saldría de las tres columnas, no hacemos nada
  if (nueva < 0 || nueva >= ESTADOS.length) {
    return;
  }

  // Cambiamos el estado de la tarea (modificamos el array, no la página)
  tarea.estado = ESTADOS[nueva];
};

// 4.2 · Añade una tarea nueva al array y la devuelve
const anadirTarea = (datos) => {
  // Buscamos el mayor id existente (si no hay tareas, queda en 0)
  var mayor = 0;
  for (var i = 0; i < tareas.length; i++) {
    if (tareas[i].id > mayor) {
      mayor = tareas[i].id;
    }
  }

  // Creamos la tarea nueva: id = mayor + 1 (1 si no había tareas) y estado 'porhacer'
  var nueva = {
    id: mayor + 1,
    titulo: datos.titulo,
    asignatura: datos.asignatura,
    horas: datos.horas,
    estado: 'porhacer',
    prioridad: datos.prioridad
  };

  // push la añade al final del array
  tareas.push(nueva);
  return nueva;
};

// 4.3 · Elimina del array las tareas hechas y devuelve cuántas eran
const archivarHechas = () => {
  var antes = tareas.length;

  // Nos quedamos solo con las que NO están hechas
  tareas = tareas.filter((tarea) => tarea.estado !== 'hecha');

  // La diferencia de tamaño es el número de tareas archivadas (0 si no había ninguna)
  return antes - tareas.length;
};

// 4.4 · Eventos del tablero, del buscador y del botón «Archivar hechas», y primer pintado

// Un único click en todo el tablero (delegación de eventos)
tablero.addEventListener('click', (evento) => {
  // closest sube desde donde se hizo click hasta encontrar un botón con data-accion.
  // Si el click no fue en uno de esos botones, devuelve null
  var boton = evento.target.closest('button[data-accion]');
  if (boton === null) {
    return;
  }

  // Buscamos la tarjeta del botón y leemos su data-id.
  // dataset devuelve TEXTO, así que lo pasamos a número con Number
  var id = Number(boton.closest('.tarjeta').dataset.id);

  // Según el botón, movemos +1 o -1
  if (boton.dataset.accion === 'avanzar') {
    moverTarea(id, 1);
  } else if (boton.dataset.accion === 'retroceder') {
    moverTarea(id, -1);
  }

  // Primero se modifica el array y después se repinta
  repintar();
});

// Cada vez que se escribe en el buscador, repintamos con el filtro aplicado
buscador.addEventListener('input', () => {
  repintar();
});

// Botón de archivar: borra las hechas y repinta
botonArchivar.addEventListener('click', () => {
  archivarHechas();
  repintar();
});

// Primer pintado al cargar la página
repintar();

// 4.5 · Envío del formulario
formularioTarea.addEventListener('submit', (evento) => {
  // 1. Evitamos que la página se recargue (envío real del formulario)
  evento.preventDefault();

  // 2. Comprobamos el límite de horas
  comprobarHoras();

  // 3. Validamos TODOS los campos (sin parar en el primero) para mostrar todos los errores.
  // Guardamos el primer campo inválido para darle el foco
  var campos = formularioTarea.querySelectorAll('input, select, textarea');
  var primerInvalido = null;
  for (var i = 0; i < campos.length; i++) {
    var valido = validarCampo(campos[i]);
    if (valido === false && primerInvalido === null) {
      primerInvalido = campos[i];
    }
  }

  // 4. Si hay algún error, foco al primer campo inválido y no hacemos nada más
  if (primerInvalido !== null) {
    primerInvalido.focus();
    return;
  }

  // 5. Todo correcto: título sin espacios sobrantes y horas como número
  var titulo = formularioTarea.elements.titulo.value.trim();
  anadirTarea({
    titulo: titulo,
    asignatura: formularioTarea.elements.asignatura.value,
    horas: Number(campoHoras.value),
    prioridad: formularioTarea.elements.prioridad.value
  });
  limpiarFormulario();
  repintar();

  // 6. Mensaje de confirmación (se escribe después de limpiar el formulario)
  mensajeFormulario.textContent = 'Tarea añadida: ' + titulo;
});