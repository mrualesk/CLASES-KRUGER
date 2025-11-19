import {useState} from "react";

export function Pokemones() {

    const [pokemones, setPokemones] = useState([])

    const traerPokemons = () => {

        fetch("https://pokeapi.co/api/v2/pokemon?limit=150")
            .then( )
    }

    return (<>
    </>)
}
