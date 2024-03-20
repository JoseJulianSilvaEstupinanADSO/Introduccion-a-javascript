// 33. Calcular la edad de una madre en el momento que dio a luz a alguno de sus hijos.

let edad_m, edad_h, edad;

edad_m = Number(prompt("Ingrese la edad de la madre"));
edad_h = Number(prompt("Ingrese la dedad del hijo"));
edad = edad_m - edad_h;

alert(`La edad en la que la madre dio a luz fue ${edad}`)
