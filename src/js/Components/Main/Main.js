import React, {Component} from 'react';
import WelcomeWindow from "./WelcomeWindow";
import AllMovies from "./AllMovies";
import {connect} from "react-redux";
import {getAllMovies} from "../Redux/moviesReducer";
import MovieFullCardWrapper from "./MovieFullCard";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const {showAllMovies, showWelcomeWindow, showMovieFullCard} = this.props;

        return (
            <>
                {showWelcomeWindow && <WelcomeWindow/>}
                {showAllMovies && <AllMovies/>}
                {showMovieFullCard && <MovieFullCardWrapper/>}
            </>
        );
    }
}

const mapStateToProps = store => (
    {
        allMovies: store.movies.allMovies,
        showAllMovies: store.movies.showAllMovies,
        showWelcomeWindow: store.movies.showWelcomeWindow,
        showMovieFullCard: store.movies.showMovieFullCard,
        showAddEditModal: store.movies.showAddEditModal,
    }
);
const MainWrapper = connect(mapStateToProps, {getAllMovies})(Main);
export default MainWrapper;