// 51. Calcular todos los pagos hechos de un restaurante y que si el consumo ingresado excede
// los $130.000 el descuento será del 15%, de lo contrario no hay descuento.

let total, suma =0, cant,pago,desc;
cant = Number(prompt("Cantidad de platos"));
for (let i = 0; i < cant; i++) {
    pago = Number(prompt("Ingrese el pavor del pago numero "+ (i+1)));
    suma += pago;
}
if(suma > 130000){
    desc = suma*0.15;
    total = suma -desc;
    alert("el consumo es de "+total);
}
else{
    alert("el consumo es de "+suma);
}