// 38. Tres estudiantes reunieron tapas de gaseosas para repartirlas y venderlas al final
// del año. Martín toma 2/3 del total, Jairo un cuarto del total, y Lorena se queda con
// el resto. ¿Qué parte le corresponde a Lorena?

let tapas, lorena, martin, jairo;

tapas = Number(prompt("cuantas tapas recoguieron"));

martin = tapas * (2 / 3);
jairo = tapas * (1 / 4);
lorena = tapas - martin - jairo;

alert(`La cantidad de tapas que le tocan a lorena es de ${Math.ceil(lorena)}`)


