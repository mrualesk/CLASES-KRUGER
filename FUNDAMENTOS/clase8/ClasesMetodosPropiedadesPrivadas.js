class CuentaBancaria {
    #saldo = 0;

    constructor(titular) {
        this.titular = titular;
    }

    depositar(cantidad) {
        this.#saldo += cantidad;
    }

    #calcularInteres() {
        return this.#saldo * 0.5;
    }

    verSaldo() {
        return this.#saldo + this.#calcularInteres();
    }
}

const cuenta = new CuentaBancaria("Marcos")
cuenta.depositar(1000)
console.log(cuenta.verSaldo())


