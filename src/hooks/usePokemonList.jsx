import { useState, useEffect } from "react"
import axios from "axios"
function usePokemonList(type) {
    const [pokemonState, setPokemonState] = useState({
        pokemonList: [],
        loading: true,
        podexUrl: "https://pokeapi.co/api/v2/pokemon",
        nextUrl: "",
        prevUrl: ""
    })


    const fetchData = async () => {
        try {
            // setLoading(true)
            setPokemonState((prev) => ({
                ...prev,
                loading: true
            }))
            // if (type) {
            //     console.log("URL ", pokemonState)
            //     const response = await axios.get(pokemonState.podexUrl);
            //     const { data } = response;
            //     console.log("Data2 ", data)
            //     setPokemonState(prev => ({
            //         ...prev,
            //         pokemonList: data.pokemon?.slice(0, 6)
            //     }))
            // } 
            const response = await axios.get(pokemonState.podexUrl);
            const { data } = response;
            console.log("Data1 ", data)
            setPokemonState((prev) => ({
                ...prev,
                nextUrl: data.next,
                prevUrl: data.previous
            }))
            const { results } = data
            const pokemons = results.map(pokemon => axios.get(pokemon.url));
            const pokeData = await axios.all(pokemons);
            const res = pokeData.map(poke => {
                return {
                    id: poke.data.id,
                    name: poke.data.name,
                    img: poke.data.sprites.other.dream_world.front_default,
                    // type: poke.data.types[0].type.name
                }
            })
            setPokemonState((prev) => ({
                ...prev,
                loading: false,
                pokemonList: res
            }))


        } catch (error) {
            console.log("Error ", error);
        }
    }
    useEffect(() => {
        fetchData()
    }, [pokemonState.podexUrl])

    return [pokemonState, setPokemonState]

}

export default usePokemonList;