import {createSlice} from "@reduxjs/toolkit";
import {deleteData, editData, getData, saveData, searchData} from "../Api/Api";

const initialState = {
    allMovies: [],
    showAllMovies: false,
    showMovieFullCard: false,
    showAddEditModal: false,
    showWelcomeWindow: true,
    movieToEdit: {}
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
        setMovieToEdit: (store, action) => {
            const allMovies = getData();
            const movieToEdit = allMovies.filter(movie => movie.id === action.payload)[0]
            return {
                ...store,
                movieToEdit,
            }
        },
        editMovie: (store, action) => {
            return {
                ...store,
                movieToEdit: {
                    ...store.movieToEdit,
                    [action.payload.key]: action.payload.value
                }
            }
        },
        saveEditedMovie: (store, action) => {
            const allMovies = editData(action.payload)
            return {
                ...store,
                allMovies
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
    searchMovie,
    setMovieToEdit,
    editMovie,
    saveEditedMovie
} = moviesReducer.actions