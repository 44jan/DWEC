// EJERCICIO 1.1 · Variables, tipos de datos y textos con variables
//
// CONCEPTOS PARA PRINCIPIANTES:
//  - Una VARIABLE es una "caja con nombre" donde guardas un dato.
//  - const → la caja NO se puede volver a llenar con otro valor.
//  - let   → la caja SÍ se puede cambiar más adelante.
//  - Regla fácil: usa const siempre, y let solo si el valor va a cambiar.

// Guardamos un texto (string). Los textos van entre comillas.
// Es const porque el nombre no va a cambiar.
const nombre = "Aday"
// Guardamos un número. Los números van SIN comillas.
// Es let porque más abajo vamos a cambiar la edad.
let edad = 19
// Guardamos un valor lógico (boolean): solo puede ser true (verdadero) o false (falso).
let tieneMascota = true

// Cambiamos el valor de las cajas que son "let".
// Fíjate que ya NO se escribe "let" otra vez: la caja ya existe, solo la rellenamos.
// (Si intentáramos hacer esto con "nombre", que es const, daría ERROR.)
edad = 20
tieneMascota = false

// console.log(...) escribe algo en la pantalla (consola) para que lo veamos.
console.log(nombre)        // Aday
console.log(edad)          // 20 (el valor nuevo, el 19 se perdió)
console.log(tieneMascota)  // false

// TEXTO CON VARIABLES DENTRO (template string):
//  - Se escribe entre comillas invertidas ` ` (no comillas normales).
//  - Dentro, ${nombreDeVariable} se sustituye por el valor de la variable.
// Resultado: "Aday tiene 20 años y tiene mascota."
const frase = `${nombre} tiene ${edad} años y tiene mascota.`
console.log(frase)
