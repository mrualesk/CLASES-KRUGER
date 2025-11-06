import {useState} from "react";

export default function Nombre({nombreInicial = "Marcos"}) {
    // useState es un manejador de estado
    const [nombre, setNombre] = useState(nombreInicial);
    // const [precio, setPrecio] = useState(0);

    return (
        <>
            <h1>Componente Nombre</h1>
            <p>{nombre}</p>
            <button onClick={() => setNombre("Pedro")}>Cambiar Nombre</button>
        </>
    )
}

