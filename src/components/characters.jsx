import React from "react"
import { useQuery } from "@apollo/client"
import { CHARACTERS } from "../utils/queries"

const CharacterList = () => {
    // This uses the query in utils to GET all the characters
    const { loading, data } = useQuery(CHARACTERS);

    if (loading) return <p>loading...</p>

    // This variable contains the array of all the characters
    const characters = data.characters.results

    return (
        <>
            <h1>Characters</h1>
            <ul>
                {characters.map(character => {
                    return <li key={character.name}>
                        <section>
                            <h2>{character.name}</h2>
                            <p>{character.status}</p>
                            <p>{character.location.name}</p>
                        </section>
                    </li>
                })}
            </ul>

        </>
    )

}

export default CharacterList