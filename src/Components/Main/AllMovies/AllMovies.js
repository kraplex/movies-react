import React from 'react'
import MovieShortCard from "./MovieCards/MovieShortCard/MovieShortCard";
import {getData, searchData} from "../../Api/Api";


const AllMovies = (props) => {
    let movies;
    let searchParam = props.match.params.searchParam;
    if (searchParam) {
        movies = searchData(searchParam);
    } else movies = getData()

    return <>
        {(movies.length === 0) ? <main id="content"
                                       className="d-flex flex-wrap justify-content-around align-items-start align-content-start">
                <h1 className="mt-5 text-center">Здесь пока ничего нет(</h1>
            </main>
            : movies.map((movie) => <MovieShortCard movie={movie}/>)}
    </>
}

export default AllMovies;