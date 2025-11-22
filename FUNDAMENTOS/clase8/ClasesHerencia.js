class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar() {
        console.log('Hola soy ' + this.nombre + ' y tengo ' + this.edad + ' años')
    }
}

class Estudiante extends Persona {
    constructor(nombre, edad, curso) {
        super(nombre, edad);
        this.curso = curso;
    }

    estudiar() {
        console.log(`${this.nombre} está estudiando ${this.curso}`);
    }
}

const estudiante = new Estudiante("Juan", 20, "JavaScript");
estudiante.estudiar();
