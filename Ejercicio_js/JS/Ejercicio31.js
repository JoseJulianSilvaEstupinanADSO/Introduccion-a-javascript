// 31. Se requiere calcular la distancia entre dos puntos, realizar el código que permita
// hallar la solución, por favor utilizar funciones matemáticas para ello.:
// a. rc((x2-x1)^2 + (y2-y1)^2).

let p1x, p1y, p2x, p2y, distancia;
p1x = Number(prompt("Ingrese la cordenada en x del punto 1"))
p1y = Number(prompt("Ingrese la cordenada en y del punto 1"))
p2x = Number(prompt("Ingrese la cordenada en x del punto 2"))
p2y = Number(prompt("Ingrese la cordenada en y del punto 2"))

distancia = Math.sqrt((Math.pow(p2x - p1x, 2)) + Math.pow(p2y - p1y, 2))

alert(`la distancia entre los dos puntos es de ${distancia}`)

