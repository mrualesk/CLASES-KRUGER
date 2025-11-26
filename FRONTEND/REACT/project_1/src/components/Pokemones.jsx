import {usePokemones} from "../hooks/usePokemones.js";
import {Link} from "react-router";

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
                                <Link className="bg-black p-1 px-4 rounded-md text-white" to={`/pokemones/${pokemon.name}`}>Ver</Link>
                            </div>
                        </li>
                    )
                }
            </ul>
        </div>
    )
}
