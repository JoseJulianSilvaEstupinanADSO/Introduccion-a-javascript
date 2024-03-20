// 45. Determinar si un número es positivo y menor que 100.

let numero = Number(prompt("Ingrese el numero"));

if (numero > 0 && numero < 100) {
  alert(`El numero ${numero} si cumple las condiciones`);
}
else {
  alert(`El numero ${numero} no cumple las condiciones`);
}