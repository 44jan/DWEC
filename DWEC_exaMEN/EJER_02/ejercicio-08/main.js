// main.js · EJERCICIO 02-08
//
// Archivo PRINCIPAL (el que se ejecuta con node main.js).
// Importa las funciones de empleados.js y las prueba una detrás de otra.
// El orden de lo que ocurre es: añadir 2 empleados → buscar por departamento →
// calcular media → ordenar → eliminar uno → ordenar de nuevo.

import {
    agregarEmpleado,
    eliminarEmpleado,
    buscarPorDepartamento,
    calcularSalarioPromedio,
    obtenerEmpleadosOrdenadosPorSalario
} from "./empleados.js"

// Creamos dos empleados nuevos (objetos con los mismos datos que los demás).
const empleado1 = {
    id: 6,
    nombre: "Ana",
    departamento: "Informática",
    salario: 27000
}

const empleado2 = {
    id: 7,
    nombre: "David",
    departamento: "Ventas",
    salario: 24000
}

// Los añadimos a la lista (ahora hay 7 empleados).
agregarEmpleado(empleado1)
agregarEmpleado(empleado2)

// Mostramos solo los empleados de Informática (Juan, Pedro y Ana).
console.log(buscarPorDepartamento("Informática"))

// Mostramos el salario medio de los 7 empleados.
console.log(calcularSalarioPromedio())

// Mostramos los empleados del que más cobra al que menos.
console.log(obtenerEmpleadosOrdenadosPorSalario())

// Eliminamos a María (la que tiene id 2).
eliminarEmpleado(2)

// Volvemos a mostrar la lista ordenada: ya no aparece María.
console.log(obtenerEmpleadosOrdenadosPorSalario())
