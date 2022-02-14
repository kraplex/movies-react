import React from 'react'
import {useSelector} from 'react-redux'
import MovieShortCard from "./MovieShortCard";

const AllMovies = () => {

    const allMovies = useSelector(state => state.allMovies)


    return (allMovies.length ? <MovieShortCard/> :
        <div id="content" className="d-flex flex-wrap justify-content-around align-items-start align-content-start">
            <h1 className="mt-5 text-center">Здесь пока ничего нет(</h1>
        </div>)
};

export default AllMovies;