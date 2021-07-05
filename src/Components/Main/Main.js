import React from 'react'
import WelcomeWindow from "./WelcomeWindow/WelcomeWindow";
import AllMovies from "./AllMovies/AllMovies";
import MovieFullCard from "./AllMovies/MovieCards/MovieFullCard/MovieFullCard";
import {Route} from "react-router";
import AddMovie from "../Header/AddMovie";


const Main = () => {

    return (
        <main id="content" className="d-flex flex-wrap justify-content-start align-items-stretch align-content-start">
            <Route path="/all-movies" render={() => <AllMovies/>}/>
            <Route path="/movies/:id" render={(props) => <MovieFullCard{...props}/>}/>
            <Route path="/add-new" render={(props) => <AddMovie{...props}/>}/>
            <Route exact path="/" render={() => <WelcomeWindow/>}/>
        </main>
    );
};


export default Main;