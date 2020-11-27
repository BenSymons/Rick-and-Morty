import React from "react"
import { Link } from "@reach/router"

const NavBar = () => {
    return (<section className="nav">
        <Link to="/"><h2>Home</h2></Link>
        <Link to="/episodes"><h2>Episodes</h2></Link>
        <Link to="/characters"><h2>Characters</h2></Link>
        <Link to="/locations"><h2>Locations</h2></Link>
    </section>)
}

export default NavBar