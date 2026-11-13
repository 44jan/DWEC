// empleados.js · EJERCICIO 02-08 (ejercicio completo)
//
// Junta TODO lo aprendido: añadir (push), borrar (findIndex + splice),
// filtrar (filter), sumar (reduce) y ordenar (sort).
// Es el tipo de ejercicio que puede salir en el examen.
//
// RECORDATORIO RÁPIDO:
//   push ........ añade al final de la lista (cambia la original)
//   findIndex ... posición de un elemento (o -1)
//   splice ...... borra elementos de la lista (cambia la original)
//   filter ...... lista NUEVA con los elementos que cumplen algo
//   reduce ...... junta toda la lista en un único valor (suma, etc.)
//   sort ........ ordena la lista (cambia la original, salvo que antes la copies)

// Lista (array) de objetos: cada empleado es una ficha con id, nombre, departamento y salario.
const empleados = [
    {
        id: 1,
        nombre: "Juan",
        departamento: "Informática",
        salario: 22000
    },
    {
        id: 2,
        nombre: "María",
        departamento: "Ventas",
        salario: 20000
    },
    {
        id: 3,
        nombre: "Pedro",
        departamento: "Informática",
        salario: 25000
    },
    {
        id: 4,
        nombre: "Laura",
        departamento: "Recursos Humanos",
        salario: 23000
    },
    {
        id: 5,
        nombre: "Carlos",
        departamento: "Ventas",
        salario: 21000
    }
]

// AÑADIR UN EMPLEADO: push lo coloca al final de la lista.
function agregarEmpleado(empleado) {
    empleados.push(empleado)
}

// ELIMINAR UN EMPLEADO POR SU ID (2 pasos)
function eliminarEmpleado(id) {
    // PASO 1: buscar la posición del empleado cuyo id coincide.
    const indice = empleados.findIndex(function(empleado) {
        return empleado.id === id
    })

    // PASO 2: borrar 1 elemento en esa posición.
    empleados.splice(indice, 1)
}

// EMPLEADOS DE UN DEPARTAMENTO
// filter devuelve TODOS los que cumplen (find solo devolvería el primero).
// Si no hay ninguno, devuelve una lista vacía [].
function buscarPorDepartamento(departamento) {
    const resultado = empleados.filter(function(empleado) {
        if(empleado.departamento === departamento) {
            return empleado
        }
    })

    return resultado
}

// SALARIO MEDIO = (suma de todos los salarios) / (cuántos empleados hay)
function calcularSalarioPromedio() {
    // reduce suma los salarios: la mochila "total" empieza en 0 y en cada
    // vuelta le sumamos el salario del empleado actual.
    const total = empleados.reduce(function(total, empleado) {
        return total + empleado.salario
    }, 0)

    // Dividimos la suma entre el número de empleados (.length = cuántos hay en la lista).
    return total / empleados.length
}

// DEVOLVER LOS EMPLEADOS ORDENADOS DE MAYOR A MENOR SALARIO,
// sin cambiar la lista original.
function obtenerEmpleadosOrdenadosPorSalario() {
    // [...empleados] hace una COPIA de la lista (los tres puntos sacan todos los
    // elementos y los meten en una lista nueva). Así sort cambia solo la copia.
    const resultado = [...empleados]

    // Regla de comparación (recibe dos empleados). Devuelve 1 si el primero
    // cobra MENOS (va después) y -1 si cobra MÁS (va antes) → de mayor a menor.
    function compare(empleado1, empleado2) {
        if(empleado1.salario < empleado2.salario) {
            return 1
        } else if(empleado1.salario > empleado2.salario) {
            return -1
        } else {
            return 0
        }
    }

    // Ordenamos la copia con nuestra regla.
    resultado.sort(compare)

    // Devolvemos la copia ordenada. La lista "empleados" sigue como estaba.
    return resultado
}

// Lista de funciones que otros archivos pueden importar.
export {
    agregarEmpleado,
    eliminarEmpleado,
    buscarPorDepartamento,
    calcularSalarioPromedio,
    obtenerEmpleadosOrdenadosPorSalario
}
