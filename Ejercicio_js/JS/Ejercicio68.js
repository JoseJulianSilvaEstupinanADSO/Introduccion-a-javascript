// 68. Escribir un programa que muestre por consola la tabla de multiplicar del 1 al 10.

let resultado, tabla = Number(prompt("Ingrese la tabla que desea saber"));


for (let i = 1; i <= 10; i++) {
    resultado = tabla * i;
    alert(resultado);
}