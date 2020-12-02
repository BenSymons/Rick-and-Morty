import React, { useState } from "react"
import { useQuery } from "@apollo/client"
import { LOCATIONS } from "../utils/queries"

const LocationList = () => {
    // This uses the query in utils to GET all the locations
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState();
    const { loading, data } = useQuery(LOCATIONS, {
        variables: { page, filter }
    })

    if (loading) return <p>loading...</p>

    const onChange = (e) => {
        setSearch(e.target.value)
    }

    const handleClick = () => {
        setFilter({ name: search })
    }

    // This variable contains the array of all the locations
    const locations = data.locations.results
    return (
        <>
            <h1>Locations</h1>
            {/* Buttons to navigate pages */}
            <section className="pages">
                <button onClick={() => { setPage(page - 1) }}
                    hidden={page > 1 ? false : true}>prev</button>
                <p className="pageno">{page}</p>
                <button onClick={() => { setPage(page + 1) }}
                    hidden={page < data.locations.info.pages ? false : true}>next</button>
            </section>
            <div className="search-bar">
                <input value={search} onChange={onChange}></input>
                <button onClick={handleClick}>Search</button>
            </div>
            <ul className="container">
                {locations.map(location => {
                    return <li className="card" key={location.name}>
                        <section>
                            <h2>{location.name}</h2>
                        </section>
                    </li>
                })}
            </ul>
        </>
    )

}

export default LocationList