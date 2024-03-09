// 49. Escriba un algoritmo que calcule el área de un rectángulo siempre y cuando los lados sean
// positivos: área triangulo= lado * lado

let area,lado1,lado2;

lado1 = Number(prompt("Ingrese el valor del lado 1"))
lado2 = Number(prompt("Ingrese el valor del lado 2"))

if(lado1 > 0 && lado2 > 0){
    alert("el area del rectangulo es de: "+ (lado1*lado2));
}
else{
    alert("Error los lados solo pueden ser numero positivos y superiores a 0")
}

