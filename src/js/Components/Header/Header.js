import React, {Component} from 'react';
import SearchWrapper from "./Search";
import AddMovieButtonWrapper from "./AddMovieButton";
import AllMoviesButtonWrapper from "./AllMoviesButton";

class Header extends Component {

    render() {
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
                            <AddMovieButtonWrapper/>
                            <AllMoviesButtonWrapper/>
                        </ul>
                        <SearchWrapper/>
                    </div>
                </nav>
            </header>)
    }
}

export default Header;