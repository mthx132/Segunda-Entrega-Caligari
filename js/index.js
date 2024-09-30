//El Nombre sera utilizado para el Proyecto Final
const Nombre = prompt("Ingrese su Nombre Aqui:");
const contraseña = prompt("Cual desea que sea su contraseña?:");
const Saldo = "80000";
alert("Usted posee un saldo de: $" + Saldo);
const Transferencia = prompt("A quien le deseas Transferir?:");

const cantidad = parseInt(prompt("Cuanto deseas Enviar?:"));
if (cantidad <= Saldo) {
  if (validarProceso()) {
    alert("Transferencia Exitosa");
    console.log("Transferencia Exitosa");
  } else {
    alert("Transferencia Rechazada");
    console.log("Transferencia Rechazada");
  }
} else {
  alert("No Posee el dinero suficiente");
}
function validarProceso() {
  let contraseñaIngresada;
  let intentos = 5;

  while (
    (contraseñaIngresada =
      prompt("Ingrese su Contraseña:") != contraseña && intentos != 1)
  ) {
    intentos--;

    alert("Contraseña Incorrecta, Te quedan: " + intentos + " de 5 intentos");
  }

  if (intentos > 1) {
    alert(
      "en caso que los siguientes datos sean correctos escribe 'aceptar', de lo contrario escribe 'rechazar' "
    );
    const verificacion_de_datos = prompt(
      "Transferencia a: " + Transferencia + " Enviaras: $" + cantidad
    );
    return verificacion_de_datos == "aceptar";
  } else {
    alert("Superaste el limite de Intentos");
    return false;
  }
}
