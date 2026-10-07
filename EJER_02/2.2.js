// 1. Function Declaration: se puede llamar incluso antes de declararla
function calcularAreaRectangulo(base, altura) {
  return base * altura; // área del rectángulo
}

// 2. Function Expression: la función se guarda en una constante
var calcularAreaTriangulo = function (base, altura) {
  return (base * altura) / 2; // área del triángulo
};

// 3. Arrow Function: sintaxis corta con =>
var calcularAreaTrianguloFlecha = (base, altura) => (base * altura) / 2;

// 4. Valores por defecto: si no se pasa el parámetro, usa 1
var areaConDefecto = (base = 1, altura = 1) => (base * altura) / 2;

// 5. Llamadas de prueba
console.log("Rectángulo:", calcularAreaRectangulo(5, 3)); // 15
console.log("Triángulo (expression):", calcularAreaTriangulo(5, 3)); // 7.5
console.log("Triángulo (arrow):", calcularAreaTrianguloFlecha(5, 3)); // 7.5
console.log("Con valores por defecto:", areaConDefecto()); // 0.5
console.log("Con un solo valor:", areaConDefecto(4)); // 2