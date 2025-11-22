class Vehiculo {
    constructor(marca) {
        this.marca = marca
    }

    moverse() {
        console.log("Moviendose....")
    }
}

class VehiculoAcuatico extends Vehiculo {
    nadar() {
        console.log("Nadando....")
    }
}

class VehiculoTerrestre extends Vehiculo {
    rodar() {
        console.log("Rodando....")
    }
}

// class VehiculoAnfibio extends VehiculoTerrestre, VehiculoAcuatico {
//
// }
//
// const vehiculoAnfibio = new VehiculoAnfibio("Toyota")
// console.log(vehiculoAnfibio.rodar())


class CapacidadDeNadar {
    nadar() {
        console.log("Nadando....")
    }
}

class CapacidadDeRodar {
    rodar() {
        console.log("Rodando....")
    }
}

class Barco {
    constructor(nombre) {
        this.nombre = nombre;
        this.navegacion = new CapacidadDeNadar();
    }

    moverse() {
        console.log(`${this.nombre} se esta moviendo`)
        this.navegacion.nadar()
    }
}

const barco = new Barco("Barco 1")
barco.moverse()

class Carro {
    constructor(nombre) {
        this.nombre = nombre;
        this.movimiento = new CapacidadDeRodar();
    }

    moverse() {
        console.log(`${this.nombre} se esta moviendo`)
        this.movimiento.rodar()
    }
}

const carro = new Carro("Carro 1")
carro.moverse()

class VehiculoAnfibio {
    constructor(nombre) {
        this.nombre = nombre;
        this.navegacion = new CapacidadDeNadar();
        this.desplazarmiento = new CapacidadDeRodar();
    }

    moverseEnAgua(){
        console.log(`${this.nombre} se esta moviendo en agua`)
        this.navegacion.nadar()
    }

    moverseEnTierra(){
        console.log(`${this.nombre} se esta moviendo en tierra`)
        this.desplazarmiento.rodar()
    }

}

