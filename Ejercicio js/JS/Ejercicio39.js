// 39. Pinturas “La brocha gorda” requiere determinar cuánto cobrar por trabajos de
// pintura Considere que se cobra por m2 y realice el código que representen el
// algoritmo que le permita ir generando presupuestos para cada cliente.

let metros, cobro, total;

metros = Number(prompt("Ingrese la cantidad de M2"));
cobro = Number(prompt("Ingrese la cantidad cobrada por M2"));

total = metros * cobro;

alert(`Por la cantidad de ${metros}M2 se cobra un total de ${total}`);
