import PokemonList from "../PokemonList/PokemonList"
import Search from "../Search/Search"
import "./Pokedex.css"
import { useState } from "react"

function Pokedex() {
    const [query, setQuery] = useState("");
    function handleQuery(e) {
        setQuery(e.target.value)
    }
    return (
        <div className="poke-wrapper">
            <Search handle={handleQuery} />
            <PokemonList value={query} />
        </div>
    )
}


export default Pokedex