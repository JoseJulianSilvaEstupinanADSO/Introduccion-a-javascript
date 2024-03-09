// 11. Escribir un programa que sume, resta, multiplique y divida dos números.

let ope = prompt("que tipo de operacion desea realizar?");
let resultado;
let numero1 = Number(prompt("ingrese el primer numero"));
let numero2 = Number(prompt("ingrese el segundo numero"));
if (ope.toLocaleLowerCase() == "suma") {
  resultado = numero1 + numero2;
};
if (ope.toLocaleLowerCase() == "resta") {
  resultado = numero1 - numero2;
};
if (ope.toLocaleLowerCase() == "multiplicacion") {
  resultado = numero1 * numero2;
};
if (ope.toLocaleLowerCase() == "division") {
  resultado = numero1 / numero2;
};

alert("el resultado es: "+resultado)

