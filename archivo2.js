/* Ejercicio #2 */
const stiker1 = document.getElementById("stiker1");
const stiker2 = document.getElementById("stiker2");
const stiker3 = document.getElementById("stiker3");
const message = document.getElementById("msj");

const btn = document.getElementById("btn");
btn.addEventListener("click", verify);

function verify() {
  const qtyStiker1 = Number(stiker1.value);
  const qtyStiker2 = Number(stiker2.value);
  const qtyStiker3 = Number(stiker3.value);
  const totalQty = qtyStiker1 + qtyStiker2 + qtyStiker3;
  if (totalQty > 10) {
  } else {
  }
}
