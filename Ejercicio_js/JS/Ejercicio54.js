// 54. Restarle al primer número al segundo (siempre y cuando el primero sea mayor que él
//     segundo, en caso contrario indicar con un mensaje que la operación no es posible
//     realizarla.

let num1,num2;
num1 = Number(prompt("Ingrese el valor de numero 1"));
num2 = Number(prompt("Ingrese el valor de numero 2"));

if(num1 > num2 && num1 >=0 && num2 >=0){
    let resta;
    resta = num1 - num2;
    alert("El resultado de la resta es de "+resta)
}
else{
    alert("La operacion no puede ser realizada")
}