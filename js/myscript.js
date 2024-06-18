      // Bloque de código para validación de campos de formulario, sacado directo de la página de Bootstrap
(() => {
  'use strict'
  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()        // Con esto evito el envío anticipado del formulario
        event.stopPropagation()
      } else {
        // Aqui selecciono todos mis elementos del formulario bootrstrap por su id, que coinciden con la clase 'needs-validation'
        // para realizar la validación antes de su envío, verificando si los campos están rellenados
        const nameID = document.querySelector("#nameID").value.trim();
        const surnameID = document.querySelector("#surnameID").value.trim();
        const fecha_nacimiento = document.querySelector("#fecha_nacimiento").value;
        const correo = document.querySelector("#correo").value.trim();
        const cargo = document.querySelector("#cargo").value;
        const ingreso = document.querySelector("#ingreso").value;

        // Aqui compruebo que los campos de nombre y apellido no puedan estar vacíos
        if (nameID === '' || surnameID === '') {
          alert("Los campos de nombre y apellido son obligatorios.");
          return; // Sale de la función si la validación falla
        }

        // Formateo de la fecha para que la tome la cuadrícula de usuarios, y añado un día, ya que js me presenta una inconsistencia de un dia a la fecha que yo ingreso
        const fechaNacimiento = new Date(fecha_nacimiento);
        fechaNacimiento.setDate(fechaNacimiento.getDate() + 1);

        const fechaActual = new Date();

        // Calcular la edad del trabajador, para luego verificar si es mayor de 18 años
        const edadTrabajador = fechaActual.getFullYear() - fechaNacimiento.getFullYear();

        if (edadTrabajador < 18) {
          alert("Para registrarse como trabajador, debe ser mayor de 18 años.");
          return;
        }

        // Mismo formateo y añadidura de un día
        const fechaIngreso = new Date(ingreso);
        fechaIngreso.setDate(fechaIngreso.getDate() + 1);

          // Calcula la edad en la fecha de ingreso
        let edad = fechaIngreso.getFullYear() - fechaNacimiento.getFullYear();
        const mes = fechaIngreso.getMonth() - fechaNacimiento.getMonth();
        if (mes < 0 || (mes === 0 && fechaIngreso.getDate() < fechaNacimiento.getDate())) {
        edad--;
  }

  // Verifica si la fecha de ingreso es válida en cuanto a no ser menor de edad a la fecha de haber ingresado
  if (isNaN(fechaIngreso.getTime())) {
    alert("La fecha de ingreso es inválida.");
    return;
  } else if (edad < 18) { // Edad mínima de 18 años
    alert("La persona debe tener al menos 18 años en la fecha de ingreso.");
    return;
  }

        // Verificación de si el correo ya está en uso
        const usuariosExistentes = document.querySelectorAll(".user-grid .col");
        let correoEnUso = false;
        usuariosExistentes.forEach(usuario => {
          const correoUsuario = usuario.querySelector("#respuesta-correo").textContent.split(":")[1].trim();
          if (correoUsuario === correo) {
            correoEnUso = true;
            return;
          }
        });

        if (correoEnUso) {
          alert("El correo ingresado ya está en uso. Por favor, ingrese otro correo.");
          return;
        }

        // Si todas las validaciones pasan, se muestra el modal de registro exitoso
        var modal = new bootstrap.Modal(document.getElementById('modalRegistroExitoso'));
        modal.show();
        event.preventDefault();
      }

      form.classList.add('was-validated');
    }, false);
  })
})();

// Agregar registros en la lista dinamica
const formulario = document.querySelector("#formulario");

//crear el evento
formulario.addEventListener("submit", validarFormulario);

