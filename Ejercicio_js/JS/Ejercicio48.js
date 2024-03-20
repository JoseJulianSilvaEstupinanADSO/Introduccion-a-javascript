// 48. Escriba un algoritmo que permita calcular el área, debe preguntar que figura geométrica
// desea calcular "Triángulo y Círculo: (Escriba T o C):
// a. Triangulo = base * altura / 2
// b. Circulo = PI * radio* radio

let figura = prompt("Ingrese c para circulo y t para triangulo");

if(figura == "t"){
    let base,altura, area;
    base = Number(prompt("Ingrese el valor de la base"));
    altura = Number(prompt("Ingrese el valor de la altura"));
    area = (base*altura)/2;
    alert("El valor del area es de "+ Math.ceil(area));
};
if(figura == "c"){
    let area, radio;
    radio = Number(prompt("Ingrese el valor del radio"));
    area = Math.PI*Math.pow(radio,2);
    alert("El valor del area es de "+ Math.ceil(area));
}
if(figura != "c" && figura != "t"){
    alert("Error en la figura ingresada")
}