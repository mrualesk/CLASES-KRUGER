class Libro {
    constructor(titulo, autor, anio) {
        this.titulo = titulo
        this.autor = autor
        this.anio = anio
        this.prestado = false
    }

    prestar() {
        this.prestado = true
    }

    devolver() {
        this.prestado = false
    }
}

class Biblioteca {
    constructor(nombre) {
        this.nombre = nombre
        this.libros = []
    }

    agregarLibro(libro) {
        this.libros.push(libro)
    }

    prestarLibro(nombre) {

        this.libros = this.libros.map((libro) => {
            if (libro.titulo === nombre) {
                libro.prestar()
                return libro
            }
            return libro
        })
    }

    devolverLibro(nombre) {
        this.libros = this.libros.map((libro) => {
            if (libro.titulo === nombre) {
                libro.devolver()
                return libro
            }
            return libro
        })
    }

    listarLibros() {
        console.log("Listado de libros")
        this.libros.forEach(libro => {
            console.log(`Titulo: ${libro.titulo}, Anio: ${libro.anio}, Prestado: ${libro.prestado ? "Si" : "No"}`)
        })
    }
}

const biblioteca = new Biblioteca("Biblioteca Municipal")

const libro1 = new Libro("Cien años de soledad", "Gabriel García Márquez", 1967)
const libro2 = new Libro("Don Quijote", "Miguel de Cervantes", 1605);
const libro3 = new Libro("1984", "George Orwell", 1949);

biblioteca.agregarLibro(libro1);
biblioteca.agregarLibro(libro2);
biblioteca.agregarLibro(libro3);

biblioteca.listarLibros()

biblioteca.prestarLibro("1984")

biblioteca.listarLibros()

biblioteca.devolverLibro("1984")

biblioteca.listarLibros()




