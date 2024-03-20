// 59. En un colegio, se necesita hacer una selección de basquetbol que represente al colegio,
// para lo cual es requisito indispensable que los postulantes sean menores o iguales a 19
// años, con una estatura de más de 175 cm y el peso tiene que estar entre los 80 kg y 75

let edad, estatura, peso;

edad = Number(prompt("Ingrese la edad del estudiante"));
estatura = Number(prompt("Ingrese la estatura del estudiante"));
peso = Number(prompt("Ingrese el peso del estudiante"));

if(edad <= 19){
    if(estatura >= 175){
        if(peso <= 80 && peso >= 70){
            alert("El estudiante es apto")
        }
        else{
            alert("El estudiante no es apto")
        }
    }
    else{
        alert("El estudiante no es apto")
    }
}
else{
    alert("El estudiante no es apto")
}