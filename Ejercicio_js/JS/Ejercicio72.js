// 72. Escribir un programa que pida al usuario una palabra y luego muestre por pantalla una a
// una las letras de la palabra introducida empezando por la última.

let palabra = prompt("Ingrese la palabra");
 const pal = palabra.split('').reverse()
for (let i = 1; i <= pal.length; i++) {
    alert(pal[pal.length-i]);
}