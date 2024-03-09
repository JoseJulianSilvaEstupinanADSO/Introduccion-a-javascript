// 65. Escribir un programa que pida al usuario un número entero positivo y muestre por pantalla
// la cuenta atrás desde ese número hasta cero separados por comas.

let numero = Number(prompt("Ingresa el numero"));
const numeros = [];
const atras = []

for (let i = 0; i < numero; i++) {
    numeros.push(i);
}
for (let n = 0; n <= numeros.length; n++) {
    atras.push(numeros[(numeros.length-n)])
}
alert(numero+atras)