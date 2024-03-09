
// 22. Escribir un programa que muestre el pago de una llamada telefónica sabiendo que
// cada minuto cuesta $355 pesos y un IVA 20%.

let cobro, costo = 355, iva, total, min = Number(prompt("Ingrese los minutos gastados en la llamada"));

cobro = min * costo;
iva = cobro * 0.2;
total = cobro + iva;

alert(`el pago por los minutos gastados es de: ${total}`);
