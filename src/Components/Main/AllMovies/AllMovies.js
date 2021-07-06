import React from 'react'
import MovieShortCard from "./MovieCards/MovieShortCard/MovieShortCard";
import {getData, searchData} from "../../Api/Api";


const AllMovies = (props) => {
    let movies;
    movies = props.match.params.searchParam ? searchData(props.match.params.searchParam.toUpperCase()) : getData();

    return <>
        {(!movies || movies.length === 0) ? <div id="content"
                                                 className="d-flex flex-wrap justify-content-around align-items-start align-content-start">
                <h1 className="mt-5 text-center">Здесь пока ничего нет(</h1>
            </div>
            : <div id="content"
                   className="d-flex flex-wrap justify-content-start align-items-start align-content-start">{movies.map((movie) =>
                <MovieShortCard movie={movie}/>)}</div>}
    </>
};

export default AllMovies;