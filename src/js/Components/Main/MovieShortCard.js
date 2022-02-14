import React from 'react';
import {NavLink, useHistory} from "react-router-dom";


const MovieShortCard = (props) => {

    let history = useHistory()

    const deleteMovie = () => {
        history.push("/all-movies");
    }

    return (
        <div className="card mt-3">
            <div className="row no-gutters">
                <div className="col-md-4">
                    <div >
                        <img src={props.movie.moviePosterLink || ''}
                             className="card-img" alt="Movie poster"/>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{props.movie.movieTitleRus || ''}</h5>
                        <p className="card-text">{props.movie.movieDescription || ''}</p>
                        <p className="card-text"><small
                            className="font-weight-bold">IMDB: {props.movie.movieImdbRate || ''}</small></p>
                        <div className="card-text"><NavLink to={`movies/${props.movie.movieId || ''}`}
                                                            className="more">Подробнее...</NavLink></div>
                    </div>
                </div>
                <div className="card-footer">
                    <EditMovieForm movieId={props.movie.movieId || ''}/>
                    <button className="btn btn-sm btn-outline-danger btn-delete" onClick={deleteMovie}>
                        <svg className="octicon octicon-x" viewBox="0 0 14 18" version="1.1" width="14" height="18"
                             aria-hidden="true">
                            <path fillRule="evenodd"
                                  d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>)
};


export default MovieShortCard;
