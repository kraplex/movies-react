import React from 'react';
import '../css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";


export default function App() {

    return (
        <>
            <Header/>
            <Main/>
            <footer className="text-center my-5">
                <h6 className="mb-0">Мир Кино | © 2021</h6>
            </footer>
        </>
    )
}