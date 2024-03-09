// 27. Elaborar un algoritmo para calcular el promedio final de la materia de algoritmos.
// dicha calificación se compone de los siguientes porcentajes:
// a. 55% del promedio final de sus calificaciones de los tres (3) parciales.
// b. 30% de la calificación examen final.
// c. 15% de la calificación trabajo final.

let n1, n2, n3, ex, tf, pro_n, pro_t, pro_ex, nota;

n1 = Number(prompt("Ingrese la nota del parcial 1"));
n2 = Number(prompt("Ingrese la nota del parcial 2"));
n3 = Number(prompt("Ingrese la nota del parcial 3"));
tf = Number(prompt("Ingrese la nota del trabajo final"));
ex = Number(prompt("Ingrese la nota del examen final"));

if (n1 >= 0 && n1 <= 10) {
  if (n2 >= 0 && n2 <= 10) {
    if (n3 >= 0 && n3 <= 10) {
      if (tf >= 0 && tf <= 10) {
        if (ex >= 0 && ex <= 10) {
          pro_n = ((n1 + n2 + n3) / 3)*0.55;
          pro_ex = ex * 0.30;
          pro_t = tf * 0.15;
          nota = pro_ex + pro_n + pro_t;
          alert(`La nota fianl del estudiante es de ${nota}`);
        }
        else {
          alert("La nota del examen final no puede ser menor a 0 o mayor a 10");
        }
      }
      else {
        alert("La nota del trabajo final no puede ser menor a 0 o mayor a 10")
      }
    }
    else {
      alert("La nota del parcial 3 no puede ser menor a 0 o mayor a 10")
    }
  }
  else {
    alert("La nota del parcial 2 no puede ser menor a 0 o mayor a 10")
  }
}
else {
  alert("La nota del parcial 1 no puede ser menor a 0 o mayor a 10")
}
