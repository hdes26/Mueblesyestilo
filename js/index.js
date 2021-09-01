
function validar() {
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var mensaje = document.getElementById("mensaje").value;
  if (nombre == "" || email =="" || mensaje==""){
    alert("Debes llenar el campo");
    return false
  }else {
    alert("Genial tu mensaje es : "+ mensaje);
    return false
  }
}
