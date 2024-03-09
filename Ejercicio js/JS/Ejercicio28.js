
// 28. Calcular el sueldo de un empleado dados como datos de entrada:
// a. Nombre.
// b. horas de trabajo.
// c. pago en hora.

let nombre, h_t, p_h, pago;

nombre = prompt("Ingrese el nombre del trabajador");
h_t = Number(prompt("Ingrese las horas trabajadas"));
p_h = Number(prompt("Ingrese el pago por hora"));
pago = p_h * h_t;

alert(`el trabajador ${nombre} por ${h_t} gano un total de ${pago}`);

