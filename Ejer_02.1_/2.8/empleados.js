var empleados = [
  { id: 1, nombre: "Ana López", departamento: "Ventas", salario: 2200 },
  { id: 2, nombre: "Carlos Ruiz", departamento: "IT", salario: 3100 },
  { id: 3, nombre: "Lucía Fernández", departamento: "IT", salario: 2900 }
];

function agregarEmpleado(empleado) {
  empleados.push(empleado);
}

function eliminarEmpleado(id) {
  var indice = empleados.findIndex((empleado) => empleado.id === id);
  if (indice !== -1) {
    empleados.splice(indice, 1);
  }
}

function buscarPorDepartamento(departamento) {
  return empleados.filter((empleado) => empleado.departamento === departamento);
}

function calcularSalarioPromedio() {
  if (empleados.length === 0) {
    return 0;
  } else {
    var total = empleados.reduce((suma, empleado) => suma + empleado.salario, 0);
    return total / empleados.length;
  }
}

function obtenerEmpleadosOrdenadosPorSalario() {
  return empleados.slice().sort((a, b) => b.salario - a.salario);
}

module.exports = {
  agregarEmpleado,
  eliminarEmpleado,
  buscarPorDepartamento,
  calcularSalarioPromedio,
  obtenerEmpleadosOrdenadosPorSalario
};