
// 18. Escribir un programa que evalúe la siguiente expresión (a+7*c) / (b+2-a) + 2*b

let a, b, c, resultado;
a = Number(prompt("Ingrese el valor de a"));
b = Number(prompt("Ingrese el valor de b"));
c = Number(prompt("Ingrese el valor de c"));

resultado = ((a + 7 * c) / (b + 2 - a)) + (2 * b);

alert(`el resultado es ${resultado}`);

