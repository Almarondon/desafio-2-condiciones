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
