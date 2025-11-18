import React, {useEffect, useState} from 'react';

const estudiantesInicial = [
    {
        nombre: "Pedro",
        edad: 22,
        curso: "Matematicas"
    },
    {
        nombre: "Julio",
        edad: 22,
        curso: "Matematicas"
    },
    {
        nombre: "Alesandro",
        edad: 22,
        curso: "Matematicas"
    },
]

export default function ListaElementos() {

    const [estudiantes, setEstudiantes] = useState(estudiantesInicial)
    const [estudiantesFiltrados, setEstudiantesFiltrados] = useState([])

    const [nuevoNombre, setNuevoNombre] = useState("")

    const [buscar, setBuscar] = useState("")


    const onChange = (evento) => {
        const valor = evento.target.value;
        // const name = evento.target.name;
        setNuevoNombre(valor)
    }

    const onChangeBuscar = (evento) => {
        const valor = evento.target.value;
        setBuscar(valor)
    }

    const agregarNombre = () => {
        const nuevoEstudiante = {
            nombre: nuevoNombre,
            edad: 20,
            curso: "Programacion"
        }
        setEstudiantes([...estudiantes, nuevoEstudiante])
    }

    const eliminarEstudiante = (nombre) => {
        const estudiantesFiltrados = estudiantes.filter((estudiante) => estudiante.nombre !== nombre)
        setEstudiantes(estudiantesFiltrados)
    }

    useEffect(() => {
        // Ejecutate cuando el componente se monte
        console.log("Efecto ejecutado al montar el componente")

    }, [])

    useEffect(() => {
        // Se ejecuta cuando el valor de las dependencias cambia en este caso con (buscar)
        console.log("Efecto ejecutado al buscar")

        if (buscar !== "") {

            const estudiantesF = estudiantes.filter( estudiante => estudiante.nombre.toLowerCase().includes(buscar.toLowerCase()))

            setEstudiantesFiltrados(estudiantesF)

        } else {
            setEstudiantesFiltrados(estudiantes)
        }

    }, [buscar])

    return (
        <div>
            <div>
                <input name="input-buscar" onChange={onChangeBuscar} type="text" placeholder="Buscar..."/>
            </div>
            <hr/>
            <div>
                <input name="input-agregar" onChange={(e) => onChange(e)} type="text"/>
                <button onClick={agregarNombre}>Agregar</button>
            </div>

            <span>{nuevoNombre}</span>

            <ul>
                {
                    estudiantesFiltrados.map((estudiante, index) => {
                        return <li key={index}>
                            <span>
                                {estudiante.nombre}
                            </span>
                            <button onClick={() => eliminarEstudiante(estudiante.nombre)}>Elimniar</button>
                        </li>
                    })
                }
            </ul>

        </div>
    );
};
