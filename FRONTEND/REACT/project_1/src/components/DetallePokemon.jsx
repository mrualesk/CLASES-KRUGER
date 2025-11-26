import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router";

export default function DetallePokemon() {

    const {id} = useParams()

    const [pokemon, setPokemon] = useState(null)
    const [loading, setLoading] = useState(true)


    const getDetallePokemon = async () => {

        setLoading(true)

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        if (!response.ok) {
            throw new Error("Pokemon no encontrado")
        }

        const data = await response.json()

        setTimeout(() => {
            setPokemon(data)
            setLoading(false)
        },2000)

    }

    useEffect(() => {
        getDetallePokemon()
    }, [id]);

    if (loading) {
        return <div className="absolute top-1/2 left-1/2 ">
            <div className="spinner">
                <div className="spinner1"></div>
            </div>
        </div>
    }

    return (
        <div className="max-w-2xl mx-auto p-6 ">
            <Link className="text-blue-600 hover:underline mb-4 inline-block" to="/pokemones"> ← Volver </Link>

            <div className="bg-white rounded-lg shadow-lg p-6">
                {/* Imagen y nombre */}
                <div className="text-center">
                    <img src={pokemon.sprites.front_default} alt={pokemon.name}
                         className="w-48 h-48 mx-auto"
                    />
                    <h1 className="text-3xl font-bold capitalize mt-4">{pokemon.name}</h1>
                    <p className="text-gray-600">#{pokemon.id}< /p>
                </div>

                {/* Tipos */}
                <div className="mt-6">
                    <h3 className="font-bold mb-2">Tipos:</h3>
                    <div className="flex gap-2">
                        {
                            pokemon.types.map(item => (
                                <span className="bg-blue-500 text-white px-4 py-1 rounded capitalize">
                                    {item.type.name}
                                </span>
                            ))
                        }
                    </div>
                </div>

            </div>
        </div>
    );
};
