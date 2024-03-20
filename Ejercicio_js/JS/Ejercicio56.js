// 56. Un banco paga intereses a los depósitos dependiendo del saldo. Si el saldo es menor a
// $100.000 se paga un interés anual de 3%, pero si su saldo es mayor a $100.000 se paga
// un interés anual de 4%. Al final mostrar el saldo final y el interés pagado.

let saldo,interés,subtotal;
saldo = Number(prompt("Ingrese el deposito"));

if(saldo > 100000){
    interés = saldo*0.04;
    subtotal = saldo-interés;
    alert("El saldo final es de "+ subtotal);
    alert("El interes fue de "+ interés);
}
else{
    if(saldo > 0){
        interés = saldo*0.03;
        subtotal = saldo-interés;
        alert("El saldo final es de "+ subtotal);
        alert("El interes fue de "+ interés);
    }
    else{
        alert("Error en el saldo")
    }
}