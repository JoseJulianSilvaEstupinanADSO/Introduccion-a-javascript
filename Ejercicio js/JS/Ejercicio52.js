// 52. En cierta empresa se les paga a sus trabajadores de la siguiente forma: si el empleado es
// de planta, la hora trabajada se le paga a $20000, si el empleado es administrativo, la hora
// trabajada se le paga a $10000. Para calcular su pago es necesario conocer el total de
// horas trabajadas.

let horas, tipo, tipos = ["planta","administrativo"], pagos = [20000,10000], pago

tipo = (prompt("Ingrese el tipo de trabajador"));
horas = Number(prompt("Ingrese las horas trabajadas"));

for (let i = 0; i < 2; i++) {
    if(tipos[i] == tipo.toLowerCase()){
        pago = pagos[i]*horas;
        alert("el pago del trabjador es de "+ pago)
    }
}
