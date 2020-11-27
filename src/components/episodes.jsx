import React, { useState } from "react"
import { useQuery } from "@apollo/client"
import { EPISODES } from "../utils/queries"
import { Link } from "@reach/router"

const EpisodeList = () => {
    // This uses the query in utils to GET all the episodes
    const [page, setPage] = useState(1);
    const { loading, data } = useQuery(EPISODES, {
        variables: { page: page }
    });


    if (loading) {
        return <p>loading...</p>
    }

    // This variable contains the array of episodes
    const episodes = data.episodes.results

    return (
        <>
            <h1>Episodes</h1>

            {/* Buttons to navigate pages */}
            <button onClick={() => { setPage(page + 1) }}
                hidden={page < data.episodes.info.pages ? false : true}>next</button>
            <button onClick={() => { setPage(page - 1) }}
                hidden={page > 1 ? false : true}>prev</button>
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