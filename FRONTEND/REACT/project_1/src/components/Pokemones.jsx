import {usePokemones} from "../hooks/usePokemones.js";

export function Pokemones() {

    const [cargando, pokemones] = usePokemones()

    if (cargando) {
        return <h1>Cargando...</h1>
    }

    return (
        <div className="bg-[#f5f5f5] m-8">
            <ul className="flex gap-4 flex-wrap">
                {
                    pokemones.map((pokemon, index) =>
                        <li className="w-[100px] md:w-[200px] h-[150px] md:h-[250px] bg-gray-300 shadow-md rounded-md flex items-center justify-center"
                            key={pokemon.name + index}>
                            <div className="flex flex-col items-center justify-center">
                                <img src={pokemon.image} alt={pokemon.name}/>
                                <p>{pokemon.name}</p>
                            </div>
                        </li>
                    )
                }
            </ul>
        </div>
    )
}
