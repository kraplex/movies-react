import React from 'react'
import MovieCard from "./MovieCard/MovieCard";
import {getData} from "../../Api/Api";


const AllMovies = () => {
    let movies = getData()
    return <>
        {(movies.length === 0) ? <main id="content"
                                       className="d-flex flex-wrap justify-content-around align-items-start align-content-start">
                <h1 className="mt-5 text-center">Здесь пока ничего нет(</h1>
            </main>
            : movies.map((movie) => <MovieCard movie={movie}/>)}
    </>
}

export default AllMovies;