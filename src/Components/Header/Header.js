import React from 'react'
import AllMoviesButton from "./AllMoviesButton";

const Header = ()=>{
    return (<header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <button id="add-new" className="btn btn-outline-primary" type="button">Добавить новый</button>
                    </li>
                    <AllMoviesButton/>
                </ul>
                <form id="search" className="form-inline my-2 my-lg-0 d-flex">
                    <input className="form-control mr-sm-2" type="search" name="query" placeholder="Поиск..."
                           aria-label="Search"/>
                        <button className="search btn btn-outline-success my-2 my-sm-0" type="submit">
                            <svg className="octicon octicon-search" viewBox="0 0 16 16" version="1.1" width="16"
                                 height="16" aria-hidden="true">
                                <path fill-rule="evenodd"
                                      d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0 0 13 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 0 0 0-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"></path>
                            </svg>
                        </button>
                </form>
            </div>
        </nav>
    </header>)
}

export default Header