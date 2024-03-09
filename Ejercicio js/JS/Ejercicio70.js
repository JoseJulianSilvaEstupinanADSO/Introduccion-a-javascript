// 70. Escribir un programa que almacene la cadena de caracteres contraseña en una variable,
// pregunte al usuario por la contraseña hasta que introduzca la contraseña correcta.

let contra, correcta;
contra = prompt("Ingrese la contraseña");

while(true) {
    correcta = prompt("Ingrese nuevamente la contraseña");
    if(contra === correcta){
        break
    }
}