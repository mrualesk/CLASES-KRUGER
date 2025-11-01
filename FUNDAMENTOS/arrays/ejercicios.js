const estudiantes = [
    {nombre: "Ana", nota: 9, curso: "JavaScript"},
    {nombre: "Luis", nota: 6, curso: "Python"},
    {nombre: "María", nota: 10, curso: "JavaScript"},
    {nombre: "Pedro", nota: 4, curso: "Python"},
    {nombre: "Lucía", nota: 7, curso: "React"},
];

//
// 1.	Filtrar
// Usa filter para obtener solo los estudiantes aprobados (nota mayor o igual a 7).
const aprobados = estudiantes.filter(estudiante => estudiante.nota >= 7)
console.log({aprobados})

// 2.	Mapear
// Usa map para crear un nuevo arreglo que contenga solo los nombres de los estudiantes aprobados en mayúsculas.
const aprobadosMayusculas = aprobados.map(estudiante => estudiante.nombre.toUpperCase())
console.log({aprobadosMayusculas})
// 3.	Ordenar
// Usa sort para ordenar a todos los estudiantes del arreglo original por su nota de mayor a menor.

estudiantes.sort((a, b) => b.nota - a.nota)
console.log({estudiantes})

// 4.	Buscar
// Usa find para obtener el primer estudiante que tenga una nota menor a 5.
const estudianteNotaMenor5 = estudiantes.find(estudiante => estudiante.nota < 5)
console.log({estudianteNotaMenor5})

// 5.	Verificar
// Usa some para verificar si algún estudiante sacó 10 puntos.
const hayEstudianteConNota10 = estudiantes.some(estudiante => estudiante.nota === 10)
console.log({hayEstudianteConNota10})

// 6.	Promedio general
// Usa reduce para calcular el promedio total de las notas.

const promedio = estudiantes.reduce((a, item) => a + item.nota, 0) / estudiantes.length
console.log({promedio})
// 7.	Verificar curso
// Usa includes para comprobar si el curso "React" está dentro de la lista de cursos ofrecidos (puedes extraer los cursos con map antes).
const cursos = estudiantes.map(estudiante => estudiante.curso);
const hayCursoReacr = cursos.includes("React")
console.log({hayCursoReacr})
