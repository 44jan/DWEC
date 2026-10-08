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
