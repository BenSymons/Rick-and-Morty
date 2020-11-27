import React from "react"
import { useQuery } from "@apollo/client"
import { EPISODE } from "../utils/queries"

const ViewEpisode = (props) => {
    // This uses the query in utils to a single episode
    const { loading, error, data } = useQuery(EPISODE, {
        variables: { id: props.id }
    });

    if (error) console.log(error)

    if (loading) return <p>loading</p>

    // This variable contains the data for a single episode
    const episode = data.episode
    return <>
        <h1>{episode.name}</h1>
        <p>air date: {episode.air_date}</p>
        <h2>characters</h2>
        {/* this map will return a list of all characters featured in the episode */}
        {episode.characters.map(character => {
            return <section>
                <li>
                    <h3>{character.name}</h3>
                    <p>status: {character.status}</p>
                    <p>species: {character.species}</p>
                    <img src={character.image} alt={character.name} />
                </li>
            </section>
        })}
    </>
}

export default ViewEpisode