// 34. Generar el algoritmo que dé como resultado el tiempo estimado para el llenado de
// un depósito.
// a. Q = V/t, siendo Q (caudal), V (volumen) y t (tiempo).
// b. Volumen = PI *(radio^2)* H (altura del depósito).
// El tiempo se encuentra en minutos. Normalmente se mide el volumen en litros y el
// tiempo en segundos.

let radio, altura, tiempo, caudal, volumen;

radio = Number(prompt("Ingrese el radio del deposito"));
altura = Number(prompt("Ingrese el altura del deposito"));
caudal = Number(prompt("Ingrese el caudal del deposito"));

volumen = Math.PI * (Math.pow(radio, 2)) * altura;
tiempo = volumen / caudal;

alert(`el tiempo que toma llenar el deposito es de ${Math.ceil(tiempo)}/s`);

