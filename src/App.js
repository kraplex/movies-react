import './App.css';
import Footer from "./Components/Footer/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Components/Header/Header";
import WelcomeWindow from "./Components/Main/WelcomeWindow/WelcomeWindow";
import { useLocation} from "react-router-dom"
import AllMovies from "./Components/Main/AllMovies/AllMovies";
import MovieFullCard from "./Components/Main/AllMovies/MovieCard/MovieFullCard";
import { Route, Switch } from "react-router";

function App() {

    let location = useLocation();

    return (
        <>
            <Header/>
            <Route exact path="/" render={() => <WelcomeWindow/>}/>
            <Route path="/all-movies" render={() => <AllMovies/>}/>
            <Route path={location.pathname} render={() => <MovieFullCard pathname ={location.pathname}/>}/>
            <Footer/>
        </>
    );
}

export default App;
