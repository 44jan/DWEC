// Importamos la función por defecto (sin llaves) y las demás (con llaves)
// crearPerfil se importa con el alias "crear"
import mostrarPerfil, {
  crearPerfil as crear,
  obtenerMayoresDeEdad,
  calcularPromedioEdad,
} from "./gestorusuarios.js";

// Array con 5 usuarios de distintas edades
var usuarios = [
  crear("Ana", "ana@correo.com", 25),
  crear("Luis", "luis@correo.com", 17),
  crear("Marta", "marta@correo.com", 32),
  crear("Pablo", "pablo@correo.com", 15),
  crear("Sara", "sara@correo.com", 18),
];

// Filtramos solo los mayores de edad
var mayores = obtenerMayoresDeEdad(usuarios);

// Encabezado
console.log("Usuarios mayores de edad:");

// Recorremos los mayores y mostramos cada perfil
for (var usuario of mayores) {
  console.log(mostrarPerfil(usuario));
}

// Calculamos el promedio con TODOS los usuarios
var promedio = calcularPromedioEdad(usuarios);
console.log("La edad promedio de los usuarios es: " + promedio);