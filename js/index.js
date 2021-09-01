
function validar() {
    var elemento = document.getElementById("nombre").value
  if (elemento == ""){
    alert("Debes llenar el campo")
    return false
  }else {
    alert("Genial el valor es: "+elemento)
    return false
  }
}
