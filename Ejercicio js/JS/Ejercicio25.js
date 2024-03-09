
// 25. Una farmacia aplica el precio de los remedios el 10% de descuento, hacer un
// programa que ingresando el costo de los medicamentos calcule el descuento y el
// precio final.

let total,desc, costo = Number(prompt("Ingrese el costo de los medicamentos"));

desc = costo * 0.1;
total = costo - desc;

alert(`El costo con descuento de los medicamentos es de ${total}`)

