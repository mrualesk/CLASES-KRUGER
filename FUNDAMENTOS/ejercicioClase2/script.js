// let mensaje = document.getElementById("mensaje")
//
// let btnTexto = document.getElementById("btnTexto")

// FORMAS DE DECLARAR UN FUNCION

// FORMA CONVENCIONAL
function eventoClick() {
    console.log("Hola mundo desde el evento click")
}

eventoClick()  // Ejecutamos la funcion

// ARROW FUNCTIONS
const arrowFunction = () => {
    console.log("Hola mundo desde el evento click")
}
arrowFunction()  // Ejecutamos la funcion

// VARIANTES ARROW FUNCTIONS

const arrowFunction2 = () => console.log("Hola mundo desde el evento click")
arrowFunction2()  // Ejecutamos la funcion

// FUNCION ANONIMA
// () => {
//     console.log("Esto es una funcion anonima")
// }


console.log("--- Ejercicio Funciones con parametros ---")

function suma(num1, num2) {
    return num1 + num2;
}

function resta(num1, num2) {
    return num1 - num2;
}

const multiplicacion = ( num1, num2 ) => {
    return num1 * num2;
}

const division = (num1, num2) => num1 / num2;


function ejecutarFuncion(suma) {
    const resultadoSuma = suma(5,10)
    console.log("Resultado de la suma dentro de ejecutarSuma es " + resultadoSuma)
}

ejecutarFuncion(suma)




const resultadoOperacion = division(100,10) + suma(5, 10) + resta(5, 5) + multiplicacion(5, 5);


console.log("Resultado de la operacion " + resultadoOperacion)














