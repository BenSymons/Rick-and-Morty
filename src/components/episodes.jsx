import React, { useState } from "react"
import { useQuery } from "@apollo/client"
import { EPISODES } from "../utils/queries"
import { Link } from "@reach/router"

const EpisodeList = () => {
    // This uses the query in utils to GET all the episodes
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState();
    const { loading, data } = useQuery(EPISODES, {
        variables: { page, filter }
    });

    if (loading) {
        return <p>loading...</p>
    }

    const onChange = (e) => {
        setSearch(e.target.value)
    }

    const handleClick = () => {
        setFilter({ name: search })
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
            <div>
                <input value={search} onChange={onChange}></input>
                <button onClick={() => { handleClick() }}>search by name</button>
            </div>
            <ul className="container" >
                {episodes.map(episode => {
                    return <li className="card" key={episode.id}>
                        <Link className="link" to={`/episode/${episode.id}`}>
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