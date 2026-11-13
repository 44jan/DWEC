// EJERCICIO 1.6 · Datos anidados (listas dentro de objetos dentro de listas)
//
// CONCEPTOS PARA PRINCIPIANTES:
//  - Los datos pueden estar "metidos unos dentro de otros". Aquí hay:
//      una LISTA de cursos → cada curso es un OBJETO → que tiene una LISTA de estudiantes
//      → cada estudiante es otro OBJETO.
//  - Para llegar a un dato se va entrando paso a paso:
//        cursos[1].estudiantes[0].nombre   →  "Ivan"
//        (curso nº 1 → su lista de estudiantes → el estudiante nº 0 → su nombre)
//    (Recuerda: las posiciones empiezan en 0.)
//  - CÓMO SE CALCULA UNA MEDIA: se suman todas las notas y se divide entre cuántas hay.
//    Se hace con un bucle y una variable "suma" que empieza en 0 y va creciendo.
//  - CÓMO SE COMPRUEBA "¿HAY ALGUNO...?": se usa una variable "bandera" (hayBajas)
//    que empieza en false; si en el bucle encontramos uno, la ponemos a true.
//  - Dos bucles uno dentro de otro (for dentro de for): el de fuera recorre los
//    cursos y, por cada curso, el de dentro recorre sus estudiantes.

var cursos = [ // array de cursos
    { // curso 1
        nombre: "Programacion", // nombre del curso
        profesor: "Elena Marin", // profesor del curso
        estudiantes: [ // estudiantes del curso
            { nombre: "Ana", calificacion: 9 }, // estudiante 1
            { nombre: "Raul", calificacion: 8 }, // estudiante 2
            { nombre: "Sara", calificacion: 7 } // estudiante 3
        ] // fin de estudiantes
    }, // fin curso 1
    { // curso 2
        nombre: "Bases de Datos", // nombre del curso
        profesor: "Jorge Prieto", // profesor del curso
        estudiantes: [ // estudiantes del curso
            { nombre: "Ivan", calificacion: 6 }, // estudiante 1
            { nombre: "Noa", calificacion: 3 }, // estudiante 2 con nota muy baja
            { nombre: "Hugo", calificacion: 7 } // estudiante 3
        ] // fin de estudiantes
    }, // fin curso 2
    { // curso 3
        nombre: "Sistemas", // nombre del curso
        profesor: "Marta Salas", // profesor del curso
        estudiantes: [ // estudiantes del curso
            { nombre: "Eva", calificacion: 8 }, // estudiante 1
            { nombre: "Leo", calificacion: 7 }, // estudiante 2
            { nombre: "Mia", calificacion: 9 } // estudiante 3
        ] // fin de estudiantes
    }, // fin curso 3
    { // curso 4
        nombre: "Redes", // nombre del curso
        profesor: "Pedro Cano", // profesor del curso
        estudiantes: [ // estudiantes del curso
            { nombre: "Dani", calificacion: 5 }, // estudiante 1
            { nombre: "Alba", calificacion: 4 }, // estudiante 2
            { nombre: "Bruno", calificacion: 6 } // estudiante 3
        ] // fin de estudiantes
    } // fin curso 4
]; // fin del array de cursos

var resumenCursos = cursos.map(function (curso) { // map sobre cada curso
    var suma = 0; // acumulador de notas
    for (var i = 0; i < curso.estudiantes.length; i++) { // recorro los estudiantes
        suma = suma + curso.estudiantes[i].calificacion; // sumo su nota
    } // fin del for
    return { // devuelvo el resumen del curso
        nombreCurso: curso.nombre, // nombre del curso
        promedioCalificaciones: suma / curso.estudiantes.length // promedio
    }; // fin del objeto
}); // fin del map
console.log(resumenCursos); // muestro el resumen

var cursosDestacados = resumenCursos.filter(function (r) { // filter sobre el resumen
    return r.promedioCalificaciones >= 7; // solo promedio 7 o mas
}); // fin del filter

for (var i = 0; i < cursosDestacados.length; i++) { // recorro los destacados
    var d = cursosDestacados[i]; // curso destacado actual
    console.log(`📘 El curso ${d.nombreCurso} tiene un promedio de ${d.promedioCalificaciones} y es considerado destacado.`); // mensaje
} // fin del for

for (var i = 0; i < cursos.length; i++) { // recorro todos los cursos
    var hayBajas = false; // de entrada no hay notas bajas
    for (var j = 0; j < cursos[i].estudiantes.length; j++) { // recorro sus estudiantes
        if (cursos[i].estudiantes[j].calificacion < 4) { // si la nota es menor que 4
            hayBajas = true; // marco que hay notas bajas
        } // fin del if
    } // fin del for interno
    if (hayBajas) { // si encontre alguna nota baja
        console.log(`⚠️ Atención: En el curso ${cursos[i].nombre} hay estudiantes con calificaciones muy bajas.`); // aviso
    } // fin del if
} // fin del for
