
// 20. Escriba un algoritmo que permita obtener las raíces reales de la ecuación de
// segundo grado: a * x2 + b + x + c, siendo X un valor constante.

const x = 5;

let a, b, c, resultado;
a = Number(prompt("Ingrese el valor de a"));
b = Number(prompt("Ingrese el valor de b"));
c = Number(prompt("Ingrese el valor de c"));

resultado = a * (x * 2) + b + x + c;

alert(`El resultado es ${resultado}`);

