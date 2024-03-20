// 5. Para tributar un determinado impuesto se debe ser mayor de 16 años y tener unos
// ingresos iguales o superiores a 1000 mensuales, escribir un programa que pregunte
// al usuario su edad e ingresos mensuales y muestre por pantalla si el usuario debe
// tributar o no.

let edad = prompt("ingrese su edad");
let ingresos = prompt("digite cuanto es su ingreso mensual");

if (edad >= 16) {
  if (ingresos >= 1000) {
    alert("el usuario debe tributar")
  }
  else {
    alert("el usuario no tributa, sus ingresos son menores a 1000")
  }
}
else {
  alert("el usuario es menor a 16 años no tributa")
}
