import {useState} from "react";

export const AgregarElemento = () => {
    const [listaNombres, setListaNombres] = useState([])
    const [nombre, setNombre] = useState("")

    const onChange = (e) => {
        const valor = e.target.value
        setNombre(valor)
    }

    const agregarNombre = () => {
        setListaNombres([...listaNombres, nombre])
    }

    const eliminarNombre = (nombre) => {

        const nombreFiltrados = listaNombres.filter(n => n !== nombre)

        setListaNombres(nombreFiltrados)
    }

    return (
        <>
            <h1>Agregar Nombre</h1>
            <input name="nombre" type="text" onChange={onChange}/>
            <br/>
            <br/>
            <button onClick={agregarNombre}>Agregar</button>
            <ul>
                {
                    listaNombres.map((nombre, index) => {
                        return <div style={{display: "flex", justifyContent: "space-between"}}>
                            <li>{nombre} {index}</li>
                            <button onClick={() => eliminarNombre(nombre)}>X</button>
                        </div>
                    })
                }
            </ul>
        </>
    )
}
