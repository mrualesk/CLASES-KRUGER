// Funciones

// Es un bloque de codigo que se puede reutilizar
// y nos sirve para tareas especificas

function saludar() {
    console.log("Hola mundo desde una funcion")
}

function saludoConAlerta () {
    alert("Hola mundo con alerta")
}

function imprimirNumero() {
    let numero = document.getElementById("numero").value;
    const suma = numero + 5;
    console.log(suma)
    // alert(numero )
    let etiquetaP = document.getElementById("resultado");
    etiquetaP.textContent = "El numero es " + numero;
}





