// 73. Escribir un programa en el que se pregunte al usuario por una frase y una letra, y muestre
// por pantalla el número de veces que aparece la letra en la frase.

let palabra = prompt("Ingrese la palabra");
let cont = 0, letra = prompt("Ingrese la letra que desea contar");
palabra = palabra.toLowerCase();
letra = letra.toLowerCase();
const pal = palabra.split('').reverse();
for (let i = 0; i < pal.length; i++) {
    if(pal[i] == letra){
        cont += 1;
    }
}
alert(`la palabra se repite ${cont} veces`);