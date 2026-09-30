// 1. Objeto usuario
var usuario = {
  nombre: "Ana",
  email: "ana@correo.com",
};

// 2. Objeto perfil
var perfil = {
  puesto: "Desarrolladora",
  empresa: "Tech SL",
};

// 3. Spread operator: copia las propiedades de usuario y agrega perfil como propiedad
var empleado = {
  ...usuario, // copia nombre y email
  perfil: perfil, // agrega el perfil dentro de empleado
};

console.log(empleado);

// 4. Optional chaining: si perfil.direccion no existe, devuelve undefined en vez de dar error
var ciudad = empleado.perfil?.direccion?.ciudad;

// 5. Nullish coalescing: si ciudad es null o undefined, usa el texto por defecto
var ciudadFinal = ciudad ?? "Ciudad no especificada";

console.log(ciudadFinal); // "Ciudad no especificada"