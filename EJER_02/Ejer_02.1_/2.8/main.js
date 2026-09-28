var gestion = require("./empleados-2.8");

gestion.agregarEmpleado({ id: 4, nombre: "Marta Gómez", departamento: "RRHH", salario: 2500 });
gestion.agregarEmpleado({ id: 5, nombre: "Pablo Díaz", departamento: "Ventas", salario: 2000 });
gestion.agregarEmpleado({ id: 6, nombre: "Elena Martín", departamento: "IT", salario: 3500 });

console.log("Empleados de IT:");
console.log(gestion.buscarPorDepartamento("IT"));

console.log("Salario promedio: " + gestion.calcularSalarioPromedio());

console.log("Ordenados por salario:");
console.log(gestion.obtenerEmpleadosOrdenadosPorSalario());

gestion.eliminarEmpleado(5);
console.log("Salario promedio tras eliminar el id 5: " + gestion.calcularSalarioPromedio());