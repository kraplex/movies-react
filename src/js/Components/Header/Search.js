import React, {Component} from "react";
import {Button} from "react-bootstrap";
import {searchMovie} from "../Redux/moviesReducer";
import {connect} from "react-redux";

export class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchValue: ''
        }
    }

    setValue = (key, value) => this.setState({[key]: value});

    render() {
        const {searchValue} = this.state;
        const {searchMovie} = this.props;
        const {setValue} = this;

        return (
            <form id="search" className="form-inline my-2 my-lg-0 d-flex">
                <input className="form-control mr-sm-2"
                       type="search"
                       placeholder="Поиск..."
                       aria-label="Search"
                       value={searchValue}
                       onChange={e => setValue('searchValue', e.currentTarget.value)}/>
                <Button className="search btn btn-outline-success my-2 my-sm-0"
                        type="submit"
                        onClick={e => {
                            if (searchValue === '') {
                                e.preventDefault();
                                alert("Введите данные");
                            } else {
                                e.preventDefault();
                                searchMovie(searchValue);
                            }
                        }}>
                    <svg className="octicon octicon-search"
                         viewBox="0 0 16 16"
                         version="1.1"
                         width="16"
                         height="16" aria-hidden="true">
                        <path fillRule="evenodd"
                              d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0 0 13 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 0 0 0-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"/>
                    </svg>
                </Button>
            </form>
        )
    }
}

const mapStateToProps = store => ({});
export default connect(mapStateToProps, {searchMovie})(Search);