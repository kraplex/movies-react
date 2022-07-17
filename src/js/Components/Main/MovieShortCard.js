import React, {Component} from 'react';
import {connect} from "react-redux";
import {Button} from "react-bootstrap";
import {deleteMovie, setShowFullCard} from "../Redux/moviesReducer";
import EditMovieWrapper from "./EditMovieFrom";

class MovieShortCard extends Component {

    render() {
        const {allMovies, setShowFullCard, deleteMovie} = this.props;

        return (
            <div style={{display: 'flex'}}>
                {allMovies.map(movie => <div key={movie.id} className="card mt-3">
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <div>
                                <img src={movie.posterLink || ''}
                                     className="card-img" alt="Movie poster"/>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{movie.titleRus || ''}</h5>
                                <p className="card-text">{movie.description || ''}</p>
                                <p className="card-text"><small
                                    className="font-weight-bold">IMDB: {movie.imdbRate || ''}</small></p>
                                <div className="card-text">
                                    <Button className="more"
                                            onClick={() => setShowFullCard(movie.id)}>Подробнее...</Button></div>
                            </div>
                        </div>
                        <div className="card-footer">
                            <EditMovieWrapper movieId={movie.id}/>
                            <button className="btn btn-sm btn-outline-danger btn-delete"
                                    onClick={() => deleteMovie(movie.id)}>
                                <svg className="octicon octicon-x"
                                     viewBox="0 0 14 18" version="1.1" width="14" height="18" aria-hidden="true">
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
const MovieShortCardWrapper = connect(mapStateToProps, {deleteMovie, setShowFullCard})(MovieShortCard);
export default MovieShortCardWrapper;