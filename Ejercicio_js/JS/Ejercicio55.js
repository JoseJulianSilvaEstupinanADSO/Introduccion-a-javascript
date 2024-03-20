// 55. En una tienda de HELADO da un descuento por compra a sus clientes con membresía
// dependiendo de su tipo, sólo existen tres tipos de membresía, tipo A, tipo B y tipo C. Los
// descuentos son los siguientes: Tipo A 10% de descuento Tipo B 15% de descuento Tipo C
// 20% de descuento.

const menbresia = ["A","B","C"];
const des = [0.1,0.15,0.2]
let valor, memb, desc, total;
valor = Number(prompt("Ingrese el valor de el helado"));
memb = prompt("Ingrese su tipo de membresia")
for (let i = 0; i < 3; i++) {
    if(menbresia[i] == memb.toUpperCase()){
        desc = valor*des[i];
        total = valor -desc;
        alert("El pago por el helado es de "+total);
    }
}