// 23. Realice un algoritmo que, a partir de proporcionarle la velocidad de un automóvil
// expresada en kilómetros por hora, proporcione la velocidad en metros por
// segundo.

let resultado, conversion, velocidad = Number(prompt("ingrese la velocidad"));

conversion = velocidad * 1000;
resultado = (conversion / (60))/60;

alert(`el automovil va a ${resultado}M/s`)

