import React, {useState} from 'react';

const personasInicial = [
    {
        nombre: "Marcos",
        edad: 20
    },
    {
        nombre: "Juan",
        edad: 25
    }
]

export default function EjemploStateMultiPropiedad() {

    const [personas, setPersonas] = useState(personasInicial);

    const [datosFormulario, setDatosFormulario] = useState({
        nombre: "",
        edad: 0,
    })

    const resetFormulario = () => {
        setDatosFormulario({
            nombre: "",
            edad: 0,
        })
    }

    const cambiarEdad = (nombre) => {

        const personasModificadas = personas.map((persona) => {

            if (nombre === persona.nombre) {
                return {...persona, edad: 18}
            }
            return persona;
        })
        setPersonas(personasModificadas)
    }

    const agregarPersona = (nombre, edad) => {

        const nuevaPersona = {
            nombre,
            edad,
        }
        const nuevoArray = [...personas, nuevaPersona]
        setPersonas(nuevoArray)
    }

    // const onSubmit = (e) => {
    //     e.preventDefault()
    //
    //     // e.target // valor el name ...
    //     const formData = new FormData(e.target)
    //     const nombre = formData.get("nombre")
    //     const edad = formData.get("edad")
    //
    //     agregarPersona(nombre, edad)
    //
    //     e.target.reset()
    // }

    const onSubmit = (e) => {
        e.preventDefault()
    }

    const onChange = (e) => {

        const {name, value} = e.target

        console.log({name, value})


        setDatosFormulario({
            ...datosFormulario,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <div>
            <h1>Lista nombres</h1>

            <button onClick={resetFormulario}>Retear Formulario</button>

            <form onSubmit={onSubmit}>
                <input
                    value={datosFormulario.nombre}
                    name="nombre"
                    onChange={onChange}
                    placeholder="Nombre..."
                    type="text"/>
                <input
                    value={datosFormulario.edad}
                    name="edad"
                    onChange={onChange}
                    placeholder="Edad"
                />
                <button type="submit">Agregar</button>
            </form>
            <ul>
                {
                    personas.map((persona, index) => {
                        return <div key={index} className="elemento-lista">
                            <li>{persona.nombre} {persona.edad}</li>
                            <button onClick={() => cambiarEdad(persona.nombre)}>Cambiar Edad a 18</button>
                        </div>

                    })
                }
            </ul>

        </div>
    );
};
