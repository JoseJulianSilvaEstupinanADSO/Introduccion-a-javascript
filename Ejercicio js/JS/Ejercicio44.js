
// 44. Realice el siguiente algoritmo para convertir pesos a dolres y a euros, utilizando
// como constante el valor de una moneda.

let dolar, euro, pesos, t_d,t_e;

dolar = Number(prompt("Ingrese el precio actual del dolar"));
euro = Number(prompt("Ingrese el valor del euro actual"))
pesos = Number(prompt("Ingrese la cantidad de pesos que va cambiar"))

t_e = pesos / euro;
t_d = pesos / dolar;

alert(`El cambio a dolares es ${t_d} y a euro es de ${t_e}`)

