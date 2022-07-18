import React from "react";
import Header from "../../src/js/Components/Header/Header";
import configureMockStore from "redux-mock-store";
import {Provider} from "react-redux";
import SearchWrapper, {Search} from "../../src/js/Components/Header/Search";
import {Button} from "react-bootstrap";
import AllMoviesButton from "../../src/js/Components/Header/AllMoviesButton";
import AddMovieButtonWrapper, {AddMovieButton} from "../../src/js/Components/Header/AddMovieButton";
import store from '../../src/js/Components/Redux/Store';

describe('Should render Header, Search, AllMoviesButton components', () => {

    it('render Header', () => {
        const component = shallow(<Header/>)
        const wrapper = component.find('.navbar')
        expect(wrapper.length).toBe(1);
    });

    it('render Search, search input and button click', () => {
        const mockStore = configureMockStore();
        const initialState = {
            allMovies: [],
            showAllMovies: false,
            showMovieFullCard: false,
            showAddEditModal: false,
            showWelcomeWindow: true,
            movieToEdit: {}
        };
        const store = mockStore(initialState);

        const component = mount(<Provider store={store}>
            <SearchWrapper/>
        </Provider>)
        window.alert = () => {}
        expect(component.exists()).toBe(true)
        component.find('input').simulate('change', {currentTarget: {value: "test"}})
        component.find(Button).simulate('click')
    });

    it('render Search, searchMovie prop', () => {
        const props = {
            searchMovie: () => {}
        }
        const component = shallow(<Search {...props}/>)
        component.find('input').simulate('change', {currentTarget: {value: "test"}})
        component.find(Button).simulate('click', {
            preventDefault: () => {
            }
        })
    });

    it('render AllMoviesButton', () => {
        const mockStore = configureMockStore();
        const initialState = {
            allMovies: [],
            showAllMovies: false,
            showMovieFullCard: false,
            showAddEditModal: false,
            showWelcomeWindow: true,
            movieToEdit: {}
        };
        const store = mockStore(initialState);

        const props = {
            setShowAllMovies: () => {}
        }
        const component = mount(<Provider store={store}><AllMoviesButton {...props}/></Provider>)
        component.find(Button).simulate('click')
    });

    it('render AddMovieButton and test handleSave', () => {
        const props = {
            allMovies: [],
            saveMovie: () => {}
        }
        const component = shallow(<AddMovieButton {...props}/>)
        const instance = component.instance();
        instance.handleSave()
    });

    it('render AddMovieButton and test inputs', () => {
        const props = {
            allMovies: [],
            saveMovie: () => {
            }
        }
        const component = mount(<Provider store={store}>
            <AddMovieButtonWrapper {...props}/>
        </Provider>)
        component.find('button[id="addMovieButton"]').simulate('click')
        component.find('input[id="inputTitleRus"]').simulate('change', {target: {value: 'test'}})
        component.find('input[id="inputTitleOriginal"]').simulate('change', {target: {value: 'test'}})
        component.find('input[id="inputPosterLink"]').simulate('change', {target: {value: 'test'}})
        component.find('input[id="inputYear"]').simulate('change', {target: {value: 'test'}})
        component.find('input[id="inputCountry"]').simulate('change', {target: {value: 'test'}})
        component.find('input[id="inputDirector"]').simulate('change', {target: {value: 'test'}})
        component.find('textarea[id="inputActors"]').simulate('change', {target: {value: 'test, test'}})
        component.find('input[id="inputImdb"]').simulate('change', {target: {value: 'test'}})
        component.find('textarea[id="inputDescription"]').simulate('change', {target: {value: 'test'}})
        component.find('button[id="closeAddForm"]').simulate('click')
    });
});