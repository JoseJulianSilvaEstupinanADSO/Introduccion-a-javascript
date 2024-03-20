// 43. Escriba una expresión regular que reconozca las cadenas de doble comillas. Debe
// permitir la presencia de comillas y caracteres escapados.

// /"([^"\\]|\\.)*"/g
  
let cadena, regex = /"*"/;

cadena = prompt("Ingrese una frase en comillas dobles");

alert(regex.test(cadena));
 