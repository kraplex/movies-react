import React, {Component} from 'react'
import {Button} from "react-bootstrap";
import {connect} from "react-redux";
import {setShowAllMovies} from "../Redux/moviesReducer";

class AllMoviesButton extends Component {

    render() {
        return (
            <li className="nav-item active">
                <Button variant="light" onClick={() => this.props.setShowAllMovies()}>Все фильмы</Button>
            </li>
        )
    }
}

const mapStateToProps = store => ({})
const AllMoviesButtonWrapper = connect(mapStateToProps, {setShowAllMovies})(AllMoviesButton);
export default AllMoviesButtonWrapper;