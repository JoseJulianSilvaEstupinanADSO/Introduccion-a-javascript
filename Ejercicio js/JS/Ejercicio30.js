
// 30. Comprobar la fortaleza de una contraseña teniendo en cuenta que debe tener
// entre 8 y 12 caracteres, y al menos una mayúscula, una minúscula, y un dígito.

let regexM = /[A-Z]/, regexm = /[a-z]/, regexnum = /\d/;
let contraseña = prompt("Ingrese la contraseña");
if (contraseña.length >= 8 && contraseña.length <= 12) {
  if (regexM.test(contraseña)) {
    if (regexm.test(contraseña)) {
      if (regexnum.test(contraseña)) {
        alert("La contraseña cumple las condiciones")
      }
      else {
        alert("La contraseña debe llevar almenos 1 numero")
      }
    }
    else {
      alert("La contraseña debe llevar minimo 1 minuscula")
    }
  }
  else {
    alert("La contraseña debe llevar minimo 1 mayuscula")
  }
}
else {
  alert("La contraseña no cumple con los caracteres requeridos");
};