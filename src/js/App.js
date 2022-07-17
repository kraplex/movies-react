import React, {Component} from 'react';
import '../css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Components/Header/Header";
import MainWrapper from "./Components/Main/Main";


class App extends Component {

    render() {
        return (
            <>
                <Header/>
                <MainWrapper/>
                <footer className="text-center my-5">
                    <h6 className="mb-0">Мир Кино</h6>
                </footer>
            </>
        )
    }
}

export default App;
