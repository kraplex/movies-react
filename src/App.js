import React from 'react';
import './App.css';
import Footer from "./Components/Footer/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Components/Header/Header";

import Main from "./Components/Main/Main";

function App(props) {

    return (
        <>
            <Header/>
            <Main state={props.state}/>
            <Footer/>
        </>
    )
}

export default App;
