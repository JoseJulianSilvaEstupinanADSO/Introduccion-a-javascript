// 71. Escribir un programa que pida al usuario un número entero y muestre por pantalla si es un
// número primo o no.

let numero = Number(prompt("Ingrese el numero"))

function esPrimo(num) {
    if (num <= 1){
        return alert("No es primo")
        
    } 
    if (num <= 3){
      return  alert("Si es primo")
    } 

    if (num % 2 === 0 || num % 3 === 0){
        return alert("No es primo")
    }
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0){
            return alert("No es primo")
        } 
    }

    return alert("Si es primo");
}

respuesta = esPrimo(numero);