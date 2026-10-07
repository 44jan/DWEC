// Array con 6 números
var numeros = [1, 2, 3, 4, 5, 6];

// map recorre el array y devuelve uno nuevo con cada número multiplicado por 2
var dobles = numeros.map(function (n) {
  return n * 2;
});

// filter devuelve un array nuevo solo con los números que cumplen la condición (pares)
var pares = numeros.filter(function (n) {
  return n % 2 === 0; // si el resto de dividir entre 2 es 0, es par
});

console.log("Dobles:", dobles);

// for...of recorre cada elemento del array pares
for (var numero of pares) {
  console.log(numero); // imprime el número en la consola
}