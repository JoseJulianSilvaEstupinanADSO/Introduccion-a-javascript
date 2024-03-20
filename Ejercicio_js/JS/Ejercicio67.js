// 67. Escribir un programa que pida al usuario un número entero y muestre por pantalla un
// triángulo rectángulo como el de más abajo, de altura el número introducido


let numero = Number(prompt("Ingrese el numero"));
const num = [];

for (let i = 1; i <= numero; i++) {
    if(i % 2 === 0){
    }
    else{
        num.push(i); 
        console.log(num);
    }
}
