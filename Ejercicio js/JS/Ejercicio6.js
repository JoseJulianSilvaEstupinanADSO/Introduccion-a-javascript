
// 6. los alumnos de un curso se han dividido en dos grupos A y B de acuerdo con el sexo
// y el nombre, el grupo A está formado por las mujeres con un nombre anterior a la
// M y los hombres con un nombre posterior a la N y el grupo B por el resto, escribir
// un programa que pregunte al usuario su nombre y sexo y muestre por pantalla el
// grupo al que corresponde.

  const a = [];
  const b = [];
  let regex = /^[a-mA-M]/i;
  let regex2 = /^[n-zN-Z]/i;
  let cant = prompt("ingrese la cantidad de los estudiantes");
for (let index = 0; index < cant; index++) {
  let sexo = prompt("ingrese el sexo del estudiante");
  sexo = sexo.toLocaleLowerCase();
  let nom = prompt("ingrese el nombre del estudiante");
  if (sexo == "mujer") {
    if (regex.test(nom)) {
      a.push(nom);
    }
    else {
      b.push(nom);
    }
  }
  else {
    if (sexo == "hombre") {
      if (regex2.test(nom)) {
        a.push(nom);
      }
      else {
        b.push(nom);
      }
    }
  }
}
console.log(a);
console.log(b);

