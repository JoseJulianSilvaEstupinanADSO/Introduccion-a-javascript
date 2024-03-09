// 13. Escribir un programa que lea 4 números y calcule la media.

let cant = Number(prompt("ingrese la cantidad de numeros"));
let numero,suma = 0, promedio;
for (let index = 0; index < cant; index++) {
  numero = Number(prompt(`Ingrese el ${index + 1} numero`));
  suma += numero;
}
promedio = suma / cant;
alert("el promedio de los numero ingresados es de: " + promedio);

