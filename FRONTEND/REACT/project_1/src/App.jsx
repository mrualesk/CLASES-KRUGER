import './App.css'
import Nombre from "./components/Nombre.jsx";
import Contador from "./components/Contador.jsx";

function App() {

    return (
        <>
            <h1>Hola Mundo</h1>
            <Nombre/>
            <Nombre nombreInicial="Juan"/>
            <Contador/>
        </>
    );
}

export default App
