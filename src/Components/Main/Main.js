import React from 'react'
import WelcomeWindow from "./WelcomeWindow/WelcomeWindow";
import AllMovies from "./AllMovies/AllMovies";
import MovieFullCard from "./AllMovies/MovieCards/MovieFullCard/MovieFullCard";
import {Route} from "react-router";
import AddMovie from "../Header/AddMovie";


const Main = () => {

    return (
        <>
            <Route path="/all-movies" render={(props) => <AllMovies {...props}/>}/>
            <Route path="/movies/:id" render={(props) => <MovieFullCard {...props}/>}/>
            <Route path="/search=:searchParam" render={(props) => <AllMovies {...props}/>}/>
            <Route path="/add-new" render={(props) => <AddMovie{...props}/>}/>
            <Route exact path="/" render={() => <WelcomeWindow/>}/>
        </>
    );
};

export default Main;