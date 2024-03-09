
// 24. Escriba una expresión regular que reconozca los números en punto flotante (por
//     ejemplo -2.3e-1, -3e2, 23, 3.2).
    
    let num = Number(prompt("ingrese el numero"));
    
    let regex = /\./
    
    if (regex.test(num)) {
      alert(`El numero ${num} si tiene punto flotante`);
    }
    else {
      alert(`El numero ${num} no tiene punto flotante`)
    }
    