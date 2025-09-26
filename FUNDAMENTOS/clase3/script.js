// Bucles

let suma = 1;
// suma = suma + 1;
suma++;

console.log("Resultado suma " + suma)
console.log("------------------")

console.log("Inicio del bucle FOR")

let sumaDesdeFor = 0;
for (let incremental = 1; incremental <= 5; incremental++) {
    console.log("Numero de Iteracion " + incremental)
    sumaDesdeFor = sumaDesdeFor + incremental;
}
console.log("Suma desde el bucle FOR " + sumaDesdeFor)
console.log("Fin del bucle FOR")

// Suma detallada con cada ciclo
let sumaDetallada = 0;
let iteraciones = 10;

for (let i = 5; i <= iteraciones; i++) {
    sumaDetallada = sumaDetallada + i;
    console.log(`Iteracion ${i} suma actual = ${sumaDetallada}`)
}
// Arrays
// Las posiciones de los arrays | lista | arreglo siempre comienzan en 0
// posicion     0         1         2         3
const frutas = ["Manzana", "Pera", "Platano", "Mango"];

let frutaPos1 = frutas[0];
console.log("Fruta Posicion 1 " + frutaPos1)

const mezcla = ["Manzana", 1, null, true];

// Obtener el tamaño del array usamos .length
console.log("Tamaño del array de mezcla " + mezcla.length)
console.log("Imprimimos la posicion 3 " + mezcla[3])

for (let i = 0; i < mezcla.length; i++) {
    console.log("Iteracion actual " + i + " Valor " + mezcla[i])
}

// Hola Ana
// Hola Pedro
// Hola María
// Hola Luis
// Hola Sofía

console.log("Resolucion del Ejercicio")

const nombres = ["Ana", "Pedro", "Maria", "Luis", "Sofia"];

for (let i = 0; i < nombres.length; i++) {
    console.log("Hola " + nombres[i])
}

console.log("Resolucion del Ejercicio Inverso")

for (let i = nombres.length - 1; i >= 0; i--) {
    console.log("Hola " + nombres[i])
}






