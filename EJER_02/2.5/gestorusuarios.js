// Crea y devuelve un objeto que representa a un usuario
export function crearPerfil(nombre, email, edad) {
  return {
    nombre: nombre,
    email: email,
    edad: edad,
  };
}

// Devuelve un string con los datos del usuario (exportación por defecto)
export default function mostrarPerfil(usuario) {
  return "Nombre: " + usuario.nombre + ", Email: " + usuario.email + ", Edad: " + usuario.edad;
}

// Devuelve true si el usuario tiene 18 años o más
export function esMayorDeEdad(usuario) {
  if (usuario.edad >= 18) {
    return true;
  } else {
    return false;
  }
}

// Devuelve un array solo con los usuarios mayores de edad
export function obtenerMayoresDeEdad(usuarios) {
  return usuarios.filter(esMayorDeEdad); // filter usa esMayorDeEdad para decidir quién pasa
}

// Calcula la edad promedio de un array de usuarios
export function calcularPromedioEdad(usuarios) {
  // reduce va sumando las edades; empieza en 0
  var suma = usuarios.reduce(function (acumulado, usuario) {
    return acumulado + usuario.edad;
  }, 0);
  return suma / usuarios.length; // suma total entre número de usuarios
}