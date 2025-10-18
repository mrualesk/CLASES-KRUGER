// CALCULAR PROMEDIO DE NOTAS
// Descripcion
// Crea una función llamada promedioNotas que
// reciba un array con las notas de un estudiante
// y devuelva su promedio.

const notas = [10, 8, 7, 10, 10];

function promedioNotas(notas) {

}

//Crea una función llamada
// `esPalindromo` que reciba una **palabra o frase**
// y determine si se lee igual al derecho y al revés.
//La función debe **ignorar los espacios
// y mayúsculas/minúsculas**.

// PISTAS
const palindromo = "hola"
const palindromoEnMinusculas = palindromo.toLowerCase();
console.log({palindromoEnMinusculas})
const palindromoSinEspacios = palindromoEnMinusculas.replaceAll(" ", "");
console.log({palindromoSinEspacios})
console.log("Primera letra del palindromo " + palindromo[0])

const esPalindromo = (texto) => {
    texto = texto.toLowerCase().replaceAll(" ", "")
    let invertido = "";
    for (let i = texto.length - 1; i >= 0; i--) {
        invertido += texto[i];
    }
    if (texto === invertido) {
        console.log("ES PALINDROMO")
    } else {
        console.log("NO ES PALINDROMO")
    }
}

esPalindromo("Anita lava la tina")
esPalindromo("hola")

// usas 3 signos "===" cuando el valor y el tipo son iguales

if ("1" === "1") {
    console.log("ESTO ES IGUAL")
} else {
    console.log("ESTO NO IGUAL")
}

// usas 2 signos "==" cuando el valor es igual sin inportar el tipo
if (1 == "1") {
    console.log("ESTO ES IGUAL")
} else {
    console.log("ESTO NO IGUAL")
}





