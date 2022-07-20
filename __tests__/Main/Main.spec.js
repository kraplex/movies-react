import React from "react";
import AllMoviesWrapper, {AllMovies} from "../../src/js/Components/Main/AllMovies";
import store from "../../src/js/Components/Redux/Store";
import {Provider} from "react-redux";
import EditMovieWrapper, {EditMovie} from "../../src/js/Components/Main/EditMovieFrom";
import MainWrapper, {Main} from "../../src/js/Components/Main/Main";

describe('Main components', () => {

    it('AllMovies length === 0', () => {
        const props = {
            allMovies: [],
            getAllMovies: () => {}
        };
        const component = shallow(<AllMovies {...props}/>);
        component.instance();
    });

    it('AllMovies length > 0', () => {
        const props = {
            allMovies: [{}],
            getAllMovies: () => {}
        };
        shallow(<AllMovies {...props}/>);
    });

    it('AllMoviesWrapper', () => {
        const props = {
            allMovies: [],
            getAllMovies: () => {}
        };
        mount(<Provider store={store}>
            <AllMoviesWrapper {...props}/>
        </Provider>);
    });

    it('EditMovie', () => {
        const props = {
            allMovies: [],
            movieToEdit: {},
            movieId: 'test',
            saveEditedMovie: () => {},
            editMovie: () => {},
            setMovieToEdit: () => {},
        };
        const component = shallow(<EditMovie {...props}/>);
        const instance = component.instance();
        instance.handleSave();
    });

    it('EditMovieWrapper', () => {
        window.localStorage.setItem('movies', JSON.stringify([{
            titleRus: '',
            titleOriginal: '',
            posterLink: '',
            year: '',
            country: '',
            director: '',
            actors: ["test, test"],
            imdb: '',
            description: '',
        }]));

        const props = {
            allMovies: [],
            saveMovie: () => {},
            setMovieToEdit: () => {},
            editMovie: () => {},
            saveEditedMovie: () => {},
        };
        const component = mount(<Provider store={store}>
            <EditMovieWrapper {...props}/>
        </Provider>);
        component.find('button[id="editMovie"]').simulate('click');
        component.find('input[id="inputTitleRus"]').simulate('change', {target: {value: 'test'}});
        component.find('input[id="inputTitleOriginal"]').simulate('change', {target: {value: 'test'}});
        component.find('input[id="inputPosterLink"]').simulate('change', {target: {value: 'test'}});
        component.find('input[id="inputYear"]').simulate('change', {target: {value: 'test'}});
        component.find('input[id="inputCountry"]').simulate('change', {target: {value: 'test'}});
        component.find('input[id="inputDirector"]').simulate('change', {target: {value: 'test'}});
        component.find('textarea[id="inputActors"]').simulate('change', {target: {value: 'test, test'}});
        component.find('input[id="inputImdb"]').simulate('change', {target: {value: 'test'}});
        component.find('textarea[id="inputDescription"]').simulate('change', {target: {value: 'test'}});
        component.find('button[id="closeAddForm"]').simulate('click');
    });

    it('Main', () => {
        const props = {
            allMovies: [],
            showAllMovies: true,
            showWelcomeWindow: true,
            showMovieFullCard: true,
            showAddEditModal: true,
        };
        shallow(<Main {...props}/>);
    });

    it('MainWrapper', () => {
        const props = {
            allMovies: [],
            showAllMovies: true,
            showWelcomeWindow: true,
            showMovieFullCard: true,
            showAddEditModal: true,
        };
        mount(<Provider store={store}>
            <MainWrapper {...props}/>
        </Provider>);
    });
});