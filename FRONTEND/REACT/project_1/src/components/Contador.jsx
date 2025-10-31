import {useState} from "react";

export default function Contador() {
    const [valor, setValor] = useState(0)

    const aumentar = () => {
        setValor(valor + 1)
    }

    return (
        <>
            <h1>Componente Contador</h1>
            <p style={{fontSize: 30}}>{valor}</p>
            <button onClick={aumentar}>Aumentar</button>
            <button onClick={() => setValor(0)}>Reset</button>
            <button onClick={() => setValor(valor - 1)}>Disminuir</button>
        </>
    )
}
