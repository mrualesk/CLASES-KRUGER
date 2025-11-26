import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from "react-router";
import {Pokemones} from "./components/Pokemones.jsx";
import DetallePokemon from "./components/DetallePokemon.jsx";

const router = createBrowserRouter([
    {
        path: "/pokemones",
        Component: Pokemones,
    },
    {
        path: `/pokemones/:id`,
        Component: DetallePokemon
    }
]);

createRoot(document.getElementById('root')).render(
    // <StrictMode>
    //     <App/>
    <RouterProvider router={router}/>
    // </StrictMode>,
)
