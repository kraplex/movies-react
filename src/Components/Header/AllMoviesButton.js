import React from 'react'
import {NavLink} from "react-router-dom";

const AllMoviesButton = () => {

    return (<li className="nav-item active">
        <NavLink className="nav-link all-movies" to="/all-movies">Все фильмы</NavLink>
    </li>)
}


export default AllMoviesButton