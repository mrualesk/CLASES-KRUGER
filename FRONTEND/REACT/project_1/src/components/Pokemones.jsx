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
        <div className="bg-[#f5f5f5] m-8">
            <ul className="flex gap-4 flex-wrap">
                {
                    pokemones.map((pokemon, index) => <li className="w-[100px] md:w-[200px] h-[150px] md:h-[250px] bg-gray-300 shadow-md rounded-md flex items-center justify-center" key={pokemon.name + index}>{pokemon.name}</li>)
                }
            </ul>
        </div>
    )
}
