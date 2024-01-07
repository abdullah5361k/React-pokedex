import { useState, useEffect } from "react";
import axios from "axios";
import usePokemonList from "./usePokemonList";

function usePokemonDetails(id) {
    const POKEMON_URL = "https://pokeapi.co/api/v2/pokemon"
    const [pokemonDetails, setPokemonDetails] = useState({})

    async function fetchPokemonDetails() {
        const res = await axios.get(`${POKEMON_URL}/${id}`);
        const response = await axios.get(`https://pokeapi.co/api/v2/type/${res.data.types[0].type.name}`);
        const { data } = response;
        console.log("Data2 ", data)
        setPokemonDetails({
            name: res.data.name,
            img: res.data.sprites.other.dream_world.front_default,
            height: res.data.height,
            weight: res.data.weight,
            types: res.data.types.map(p => p.type.name),
            response: data.pokemon.slice(0, 5)
        })
    }


    useEffect(() => {
        fetchPokemonDetails()
    }, [])

    return [pokemonDetails]
}


export default usePokemonDetails;