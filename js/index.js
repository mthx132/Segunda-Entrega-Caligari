const nombre = prompt("Ingrese su Nombre Aqui:");
const contraseña = prompt("Cual desea que sea su contraseña?:");
let variasTransferencias = "Si"
let saldo = 80000;

while(variasTransferencias == "Si" ){

  alert("Usted posee un saldo de: $" + saldo);

const transferencia = prompt("A quien le deseas Transferir?:");
let cantidad = parseInt(prompt("Cuanto deseas Enviar?:"));

if (cantidad <= saldo) {

  if (validarProceso()) {
    let informacionTotal = [];
    informacionTotal.push({
      nombre:nombre,
      contraseña:contraseña,
      saldo:saldo,
      destinatario:transferencia,
      cantidad:cantidad
    });
    saldo = saldo - cantidad;
      console.log(informacionTotal)
    alert("Transferencia Exitosa");
    console.log("Transferencia Exitosa");
    let horaExacta = "la transferencia fue realizada el " + new Date()
    console.log (horaExacta)
    variasTransferencias = prompt("Deseas realizar otra transferencia? (escribir ´Si´ o ´No´) ")

    console.log(variasTransferencias)
  } else {
    alert("Transferencia Rechazada");
    console.log("Transferencia Rechazada");
    break
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
      "Transferir a: " + transferencia + " " + "Cantidad: " + saldo 
    );
    return verificacion_de_datos == "aceptar";
  } else {
    alert("Superaste el limite de Intentos");
    return false;
  }
}
}