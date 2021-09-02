
function validar() {
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var mensaje = document.getElementById("mensaje").value;
  if (nombre == "" || email =="" || mensaje==""){
    return false
  }else {
    alert(`Hola ${nombre}. Tu correo es ${email} y tu mensaje es : `+ mensaje);
    return false
  }
}
