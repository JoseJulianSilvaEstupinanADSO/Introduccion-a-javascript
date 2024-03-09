// 42. Una papelería vende libros a $10.000, cuadernos $ 7.550, y lapiceros a $5.550.
// Calcular el monto total de la venta, según la cantidad de artículos solicitados
// durante el día.

let lapiceros, cuadernos, libros, total;

lapiceros = Number(prompt("Ingrese la cantidad de lapiceros vendidos"));
cuadernos = Number(prompt("Ingrese la cantidad de cuadernos vendidos"));
libros = Number(prompt("Ingrese la cantidad de libros vendidos"));

total = (lapiceros * 5550) + (cuadernos * 7550) + (libros * 10000);

alert(`La papeliria vendio un total de ${total}`);

