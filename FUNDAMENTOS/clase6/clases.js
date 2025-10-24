// CLASES EN JS
// Una clase es un plano o molde que define cómo debe ser un objeto

// En programación, una clase es exactamente eso:
// un molde o plantilla que nos permite crear objetos similares
// de manera organizada.

class Persona {
    // Propiedades
    nombre = ""
    edad = 0;

    // Inicializacion de nuestra clase
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    // Acciones
    saludar() {
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años`);
    }
}

const persona1 = new Persona("Marcos", 31)
const persona2 = new Persona("Pedro", 22)

console.log("Nombre persona 1 " + persona1.nombre)
console.log("Edad persona 1 " + persona1.edad)
persona1.saludar()
persona2.saludar()

console.log("-----------------Cuenta Bancaria----------------")

// Ejemplo Cuenta Bancaria

class CuentaBancaria {
    constructor(titular, saldoInicial) {
        this.titular = titular;
        this.saldo = saldoInicial;
        this.movimientos = []
    }
    depositar(cantidad) {
        this.saldo = this.saldo + cantidad;
        this.movimientos.push(`Deposito: +${cantidad}`)
    }
    retirar(cantidad){
        this.saldo = this.saldo - cantidad;
        this.movimientos = [...this.movimientos, `Retiro: -${cantidad}`]
    }

    consultarSaldo(){
        console.log(`El saldo actual de ${this.titular} es de ${this.saldo}`);
    }

    verHistorial() {
        console.log("Historial de " + this.titular)
        this.movimientos.forEach( (item) => {
            console.log(item)
        })
    }
}

const cuenta1 = new CuentaBancaria("Jose", 0)
cuenta1.depositar(100);
cuenta1.depositar(200);
cuenta1.depositar(300);

cuenta1.retirar(100);

cuenta1.verHistorial()
cuenta1.consultarSaldo()

console.log("------------------------")
const cuenta2 = new CuentaBancaria("Maria", 1000);
cuenta2.depositar(100);
cuenta2.depositar(300);
cuenta2.retirar(100);

cuenta2.verHistorial()
cuenta2.consultarSaldo()







