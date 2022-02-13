import React from 'react'
import WelcomeWindow from "./WelcomeWindow";
import AllMovies from "./AllMovies";
import MovieFullCard from "./MovieFullCard";
import {Route} from "react-router";
import AddMovie from "../Header/AddMovie";


const Main = () => {

    return (
        <>
            <Route path="/all-movies" component={(path) => <AllMovies {...path}/>}/>
            <Route path="/movies/:id" render={() => <MovieFullCard/>}/>
            <Route path="/search=:searchParam" render={() => <AllMovies/>}/>
            <Route path="/add-new" render={() => <AddMovie/>}/>
            <Route exact path="/" render={() => <WelcomeWindow/>}/>
        </>
    );
}

export default Main;