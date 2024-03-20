// 66. Escribir un programa que pregunte al usuario una cantidad a invertir, el interés anual y el
// número de años, y muestre por pantalla el capital obtenido en la inversión cada año que
// dura la inversión.

let cant, interés, years, inter_a, total;

cant = Number(prompt("Ingrese la cantidad que va invertir"));
interés = Number(prompt("Ingrese el interes anual"));
years = Number(prompt("Ingrese el numero de años"));
interés = interés/100;
total = cant;
for (let i = 0; i < years; i++) {
    inter_a = total*interés;
    total = total+inter_a;
    alert(`El interes que gana el ${i+1} año es ${Math.ceil(inter_a)}`);
}