const peliculas = [
    {titulo: "El Padrino", año: 1972, duracion: 175, genero: "Drama", visto: true},
    {titulo: "Toy Story", año: 1995, duracion: 81, genero: "Animación", visto: true},
    {titulo: "Inception", año: 2010, duracion: 148, genero: "Ciencia Ficción", visto: false},
    {titulo: "Coco", año: 2017, duracion: 105, genero: "Animación", visto: true},
    {titulo: "El Rey León", año: 1994, duracion: 88, genero: "Animación", visto: true},
    {titulo: "Matrix", año: 1999, duracion: 136, genero: "Ciencia Ficción", visto: false},
    {titulo: "Titanic", año: 1997, duracion: 194, genero: "Drama", visto: true},
    {titulo: "Avengers", año: 2012, duracion: 143, genero: "Acción", visto: false}
];

//1. MAP - Crear un array solo con los títulos
// Crea un nuevo array que contenga únicamente los títulos de todas las películas.

// 2. FILTER - Películas que ya viste
// Filtra las películas que ya has visto (visto: true)

// 3. FILTER - Películas de Animación
// Filtra solo las películas del género "Animación"


// 4. FIND - Buscar una película específica
// Busca la película "Matrix" en el array

// 6. SOME - ¿Hay alguna película de Acción?
//     Verifica si existe al menos una película del género "Acción"

// 7. EVERY - ¿Todas las películas duran más de 1 hora?
//     Verifica si todas las películas duran más de 60 minutos

// 8. MAP - Crear un array donde tengamos titulo + genero es decir ["El padrino - Drama", ...]

// 9. FILTER - Películas de Animación && que sean vistas
// Filtra solo las películas del género "Animación" y que sean vistas

// 10. FILTER + MAP - Títulos de películas no vistas
// Obtén un array solo con los títulos de las películas que NO has visto

// 11. MAP - Agregar propiedad "enHoras"
// Crea un nuevo array donde cada película tenga una propiedad adicional
// "enHoras" que convierta la duración de minutos
// a horas (ejemplo: 120 minutos = 2 horas)


const peliculasConHoras = peliculas.map(pelicula => {

    // extraemos el año y el resto de las propiedades
    // al año lo ignoramos y al resto lo dispersamos en el nuevo objeto
    const {año, ...rest} = pelicula;

    return {
        ...rest,
        enHorasDecimales: pelicula.duracion / 60,
        enHorasEntero: parseInt(pelicula.duracion / 60),
        enHorasDosDecimales: (pelicula.duracion / 60).toFixed(2),
        enHorasRodendeadoHaciaAbajo: Math.floor(pelicula.duracion / 60),
        enHorasRodendeadoHaciaArriba: Math.ceil(pelicula.duracion / 60),
        enHorasRodendeadoMasCercano: Math.round(pelicula.duracion / 60),
    }
})

console.log({peliculasConHoras})
