import React, {Component} from 'react'
import WelcomeWindow from "./WelcomeWindow";
import AllMovies from "./AllMovies";
import MovieFullCard from "./MovieFullCard";
import {Route} from "react-router";
import AddEditMovie from "../Header/AddEditMovie";
import {getData} from "../Api/Api";
import {connect} from "react-redux";
import {getAllMovies} from "../Redux/moviesReducer";

class Main extends Component {

    componentDidMount() {
        const movies = getData();
        this.props.getAllMovies(movies);

    }

    render() {
        return (
            <>
                <Route path="/all-movies" render={() => <AllMovies/>}/>
                <Route path="/movies/:id" render={() => <MovieFullCard/>}/>
                <Route path="/search=:searchParam" render={() => <AllMovies/>}/>
                <Route path="/add-new" render={() => <AddEditMovie/>}/>
                <Route exact path="/" render={() => <WelcomeWindow/>}/>
            </>
        );
    }
}

const mapStateToProps = store => ({})

const MainWrapper = connect(mapStateToProps, {getAllMovies})(Main)

export default MainWrapper;