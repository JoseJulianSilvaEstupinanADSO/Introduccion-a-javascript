// 46. Calcule el mayor de tres números, permitiendo leer 3 valores diferentes

let mayor = 0, numero;

for (let index = 0; index < 3; index++) {
    numero = Number(prompt("Ingrese el valor del numero "+ (index+1))) 
    if(numero > mayor){
        mayor = numero;
    }
}
alert("el numero mayor es: "+ mayor);