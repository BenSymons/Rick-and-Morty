import React from "react"
import { useQuery } from "@apollo/client"
import { EPISODES } from "../utils/queries"

const EpisodeList = () => {
    // This uses the query in utils to GET all the episodes
    const { loading, data } = useQuery(EPISODES);

    // This variable contains the array of episodes

    if (loading) {
        return <p>loading...</p>
    }
    const episodes = data.episodes.results
    console.dir(data)


    return (
        <>
            <h1>Episodes</h1>
            <ul>
                {episodes.map(episode => {
                    return <li key={episode.id}>
                        <section>
                            <h2>{episode.name}</h2>
                            <p>{episode.air_date}</p>
                        </section>
                    </li>
                })}
            </ul>
        </>
    )
}


export default EpisodeList