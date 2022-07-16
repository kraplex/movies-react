import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import AddEditMovie from "../Header/AddEditMovie";
import {connect} from "react-redux";
import {deleteData} from "../Api/Api";

class MovieShortCard extends Component {

    render() {
        const {allMovies} = this.props

        return (
            <div style={{display: 'flex'}}>
                {allMovies.map(movie => <div key={movie.id} className="card mt-3">
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <div>
                                <img src={movie.moviePosterLink || ''}
                                     className="card-img" alt="Movie poster"/>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{movie.titleRus || ''}</h5>
                                <p className="card-text">{movie.description || ''}</p>
                                <p className="card-text"><small
                                    className="font-weight-bold">IMDB: {movie.imdbRate || ''}</small></p>
                                <div className="card-text"><NavLink to={`movies/${movie.id || ''}`}
                                                                    className="more">Подробнее...</NavLink></div>
                            </div>
                        </div>
                        <div className="card-footer">
                            <AddEditMovie movieId={movie.id || ''}/>
                            <button className="btn btn-sm btn-outline-danger btn-delete" onClick={() => deleteData(movie.id)}>
                                <svg className="octicon octicon-x" viewBox="0 0 14 18" version="1.1" width="14"
                                     height="18"
                                     aria-hidden="true">
                                    <path fillRule="evenodd"
                                          d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>)}
            </div>)
    }
}

const mapStateToProps = store => ({allMovies: store.movies.allMovies});

const MovieShortCardWrapper = connect(mapStateToProps, {})(MovieShortCard);

export default MovieShortCardWrapper;
