import React from 'react'
import AllMoviesButton from "./AllMoviesButton";
import AddMovie from "./AddMovie.js";
import Search from "./Search";


const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <AddMovie/>
                        <AllMoviesButton/>
                    </ul>
                    <Search/>
                </div>
            </nav>
        </header>)
}

export default Header