import "./Pokemon.css"
import { Link } from "react-router-dom"

function Pokemon({ name, img, id }) {
    return (
        <div className="pokemon">
            <Link to={`/pokemon/${id}`} >
                <h2>{name}</h2>
                <div><img src={img} width="280" height="280" /></div>
            </Link>
        </div>
    )
}

export default Pokemon