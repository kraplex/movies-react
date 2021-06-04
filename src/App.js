import './App.css';
import Footer from "./Components/Footer/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import {BrowserRouter, Route} from "react-router-dom"

function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Route path="/all-movies" render={() => <Main/>}/>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;
