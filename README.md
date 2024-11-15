# Proyecto de Gestión de Trabajadores

Este proyecto es una aplicación web para gestionar trabajadores, diseñada con HTML, CSS y JavaScript. La interfaz permite registrar trabajadores mediante un formulario de validación, mostrar sus datos en una cuadrícula y eliminar registros si es necesario. La interfaz es responsive y utiliza Bootstrap para la estructura visual y validación del formulario.

Este proyecto fue desarrollado como examen final para el ramo "Taller de tecnologías Web" del Instituto Profesional San Sebastian (ex IP CIISA), correspondiente al primer trimestre.

## Tabla de Contenidos
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Características](#características)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Guía de Instalación](#guía-de-instalación)
- [Uso](#uso)
- [Personalización](#personalización)
- [Créditos](#créditos)

## Estructura del Proyecto

```
|-- index.html
|-- styles.css
|-- script.js
|-- README.md
```

* `index.html`: Contiene el HTML para la estructura de la página.
* `styles.css`: Archivo de estilos para la personalización de la interfaz.
* `script.js`: Archivo JavaScript para la lógica del formulario y las funcionalidades de validación, inserción y eliminación de trabajadores.
* `README.md`: Documentación del proyecto.

## Características

1. **Formulario de Registro de Trabajadores**:
   * Validación de campos obligatorios: Nombre, Apellido, Fecha de Nacimiento, Correo, Cargo, y Fecha de Ingreso.
   * Comprobación de edad mínima (18 años).
   * Evita duplicidad de correos entre los trabajadores registrados.
   * Muestra un modal de confirmación de registro exitoso.

2. **Cuadrícula de Usuarios**:
   * Visualización dinámica de los trabajadores registrados en formato de tarjeta.
   * Las tarjetas muestran: nombre, fecha de nacimiento, correo, cargo y fecha de ingreso.
   * Función de eliminación de registros.

3. **Responsive Design**:
   * Diseño adaptable para dispositivos móviles y escritorio.

## Tecnologías Utilizadas

* **HTML5**: Estructura de la aplicación.
* **CSS3**: Estilos y personalización de la interfaz.
* **Bootstrap**: Librería de CSS para estilos y componentes.
* **JavaScript (ES6)**: Lógica de validación, inserción y eliminación de usuarios.

## Guía de Instalación

1. **Clona el repositorio**:
```bash
git clone <URL_DEL_REPOSITORIO>
```

2. **Abre el archivo** `index.html` en tu navegador para visualizar la aplicación.

## Uso

1. **Registro de un nuevo trabajador**:
   * Completa los campos del formulario: Nombre, Apellido, Fecha de Nacimiento, Correo, Cargo, y Fecha de Ingreso.
   * La aplicación validará el formulario y mostrará un modal de confirmación si los datos son correctos.

2. **Visualización de trabajadores registrados**:
   * Los trabajadores registrados aparecerán en la cuadrícula de usuarios en formato de tarjeta.

3. **Eliminación de un trabajador**:
   * Cada tarjeta tiene un botón de eliminación para borrar el registro.

## Personalización

Para modificar la funcionalidad o estilo de la aplicación:
* **Estilos**: Edita el archivo `styles.css` para ajustar el diseño visual.
* **Validaciones o Lógica**: Modifica el archivo `script.js` para cambiar las validaciones, condiciones de registro o eliminación de usuarios.
* **Estructura HTML**: Personaliza el `index.html` para agregar o quitar elementos.

## Créditos

Desarrollado utilizando Bootstrap, CSS personalizado y JavaScript para las funcionalidades principales.

Proyecto realizado como examen final del curso "Taller de Desarrollo Web" en el Instituto Profesional San Sebastian, primer trimestre.

---

Este README proporciona una guía completa para entender, ejecutar y personalizar el proyecto. ¡Disfruta gestionando tus registros de trabajadores!
