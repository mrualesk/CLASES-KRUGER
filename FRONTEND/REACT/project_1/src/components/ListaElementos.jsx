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
    const [nuevoNombre, setNuevoNombre] = useState("")

    const [buscar, setBuscar] = useState("")


    const onChange = (evento) => {
        const valor = evento.target.value;
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

        const estudiantesBuscados = estudiantes.filter(estudiante => estudiante.nombre.includes(buscar))
        setEstudiantes(estudiantesBuscados)

    }, [buscar]);

    return (
        <div>
            <div>
                <input onChange={onChangeBuscar} type="text" placeholder="Buscar..."/>

            </div>
            <hr/>
            <div>
                <input onChange={(e) => onChange(e)} type="text"/>
                <button onClick={agregarNombre}>Agregar</button>
            </div>

            <span>{nuevoNombre}</span>

            <ul>
                {
                    estudiantes.map((estudiante) => {
                        return <li>
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
