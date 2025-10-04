# Ejercicios: Formularios y Envío de Datos (HTML + CSS + JS)

---

## 📝 Ejercicio 1: Formulario de registro básico
**Descripción:**  
Crea un formulario de registro con los campos: nombre, correo, contraseña y confirmación de contraseña.
- Usa `required`, `minlength` y `type="email"` correctamente.
- Agrega etiquetas `<label>` enlazadas a cada campo (`for` + `id`).
- Aplica estilos simples (bordes redondeados, colores y espaciado).
- Incluye un botón “Registrarse” centrado.

*Objetivo:* Comprender cómo validar campos básicos y estructurar un formulario limpio y legible.

---

## 📝 Ejercicio 2: Encuesta de satisfacción
**Descripción:**  
Diseña un formulario de encuesta para que los usuarios califiquen una experiencia.
- Incluye un campo de nombre, una lista desplegable con opciones de “satisfacción” (1 a 5 estrellas),  
  y un área de texto para comentarios (`textarea`).
- Agrega una pregunta con botones tipo `radio` (¿Recomendarías este servicio?).
- Aplica `:hover` y `:focus` en los campos para mejorar la interacción visual.

*Objetivo:* Practicar diferentes tipos de inputs (`select`, `radio`, `textarea`) y aplicar estilos de enfoque.

---

## 📝 Ejercicio 3: Formulario con resultado en otra página
**Descripción:**  
Crea un formulario con `method="GET"` que envíe los datos a otra página `resultado.html`.
- Los campos deben ser: nombre, edad y color favorito.
- En la página `resultado.html`, muestra los valores enviados usando **JavaScript** y `URLSearchParams`.
- Si no se reciben datos, muestra un mensaje: “No hay información para mostrar”.

*Objetivo:* Comprender cómo funcionan `action` y `method`, y cómo leer parámetros desde otra página usando JavaScript.