//mis otras funciones
// aqui hago la recopilacion de los datos de mi formulario
function validarFormulario(e) {
  e.preventDefault();
  const nameID = document.querySelector("#nameID").value.trim();
  const surnameID = document.querySelector("#surnameID").value.trim();
  const fecha_nacimiento = document.querySelector("#fecha_nacimiento").value;
  const correo = document.querySelector("#correo").value.trim();
  const cargo = document.querySelector("#cargo").value;
  const ingreso = document.querySelector("#ingreso").value;

  // Verifico si los campos de nombre y apellido están vacíos
  if (nameID === '' || surnameID === '') {
    alert("Los campos de nombre y apellido son obligatorios.");
    return;
  }

  // Mismo formateo y añadidura de un día para que se muestre bien en la cuadricula
  const fechaNacimiento = new Date(fecha_nacimiento);
  fechaNacimiento.setDate(fechaNacimiento.getDate() + 1);

  const fechaActual = new Date();
  const edadTrabajador = fechaActual.getFullYear() - fechaNacimiento.getFullYear();

  if (edadTrabajador < 18) {
    alert("Para registrarse como trabajador, debe ser mayor de 18 años.");
    return;
  }

  // Formateo de la fecha de ingreso, para que luego se pueda leer en la cuadricula de los usuarios
  const fechaIngreso = new Date(ingreso);
  fechaIngreso.setDate(fechaIngreso.getDate() + 1); // Añade un día por el problema de la zona horaria

  // Calcula la edad en la fecha de ingreso
  let edad = fechaIngreso.getFullYear() - fechaNacimiento.getFullYear();
  const mes = fechaIngreso.getMonth() - fechaNacimiento.getMonth();
  if (mes < 0 || (mes === 0 && fechaIngreso.getDate() < fechaNacimiento.getDate())) {
    edad--;
  }

  // Verifica si la fecha de ingreso es válida en cuanto a no ser menor de edad a la fecha de haber ingresado
  if (isNaN(fechaIngreso.getTime())) {
    alert("La fecha de ingreso es inválida.");
    return;
  } else if (edad < 18) { // Edad mínima de 18 años
    alert("La persona debe tener al menos 18 años en la fecha de ingreso.");
    return;
  }

  // Verificación de si el correo ya está en uso
  const usuariosExistentes = document.querySelectorAll(".user-grid .col");
  let correoEnUso = false;
  usuariosExistentes.forEach(usuario => {
    const correoUsuario = usuario.querySelector("#respuesta-correo").textContent.split(":")[1].trim();
    if (correoUsuario === correo) {
      correoEnUso = true;
      return;
    }
  });

  if (correoEnUso) {
    alert("El correo ingresado ya está en uso. Por favor, ingrese otro correo.");
    return;
  }

  
  // Y si el correo no está en uso, y el trabajador tiene al menos 18 años, ahora si, se agrega el nuevo usuario a la cuadrícula de usuarios
  const contenedoresUsuarios = document.querySelectorAll(".user-grid .col");
  for (let i = 0; i < contenedoresUsuarios.length; i++) {
    const contenedor = contenedoresUsuarios[i];
    const nombreUsuario = contenedor.querySelector(".card-title").textContent.trim();
    // Si el contenedor está vacío
    if (nombreUsuario === "Nombre y apellido del Usuario") {
      // RELLENO DE DATOS EN LA CUADRICULA
      contenedor.querySelector(".card-title").textContent = `${nameID} ${surnameID}`;
      contenedor.querySelector("#respuesta-nacimiento").textContent = `Fecha de nacimiento: ${fechaNacimiento.toLocaleDateString()}`;
      contenedor.querySelector("#respuesta-correo").textContent = `Correo: ${correo}`;
      contenedor.querySelector("#respuesta-cargo").textContent = `Cargo: ${cargo}`;
      contenedor.querySelector("#respuesta-fecha-ingreso").textContent = `Fecha de ingreso: ${fechaIngreso.toLocaleDateString()}`;
      break;
    }
  }
}

// Eliminar el usuario de la cuadrícula

// Aca "leo" todos los botones de eliminar de mi código
const botonesEliminar = document.querySelectorAll('.btn-remove');

// creo el evento
botonesEliminar.forEach(boton => {
  boton.addEventListener('click', function() {
    // Obtengo el contenedor de la tarjeta de usuario correspondiente
    const contenedorUsuario = boton.closest('.col');
    // Eliminar el contenedor de la tarjeta de usuario
    contenedorUsuario.remove();
  });
});
