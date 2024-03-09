// 21. Escribir un programa que calcule el volumen de un elipsoide.

let volumen, a, b, c;

a = Number(prompt("Ingrese el valor del axis a"));
b = Number(prompt("Ingrese el valor del axis b"));
c = Number(prompt("Ingrese el valor del axis c"));

volumen = (4 / 3) * Math.PI * a * b * c;

alert(`El volumen del elipsoide es de: ${Math.ceil(volumen)}`)

