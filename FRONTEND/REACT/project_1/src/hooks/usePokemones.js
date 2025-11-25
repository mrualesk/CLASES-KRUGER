import {useEffect, useState} from "react";

export function usePokemones() {
    const [pokemones, setPokemones] = useState([])
    const [loading, setLoading] = useState(true)

    const traerImagenPokemon = async (nombre) => {
        const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`);
        const data = await result.json();
        return data.sprites.front_default;
    }

    const traerPokemons = async () => {

        try {
            // Query Params: todo lo que esta despues de ? ejemplo: ?limit=150 & test=test
            // Sirven para filtros, paginaciones u otros..
            const result = await fetch("https://pokeapi.co/api/v2/pokemon?limit=150");
            const data = await result.json();

            console.time("PromiseAll")
            const pokemonesResult = data.results;
            const promesasPokemones = pokemonesResult.map(async (pokemon) => {
                const imagen = await traerImagenPokemon(pokemon.name)
                return {
                    ...pokemon,
                    image: imagen
                }
            })
            // array de promesas -> [ await promesa1, await promesa2, await promesa3 ]
            const results = await Promise.all(promesasPokemones);
            console.timeEnd("PromiseAll")

            setPokemones(results)

            setLoading(false)
        } catch (e) {
            console.log(e)
        }

    }


    useEffect(() => {
        traerPokemons()
    }, []);


    return [loading, pokemones]
}
