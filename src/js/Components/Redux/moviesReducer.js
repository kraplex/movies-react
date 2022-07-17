import {createSlice} from "@reduxjs/toolkit";
import {deleteData, getData, saveData, searchData} from "../Api/Api";

const initialState = {
    allMovies: [],
    showAllMovies: false,
    showMovieFullCard: false,
    showAddEditModal: false,
    showWelcomeWindow: true,
};

const moviesReducer = createSlice({
    name: "StateReducer",
    initialState,
    reducers: {
        setShowAllMovies: store => {
            const movies = getData();
            return {
                ...store,
                allMovies: movies || [],
                showAllMovies: true,
                showMovieFullCard: false,
                showAddEditModal: false,
                showWelcomeWindow: false
            }
        },
        setShowFullCard: (store, action) => {
            return {
                ...store,
                showAllMovies: false,
                showMovieFullCard: action.payload,
                showAddEditModal: false,
                showWelcomeWindow: false
            }
        },
        saveMovie: (store, action) => {
            saveData(action.payload);
            const allMovies = getData();
            return {
                ...store,
                allMovies: allMovies
            }
        },
        getAllMovies: store => {
            const movies = getData();
            return {
                ...store,
                allMovies: movies || []
            }
        },
        deleteMovie: (store, action) => {
            const allMovies = deleteData(action.payload)
            return {
                ...store,
                allMovies: allMovies || []
            }
        },
        searchMovie: (store, action) => {
            const result = searchData(action.payload)
            return {
                ...store,
                allMovies: result || [],
                showAllMovies: true,
                showMovieFullCard: false,
                showAddEditModal: false,
                showWelcomeWindow: false
            }
        }
    }
})
export default moviesReducer.reducer;
export const {
    getAllMovies,
    setShowAllMovies,
    saveMovie,
    deleteMovie,
    setShowFullCard,
    searchMovie
} = moviesReducer.actions
