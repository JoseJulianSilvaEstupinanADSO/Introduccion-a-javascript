// 2. escribir un programa que almacene la cadena de caracteres contraseña de una
// variable, pregunte al usuario por la contraseña e imprima por pantalla si la
// contraseña introducida por el usuario coincide con la guardada en la variable sin
// tener en cuenta mayúsculas y minúsculas, se debe validar que solo se pueda
// ingresar valores alfanuméricos.

let passaword = "holamundo";
passaword == passaword.toLocaleLowerCase;

let contraseña = prompt("ingrese la contraseña")
contraseña == passaword.toLocaleLowerCase;

let regex = /^[a-zA-Z0-9]*$/;
console.log(regex.test(contraseña));
if (regex.test(contraseña)) {
  if (contraseña === passaword) {
    console.log("las contraseñas coinciden");
  }
  else {
    console.log("las contraseñas no coinciden");
  }
}
else {
  console.log("la contraseña no puede llevar caracteres especiales");
}