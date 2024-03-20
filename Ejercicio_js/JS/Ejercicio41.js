// 41. Ingrese una frase que lo identifique como programador de Software y luego
// mostrar esta frase invertida.

let frase, invertida;

frase = prompt("Ingrese la frase");
invertida = frase.split('').reverse().join('');

alert(invertida);

