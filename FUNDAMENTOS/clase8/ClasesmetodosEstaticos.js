class Calculadora {

    static sumar(a, b) {
        return a + b;
    }

    static restar(a, b) {
        return a - b;
    }
}

console.log(Calculadora.sumar(10, 5))
console.log(Calculadora.restar(10, 5))


class TextoUtil {

    static capitalizar(texto) {
        return texto.charAt(0).toUpperCase() + texto.slice(1).toLowerCase();
    }

    static contarPalabras(texto) {
        return texto.trim().split(/\s+/).length;
    }

    static invertir(texto) {
        return texto.split('').reverse().join('');
    }

    static esPalindromo(texto) {
        const textoLimpio = texto.toLowerCase().replace(/\s/g, '');
        return textoLimpio === textoLimpio.split('').reverse().join('');
    }

    static truncar(texto, longitud) {
        if (texto.length <= longitud) return texto;
        return texto.slice(0, longitud) + '...';
    }

    static quitarEspacios(texto) {
        return texto.trim();
    }
}

// USO
console.log(TextoUtil.capitalizar("hola mundo")); // "Hola mundo"
console.log(TextoUtil.contarPalabras("Hola como estas")); // 3
console.log(TextoUtil.invertir("hola")); // "aloh"
console.log(TextoUtil.esPalindromo("anita lava la tina")); // true
console.log(TextoUtil.truncar("Este es un texto largo", 10)); // "Este es un..."


