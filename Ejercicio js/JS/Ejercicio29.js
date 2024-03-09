
// 29. Un estudiante realiza cuatro exámenes. Realizar un algoritmo correspondiente para
// obtener el promedio de las calificaciones obtenidas. Las calificaciones van 1 a 5
// puntos.

let suma = 0,promedio,numero,regex =/0-5/
for (let index = 0; index < 5; index++) {
  numero = Number(prompt(`Ingrese la nota del parcial ${index + 1}`));
  if (regex.test(numero)) {
    suma += numero;
  }
  else {
    alert("la nota ingresada no cumple las condiciones");
    break
  }
}
promedio = suma / 4;
alert(`El promedio de las notas del estudiante es de ${promedio}`);
