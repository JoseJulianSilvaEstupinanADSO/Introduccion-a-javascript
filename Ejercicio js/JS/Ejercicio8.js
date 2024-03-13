// 8. En una determinada empresa, sus empleados son evaluados al final de cada año.
// Los puntos que pueden obtener en la evaluación comienzan en 0.0 y pueden ir
// aumentando, traduciéndose en mejores beneficios. Los puntos que pueden
// conseguir los empleados pueden ser 0.0, 0.4, 0.6 o más, pero no valores
// intermedios
// entre las cifras mencionadas. A continuación, se muestra una tabla con los niveles
// correspondientes a cada puntuación. La cantidad de dinero conseguida en cada
// nivel es de 2.400 multiplicada por la puntuación del nivel. Escribir un programa que
// lea la puntuación del usuario e indique su nivel de rendimiento, así como la
// cantidad de dinero que recibirá el usuario.

let dinero, puntos = Number(prompt("Ingrese la puntuacion"))

if(puntos == 0.0){
    dinero = 2400*0.0;
}
else{
    if(puntos == 0.2){
        dinero = 2400*0.2;
    }
    else{
        if (puntos == 0.4) {
            dinero = 2400*0.4;
        }
        else{
            if(puntos == 0.6){
                dinero = 2400*0.6;
            }
            else{
                if (puntos == 0.8) {
                    dinero = 2400*0.8;
                }
                else{
                    if(puntos == 1){
                        dinero = 2400;
                    }
                }
            }
        }
    }
}
alert("El nivel de rendimiento es de "+puntos+ " "+ "y el dinero recibido es de "+dinero)
