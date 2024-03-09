
// 32. Pablo compro 5 productos los dos primeros con un 5% de descuento y los 2 últimos
// con un 2% de descuento, realice un algoritmo que indique cuanto fue el valor a
// pagar por cada producto y el total de la compra.

let total = 0, producto;
for (let index = 1; index < 6; index++) {
  let descuento = 0, subtotal = 0;
  producto = Number(prompt(`Ingrese el valor del producto ${index}`));
  if (index <= 2) {
    descuento = producto * 0.05;
    subtotal = producto - descuento;
    total += subtotal
  }
  if (index == 3) {
    total += producto
  }
  if (index > 3 && index <= 5) {
    descuento = producto * 0.02;
    subtotal = producto - descuento;
    total += subtotal;
  }
}

alert(`Pablo paga un total de ${total}`)

