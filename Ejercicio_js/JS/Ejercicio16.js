// 16. Escribir un programa que calcule la velocidad de un proyectil que recorre 2km en 5
// minutos, exprese el resultado en metros/segundo.

let km = Number(prompt("ingrese los kilometros"));
let min = Number(prompt("ingrese los minutos"));
let metros = km * 1000;
let segundos = min * 60;
let recorrido = metros / segundos;
alert(`El proyectil recorre una velocidad de ${Math.ceil(recorrido)}M/s`)
