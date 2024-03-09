// 64. Escribir un programa que pida al usuario un número entero positivo y muestre por pantalla
// todos los números impares desde 1 hasta ese número separados por coma.

let numero = Number(prompt("Ingresa el numero"));
const numeros = [];

for (let i = 0; i < numero; i++) {
    if(i % 2 == 0){
    }else{
        numeros.push(i);
    }  
}
alert(numeros)