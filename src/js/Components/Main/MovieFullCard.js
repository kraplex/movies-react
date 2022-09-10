import React, {Component} from 'react';
import {connect} from "react-redux";

export class MovieFullCard extends Component {

    render() {
        const {allMovies, movieId} = this.props;
        const movie = allMovies.filter(i => i.id === movieId)[0]

        return (<div id="content"
                     className="d-flex flex-wrap justify-content-start align-items-center align-content-start movie-details">
            <div className="my-5">
                <h1 className="my-0">{movie.titleRus}</h1>
                <h4 className="my-0">{movie.titleOrig}</h4>
            </div>
            <div className="row">
                <div className="col-sm-3">
                    <img className="img-fluid" src={movie.posterLink}
                         alt="Movie poster"/>
                </div>
                <div className="col-sm-6">
                    <ul className="movie-info pl-0">
                        <li className="d-flex">
                            <p className="col-3">год</p>
                            <p className="col-9">{movie.year}</p>
                        </li>
                        <li className="d-flex">
                            <p className="col-3">страна</p>
                            <p className="col-9">{movie.country}</p>
                        </li>
                        <li className="d-flex">
                            <p className="col-3">режиссер</p>
                            <p className="col-9">{movie.director}</p>
                        </li>
                    </ul>
                    <div className="movie-description mt-5">
                        <p className="font-weight-bold">IMDb: {movie.imdbRate}</p>
                        <p>{movie.description}</p>
                    </div>
                </div>
                <div className="col-sm-3">
                    <h3>В ролях:</h3>
                    <ul className="list-unstyled">
                        {movie.actors.map((item, index) => <li key={index}>{item}</li>)}
                    </ul>
                </div>
            </div>
        </div>)
    }
}

const mapStateToProps = store => ({
    movieId: store.movies.showMovieFullCard,
    allMovies: store.movies.allMovies,
});
const MovieFullCardWrapper = connect(mapStateToProps, {})(MovieFullCard);
export default MovieFullCardWrapper;