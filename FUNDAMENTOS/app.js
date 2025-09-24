// variables

    // constantes
const caracter = "m" // es un caracter
const palabra = "hola" // es una palabra
const nombre = 'Marcos' // es una cadena de texto
const apellido = "Ruales"

const nombreCompleto = nombre + " " + apellido

console.log(nombreCompleto)

    // variables

console.log("Variables -----------------")
let valorVariable = "hola"
console.log(valorVariable) // hola
valorVariable = "adios"

let valorVariable2 = "ya volvi"

console.log(valorVariable + " " + valorVariable2); // adios ya volvi

 // variables con numeros

const numero1 = 10;
let numero2 = 2;

let suma = numero1 + numero2;
let resta = numero1 - numero2;
let multiplicacion = numero1 * numero2;
let division = numero1 / numero2;
let modulo = numero1 % numero2;

console.log("--- Inicio Operaciones ---")
console.log("Suma" + " " + suma)
console.log("Resta " + resta)
console.log("Multiplicacion" + " " + multiplicacion)
console.log("Division" + " " + division)
console.log("Modulo" + " " + modulo)
console.log("--- Fin Operaciones ---")

var variableDeprecada = "hola soy un var"
variableDeprecada = "hola soy un var reasignado"

console.log(variableDeprecada)

let edad = 25; // entero
let precio = 2.5; // decimal
let sumaEdadPrecio = edad + precio;

console.log("Suma de edad y precio concatenado " + edad + precio)
console.log("Suma de edad y precio " + sumaEdadPrecio)
console.log("Suma de edad y precio " + (edad + precio))

let miNombre = "Marcos"
let mensaje = `Hola como estas, ${miNombre}`
let mensaje2 = "Hola como estas,"+ " " + miNombre;

console.log(mensaje)
console.log(mensaje2)
