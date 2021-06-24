import React from 'react';
import "./MovieCard.css"
import {NavLink} from "react-router-dom";

const MovieCard = (props) => {
    return (
        <div className="card mt-3">
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src={props.movie.moviePosterLink}
                         className="card-img" alt="Гори, гори ясно"/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{props.movie.movieTitleRus}</h5>
                        <p className="card-text">{props.movie.movieDescription}</p>
                        <p className="card-text"><small
                            className="font-weight-bold">Imdb Rate {props.movie.movieImdbRate}</small></p>
                        <div className="card-text"><NavLink to={props.movie.movieId} className="more">Подробнее...</NavLink></div>
                    </div>
                </div>
                <div className="card-footer">
                    <button className="btn btn-sm btn-outline-primary btn-edit">
                        <svg className="octicon octicon-pencil" viewBox="0 0 14 16" version="1.1" width="14"
                             height="16" aria-hidden="true">
                            <path fillRule="evenodd"
                                  d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"/>
                        </svg>
                    </button>
                    <button className="btn btn-sm btn-outline-danger btn-delete">
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


export default MovieCard;
