// 53. Calcular el valor total del valor de 5 productos, el IVA y el subtotal, visualizar los resultados
// de: Iva, Subtotal y Total de la compra de los artículos.

let iva,subtotal =0,total, iva_s,producto;

iva = Number(prompt("Ingrese el IVA"));
iva = iva/100;

for (let i = 0; i < 5; i++) {
    producto = Number(prompt("Ingrese el valor del producto numero "+ (i+1)));
    subtotal +=producto;
};
iva_s = subtotal*iva;
total = subtotal+iva_s;
alert("El valor de los 5 pructos sin iva es de "+ subtotal);
alert("El valor de iva es de "+iva_s);
alert("El valor de los 5 productos con iva incluido es de "+ total);