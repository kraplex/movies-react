import React, {Component} from 'react'
import MovieShortCardWrapper from "./MovieShortCard";
import {connect} from "react-redux";
import {getAllMovies} from "../Redux/moviesReducer";

class AllMovies extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.getAllMovies();
    }

    render() {
        const {allMovies} = this.props;

        return (allMovies.length > 0 ? <MovieShortCardWrapper/> :
            <div id="content" className="d-flex flex-wrap justify-content-around align-items-start align-content-start">
                <h1 className="mt-5 text-center">Здесь пока ничего нет(</h1>
            </div>)
    }
}

const mapStateToProps = store => ({allMovies: store.movies.allMovies})
const AllMoviesWrapper = connect(mapStateToProps, {getAllMovies})(AllMovies)
export default AllMoviesWrapper;