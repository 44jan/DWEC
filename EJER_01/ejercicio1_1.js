const nombre = "Jan"; // constante con mi nombre
let edad = 20; // variable que se puede cambiar
const tieneMascota = true; // constante booleana

edad = 21; // reasigno la edad (let lo permite)
try { // intento reasignar una constante
    tieneMascota = false; // esto da error porque es const
} catch (e) { // capturo el error para que el programa siga
    console.log(e.message); // muestro el mensaje del error
} // fin del try/catch

console.log(nombre, typeof nombre); // valor y tipo de nombre
console.log(edad, typeof edad); // valor y tipo de edad
console.log(tieneMascota, typeof tieneMascota); // valor y tipo de tieneMascota

var texto; // aqui guardo el texto de la mascota
if (tieneMascota) { // si tiene mascota
    texto = "tiene mascota"; // texto afirmativo
} else { // si no tiene
    texto = "no tiene mascota"; // texto negativo
} // fin del if/else
console.log(`${nombre} tiene ${edad} años y ${texto}.`); // frase con template string
