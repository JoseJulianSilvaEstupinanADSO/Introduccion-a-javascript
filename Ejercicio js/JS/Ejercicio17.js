// 17. Escribir un programa que calcule el volumen de una esfera.

let radio = Number(prompt("Ingrese el radio de la esfera"));

let volumen = (4 / 3) * Math.PI * (Math.pow(radio, 3));

alert(`El volumen de la esfera es de ${Math.ceil(volumen)}`);

