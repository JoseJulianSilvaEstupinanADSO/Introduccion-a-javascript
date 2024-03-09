// 10. La pizzería Bella Napoli ofrece pizzas vegetarianas y no vegetarianas a sus clientes.
// Los ingredientes para cada tipo de pizza aparecen a continuación.
// a. Ingredientes vegetarianos: Pimiento y tofu.
// b. Ingredientes no vegetarianos: Pepperoni, Jamón y Salmón.
// Escribir un programa que pregunte al usuario si quiere una pizza vegetariana o no,
// y en función de su respuesta le muestre un menú con los ingredientes disponibles
// para que elija. Solo se puede elegir un ingrediente además de la mozzarella y el
// tomate que están en todas las pizzas. Al final se debe mostrar por pantalla

const vege = ["pimento", "tofu"];
const novege = ["pepperoni", " jamon", " salmon"];
let ingrediente;
let pizza = prompt("que tipo de pizza le gustaria");

if (pizza.toLocaleLowerCase() == "vegetariana") {
  alert("los ingredientes de la pizza son" + " " + vege)
  ingrediente = prompt("que ingrediente le gustaria en su pizza")
}
else {
  if (pizza.toLocaleLowerCase() == "normal") {
  alert("los ingredientes de la pizza son" + " " + novege)
  ingrediente = prompt("que ingrediente le gustaria en su pizza")
  }
};