/* Ejercicio #1 */
const imgStyleBorder = "2px solid red";

const imagen = document.getElementById("img-playa");
imagen.addEventListener("click", changeBorderColor);

function changeBorderColor() {
  if (imagen.style.border == imgStyleBorder) {
    imagen.style.border = "none";
  } else {
    imagen.style.border = imgStyleBorder;
  }
}

/* Ejercicio #2 */
const stiker1 = document.getElementById("stiker1");
stiker1.addEventListener("keyup", setQtyStiker1);

let qtyStiker1 = 0;

function setQtyStiker1() {
  qtyStiker1 = Number(stiker1.value);
}
