var estudiantes = [ // array de estudiantes
    { nombre: "Marta", apellidos: "Gomez Ruiz", calificacion: 8, aprobado: true }, // estudiante coherente
    { nombre: "Pablo", apellidos: "Diaz Soto", calificacion: 3, aprobado: false }, // estudiante coherente
    { nombre: "Lucia", apellidos: "Fernandez Pardo", calificacion: 5, aprobado: true }, // estudiante coherente
    { nombre: "Carlos", apellidos: "Vega Lana", calificacion: 4, aprobado: true } // incoherente a proposito
]; // fin del array

var estudiantesConId = estudiantes.map(function (e, i) { // map con el indice i
    return { ...e, id: i + 1 }; // copio el estudiante y le añado id
}); // fin del map
console.log(estudiantesConId); // muestro los estudiantes con id

var aprobados = estudiantes.filter(function (e) { // filter sobre los estudiantes
    return e.calificacion >= 5; // solo los de nota 5 o mas
}); // fin del filter

for (var i = 0; i < aprobados.length; i++) { // recorro los aprobados
    console.log(`¡Felicidades ${aprobados[i].nombre}, has aprobado con ${aprobados[i].calificacion}!`); // mensaje
} // fin del for

for (var i = 0; i < estudiantes.length; i++) { // recorro el array original
    var e = estudiantes[i]; // guardo el estudiante actual
    var coherente; // aqui guardo si es coherente o no
    if (e.calificacion >= 5 && e.aprobado === true) { // nota alta y aprobado true
        coherente = true; // es coherente
    } else if (e.calificacion < 5 && e.aprobado === false) { // nota baja y aprobado false
        coherente = true; // es coherente
    } else { // cualquier otro caso
        coherente = false; // es incoherente
    } // fin del if/else
    if (coherente === false) { // si hay incoherencia
        console.log(`⚠️ Incoherencia en el registro de ${e.nombre}: calificación = ${e.calificacion}, aprobado = ${e.aprobado}`); // aviso
    } // fin del if
} // fin del for
