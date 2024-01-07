import { useParams } from "react-router-dom";
import "./PokemonDetails.css"
import usePokemonDetails from "../../hooks/usePokemonDetails";

function PokemonDetails() {
    const { id } = useParams()
    const [pokemonDetails] = usePokemonDetails(id);

    return (
        <>
            <div className="pokemon-detail-wrapper">
                <h2>{pokemonDetails.name}</h2>
                <img src={pokemonDetails.img} width="280" height="280" alt="" />
                <h5>Height: {pokemonDetails.height}</h5>
                <h5>Weight: {pokemonDetails.weight}</h5>
                {pokemonDetails.types && pokemonDetails.types.map((p, i) => <span key={i}>{p}</span>)}
                {pokemonDetails.types &&

                    <div>
                        More {pokemonDetails.types} type pokemons
                        {
                            pokemonDetails.response.map((p, i) => <li key={i} >{p.pokemon.name}</li>)
                        }
                    </div>
                }
            </div>
        </>
    )
}

export default PokemonDetails