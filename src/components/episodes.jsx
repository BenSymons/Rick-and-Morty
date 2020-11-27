import React from "react"
import { useQuery } from "@apollo/client"
import { EPISODES } from "../utils/queries"
import { Link } from "@reach/router"

const EpisodeList = () => {
    // This uses the query in utils to GET all the episodes
    const { loading, data } = useQuery(EPISODES);


    if (loading) {
        return <p>loading...</p>
    }

    // This variable contains the array of episodes
    const episodes = data.episodes.results

    return (
        <>
            <h1>Episodes</h1>
            <ul>
                {episodes.map(episode => {
                    return <li key={episode.id}>
                        <Link to={`/episode/${episode.id}`}>
                            <section>
                                <h2>{episode.name}</h2>
                                <p>{episode.air_date}</p>
                            </section>
                        </Link>
                    </li>
                })}
            </ul>
        </>
    )
}


export default EpisodeList