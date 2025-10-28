//Crea una clase Estudiante con nombre, edad, y un array de calificaciones.
// Agrega métodos para agregar calificaciones y calcular el promedio.


class Estudiante {
    calificaciones = []
    #suma = 0

    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    get suma() {
        return this.#suma
    }

    set suma(valor) {
        this.#suma = valor;
    }

    agregarCalificacion(calificacion) {
        this.calificaciones.push(calificacion)
    }

    funcionSuma(item) {
        this.#suma = this.#suma + item;
    }

    calcularPromedio() {
        this.calificaciones.forEach((item) => this.funcionSuma(item))

        let promedio = this.#suma / this.calificaciones.length;

        console.log(`Promedio de calificacion de ${this.nombre} es ${promedio} `)
    }
}

const estudiante1 = new Estudiante("Pedro", 26);


estudiante1.suma = 50  // Seteamos valor a la variable privada con setter
console.log("Suma Variable privada: " + estudiante1.suma) // obtenemos valor de la variable privada con getter

estudiante1.agregarCalificacion(10);
estudiante1.agregarCalificacion(20);
estudiante1.agregarCalificacion(10);
estudiante1.agregarCalificacion(20);
estudiante1.agregarCalificacion(10);

estudiante1.calcularPromedio()
