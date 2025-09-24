let nombre = "Juan";
const apellido = "Rios";

const esEstuante = false // puede ser true o false || 1 o 0

console.log(nombre, apellido, esEstuante);

console.log("-----Operadores Especiales-----")

let a = 5;
let b = 10;
console.log(a + b);
console.log(a > b); // false
console.log(a < b); // true

console.log("--- Operador && ---")

// Unicamente un operador && es igual a true cuando ambas partes son positivas (true)

console.log(a > b && false) // es igual a false
console.log(a < b && b > 0) // es igual a true

console.log("--- Operador || ---")
// a = 5 b = 10
// Con que una de sus partes sea true, el resultado es true

console.log(a < 10 || b > 20) // es igual a true

console.log("--- Operador Mayor o igual que && condicional If ---")

const edad = 15;
// Si lo que esta dentro del if es verdadero o true entonces se ejecuta
// el codigo que esta entre las llaves
if (edad >= 18) {
    console.log("Es mayor de edad")
} else {
    console.log("Es menor de edad")
}

// Realizar un ejercicio donde vamos a definir un numero
// y vamos a indicar si este es positivo o negativo














