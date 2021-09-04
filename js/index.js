function validar() {
  const urlcheck = 'https://mdenode.herokuapp.com/email/send/';
  var nombre = document.getElementById("nombre").value;
  var email = document.getElementById("email").value;
  var mensaje = document.getElementById("mensaje").value;
  if (nombre == "" || email == "" || mensaje == "") {
    return false
  } else {
    fetch(urlcheck, {
      method: 'POST',
      body: JSON.stringify({
        "nombre": `${nombre}`,
        "email": `${email}`,
        "mensaje": `${mensaje}`
      }),
      headers: { "Content-type": "application/json" }
    }).then(alert("Mensaje Enviado. Pronto recibira su respuesta"))
  }
}
