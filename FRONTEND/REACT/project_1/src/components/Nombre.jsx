import {useState} from "react";

export default function Nombre({nombreInicial = "Marcos"}) {
    const [nombre, setNombre] = useState(nombreInicial);

    return (
        <>
            <h1>Componente Nombre</h1>
            <p>{nombre}</p>
            <button onClick={() => setNombre("Pedro")}>Cambiar Nombre</button>
        </>
    )
}
