// Objetos
// Es una estructura que agrupa propiedades (datos) y metodos (funciones)

const persona = {
    nombre: "Ana",
    edad: 25,
    saludar() {
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años`)
    }
}

persona.saludar() // "Hola, soy Ana"
persona.ciudad = "Quito"
persona.edad = 28

console.log(persona.nombre) // "Ana"
console.log(persona.ciudad) // "Quito"
persona.saludar() // "Hola, soy Ana"

delete persona.ciudad;

console.log("Ciudad es: " + persona.ciudad)

// Recorrer propiedades de un objeto

const producto = {
    id: 101,
    nombre: "mouse",
    precio: 19.99
}

console.log("1. Nombre del producto " + producto.nombre)
console.log("2. Nombre del producto " + producto["nombre"])

for (const clave in producto) {
    console.log("Clave " + clave + " Valor " + producto[clave])
}

const claves = Object.keys(producto)
console.log(claves)
const values = Object.values(producto)
console.log(values)
const claveValor = Object.entries(producto);
console.log(claveValor)

// Objetos aninados

console.log("--------------------------")

const curso = {
    nombre: "Js Basico",
    profesor: {
        nombre: "Marcos",
        area: "Frontend"
    },
    alumnos: [
        {
            nombre: "Ana",
            edad: 25
        },
        {
            nombre: "Pedro",
            edad: 28
        }
    ]
}

console.log(curso.nombre)
console.log(curso.profesor.nombre)
console.log(curso.alumnos)
console.log(curso.alumnos[1].nombre)

console.log("------------")
const alumnos = curso.alumnos;
for (let i = 0; i < alumnos.length; i++) {
    console.log("Nombre " + alumnos[i].nombre + " Edad " + alumnos[i].edad)
}
console.log("------------")

// Copia vs referencia

// REFERENCIA
// const a = {
//     x: 1
// }
//
// const b = a;
//
// b.x = 9;
//
// console.log(a.x)

// COPIA SUPERFICIAL
// const a = {
//     x: 1
// }
//
// const b = {...a};
//
// b.x = 9;
//
// console.log(a.x)

const original = {
    x: 1, y: {
        z: 2
    }
}
const copia = {...original}
copia.x = 5;
copia.y.z = 8;








