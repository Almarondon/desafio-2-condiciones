const password1 = "911";
const password2 = "714";

const select1 = document.getElementById("select1");
const select2 = document.getElementById("select2");
const select3 = document.getElementById("select3");
const msjejercicio3 = document.getElementById("msj-validacion");

const btnValidar = document.getElementById("btn-validar");
btnValidar.addEventListener("click", validarPassaword);

function validarPassaword() {
  const valor1 = select1.value;
  const valor2 = select2.value;
  const valor3 = select3.value;
  const valorIngresado = valor1 + valor2 + valor3;

  switch (valorIngresado) {
    case password1:
      msjejercicio3.innerHTML = "Password 1 correcto";
      // aqui va todo si el password 1 es igual al valor ingresado
      break;
    case password2:
      msjejercicio3.innerHTML = "Password 2 correcto";
      break;
    default:
      msjejercicio3.innerHTML = "Password incorrecto";
      // va si no se cumple nada, no es pass1 ni pass 2
      break;
  }
}
