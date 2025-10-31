const numeros = [2, 5, 8, 15, 10];

// Metodo Map
// Un map siempre nos devuelve un array del mismo tamaño
// Funcion Principal: modificar los items de nuestro array
// Simepre nos devuelve un nuevo array

const multiplicarNumero = (num) => {
    return num * 2
}

const nuevoArray = numeros.map(multiplicarNumero)
const nuevoArray2 = numeros.map((num) => num * 2)
console.log({nuevoArray, nuevoArray2})


const arrayPersonas = [
    {
        nombre: "Ana",
        edad: 20
    },
    {
        nombre: "Pedro",
        edad: 25
    }
]

const arrayPersonasModificado = arrayPersonas.map(persona => ({
    ...persona,
    nombre: persona.nombre.toUpperCase(),
}))

console.log({arrayPersonasModificado})

// Spread operator

const persona = {
    nombre: "Ana",
    edad: 20
}
const curso = {
    nombreCurso: "Js Basico",
    profesor: "Marcos",
}

const personaCurso = {
    ...persona,
    ...curso,
    nombreCurso: "Js Avanzado",
}
console.log({personaCurso})

// Metodo Filter
// Un filter nos devuelve un nuevo array con los items que cumplan con la condicion
// Funcion Principal: filtrar los items de nuestro array
// Simepre nos devuelve un nuevo array

const extraerNumeroPar = (num) => {
    return num % 2 === 0
}

const numerosPares = numeros.filter(item => item % 2 === 0)

const eliminarNumero8 = numeros.filter(item => item !== 8)

console.log({numerosPares, eliminarNumero8})

// Metodo Reduce
// Nos puede devolver lo que sea en base al array

const sumaReduce = (acumulador, item) => {
    // retornamos la acumulacion
    // (0 + 2 ) = 2 acumulador = 2
    // (2 + 5 ) = 7 acumulador = 7
    // (7 + 8 ) = 15 acumulador = 15

    return (acumulador + item);
}

const sumaNumeros = numeros.reduce(sumaReduce, 0)
console.log({sumaNumeros})

// Metodo ForEach
// Funcion Principal: iterar sobre los items de nuestro array
// Siempre nos devuelve un nuevo array

numeros.forEach(item => console.log(item))

// Metodo Find
// Funcion Principal: encontrar un item en nuestro array

const num8 = numeros.find(item => item === 8)
console.log({num8})

// Metodo FindIndex
// Funcion Principal: encontrar un item en nuestro array

const posicionNum8 = numeros.findIndex(item => item === 8)
const valorPosicion8 = numeros[posicionNum8]
console.log({posicionNum8, valorPosicion8})

// Metodo Some
// Funcion Principal: verificar si algun item cumple con la condicion
// Siempre nos devuelve un booleano

const hayPares = numeros.some(item => item % 2 === 0)
const hayNum20 = numeros.some(item => item === 20)

console.log({hayNum20, hayPares})

const arrayNumerosPares = [2, 4, 6, 8, 10];

// Metodo Every
// Funcion Principal: verificar si todos los items cumplen con la condicion
// Siempre nos devuelve un booleano

const sonTodosPares = arrayNumerosPares.every(item => item % 2 === 0)
console.log({sonTodosPares})

const usuarios = [
    {nombre: 'Ana', edad: 25},
    {nombre: 'Luis', edad: 30},
    {nombre: 'María', edad: 17}
];

const sonMayoresDeEdad = usuarios.every(usuario => usuario.edad >= 18);
console.log({sonMayoresDeEdad})

// Metodo Sort

// Comparacion de numeros

const numerosParaOrdenar = [10, 2, 5];

numerosParaOrdenar.sort((a, b) => a - b)
console.log({numerosOrdenadosMenorAmayor: numerosParaOrdenar})

numerosParaOrdenar.sort((a, b) => b - a)
console.log({numerosOrdenadosMayorAmenor: numerosParaOrdenar})

// 1. a = 10, b = 2
// a - b = 8 => > 0 es positivo
// 10 va despues del 2

// 1. a = 2, b = 5
// a - b = -3 => > 0 es negativo
// 2 va antes del 5

// Metodos que mutan al array => Hacen cambios en el array original
// -----Inicio----
const nombres = ['Carlos', 'Ana', 'Bea'];

nombres.sort((a, b) => a.localeCompare(b))
console.log({nombresOrdenadosAsc: nombres})

nombres.sort((a, b) => b.localeCompare(a))
console.log({nombresOrdenadosDesc: nombres})

// Metodo Push => agrega un nuevo item al final del array
nombres.push("Marcos", "Juan")
console.log({nombres})
// Metodo Pop => elimina el ultimo item del array
nombres.pop()
console.log({nombres})

// Metodo Unshift => agrega un nuevo item al inicio del array
nombres.unshift("Pedro")
console.log({nombres})

// Metodo Shift => elimina el primer item del array
nombres.shift()
console.log({nombres})
// ----Fin---

// Metodos para agregar elementos tanto al inicio como al final del array con spread operator

const nombres2 = ['Carlos', 'Ana', 'Bea'];

// Agregar elemento al inicio
const nombresMasUnoAlInicio = ["Marcos", ...nombres2]
console.log({nombresMasUnoAlInicio})
const nombresMasUnoAlFinal = [...nombresMasUnoAlInicio, "Pedro"]
console.log({nombresMasUnoAlFinal})



// Metodo Includes

const haveCarlos = nombres.includes(`Carlos`)
console.log({haveCarlos})




















