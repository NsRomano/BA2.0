function validarFormulario() {
    var nombre = document.querySelector("input[name=nombre]");
    var email = document.querySelector("input[name=email]");
    var problema = document.querySelector("input[name=problema]");
    var mensajeExito = document.getElementById("mensaje-exito");
  
    if (nombre.value == "" || !/\w+@\w+\.\w+/.test(email.value) || problema.value == "") {
      alert("Por favor, completa todo el formulario!");
      return false;
    }
  
    mensajeExito.style.display = "block";
  
    return false;
  }
  