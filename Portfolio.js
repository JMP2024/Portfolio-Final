// MODO CLARO/OSCURO
document.addEventListener("DOMContentLoaded", function () {
    const checkbox = document.querySelector("#checkbox");
    const body = document.body;
  
    // Cargar el estado guardado en localStorage
    if (localStorage.getItem("dark-mode") === "true") {
      body.classList.add("dark-mode");
      checkbox.checked = true;
    }
  
    // Cambiar entre modos
    checkbox.addEventListener("change", function () {
      if (checkbox.checked) {
        body.classList.add("dark-mode");
        localStorage.setItem("dark-mode", "true");
      } else {
        body.classList.remove("dark-mode");
        localStorage.setItem("dark-mode", "false");
      }
    });
  });
  
//   VALIDACIÓN FORMULARIO
  // Selecciona el formulario
const form = document.getElementById('contact-form');

// Agrega un evento de envío de formulario
form.addEventListener('submit', function(event) {
    // Validación de los campos del formulario
    if (!form.checkValidity()) {
        event.preventDefault(); // Evita el envío del formulario si no es válido
        displayValidationMessages();
    }
});

// Función para mostrar mensajes de validación
function displayValidationMessages() {
    const inputs = form.querySelectorAll('input:invalid, textarea:invalid');
    
    inputs.forEach(input => {
        const message = input.validationMessage;
        alert(message);
    });
}

//Recarga
    document.addEventListener('DOMContentLoaded', function() {
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.has('submitted')) {
            alert('Formulario enviado correctamente.');
        }
    });

  