// 3. Escribir un programa que pida al usuario dos números y muestre por pantalla su
// división, si el divisor es cero el programa debe mostrar un error, se debe manejar
// mediante excepciones y el mensaje debe ser personalizado.

function dividir(dividendo, divisor) {
  if (divisor == 0) {
    throw  Error("no se puede dividir por 0");
  }
  div = dividendo / divisor;
  alert(`el resultado es ${div}`)
}

try {
  let numero1 = prompt("ingrese el numero 1");
  let numero2 = prompt("ingrese el numero 2");
  resultado = dividir(numero1, numero2);
} catch (e) {
  alert("el divisor no puede ser 0")
}
