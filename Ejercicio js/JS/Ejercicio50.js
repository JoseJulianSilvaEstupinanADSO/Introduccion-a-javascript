// 50. Considere dos variables llamadas temperatura y presión. Escriba una sentencia if-else que
// muestre en pantalla la palabra Alarma si la variable presión es mayor a 200 o si la variable
// temperatura es mayor a 100. En caso contrario, se debe mostrar en pantalla la palabra
// Normal.

let temperatura, presión;

temperatura = Number(prompt("Temperatura"));
presión = Number(prompt("Presion"));

if (temperatura > 100) {
    alert("ALARMA");
}
else{
    if(presión > 200){
        alert("ALARMA");
    }
    else{
        alert("Normal")
    }
}
