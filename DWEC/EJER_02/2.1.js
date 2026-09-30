const numeros = [1, 2, 3, 4, 5, 6];
const dobles = numeros.map(function(num) {
  return num * 2;
});
console.log(dobles); // [2, 4, 6, 8, 10, 12]

const pares = numeros.filter(function(num) {
  return num % 2 === 0;
});
console.log(pares); // [2, 4, 6]

for (const par of pares) {
  console.log(par);
} v2c 