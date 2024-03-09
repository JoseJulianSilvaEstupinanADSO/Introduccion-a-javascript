// 40. Una empresa que contrata personal requiere determinar la edad de las personas
// que solicitan trabajo, pero cuando se les realiza la entrevista sólo se les pregunta el
// año en que nacieron. Realice el código que representen el algoritmo para
// solucionar este problema.

let year, nacimiento, edad;

year = Number(prompt("Ingrese el año actual"));
nacimiento = Number(prompt("Ingrese el año en que nacio la persona"));
edad = year - nacimiento;

alert(`La persona tiene ${edad} años`);
