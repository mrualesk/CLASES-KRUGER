import {useEffect, useState} from "react";

export function Pokemones() {

    const [pokemones, setPokemones] = useState([])
    const [loading, setLoading] = useState(true)

    const traerPokemons = async () => {

        // Forma antigua de ejecutar una promesa

        // fetch("https://pokeapi.co/api/v2/pokemon?limit=150")
        //     .then(data => {
        //         // data.json() devuelve una Promesa
        //         return data.json()
        //     })
        //     .then(data => {
        //         setPokemones(data.results)
        //     }).catch(error => {
        //     console.log({error})
        // }).finally(() => {
        //     setTimeout(() => {
        //         setLoading(false)
        //     }, 2000)
        //     console.log("Finalizado")
        // })

        // Forma moderna de ejecutar una promesa

        try {
            const result = await fetch("https://pokeapi.co/api/v2/pokemon?limit=150");
            const data = await result.json();
            setPokemones(data.results)
            setLoading(false)
        } catch (e) {
            console.log(e)
        }

    }


    useEffect(() => {
        traerPokemons()
    }, []);

    if (loading) {
        return <h1>Cargando...</h1>
    }

    return (
        <>
            <ul>
                {
                    pokemones.map((pokemon, index) => <li key={pokemon.name + index}>{pokemon.name}</li>)
                }
            </ul>
        </>
    )
}
