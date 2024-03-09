// 69. Escribir un programa que pida al usuario un número entero y muestre por consola un
// triángulo rectángulo como el de más abajo.

let numero = Number(prompt("Ingrese el numero"));
const num = [];

for (let i = 1; i <= numero; i++) {
    num.push("*");
    console.log(num);
}