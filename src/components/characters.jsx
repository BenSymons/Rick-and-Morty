import React, { useState } from "react"
import { useQuery } from "@apollo/client"
import { CHARACTERS } from "../utils/queries"

const CharacterList = () => {
    // This uses the query in utils to GET all the characters
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState();
    const { loading, data } = useQuery(CHARACTERS, {
        variables: { page, filter }
    });

    if (loading) return <p>loading...</p>

    // This variable contains the array of all the characters
    const characters = data.characters.results

    const onChange = (e) => {
        setSearch(e.target.value)
    }

    const handleClick = () => {
        setFilter({ name: search })
    }

    return (
        <>
            <h1>Characters</h1>
            {/* Buttons to navigate pages */}
            <button onClick={() => { setPage(page + 1) }}
                hidden={page < data.characters.info.pages ? false : true}>next</button>
            <button onClick={() => { setPage(page - 1) }}
                hidden={page > 1 ? false : true}>prev</button>
            <div>
                <input value={search} onChange={onChange}></input>
                <button onClick={handleClick}>Search</button>
            </div>
            <ul className="container">
                {characters.map(character => {
                    return <li className="card">
                        <section>
                            <h2>{character.name}</h2>
                            <p>status: {character.status}</p>
                            <p>species: {character.species}</p>
                            <p>location: {character.location.name}</p>
                            <img src={character.image} alt={character.name} />
                        </section>
                    </li>
                })}
            </ul>

        </>
    )

}

export default CharacterList