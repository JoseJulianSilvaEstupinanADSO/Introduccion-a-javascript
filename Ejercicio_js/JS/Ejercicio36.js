// 36. En el programa de cocina de “Doña Anita” han dado la receta para la preparación
// de bizcocho especial de chocolate. Por cada 100 gramos de harina hay que añadir
// 10 gramos de cacao y un puñado de nueces. Si quiero prepararlos con 20 gramos
// de cacao. ¿La cantidad de gramos de harina para hacer el bizcocho es?

let harina, cacao;

cacao = Number(prompt("Ingrese la cantidad de gramos de cacao"))
harina = 100 * (cacao / 10)

alert(`La cantidad de hariana necesaria es de ${harina}`)
