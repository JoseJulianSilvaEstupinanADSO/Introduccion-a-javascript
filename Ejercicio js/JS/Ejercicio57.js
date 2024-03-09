// 57. Consideramos la asignación de una calificación literal a un rango dado de calificaciones
// numéricas de la siguiente manera: Rango de calificaciones: 9.1 a 10 Asignar la calificación
// de A equivale a Excelente 8.1 a 9 Asignar la calificación de A equivale a Muy bien 7.5 a 8
// Asignar la calificación de A equivale a Bien Menor a 7.5 asignar la calificación de NA No
// Aprobado.

let cali, nota;

nota = Number(prompt("Ingrese la nota"))
if(nota >= 0 && nota <= 10){
    if(nota <= 10 && nota > 9){
        cali = "Exelente";
        alert(cali);
    } 
    else{
        if(nota <= 9 && nota > 8){
            cali = "Muy bien";
            alert(cali);
        }
        else{
            if(nota <=8 && nota > 7.4){
                cali = "Bien menor";
                alert(cali);
            }
            else{
                cali = "No Aprobado";
                alert(cali);
            }
        }
    }
}