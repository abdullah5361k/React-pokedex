import Pokemon from "../Pokemon/Pokemon";
import "./PokemonList.css"
import usePokemonList from "../../hooks/usePokemonList";

function PokemonList({ value }) {

    const [pokemonState, setPokemonState] = usePokemonList();

    return (
        <>
            <h2>Pokemon List </h2>
            {/* <p>{value ? pokemonState.pokemonList.filter(f => console.log(f.name == value)) : ""}</p> */}
            <div className="pokemon-wrapper">
                {pokemonState.loading ? (
                    "Loading...") : value ? (
                        pokemonState.pokemonList
                            .filter((f) => f.name.toLowerCase().includes(value.toLowerCase()))
                            .map((filteredPokemon) => (
                                <Pokemon
                                    name={filteredPokemon.name}
                                    img={filteredPokemon.img}
                                    id={filteredPokemon.id}
                                    key={filteredPokemon.id}
                                />
                            ))
                    ) : (
                    pokemonState.pokemonList.map((p) => (
                        <Pokemon
                            name={p.name}
                            img={p.img}
                            id={p.id}
                            key={p.id}
                        />
                    ))
                )
                }
            </div>
            <div className="controls">
                <button disabled={!pokemonState.prevUrl} onClick={
                    () => setPokemonState((prev) => ({
                        ...prev,
                        podexUrl: prev.prevUrl,
                        prevUrl: ""
                    }))
                } >
                    Prev</button>
                <button disabled={!pokemonState.nextUrl} onClick={
                    () => setPokemonState((prev) => ({
                        ...prev,
                        podexUrl: prev.nextUrl,
                        nextUrl: ""
                    }))
                }
                >Next</button>
            </div>
        </>
    )
}

export default PokemonList;