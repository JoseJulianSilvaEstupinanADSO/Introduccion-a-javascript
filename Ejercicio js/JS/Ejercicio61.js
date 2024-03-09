// 61. Hacer un programa que permita ingresar n Notas de alumnos (100 – 1), y que imprima cual
// fue la nota alta, la nota baja y cuantos alumnos obtuvieron la máxima nota de 100, cuantos
// obtuvieron las siguientes calificaciones:
// a. «a» = menor que 100 y mayor igual que 90
// b. «b» = menor que 90 y mayor igual que 80
// c. «c» = menor que 80 y mayor igual que 70
// d. «d» = menor que 70 y mayor igual que 60
// r. reprobados < 60
let cant, mayor = 0, menor =100, nota, a = 0,b=0,c=0,d=0,max=0, r=0;

cant = Number(prompt("Ingrese la cantidad de alumnos"));
for (let i = 0; i < cant; i++) {
    nota = Number(prompt("Ingrese la nota del estudiante "+ (i+1)));
    if(nota >=0 && nota <=100){
        if(nota == 100){
            max += max+1;
        }
        else{
            if(nota < 100 && nota >= 90){
                a += 1;
            }
            else{
                if(nota < 90 && nota >= 80){
                    b += 1;
                }
                else{
                    if(nota < 80 && nota >=70){
                        c += 1;
                    }
                    else{
                        if(nota < 70 && nota >=60){
                            d += 1;
                        }
                        else{
                            r += 1;
                        }
                    }
                }
            }
        };
        if(nota > mayor){
            mayor = nota;
        }
        if(nota < menor){
            menor = nota;
        }
    }
    else{
        alert("Error en la nota ingresada")
    }
}
alert("la cantida de alumnos con la nota maxima es de "+ max);
alert("la cantida de alumnos con la nota a es de "+ a);
alert("la cantida de alumnos con la nota b es de "+ b);
alert("la cantida de alumnos con la nota c es de "+ c);
alert("la cantida de alumnos con la nota d es de "+ d);
alert("la nota mayor es de "+ mayor);
alert("la nota menor es de "+ menor);