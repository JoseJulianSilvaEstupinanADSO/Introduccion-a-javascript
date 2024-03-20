// 47. Desarrollar un diagrama que lea 3 valores diferentes e indique cual es el mayor de ellos, el
// menor o si son iguales.


let mayor = 0, numero, menor = Infinity;
const iguales = []

for (let index = 0; index < 3; index++) {
    numero = Number(prompt("Ingrese el valor del numero "+ (index+1))) 
    if(numero > mayor){
        mayor = numero;
    };
    if(numero < menor){
        menor = numero
    };
    iguales.push(numero);
}
for (let i = 0; i < 2; i++) {
    if(iguales[0] == iguales[i+1]){
        alert(`los numeros ${iguales[0]} y ${iguales[(i+1)]} son iguales`)
    }
}
if(iguales[1] == iguales[2]){
    alert(`los numeros ${iguales[1]} y ${iguales[2]} son iguales`)
}

alert("el numero mayor es: "+ mayor);
alert("el numero menor es: "+ menor);