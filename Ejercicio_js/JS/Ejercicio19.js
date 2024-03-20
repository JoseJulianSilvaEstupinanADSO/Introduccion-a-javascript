
// 19. Escribir un programa que calcule el área y el volumen de un cilindro.

let radio = Number(prompt("Ingrese el radio del cilindro"));

let volumen =  Math.PI * (Math.pow(radio, 2));

alert(`El volumen del cilindro es de ${Math.ceil(volumen)}`);

