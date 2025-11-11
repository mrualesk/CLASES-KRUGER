import './App.css'
import Nombre from "./components/Nombre.jsx";
import Contador from "./components/Contador.jsx";
import {Fragment} from "react";
import {AgregarElemento} from "./components/AgregarElemento.jsx";
import EjemploStateMultiPropiedad from "./components/EjemploStateMultiPropiedad.jsx";

function App() {
    // Un elemento JSX O TSX solo puede devolver un nodo
    // si queremos devolver mas de un nodo debemos usar Fragment o <></>

    return (
        <Fragment>

            {/*<AgregarElemento/>*/}
            <EjemploStateMultiPropiedad/>
            {/*<h1>Hola Mundo</h1>*/}
            {/*<Nombre/>*/}
            {/*<Nombre nombreInicial="Juan"/>*/}
            {/*<Contador/>*/}
        </Fragment>
    );
}

export default App
