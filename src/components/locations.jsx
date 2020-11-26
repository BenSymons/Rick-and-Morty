import React from "react"
import { useQuery } from "@apollo/client"
import { LOCATIONS } from "../utils/queries"

const LocationList = () => {
    // This uses the query in utils to GET all the locations
    const { loading, data } = useQuery(LOCATIONS)
    //console.dir(data)

    // This variable contains the array of all the locations

    if (loading) return <p>loading...</p>

    const locations = data.locations.results
    return (
        <>
            <h1>Locations</h1>
            <ul>
                {locations.map(location => {
                    return <li key={location.name}>
                        <section>
                            <h2>location.name</h2>
                        </section>
                    </li>
                })}
            </ul>
        </>
    )

}

export default LocationList