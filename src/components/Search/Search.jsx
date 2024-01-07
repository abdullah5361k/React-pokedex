import { useState } from "react";
import "./Search.css"

function Search({ handle }) {
    // const [query, setQuery] = useState("");

    // function handleChange(e) {
    //     setQuery(e.target.value)
    // }

    return (
        <>
            <input onChange={handle} id="input-tag" type="text" placeholder="Search pkemon..." />
        </>
    )
}

export default Search;